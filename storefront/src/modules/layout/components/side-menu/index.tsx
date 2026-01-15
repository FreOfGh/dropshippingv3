"use client"

import { Popover, Transition } from "@headlessui/react"
import { ArrowRightMini, XMark } from "@medusajs/icons"
import { Text, clx, useToggleState } from "@medusajs/ui"
import { Fragment } from "react"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CountrySelect from "../country-select"
import { HttpTypes } from "@medusajs/types"

// Traducimos los nombres de los ítems y mantenemos las rutas
const SideMenuItems = {
  Inicio: "/",
  Tienda: "/store",
  Buscar: "/search",
  Cuenta: "/account",
  Carrito: "/cart",
}

const SideMenu = ({ regions }: { regions: HttpTypes.StoreRegion[] | null }) => {
  const toggleState = useToggleState()

  return (
    <div className="h-full">
      <div className="flex items-center h-full">
        <Popover className="h-full flex">
          {({ open, close }) => (
            <>
              <div className="relative flex h-full">
                <Popover.Button
                  data-testid="nav-menu-button"
                  className="relative h-full flex items-center transition-all ease-out duration-200 focus:outline-none text-white hover:text-[#D4AF37] font-medium uppercase tracking-widest text-xs"
                >
                  Menú
                </Popover.Button>
              </div>

              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-150"
                enterFrom="opacity-0"
                enterTo="opacity-100 backdrop-blur-md"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 backdrop-blur-md"
                leaveTo="opacity-0"
              >
                <Popover.Panel className="flex flex-col absolute w-full pr-4 sm:pr-0 sm:w-1/3 2xl:w-1/4 sm:min-w-min h-[calc(100vh-1rem)] z-30 inset-x-0 text-sm text-white m-2">
                  <div
                    data-testid="nav-menu-popup"
                    className="flex flex-col h-full bg-black/90 border border-[#D4AF37]/30 rounded-none justify-between p-8 backdrop-blur-xl shadow-2xl"
                  >
                    <div className="flex justify-end" id="xmark">
                      <button 
                        data-testid="close-menu-button" 
                        onClick={close}
                        className="text-white hover:text-[#D4AF37] transition-colors"
                      >
                        <XMark size={24} />
                      </button>
                    </div>
                    
                    <ul className="flex flex-col gap-8 items-start justify-start mt-8">
                      {Object.entries(SideMenuItems).map(([name, href]) => {
                        return (
                          <li key={name}>
                            <LocalizedClientLink
                              href={href}
                              className="text-4xl leading-none font-bold uppercase tracking-tighter hover:text-[#D4AF37] transition-all duration-300 hover:pl-2"
                              onClick={close}
                              data-testid={`${name.toLowerCase()}-link`}
                            >
                              {name}
                            </LocalizedClientLink>
                          </li>
                        )
                      })}
                    </ul>

                    <div className="flex flex-col gap-y-8 border-t border-[#D4AF37]/20 pt-8">
                      <div
                        className="flex justify-between items-center text-[#D4AF37]"
                        onMouseEnter={toggleState.open}
                        onMouseLeave={toggleState.close}
                      >
                        {regions && (
                          <CountrySelect
                            toggleState={toggleState}
                            regions={regions}
                          />
                        )}
                        <ArrowRightMini
                          className={clx(
                            "transition-transform duration-150",
                            toggleState.state ? "-rotate-90" : ""
                          )}
                        />
                      </div>
                      <Text className="flex justify-between txt-compact-small text-gray-500 text-[10px] uppercase tracking-widest">
                        © {new Date().getFullYear()} SARA STORE. Todos los derechos reservados.
                      </Text>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </div>
  )
}

export default SideMenu