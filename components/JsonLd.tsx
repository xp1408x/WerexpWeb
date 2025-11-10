export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Werexp",
    "url": "https://www.werexp.com",
    "logo": "https://www.werexp.com/images/logoWerexpWeb.svg",
    "description": "Agencia de diseño y desarrollo digital especializada en web, móvil y AR. Transformamos ideas en soluciones digitales innovadoras con tecnología de vanguardia.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lima",
      "addressRegion": "Lima",
      "addressCountry": "PE"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+51984342126",
      "contactType": "customer service",
      "email": "info@werexp.com"
    },
    "sameAs": [
      "https://www.linkedin.com/company/werexp/",
      "https://x.com/Werexp1408"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.werexp.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Peru"
    },
    "knowsAbout": [
      "Desarrollo Web",
      "Desarrollo Móvil",
      "Realidad Aumentada",
      "Diseño UX/UI",
      "Marketing Digital",
      "Consultoría Tecnológica"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Desarrollo Web",
            "description": "Desarrollo de sitios y aplicaciones web modernas y escalables"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Desarrollo Móvil",
            "description": "Desarrollo de aplicaciones móviles nativas y multiplataforma"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Realidad Aumentada",
            "description": "Soluciones inmersivas con tecnología AR"
          }
        }
      ]
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}