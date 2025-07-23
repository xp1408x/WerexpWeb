"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from "lucide-react"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    tipoProyecto: "",
    mensaje: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("¡Gracias por tu mensaje! Te contactaremos pronto.")
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-[#E5E8EC]/30 to-[#00CFFF]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-bold text-[#2D2D2D] mb-6">Hablemos de tu Proyecto</h1>
              <p className="text-xl text-gray-600 mb-8">
                Estamos emocionados de escuchar tus ideas y ayudarte a hacerlas realidad. Completa el formulario o
                contáctanos directamente.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <Card className="border-0 shadow-lg rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-[#2D2D2D] flex items-center space-x-2">
                      <MessageCircle className="w-6 h-6 text-[#00CFFF]" />
                      <span>Cuéntanos tu idea</span>
                    </CardTitle>
                    <CardDescription>Completa el formulario y te contactaremos en menos de 24 horas</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-[#2D2D2D] mb-2">Nombre completo *</label>
                          <Input
                            type="text"
                            required
                            value={formData.nombre}
                            onChange={(e) => handleInputChange("nombre", e.target.value)}
                            className="rounded-xl border-gray-200 focus:border-[#00CFFF] focus:ring-[#00CFFF]"
                            placeholder="Tu nombre completo"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#2D2D2D] mb-2">Correo electrónico *</label>
                          <Input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            className="rounded-xl border-gray-200 focus:border-[#00CFFF] focus:ring-[#00CFFF]"
                            placeholder="tu@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-[#2D2D2D] mb-2">Teléfono (opcional)</label>
                          <Input
                            type="tel"
                            value={formData.telefono}
                            onChange={(e) => handleInputChange("telefono", e.target.value)}
                            className="rounded-xl border-gray-200 focus:border-[#00CFFF] focus:ring-[#00CFFF]"
                            placeholder="+51 999 999 999"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#2D2D2D] mb-2">Tipo de proyecto *</label>
                          <Select
                            value={formData.tipoProyecto}
                            onValueChange={(value) => handleInputChange("tipoProyecto", value)}
                          >
                            <SelectTrigger className="rounded-xl border-gray-200 focus:border-[#00CFFF] focus:ring-[#00CFFF]">
                              <SelectValue placeholder="Selecciona el tipo" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="web">Desarrollo Web</SelectItem>
                              <SelectItem value="mobile">Aplicación Móvil</SelectItem>
                              <SelectItem value="custom">Solución a Medida</SelectItem>
                              <SelectItem value="ar">Realidad Aumentada</SelectItem>
                              <SelectItem value="consulting">Consultoría Digital</SelectItem>
                              <SelectItem value="other">Otro</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-[#2D2D2D] mb-2">Describe tu proyecto *</label>
                        <Textarea
                          required
                          value={formData.mensaje}
                          onChange={(e) => handleInputChange("mensaje", e.target.value)}
                          className="rounded-xl border-gray-200 focus:border-[#00CFFF] focus:ring-[#00CFFF] min-h-[120px]"
                          placeholder="Cuéntanos sobre tu idea, objetivos, presupuesto estimado y cualquier detalle relevante..."
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-[#00CFFF] hover:bg-[#00b6e0] text-white font-medium py-3 rounded-xl shadow-md transition-all duration-300"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Enviar mensaje
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="border-0 shadow-lg rounded-2xl bg-gradient-to-br from-[#00CFFF] to-[#1565FF] text-white">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>

                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <Mail className="w-6 h-6 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium mb-1">Correo Electrónico</h4>
                          <a href="mailto:hola@werexp.com" className="text-white/90 hover:text-white transition-colors">
                            hola@werexp.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <Phone className="w-6 h-6 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium mb-1">Teléfono</h4>
                          <a href="tel:+51999999999" className="text-white/90 hover:text-white transition-colors">
                            +51 999 999 999
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <MapPin className="w-6 h-6 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium mb-1">Ubicación</h4>
                          <p className="text-white/90">Lima, Perú</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <Clock className="w-6 h-6 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium mb-1">Horarios de Atención</h4>
                          <p className="text-white/90">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                          <p className="text-white/90">Sábados: 9:00 AM - 1:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg rounded-2xl">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">¿Qué puedes esperar?</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[#00CFFF] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">Respuesta en menos de 24 horas</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[#00CFFF] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">Consulta gratuita de 30 minutos</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[#00CFFF] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">Propuesta detallada en 48 horas</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[#00CFFF] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">Plan de proyecto personalizado</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
