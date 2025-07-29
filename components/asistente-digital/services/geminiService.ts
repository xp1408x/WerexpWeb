
import { GoogleGenAI, Type, GenerateContentResponse } from "@google/genai";
import { SolutionOption } from '../types';

if (!process.env.NEXT_PUBLIC_GEMINI_API_KEY) {
    throw new Error("NEXT_PUBLIC_GEMINI_API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY });

const solutionSchema = {
    type: Type.OBJECT,
    properties: {
        solutions: {
            type: Type.ARRAY,
            description: "Una lista de 2 a 3 modelos de solución digital, escalonados en complejidad y funcionalidades.",
            items: {
                type: Type.OBJECT,
                properties: {
                    title: {
                        type: Type.STRING,
                        description: "Un título conciso y atractivo para la opción de solución (ej. 'Presencia Básica y Contacto')."
                    },
                    description: {
                        type: Type.STRING,
                        description: "Una descripción detallada de las características y beneficios de este nivel de solución."
                    }
                },
                required: ["title", "description"]
            }
        }
    },
    required: ["solutions"]
};

export const generateSolutions = async (idea: string): Promise<SolutionOption[]> => {
    try {
        const response: GenerateContentResponse = await ai.models.generateContent({
            model: "gemini-2.5-flash-lite",
            contents: `Genera opciones de solución para esta idea de negocio: "${idea}"`,
            config: {
                systemInstruction: "Eres un asistente experto en consultoría de soluciones digitales. Tu tarea es analizar la idea de negocio de un usuario y proponer de 2 a 3 modelos de solución digital, escalonados en complejidad y funcionalidades. Cada modelo debe tener un título claro y una descripción detallada de sus características. Responde únicamente con un objeto JSON que siga el esquema proporcionado. No incluyas ninguna otra explicación o texto introductorio. Los títulos y descripciones deben estar en español.",
                responseMimeType: "application/json",
                responseSchema: solutionSchema,
            }
        });

        const jsonText = response.text.trim();
        const parsedJson = JSON.parse(jsonText);
        
        if (parsedJson && Array.isArray(parsedJson.solutions)) {
            return parsedJson.solutions;
        } else {
            console.error("Unexpected JSON structure:", parsedJson);
            throw new Error("La respuesta de la IA no tiene el formato esperado.");
        }

    } catch (error) {
        console.error("Error generating solutions with Gemini:", error);
        throw new Error("No se pudieron generar las opciones. Por favor, inténtalo de nuevo.");
    }
};
