import Link from "next/link"
import { Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-[#0066AA] to-[#00AACC] rounded-lg flex items-center justify-center transform rotate-12">
                  <div className="w-6 h-6 bg-white/20 rounded-sm transform -rotate-12"></div>
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-[#00AACC] to-[#00CCDD] rounded-md transform rotate-45 opacity-80"></div>
              </div>
              <div>
                <span className="text-2xl font-bold tracking-tight">Werexp</span>
                <div className="text-xs text-[#00AACC] font-medium -mt-1">Technology & Strategy</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Somos una agencia de diseño y desarrollo digital de nueva generación. Fusionamos creatividad y tecnología
              inmersiva con estrategias de marketing probadas para transformar tu presencia online.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-[#0066AA] rounded-lg flex items-center justify-center hover:bg-[#00AACC] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#0066AA] rounded-lg flex items-center justify-center hover:bg-[#00AACC] transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-lg mb-4">Navegación</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[#00AACC] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-gray-300 hover:text-[#00AACC] transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/acerca-de" className="text-gray-300 hover:text-[#00AACC] transition-colors">
                  Acerca de
                </Link>
              </li>
              <li>
                <Link href="/clientes" className="text-gray-300 hover:text-[#00AACC] transition-colors">
                  Clientes
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-300 hover:text-[#00AACC] transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#00AACC]" />
                <a href="mailto:hola@werexp.com" className="text-gray-300 hover:text-[#00AACC] transition-colors">
                  hola@werexp.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#00AACC]" />
                <a href="tel:+51999999999" className="text-gray-300 hover:text-[#00AACC] transition-colors">
                  +51 999 999 999
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#00AACC] mt-1" />
                <span className="text-gray-300">Lima, Perú</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2025 Werexp. Todos los derechos reservados.</p>
          <p className="text-[#00AACC] text-sm font-medium">Technology & Strategy</p>
        </div>
      </div>
    </footer>
  )
}
