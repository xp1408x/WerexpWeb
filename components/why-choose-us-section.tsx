import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Users, Target, Zap, Shield, Rocket } from "lucide-react"

const benefits = [
  {
    icon: Lightbulb,
    title: "Innovación Constante",
    description: "Siempre en búsqueda de nuevas formas de impactar con tecnología de vanguardia.",
  },
  {
    icon: Users,
    title: "Equipo Experto",
    description: "Profesionales especializados en desarrollo web, móvil y realidad aumentada.",
  },
  {
    icon: Target,
    title: "Enfoque en Resultados",
    description: "Nos enfocamos en generar valor real y resultados medibles para tu negocio.",
  },
  {
    icon: Zap,
    title: "Metodología Ágil",
    description: "Desarrollo iterativo y colaborativo para entregas rápidas y efectivas.",
  },
  {
    icon: Shield,
    title: "Calidad Garantizada",
    description: "Código limpio, testing exhaustivo y mejores prácticas de desarrollo.",
  },
  {
    icon: Rocket,
    title: "Visión Colaborativa",
    description: "Trabajamos como parte de tu equipo, no solo como proveedores externos.",
  },
]

export default function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2D2D2D] mb-4">¿Por Qué Elegir Werexp?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nuestros valores diferenciales nos convierten en el socio ideal para tu transformación digital
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-white to-[#E5E8EC]/30 rounded-2xl"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#00CFFF]/20 to-[#1565FF]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-[#1565FF]" />
                </div>
                <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
