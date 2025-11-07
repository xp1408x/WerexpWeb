import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "María González",
    position: "CEO, TechStart",
    content:
      "Werexp transformó completamente nuestra presencia digital. Su enfoque en la experiencia del usuario y la tecnología AR nos ayudó a diferenciarnos en el mercado.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Carlos Mendoza",
    position: "Director de Marketing, InnovaLab",
    content:
      "El equipo de Werexp no solo desarrolló nuestra app móvil, sino que se convirtió en un verdadero socio estratégico. Los resultados superaron nuestras expectativas.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Ana Rodríguez",
    position: "Fundadora, EcoSolutions",
    content:
      "La solución a medida que desarrollaron para nosotros automatizó procesos clave y mejoró nuestra eficiencia operativa en un 40%. Altamente recomendados.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#E5E8EC]/30 to-[#00CFFF]/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2D2D2D] mb-4">Lo Que Dicen Nuestros Clientes</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            La confianza de nuestros clientes es nuestro mayor logro
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white rounded-2xl overflow-hidden"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-[#00CFFF]/20" />
                  <p className="text-gray-600 leading-relaxed pl-6">"{testimonial.content}"</p>
                </div>

                <div className="flex items-center">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-[#2D2D2D]">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
