import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Smartphone, Cpu, ArrowRight, Palette, ShoppingCart, Zap } from "lucide-react"

const services = [
  {
    icon: Palette,
    title: "Agencia de diseño web",
    description: "Diseños modernos, funcionales y visualmente impactantes que reflejan la identidad de tu marca.",
    features: ["Diseño UX/UI", "Branding digital", "Wireframes", "Prototipos interactivos"],
  },
  {
    icon: Globe,
    title: "Desarrollo de aplicaciones móviles",
    description: "Apps nativas e híbridas para iOS y Android con experiencias de usuario excepcionales.",
    features: ["iOS & Android", "React Native", "Flutter", "Apps empresariales"],
  },
  {
    icon: Cpu,
    title: "Proyectos de realidad aumentada",
    description: "Experiencias inmersivas que combinan el mundo real con elementos digitales interactivos.",
    features: ["WebXR", "ARKit", "ARCore", "Experiencias 3D"],
  },
  {
    icon: Zap,
    title: "Optimización para motores de búsqueda (SEO)",
    description: "Mejora tu visibilidad online y atrae más clientes potenciales de forma orgánica.",
    features: ["SEO técnico", "Contenido optimizado", "Link building", "Analytics"],
  },
  {
    icon: ShoppingCart,
    title: "Diseño UX/UI",
    description: "Interfaces centradas en el usuario que maximizan la conversión y la satisfacción.",
    features: ["Research UX", "Design Systems", "Testing A/B", "Prototipado"],
  },
  {
    icon: Smartphone,
    title: "Páginas web que venden",
    description: "Landing pages y sitios web optimizados para convertir visitantes en clientes.",
    features: ["Conversión optimizada", "CRO", "Analytics", "Testing multivariante"],
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-4">
            Somos expertos en desarrollo web, móvil y tecnologías inmersivas
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Listos para llevar tu proyecto al siguiente nivel con soluciones digitales innovadoras y estrategias
            probadas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white rounded-2xl overflow-hidden hover:-translate-y-2"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0066AA] to-[#00AACC] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-[#1A1A1A] mb-2">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-[#00AACC] rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-[#0066AA] text-[#0066AA] hover:bg-[#0066AA] hover:text-white rounded-xl transition-all duration-300 bg-transparent"
                >
                  Más información
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-[#0066AA] hover:bg-[#0099CC] text-white font-medium px-8 py-4 rounded-xl shadow-lg transition-all duration-300"
          >
            <Link href="/servicios" className="flex items-center space-x-2">
              <span>Ver todos nuestros servicios</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
