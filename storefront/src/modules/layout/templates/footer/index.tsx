import { getCategoriesList } from "@lib/data/categories"
import { getCollectionsList } from "@lib/data/collections"
import { Text, clx } from "@medusajs/ui"

import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default async function Footer() {
  const { collections } = await getCollectionsList(0, 6)
  const { product_categories } = await getCategoriesList(0, 6)

  return (
    <footer className="border-t border-[#D4AF37]/20 w-full bg-[#000000] text-white">
      <div className="content-container flex flex-col w-full">
        <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-24 md:py-32">
          <div>
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus text-[#D4AF37] hover:text-white uppercase font-bold tracking-widest transition-colors"
            >
              SARA STORE
            </LocalizedClientLink>
            <p className="text-gray-400 text-sm mt-4 max-w-[300px]">
              Elegancia y exclusividad en cada pedido. Envíos garantizados a toda Colombia.
            </p>
          </div>
          
          <div className="text-small-regular gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-3">
            {product_categories && product_categories?.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus text-[#D4AF37] uppercase tracking-wider">
                  Categorías
                </span>
                <ul
                  className="grid grid-cols-1 gap-2"
                  data-testid="footer-categories"
                >
                  {product_categories?.slice(0, 6).map((c) => {
                    if (c.parent_category) return null

                    return (
                      <li className="flex flex-col gap-2 text-gray-400 txt-small" key={c.id}>
                        <LocalizedClientLink
                          className="hover:text-white transition-colors"
                          href={`/categories/${c.handle}`}
                        >
                          {c.name}
                        </LocalizedClientLink>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}

            {collections && collections.length > 0 && (
  <div className="flex flex-col gap-y-2">
    <span className="txt-small-plus text-[#D4AF37] uppercase tracking-wider">
      Colecciones
    </span>
    <ul className={clx("grid grid-cols-1 gap-2 text-gray-400 txt-small")}>
      {collections?.slice(0, 6).map((c) => (
        <li key={c.id}>
          <LocalizedClientLink
            className="hover:text-white transition-colors"
            href={`/collections/${c.handle}`}
          >
            {c.title}
          </LocalizedClientLink>
        </li>
      ))}
    </ul>
  </div>
)}
            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus text-[#D4AF37] uppercase tracking-wider">Ayuda</span>
              <ul className="grid grid-cols-1 gap-y-2 text-gray-400 txt-small">
                <li>
                  <LocalizedClientLink href="/customer-service" className="hover:text-white">
                    Servicio al Cliente
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink href="/privacy-policy" className="hover:text-white">
                    Política de Privacidad
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink href="/shipping-returns" className="hover:text-white">
                    Envíos y Devoluciones
                  </LocalizedClientLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex w-full mb-16 justify-between text-gray-500 border-t border-[#D4AF37]/10 pt-8">
          <Text className="txt-compact-small">
            © {new Date().getFullYear()} SARA STORE. Todos los derechos reservados.
          </Text>
          <div className="flex gap-x-4">
             {/* Aquí podrías poner iconos de redes sociales o métodos de pago */}
             <span className="text-[10px] border border-gray-500 px-2 py-1">PAGO SEGURO</span>
          </div>
        </div>
      </div>
    </footer>
  )
}