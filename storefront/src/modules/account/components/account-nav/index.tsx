"use client"

import { clx } from "@medusajs/ui"
import { ArrowRightOnRectangle } from "@medusajs/icons"
import { useParams, usePathname } from "next/navigation"

import ChevronDown from "@modules/common/icons/chevron-down"
import User from "@modules/common/icons/user"
import MapPin from "@modules/common/icons/map-pin"
import Package from "@modules/common/icons/package"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { HttpTypes } from "@medusajs/types"
import { signout } from "@lib/data/customer"

const AccountNav = ({
  customer,
}: {
  customer: HttpTypes.StoreCustomer | null
}) => {
  const route = usePathname()
  const { countryCode } = useParams() as { countryCode: string }

  const handleLogout = async () => {
    await signout(countryCode)
  }

  return (
    <div>
      <div className="small:hidden" data-testid="mobile-account-nav">
        {route !== `/${countryCode}/account` ? (
          <LocalizedClientLink
            href="/account"
            className="flex items-center gap-x-2 text-small-regular py-2 text-[#D4AF37]"
            data-testid="account-main-link"
          >
            <>
              <ChevronDown className="transform rotate-90" />
              <span className="uppercase tracking-widest font-bold">Mi Cuenta</span>
            </>
          </LocalizedClientLink>
        ) : (
          <>
            <div className="text-xl-semi mb-4 px-8 text-black uppercase tracking-tighter">
              Hola, {customer?.first_name}
            </div>
            <div className="text-base-regular">
              <ul className="bg-gray-50/50 rounded-lg overflow-hidden border border-gray-100">
                <li>
                  <LocalizedClientLink
                    href="/account/profile"
                    className="flex items-center justify-between py-4 border-b border-gray-100 px-8 hover:bg-white transition-colors"
                    data-testid="profile-link"
                  >
                    <div className="flex items-center gap-x-3">
                      <User size={20} className="text-[#D4AF37]" />
                      <span>Perfil</span>
                    </div>
                    <ChevronDown className="transform -rotate-90 text-gray-400" />
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/account/addresses"
                    className="flex items-center justify-between py-4 border-b border-gray-100 px-8 hover:bg-white transition-colors"
                    data-testid="addresses-link"
                  >
                    <div className="flex items-center gap-x-3">
                      <MapPin size={20} className="text-[#D4AF37]" />
                      <span>Direcciones</span>
                    </div>
                    <ChevronDown className="transform -rotate-90 text-gray-400" />
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/account/orders"
                    className="flex items-center justify-between py-4 border-b border-gray-100 px-8 hover:bg-white transition-colors"
                    data-testid="orders-link"
                  >
                    <div className="flex items-center gap-x-3">
                      <Package size={20} className="text-[#D4AF37]" />
                      <span>Mis Pedidos</span>
                    </div>
                    <ChevronDown className="transform -rotate-90 text-gray-400" />
                  </LocalizedClientLink>
                </li>
                <li>
                  <button
                    type="button"
                    className="flex items-center justify-between py-4 px-8 w-full hover:bg-red-50 transition-colors text-red-600"
                    onClick={handleLogout}
                    data-testid="logout-button"
                  >
                    <div className="flex items-center gap-x-3">
                      <ArrowRightOnRectangle size={20} />
                      <span>Cerrar Sesión</span>
                    </div>
                  </button>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>

      <div className="hidden small:block" data-testid="account-nav">
        <div>
          <div className="pb-6 border-b border-gray-100 mb-6">
            <h3 className="text-lg font-bold uppercase tracking-widest text-black">
              Mi Panel
            </h3>
            <p className="text-xs text-ui-fg-subtle mt-1">Hola, {customer?.first_name} {customer?.last_name}</p>
          </div>
          <div className="text-base-regular">
            <ul className="flex mb-0 justify-start items-start flex-col gap-y-4">
              <li>
                <AccountNavLink
                  href="/account"
                  route={route!}
                  data-testid="overview-link"
                >
                  Resumen
                </AccountNavLink>
              </li>
              <li>
                <AccountNavLink
                  href="/account/profile"
                  route={route!}
                  data-testid="profile-link"
                >
                  Información del Perfil
                </AccountNavLink>
              </li>
              <li>
                <AccountNavLink
                  href="/account/addresses"
                  route={route!}
                  data-testid="addresses-link"
                >
                  Direcciones de Envío
                </AccountNavLink>
              </li>
              <li>
                <AccountNavLink
                  href="/account/orders"
                  route={route!}
                  data-testid="orders-link"
                >
                  Historial de Pedidos
                </AccountNavLink>
              </li>
              <li className="pt-4 mt-4 border-t border-gray-100 w-full">
                <button
                  type="button"
                  className="text-ui-fg-subtle hover:text-red-600 transition-colors flex items-center gap-x-2 text-small-regular uppercase tracking-widest"
                  onClick={handleLogout}
                  data-testid="logout-button"
                >
                  <ArrowRightOnRectangle size={16} />
                  Cerrar Sesión
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

type AccountNavLinkProps = {
  href: string
  route: string
  children: React.ReactNode
  "data-testid"?: string
}

const AccountNavLink = ({
  href,
  route,
  children,
  "data-testid": dataTestId,
}: AccountNavLinkProps) => {
  const { countryCode }: { countryCode: string } = useParams()

  const active = route.split(countryCode)[1] === href
  return (
    <LocalizedClientLink
      href={href}
      className={clx("text-small-regular uppercase tracking-widest transition-all duration-200", {
        "text-[#D4AF37] font-bold border-l-2 border-[#D4AF37] pl-4": active,
        "text-ui-fg-subtle hover:text-black hover:pl-2": !active,
      })}
      data-testid={dataTestId}
    >
      {children}
    </LocalizedClientLink>
  )
}

export default AccountNav