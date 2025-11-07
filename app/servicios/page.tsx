import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Smartphone, Cpu, ArrowRight, Check } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Globe,
    title: "Desarrollo Web",
    description: "Creamos sitios web modernos, funcionales y optimizados que impulsan tu presencia digital.",
    technologies: ["React", "Next.js", "WordPress", "Shopify", "Node.js"],
    types: ["E-commerce", "Sitios institucionales", "Portales web", "Landing pages", "PWAs"],
    benefits: [
      "Diseño responsivo y moderno",
      "Optimización SEO incluida",
      "Velocidad de carga optimizada",
      "Integración con sistemas existentes",
      "Mantenimiento y soporte continuo",
    ],
  },
  {
    icon: Smartphone,
    title: "Aplicaciones Móviles",
    description: "Desarrollamos apps nativas e híbridas que ofrecen experiencias excepcionales en iOS y Android.",
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
    types: ["Apps empresariales", "Apps de consumo", "E-commerce móvil", "Apps educativas", "Juegos móviles"],
    benefits: [
      "Desarrollo nativo e híbrido",
      "UX/UI optimizado para móviles",
      "Integración con APIs y servicios",
      "Publicación en App Store y Google Play",
      "Analytics y métricas integradas",
    ],
  },
  {
    icon: Cpu,
    title: "Soluciones Digitales a Medida",
    description:
      "Creamos soluciones únicas con tecnología de vanguardia para resolver problemas específicos de tu negocio.",
    technologies: ["AR/VR", "AI/ML", "IoT", "Blockchain", "Cloud Computing"],
    types: [
      "Realidad Aumentada",
      "Automatización de procesos",
      "Dashboards ejecutivos",
      "Integraciones complejas",
      "Software empresarial",
    ],
    benefits: [
      "Soluciones 100% personalizadas",
      "Tecnología de realidad aumentada",
      "Automatización inteligente",
      "Escalabilidad garantizada",
      "Consultoría estratégica incluida",
    ],
  },
]

export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-[#E5E8EC]/30 to-[#00CFFF]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-bold text-[#2D2D2D] mb-6">Nuestros Servicios Digitales</h1>
              <p className="text-xl text-gray-600 mb-8">
                Ofrecemos soluciones completas de desarrollo web, móvil y tecnologías emergentes para transformar tu
                presencia digital y potenciar tu negocio.
              </p>
            </div>
          </div>
        </section>

        {/* Services Detail */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                >
                  <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                    <div className="w-16 h-16 bg-gradient-to-br from-[#00CFFF] to-[#1565FF] rounded-2xl flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>

                    <h2 className="text-3xl font-bold text-[#2D2D2D] mb-4">{service.title}</h2>

                    <p className="text-lg text-gray-600 mb-6">{service.description}</p>

                    <div className="mb-6">
                      <h3 className="font-bold text-[#2D2D2D] mb-3">Tipos de proyectos:</h3>
                      <div className="flex flex-wrap gap-2">
                        {service.types.map((type, typeIndex) => (
                          <span
                            key={typeIndex}
                            className="bg-[#00CFFF]/10 text-[#1565FF] px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {type}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-8">
                      <h3 className="font-bold text-[#2D2D2D] mb-3">Tecnologías que utilizamos:</h3>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-[#1565FF]/10 text-[#1565FF] px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button
                      asChild
                      className="bg-[#00CFFF] hover:bg-[#00b6e0] text-white font-medium px-6 py-3 rounded-xl shadow-md transition-all duration-300"
                    >
                      <Link href="/contacto" className="flex items-center space-x-2">
                        <span>Quiero mi {service.title.toLowerCase()}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>

                  <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                    <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-[#E5E8EC]/30 rounded-2xl">
                      <CardHeader>
                        <h3 className="text-xl font-bold text-[#2D2D2D]">Beneficios incluidos</h3>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start space-x-3">
                              <Check className="w-5 h-5 text-[#00CFFF] mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[#1565FF] to-[#00CFFF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">¿Tienes un proyecto en mente?</h2>
              <p className="text-xl text-white/90 mb-8">
                Cuéntanos tu necesidad específica y te ayudaremos a encontrar la solución perfecta para tu negocio.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-[#1565FF] hover:bg-[#E5E8EC] font-medium px-8 py-4 rounded-xl shadow-lg transition-all duration-300"
              >
                <Link href="/contacto">Cuéntanos tu necesidad específica</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
