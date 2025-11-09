import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, Zap, Star, Quote } from "lucide-react"
import Link from "next/link"

// Lista de clientes de ejemplo. Reemplaza `logo` con la ruta a tu archivo en /public/logos/<nombre>.(png|svg)
// Por ejemplo: "/logos/techstart.svg". Si no tienes logos todavía, usamos el placeholder.
const clientesLogos = [
  { name: "TechStart", logo: "/logos/techstart.svg", website: "https://techstart.example" , tagline: "Retail & eCommerce"},
  { name: "InnovaLab", logo: "/logos/innovalab.svg", website: "https://innovalab.example", tagline: "Consultoría Digital"},
  { name: "EcoSolutions", logo: "/logos/ecosolutions.svg", website: "https://ecosolutions.example", tagline: "Sostenibilidad"},
  { name: "DigitalFlow", logo: "/logos/digitalflow.svg", website: "https://digitalflow.example", tagline: "Medios & Marketing"},
  { name: "SmartBiz", logo: "/logos/smartbiz.svg", website: "https://smartbiz.example", tagline: "FinTech"},
  { name: "CloudTech", logo: "/logos/cloudtech.svg", website: "https://cloudtech.example", tagline: "Cloud & DevOps"},
  // Añade más clientes aquí según lo necesites
]

const casosDeExito = [
  {
    cliente: "TechStart",
    proyecto: "Plataforma E-commerce con AR",
    tipo: "Desarrollo Web + Realidad Aumentada",
    industria: "Retail",
    desafio:
      "TechStart necesitaba una plataforma e-commerce innovadora que permitiera a los usuarios visualizar productos en realidad aumentada antes de comprar, diferenciándose de la competencia.",
    solucion:
      "Desarrollamos una plataforma web completa con integración de realidad aumentada usando WebXR, sistema de pagos, gestión de inventario y panel administrativo. La experiencia AR permite a los usuarios ver productos en su espacio real.",
    resultados: [
      "Aumento del 150% en conversiones",
      "Reducción del 40% en devoluciones",
      "Tiempo de sesión aumentó 3x",
      "Reconocimiento como 'Innovación del Año'",
    ],
    tecnologias: ["React", "Node.js", "WebXR", "Stripe", "MongoDB"],
    imagen: "/placeholder.svg?height=300&width=500",
    testimonio:
      "Werexp no solo desarrolló nuestra plataforma, sino que se convirtió en un verdadero socio estratégico. La integración de AR superó todas nuestras expectativas.",
    testimonioAutor: "María González, CEO de TechStart",
  },
  {
    cliente: "InnovaLab",
    proyecto: "App Móvil de Gestión Empresarial",
    tipo: "Aplicación Móvil",
    industria: "Consultoría",
    desafio:
      "InnovaLab requería una aplicación móvil para que sus consultores pudieran gestionar proyectos, clientes y reportes en tiempo real desde cualquier ubicación.",
    solucion:
      "Creamos una app móvil nativa para iOS y Android con sincronización en tiempo real, dashboard interactivo, sistema de notificaciones push, generación de reportes automáticos y modo offline.",
    resultados: [
      "Productividad del equipo aumentó 60%",
      "Tiempo de generación de reportes reducido 80%",
      "Satisfacción del cliente mejoró 45%",
      "ROI positivo en 3 meses",
    ],
    tecnologias: ["React Native", "Firebase", "Node.js", "PostgreSQL", "AWS"],
    imagen: "/placeholder.svg?height=300&width=500",
    testimonio:
      "La app transformó completamente nuestra operación. Ahora podemos gestionar proyectos de manera más eficiente y nuestros clientes están más satisfechos.",
    testimonioAutor: "Carlos Mendoza, Director de InnovaLab",
  },
  {
    cliente: "EcoSolutions",
    proyecto: "Sistema de Automatización Inteligente",
    tipo: "Solución Digital a Medida",
    industria: "Sostenibilidad",
    desafio:
      "EcoSolutions necesitaba automatizar sus procesos de monitoreo ambiental y generar reportes automáticos para sus clientes corporativos, reduciendo el trabajo manual.",
    solucion:
      "Desarrollamos un sistema completo de automatización con IoT, dashboard ejecutivo, alertas inteligentes, generación automática de reportes y integración con sistemas existentes.",
    resultados: [
      "Eficiencia operativa mejoró 40%",
      "Costos operativos reducidos 30%",
      "Tiempo de respuesta mejoró 70%",
      "Nuevos contratos aumentaron 25%",
    ],
    tecnologias: ["Python", "IoT", "React", "PostgreSQL", "Docker", "AWS"],
    imagen: "/placeholder.svg?height=300&width=500",
    testimonio:
      "El sistema que desarrollaron automatizó procesos que nos tomaban horas. Ahora podemos enfocarnos en lo que realmente importa: cuidar el medio ambiente.",
    testimonioAutor: "Ana Rodríguez, Fundadora de EcoSolutions",
  },
]

