import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"

export default function FinalCTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#1565FF] to-[#00CFFF] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            ¿Listo para construir tu{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#E5E8EC]">
              futuro digital?
            </span>
          </h2>

          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Transformemos juntos tus ideas en soluciones digitales que generen impacto real. El momento perfecto para
            innovar es ahora.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-[#1565FF] hover:bg-[#E5E8EC] font-medium px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/contacto" className="flex items-center space-x-2">
                <MessageCircle className="w-5 h-5" />
                <span>Hablemos de tu proyecto</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-white text-white hover:bg-white hover:text-[#1565FF] font-medium px-8 py-4 rounded-xl transition-all duration-300 bg-transparent"
            >
              <Link href="/servicios">Explorar servicios</Link>
            </Button>
          </div>

          <div className="mt-8 text-white/80">
            <p className="text-sm">
              💡 <span className="font-medium">Consulta gratuita</span> • 🚀{" "}
              <span className="font-medium">Propuesta en 48h</span> • ⭐{" "}
              <span className="font-medium">Satisfacción garantizada</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
