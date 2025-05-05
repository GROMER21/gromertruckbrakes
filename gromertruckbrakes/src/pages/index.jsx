import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Mail,
  Phone,
  Truck,
  HelpCircle,
  Star,
  Facebook,
  Instagram,
  MessageCircle,
} from "lucide-react";
import catalogo from "@/data/catalogo.json";

export default function HomePage() {
  return (
    <div className="bg-[#121212] text-[#EDEDED] px-6 py-10 space-y-20">
      <section className="text-center space-y-6">
        <img src="/logo-gromer.jpg" alt="Gromer Truck Brakes Logo" className="mx-auto h-32" />
        <h1 className="text-5xl font-bold text-[#2370A0] tracking-tight">GROMER Truck Brakes</h1>
        <p className="text-lg text-[#B0B0B0] max-w-xl mx-auto">
          Potencia y seguridad para tu camión — tambores y mazas de freno de calidad superior.
        </p>
        <Button className="bg-[#2370A0] hover:bg-[#19577e] text-white px-6 py-3 text-lg rounded-xl shadow-md">
          Conoce nuestros productos
        </Button>
      </section>

      {/* Catálogo placeholder */}
      <section className="space-y-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-[#2370A0] text-center">Catálogo de Productos</h2>
        <div className="overflow-x-auto">
          {/* Tabla generada desde catalogo.json */}
          <p className="text-center text-[#B0B0B0]">Agrega tus datos en <code>src/data/catalogo.json</code></p>
        </div>
      </section>
    </div>
  );
}
