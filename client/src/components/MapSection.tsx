import React from 'react';

export default function MapSection() {
  return (
    <section id="atendimento" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Área de Atendimento Exclusiva
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Levamos a barbearia até você em toda a Ilhabela. Nosso atendimento se estende do **Extremo Norte** ao **Extremo Sul** da ilha, garantindo o serviço premium onde você estiver.
          </p>
        </div>

        {/* Map Image */}
        <div className="max-w-4xl mx-auto shadow-xl rounded-xl overflow-hidden border-4 border-primary/50">
          <img
            src="/mapa-ilhabela.png" // <--- USE ESTE NOME DE ARQUIVO
            alt="Mapa da área de atendimento em Ilhabela"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
