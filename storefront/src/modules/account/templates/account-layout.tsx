import React from "react"
import UnderlineLink from "@modules/common/components/interactive-link"
import AccountNav from "../components/account-nav"
import { HttpTypes } from "@medusajs/types"

interface AccountLayoutProps {
  customer: HttpTypes.StoreCustomer | null
  children: React.ReactNode
}

const AccountLayout: React.FC<AccountLayoutProps> = ({
  customer,
  children,
}) => {
  return (
    <div className="flex-1 small:py-12 bg-gray-50/50" data-testid="account-page">
      <div className="flex-1 content-container h-full max-w-5xl mx-auto bg-white flex flex-col shadow-sm border border-gray-100 rounded-sm">
        <div className="grid grid-cols-1 small:grid-cols-[240px_1fr] py-12 px-6 small:px-12">
          <div className="border-b small:border-b-0 small:border-r border-gray-100 pb-8 small:pb-0 small:pr-8">
            {customer && <AccountNav customer={customer} />}
          </div>
          <div className="flex-1 small:pl-12 pt-8 small:pt-0">
            {children}
          </div>
        </div>
        
        <div className="flex flex-col small:flex-row items-center justify-between border-t border-gray-100 p-8 small:p-12 gap-8 bg-gray-50/30">
          <div className="text-center small:text-left">
            <h3 className="text-xl-semi mb-2 text-black uppercase tracking-tight">
              ¿Tienes alguna duda?
            </h3>
            <p className="txt-medium text-ui-fg-subtle">
              Encuentra respuestas rápidas sobre tus pedidos y envíos en nuestro centro de ayuda.
            </p>
          </div>
          <div className="flex-shrink-0">
            <UnderlineLink href="/customer-service" className="text-[#D4AF37] hover:text-black transition-colors font-medium">
              Servicio al Cliente
            </UnderlineLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountLayout