import React from "react"
import TeamGrid from "@/components/TeamGrid"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Users, Target, Lightbulb, Heart, Award, Rocket } from "lucide-react"
import { Linkedin } from "lucide-react"
import Link from "next/link"

const valores = [
	{
		icon: Lightbulb,
		title: "Resolución Inteligente",
		description:
			"Comprendemos la raíz del problema y proponemos soluciones viables y escalables.",
	},
	{
		icon: Users,
		title: "Tecnología Centrada en la Experiencia",
		description:
			"Web, mobile y AR orientados al usuario final para crear experiencias memorables.",
	},
	{
		icon: Heart,
		title: "Visión Colaborativa",
		description:
			"Trabajamos como parte del equipo del cliente, no sólo como proveedores externos.",
	},
	{
		icon: Rocket,
		title: "Innovación Constante",
		description:
			"Siempre en búsqueda de nuevas formas de impactar con tecnología de vanguardia.",
	},
]

const equipo = [
	{
		name: "Pedro Cortez",
		country: "pe",
		position: "CEO & Co-fundador / Mobile Tech Leader",
		description:
			"Lider técnico mobile, arquitecto de software y desarrollo de productos con más de 15 años de experiencia.",
		avatar: "/images/aboutUs1.webp",
		skills: [
			"Mobile Developer",
			"Product Management",
			"Software Architecture",
		],
		linkedin: "https://www.linkedin.com/in/pedro-cortez-a407b715b/",
	},
	{
		name: "Grecia Gonzalez",
		country: "hn",
		position: "Web Designer",
		description:
			"Especialista en arquitectura de software y tecnologías emergentes como AR/VR.",
		avatar: "/placeholder.svg?height=200&width=200",
		skills: ["Prompt Engineer", "AR/VR", "Cloud Computing"],
		linkedin: null,
	},
	{
		name: "Ricardo Cortez",
		country: "pe",
		position: "Web Developer",
		description:
			"Desarrollador full-stack con expertise en React, Node.js y desarrollo backend.",
		avatar: "/images/aboutUs3.webp",
		skills: ["React", "Node.js", "Backend Development"],
		linkedin: "https://www.linkedin.com/in/ricardo-cortez-86191a16b/",
	},
	{
		name: "Ruben Tarantini",
		country: "us",
		position: "Executive AI Creative Director",
		description:
			"Desarrollar y supervisar la estrategia creativa impulsada por IA para proyectos digitales en empresa o agencia.",
		avatar: "/images/aboutUs4.webp",
		skills: ["UX Research", "UI Design", "Marketing Strategy"],
		linkedin: "https://www.linkedin.com/in/rubenboost/",
	},
]

export default function AcercaDePage() {
	return (
		<div className="min-h-screen bg-white">
			<Header />

			<main className="pt-16">
				{/* Hero Section */}
				<section className="py-20 bg-gradient-to-br from-[#E5E8EC]/30 to-[#00CFFF]/10">
					<div className="container mx-auto px-4 sm:px-6 lg:px-8">
						<div className="text-center max-w-4xl mx-auto">
							<h1 className="text-4xl sm:text-5xl font-bold text-[#2D2D2D] mb-6">
								¿Quiénes Somos?
							</h1>
							<p className="text-xl text-gray-600 mb-8">
								Somos un equipo apasionado por transformar ideas en soluciones
								digitales que generan impacto real en los negocios y las personas.
							</p>
						</div>
					</div>
				</section>

				{/* Misión y Visión */}
				<section className="py-20">
					<div className="container mx-auto px-4 sm:px-6 lg:px-8">
						<div className="grid md:grid-cols-2 gap-12 mb-20">
							<Card className="border-0 shadow-lg rounded-2xl bg-gradient-to-br from-[#00CFFF]/5 to-[#1565FF]/5">
								<CardContent className="p-8">
									<div className="w-16 h-16 bg-gradient-to-br from-[#00CFFF] to-[#1565FF] rounded-2xl flex items-center justify-center mb-6">
										<Target className="w-8 h-8 text-white" />
									</div>
									<h2 className="text-2xl font-bold text-[#2D2D2D] mb-4">
										Nuestra Misión
									</h2>
									<p className="text-gray-600 leading-relaxed">
										Transformar problemas complejos en soluciones digitales
										inmersivas y funcionales, utilizando tecnología de vanguardia
										para potenciar marcas, optimizar procesos y crear experiencias
										excepcionales que conecten con las personas.
									</p>
								</CardContent>
							</Card>

							<Card className="border-0 shadow-lg rounded-2xl bg-gradient-to-br from-[#1565FF]/5 to-[#00CFFF]/5">
								<CardContent className="p-8">
									<div className="w-16 h-16 bg-gradient-to-br from-[#1565FF] to-[#00CFFF] rounded-2xl flex items-center justify-center mb-6">
										<Award className="w-8 h-8 text-white" />
									</div>
									<h2 className="text-2xl font-bold text-[#2D2D2D] mb-4">
										Nuestra Visión
									</h2>
									<p className="text-gray-600 leading-relaxed">
										Ser la consultora digital de referencia en América Latina,
										reconocida por nuestra capacidad de innovación, calidad técnica
										y enfoque colaborativo, liderando la transformación digital de
										empresas hacia un futuro más conectado e inteligente.
									</p>
								</CardContent>
							</Card>
						</div>
					</div>
				</section>

				{/* Valores */}
				<section className="py-20 bg-[#E5E8EC]/30">
					<div className="container mx-auto px-4 sm:px-6 lg:px-8">
						<div className="text-center mb-16">
							<h2 className="text-3xl sm:text-4xl font-bold text-[#2D2D2D] mb-4">
								Nuestros Valores
							</h2>
							<p className="text-lg text-gray-600 max-w-2xl mx-auto">
								Los principios que guían nuestro trabajo y definen nuestra cultura
								empresarial
							</p>
						</div>

						<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
							{valores.map((valor, index) => (
								<Card
									key={index}
									className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white rounded-2xl"
								>
									<CardContent className="p-6 text-center">
										<div className="w-16 h-16 bg-gradient-to-br from-[#00CFFF]/20 to-[#1565FF]/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
											<valor.icon className="w-8 h-8 text-[#1565FF]" />
										</div>
										<h3 className="text-lg font-bold text-[#2D2D2D] mb-3">
											{valor.title}
										</h3>
										<p className="text-gray-600 text-sm leading-relaxed">
											{valor.description}
										</p>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>

				{/* Equipo */}
				<section className="py-20">
					<div className="container mx-auto px-4 sm:px-6 lg:px-8">
						<div className="text-center mb-16">
							<h2 className="text-3xl sm:text-4xl font-bold text-[#2D2D2D] mb-4">
								Nuestro Equipo
							</h2>
							<p className="text-lg text-gray-600 max-w-2xl mx-auto">
								Conoce a las personas que hacen posible la magia digital de Werexp
							</p>
						</div>

									<TeamGrid equipo={equipo} />
					</div>
				</section>

				{/* Filosofía de Trabajo */}
				<section className="py-20 bg-gradient-to-br from-[#1565FF] to-[#00CFFF]">
					<div className="container mx-auto px-4 sm:px-6 lg:px-8">
						<div className="text-center max-w-4xl mx-auto text-white">
							<h2 className="text-3xl sm:text-4xl font-bold mb-6">
								Nuestra Filosofía de Trabajo
							</h2>
							<p className="text-xl mb-8 text-white/90">
								Creamos en la colaboración, la transparencia y la excelencia
								técnica como pilares fundamentales para el éxito de cada proyecto.
							</p>

							<div className="grid md:grid-cols-3 gap-8 mb-12">
								<div className="text-center">
									<div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
										<Users className="w-8 h-8 text-white" />
									</div>
									<h3 className="text-lg font-bold mb-2">
										Metodologías Ágiles
									</h3>
									<p className="text-white/80 text-sm">
										Desarrollo iterativo con entregas frecuentes y feedback
										continuo
									</p>
								</div>

								<div className="text-center">
									<div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
										<Heart className="w-8 h-8 text-white" />
									</div>
									<h3 className="text-lg font-bold mb-2">
										Enfoque Centrado en el Cliente
									</h3>
									<p className="text-white/80 text-sm">
										Cada decisión se toma pensando en el valor que aporta al
										usuario final
									</p>
								</div>

								<div className="text-center">
									<div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
										<Award className="w-8 h-8 text-white" />
									</div>
									<h3 className="text-lg font-bold mb-2">
										Comunicación Transparente
									</h3>
									<p className="text-white/80 text-sm">
										Reportes claros, actualizaciones constantes y acceso directo
										al equipo
									</p>
								</div>
							</div>

							<Button
								asChild
								size="lg"
								className="bg-white text-[#1565FF] hover:bg-[#E5E8EC] font-medium px-8 py-4 rounded-xl shadow-lg transition-all duration-300"
							>
								<Link href="/contacto">
									Conoce a nuestro equipo y empecemos tu proyecto
								</Link>
							</Button>
						</div>
					</div>
				</section>

				{/* Historia */}
				<section className="py-20">
								<div className="container mx-auto px-4 sm:px-6 lg:px-8">
									<div className="max-w-4xl mx-auto">
										<div className="text-center mb-12">
											<h2 className="text-3xl sm:text-4xl font-bold text-[#2D2D2D] mb-4">
												Nuestra Historia
											</h2>
											<p className="text-lg text-gray-600">
												El camino que nos trajo hasta aquí
											</p>
										</div>
										<div className="space-y-8">
											<Card className="border-0 shadow-lg rounded-2xl">
												<CardContent className="p-8">
													<div className="flex items-start space-x-4">
														<div className="w-12 h-12 bg-gradient-to-br from-[#00CFFF] to-[#1565FF] rounded-full flex items-center justify-center flex-shrink-0">
															<span className="text-white font-bold">2019</span>
														</div>
														<div>
															<h3 className="text-xl font-bold text-[#2D2D2D] mb-2">Un Encuentro de Destino</h3>
															<p className="text-gray-600">
																En una empresa de networking, Pedro —un apasionado especialista en iOS— y Rubén —un creativo experto en diseño y marketing— cruzaron caminos. Sus conversaciones sobre tecnología, creatividad y futuro encendieron una chispa de colaboración. Aunque la vida los llevó por rutas distintas, la semilla de una visión compartida quedó plantada.
															</p>
														</div>
													</div>
												</CardContent>
											</Card>
											<Card className="border-0 shadow-lg rounded-2xl">
												<CardContent className="p-8">
													<div className="flex items-start space-x-4">
														<div className="w-12 h-12 bg-gradient-to-br from-[#1565FF] to-[#00CFFF] rounded-full flex items-center justify-center flex-shrink-0">
															<span className="text-white font-bold">2023</span>
														</div>
														<div>
															<h3 className="text-xl font-bold text-[#2D2D2D] mb-2">Nuevas Alianzas, Nuevos Sueños</h3>
															<p className="text-gray-600">
																Años después, Pedro, siempre inquieto por la innovación, conoce a Grecia, una desarrolladora y diseñadora web con una mirada fresca y disruptiva. Juntos, comienzan a imaginar proyectos que combinan tecnología y diseño, sumando nuevas perspectivas a la visión original.
															</p>
														</div>
													</div>
												</CardContent>
											</Card>
											<Card className="border-0 shadow-lg rounded-2xl">
												<CardContent className="p-8">
													<div className="flex items-start space-x-4">
														<div className="w-12 h-12 bg-gradient-to-br from-[#00CFFF] to-[#1565FF] rounded-full flex items-center justify-center flex-shrink-0">
															<span className="text-white font-bold">2025</span>
														</div>
														<div>
															<h3 className="text-xl font-bold text-[#2D2D2D] mb-2">El Nacimiento de Werexp</h3>
															<p className="text-gray-600">
																El equipo se completa con la llegada de Ricardo, un desarrollador full-stack con talento para el backend y el frontend. Es entonces cuando las piezas encajan: la experiencia de Pedro en mobile, la creatividad de Rubén, la visión digital de Grecia y la solidez técnica de Ricardo dan vida a Werexp. Así, la idea que nació años atrás se convierte en una realidad: un equipo multidisciplinario listo para transformar ideas en soluciones digitales con impacto real.
															</p>
														</div>
													</div>
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
