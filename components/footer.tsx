import Link from "next/link"
import Image from "next/image"
import { Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/images/logoWerexpWeb.png"
                alt="Werexp Logo"
                width={240}
                height={50}
                priority
              />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Somos una agencia de diseño y desarrollo digital de nueva generación. Fusionamos creatividad y tecnología
              inmersiva con estrategias de marketing probadas para transformar tu presencia online.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/werexp/"
                className="w-10 h-10 bg-[#0066AA] rounded-lg flex items-center justify-center hover:bg-[#00AACC] transition-colors"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/Werexp1408"
                className="w-10 h-10 bg-[#0066AA] rounded-lg flex items-center justify-center hover:bg-[#00AACC] transition-colors"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
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
                <a href="mailto:info@werexp.com" className="text-gray-300 hover:text-[#00AACC] transition-colors">
                  info@werexp.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#00AACC]" />
                <a href="tel:+51984342126" className="text-gray-300 hover:text-[#00AACC] transition-colors">
                  +51 984 342 126
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
