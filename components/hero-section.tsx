import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Code, Smartphone, Cpu } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0066AA] via-[#0099CC] to-[#00AACC] pt-16 overflow-hidden">
      {/* Tech Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div
                key={i}
                className="bg-white/20 rounded-sm animate-pulse"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: `${2 + (i % 3)}s`,
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Circuit Pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M0 10h20M10 0v20" stroke="white" strokeWidth="0.5" fill="none" opacity="0.3" />
                <circle cx="10" cy="10" r="1" fill="white" opacity="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-2xl transform rotate-45 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-white/10 transform rotate-12 animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">

          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-lg font-medium">
              <Sparkles className="w-5 h-5" />
              <span>Somos una agencia de diseño y desarrollo digital de nueva generación</span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8">
            Transformamos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#00CCDD]">Ideas</span> en{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00CCDD] to-white">
              Experiencias Digitales
            </span>
          </h2>

          <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Fusionamos creatividad y tecnología inmersiva con estrategias de marketing probadas para transformar la
            presencia online en un motor de crecimiento constante para tu empresa.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button
              asChild
              size="lg"
              className="bg-white text-[#0066AA] hover:bg-gray-100 font-bold px-10 py-4 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 text-lg"
            >
              <Link href="/contacto" className="flex items-center space-x-3">
                <span>Hablemos de tu idea</span>
                <ArrowRight className="w-6 h-6" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-2 border-white text-white hover:bg-white hover:text-[#0066AA] font-bold px-10 py-4 rounded-xl transition-all duration-300 bg-transparent text-lg"
            >
              <Link href="/servicios">Explorar servicios</Link>
            </Button>
          </div>

          {/* Services Preview */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <Code className="w-8 h-8 text-white mx-auto mb-3" />
              <h3 className="text-white font-bold mb-2">Desarrollo Web</h3>
              <p className="text-white/80 text-sm">Sitios web modernos y funcionales</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <Smartphone className="w-8 h-8 text-white mx-auto mb-3" />
              <h3 className="text-white font-bold mb-2">Apps Móviles</h3>
              <p className="text-white/80 text-sm">Aplicaciones nativas e híbridas</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <Cpu className="w-8 h-8 text-white mx-auto mb-3" />
              <h3 className="text-white font-bold mb-2">Tecnología Inmersiva</h3>
              <p className="text-white/80 text-sm">Realidad aumentada y realidad virtual</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
