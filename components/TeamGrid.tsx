"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Linkedin } from "lucide-react";

export interface TeamMember {
  name: string;
  country: string;
  position: string;
  description: string;
  avatar: string;
  skills: string[];
  linkedin: string | null;
}

export default function TeamGrid({ equipo }: { equipo: TeamMember[] }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {equipo.map((miembro, index) => {
        const [flagError, setFlagError] = React.useState(false);
        return (
          <Card
            key={index}
            className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white rounded-2xl overflow-hidden"
          >
            <div className="relative w-full pt-[100%] overflow-hidden rounded-t-2xl"> {/* Contenedor para relación de aspecto 1:1 con redondeado y overflow */}
              <Image
                src={miembro.avatar}
                alt={miembro.name}
                fill
                className="absolute inset-0 object-contain object-center group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-[#2D2D2D] mb-1 flex items-center">
                <span className="inline-block mr-2 align-middle" style={{minWidth:24, minHeight:16}}>
                  {(() => {
                    // Utilidad para convertir código de país a emoji de bandera
                    function countryCodeToFlagEmoji(code: string) {
                      if (!code || code.length !== 2) return code;
                      const cc = code.toUpperCase();
                      return String.fromCodePoint(
                        ...[...cc].map(c => 0x1f1e6 + c.charCodeAt(0) - 65)
                      );
                    }
                    // Si quieres solo emoji, descomenta la siguiente línea y comenta el bloque de imagen:
                    // return <span style={{fontSize:'18px'}}>{countryCodeToFlagEmoji(miembro.country)}</span>;
                    if (!flagError) {
                      return (
                        <img
                          src={`https://countryflagsapi.com/png/${miembro.country}`}
                          alt={miembro.country + " flag"}
                          width="24"
                          height="16"
                          style={{ display: 'inline-block', verticalAlign: 'middle', borderRadius: '2px', boxShadow: '0 1px 2px #0001', background: '#eee' }}
                          loading="lazy"
                          onError={() => setFlagError(true)}
                        />
                      );
                    } else {
                      return (
                        <span style={{ fontSize: '18px', marginRight: '2px', display: 'inline-block', lineHeight: 1 }}>{countryCodeToFlagEmoji(miembro.country)}</span>
                      );
                    }
                  })()}
                </span>
                {miembro.name}
                {miembro.linkedin && (
                  <a
                    href={miembro.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2"
                  >
                    <Linkedin className="w-5 h-5 text-[#0077B5]" />
                  </a>
                )}
              </h3>
              <p className="text-[#1565FF] font-medium mb-3">
                {miembro.position}
              </p>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {miembro.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {miembro.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-[#00CFFF]/10 text-[#1565FF] px-2 py-1 rounded-full text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