const estadisticas = [
  { numero: "50+", descripcion: "Proyectos Completados", icon: TrendingUp },
  { numero: "30+", descripcion: "Clientes Satisfechos", icon: Users },
  { numero: "95%", descripcion: "Tasa de Satisfacción", icon: Star },
  { numero: "24h", descripcion: "Tiempo de Respuesta", icon: Zap },
]

export default function ClientesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-[#E5E8EC]/30 to-[#00CFFF]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-bold text-[#2D2D2D] mb-6">Nuestros Clientes y Proyectos</h1>
              <p className="text-xl text-gray-600 mb-8">
                Descubre cómo hemos ayudado a empresas de diferentes industrias a transformar sus ideas en soluciones
                digitales exitosas que generan resultados reales.
              </p>
            </div>
          </div>
        </section>

        {/* Estadísticas */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {estadisticas.map((stat, index) => (
                <Card
                  key={index}
                  className="text-center border-0 shadow-lg rounded-2xl bg-gradient-to-br from-white to-[#E5E8EC]/30"
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#00CFFF] to-[#1565FF] rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-[#2D2D2D] mb-2">{stat.numero}</div>
                    <p className="text-gray-600 font-medium">{stat.descripcion}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Logos de Clientes */}
        <section className="py-20 bg-[#E5E8EC]/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-[#2D2D2D] mb-4">Empresas que Confían en Nosotros</h2>
              <p className="text-gray-600">Algunos de nuestros clientes satisfechos</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {clientesLogos.map((cliente, index) => (
                <a
                  key={index}
                  href={cliente.website ?? '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center text-center"
                >
                  <img
                    src={cliente.logo || "/placeholder.svg"}
                    alt={cliente.name}
                    className="max-h-12 w-auto opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                  {/* Keep accessible name for screen readers only */}
                  <span className="sr-only">{cliente.name}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Casos de Éxito */}
        {/*<section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#2D2D2D] mb-4">Casos de Éxito</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Proyectos que demuestran nuestro compromiso con la excelencia y los resultados
              </p>
            </div>

            <div className="space-y-20">
              {casosDeExito.map((caso, index) => (
                <div key={index} className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <img
                      src={caso.imagen || "/placeholder.svg"}
                      alt={caso.proyecto}
                      className="w-full h-auto rounded-2xl shadow-lg"
                    />
                  </div>

                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="mb-4">
                      <Badge className="bg-[#00CFFF]/10 text-[#1565FF] hover:bg-[#00CFFF]/20 mb-2">
                        {caso.industria}
                      </Badge>
                      <Badge className="bg-[#1565FF]/10 text-[#1565FF] hover:bg-[#1565FF]/20 ml-2">{caso.tipo}</Badge>
                    </div>

                    <h3 className="text-2xl font-bold text-[#2D2D2D] mb-2">{caso.proyecto}</h3>
                    <p className="text-lg text-[#1565FF] font-medium mb-6">{caso.cliente}</p>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-bold text-[#2D2D2D] mb-2">El Desafío</h4>
                        <p className="text-gray-600">{caso.desafio}</p>
                      </div>

                      <div>
                        <h4 className="font-bold text-[#2D2D2D] mb-2">Nuestra Solución</h4>
                        <p className="text-gray-600 mb-4">{caso.solucion}</p>
                        <div className="flex flex-wrap gap-2">
                          {caso.tecnologias.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="bg-[#E5E8EC] text-[#2D2D2D] px-3 py-1 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold text-[#2D2D2D] mb-2">Resultados Obtenidos</h4>
                        <ul className="space-y-2">
                          {caso.resultados.map((resultado, resultIndex) => (
                            <li key={resultIndex} className="flex items-center text-gray-600">
                              <div className="w-2 h-2 bg-[#00CFFF] rounded-full mr-3 flex-shrink-0"></div>
                              {resultado}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Card className="border-l-4 border-l-[#00CFFF] bg-[#00CFFF]/5 border-0 rounded-r-2xl">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <Quote className="w-6 h-6 text-[#00CFFF] flex-shrink-0 mt-1" />
                            <div>
                              <p className="text-gray-700 italic mb-2">"{caso.testimonio}"</p>
                              <p className="text-sm font-medium text-[#1565FF]">— {caso.testimonioAutor}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
*/}
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[#1565FF] to-[#00CFFF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto text-white">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">¿Listo para ser nuestro próximo caso de éxito?</h2>
              <p className="text-xl mb-8 text-white/90">
                Mira lo que podemos hacer por ti. Cuéntanos tu idea y transformémosla juntos en una solución digital que
                genere resultados.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-[#1565FF] hover:bg-[#E5E8EC] font-medium px-8 py-4 rounded-xl shadow-lg transition-all duration-300"
                >
                  <Link href="/contacto">Cuéntanos tu idea</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-white text-white hover:bg-white hover:text-[#1565FF] font-medium px-8 py-4 rounded-xl transition-all duration-300 bg-transparent"
                >
                  <Link href="/servicios">Ver nuestros servicios</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
