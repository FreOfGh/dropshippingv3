import { Button, Heading } from "@medusajs/ui"
import InteractiveLink from "@modules/common/components/interactive-link"

const Hero = () => {
  return (
    <div className="h-[85vh] w-full border-b border-ui-border-base relative bg-[#000000] overflow-hidden">
      {/* Efecto de luz de fondo para dar profundidad */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#D4AF37] opacity-10 blur-[120px] rounded-full"></div>
      
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-6 small:p-32 gap-8">
        
        {/* Badge llamativo */}
        <span className="bg-[#D4AF37] text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest animate-pulse">
          Colección Exclusiva 2026
        </span>

        <span>
          <Heading
            level="h1"
            className="text-5xl md:text-7xl leading-tight text-white font-extrabold uppercase tracking-tighter"
          >
            SARA <span className="text-[#D4AF37]">STORE</span>
          </Heading>
          <Heading
            level="h2"
            className="text-lg md:text-2xl leading-8 text-gray-300 font-light max-w-[600px] mt-4"
          >
            Lujo a tu alcance. Descubre piezas seleccionadas para quienes no se conforman con lo ordinario.
          </Heading>
        </span>
        
        <div className="flex flex-col sm:flex-row gap-4 items-center mt-4">
          <a href="/store">
            <Button 
              variant="primary" 
              className="bg-[#D4AF37] hover:bg-[#B8962E] text-black border-none text-lg font-bold h-14 px-10 rounded-none shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300 hover:scale-105"
            >
              COMPRAR AHORA
            </Button>
          </a>
        </div>

        <div className="flex flex-col items-center gap-2">
          <p className="text-white/50 text-xs uppercase tracking-[0.2em]">Envíos a toda Colombia 🇨🇴</p>
          <div className="h-[1px] w-20 bg-[#D4AF37]"></div>
        </div>
      </div>
      
      {/* Decoración geométrica sutil */}
      <div className="absolute bottom-10 right-10 opacity-20 hidden md:block">
        <div className="border border-[#D4AF37] w-40 h-40 rounded-full"></div>
      </div>
    </div>
  )
}

export default Hero