"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-[#0066AA] to-[#00AACC] rounded-lg flex items-center justify-center transform rotate-12">
                <div className="w-6 h-6 bg-white/20 rounded-sm transform -rotate-12"></div>
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-[#00AACC] to-[#00CCDD] rounded-md transform rotate-45 opacity-80"></div>
            </div>
            <div>
              <span className="text-2xl font-bold text-[#1A1A1A] tracking-tight">Werexp</span>
              <div className="text-xs text-[#0066AA] font-medium -mt-1">Technology & Strategy</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-[#1A1A1A] hover:text-[#0066AA] font-medium transition-colors">
              Home
            </Link>
            <Link href="/servicios" className="text-[#1A1A1A] hover:text-[#0066AA] font-medium transition-colors">
              Servicios
            </Link>
            <Link href="/acerca-de" className="text-[#1A1A1A] hover:text-[#0066AA] font-medium transition-colors">
              Acerca de
            </Link>
            <Link href="/clientes" className="text-[#1A1A1A] hover:text-[#0066AA] font-medium transition-colors">
              Clientes
            </Link>
            <Link href="/contacto" className="text-[#1A1A1A] hover:text-[#0066AA] font-medium transition-colors">
              Contáctenos
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-[#0066AA] hover:bg-[#0099CC] text-white font-medium px-6 py-2 rounded-xl shadow-md transition-all duration-300"
            >
              <Link href="/contacto">Hablemos de tu idea</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-[#1A1A1A] hover:text-[#0066AA] font-medium transition-colors">
                Home
              </Link>
              <Link href="/servicios" className="text-[#1A1A1A] hover:text-[#0066AA] font-medium transition-colors">
                Servicios
              </Link>
              <Link href="/acerca-de" className="text-[#1A1A1A] hover:text-[#0066AA] font-medium transition-colors">
                Acerca de
              </Link>
              <Link href="/clientes" className="text-[#1A1A1A] hover:text-[#0066AA] font-medium transition-colors">
                Clientes
              </Link>
              <Link href="/contacto" className="text-[#1A1A1A] hover:text-[#0066AA] font-medium transition-colors">
                Contáctenos
              </Link>
              <Button
                asChild
                className="bg-[#0066AA] hover:bg-[#0099CC] text-white font-medium px-6 py-2 rounded-xl shadow-md transition-all duration-300 w-fit"
              >
                <Link href="/contacto">Hablemos de tu idea</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
