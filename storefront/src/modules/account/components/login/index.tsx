"use client"

import { useFormState } from "react-dom"
import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import Input from "@modules/common/components/input"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import { login } from "@lib/data/customer"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const Login = ({ setCurrentView }: Props) => {
  const [message, formAction] = useFormState(login, null)

  return (
    <div
      className="max-w-sm w-full flex flex-col items-center bg-white p-8 md:p-12 shadow-sm border border-gray-100"
      data-testid="login-page"
    >
      <h1 className="text-2xl-semi uppercase mb-2 tracking-tighter text-black">
        Bienvenido
      </h1>
      <p className="text-center text-base-regular text-ui-fg-subtle mb-8">
        Ingresa a tu cuenta para una experiencia de compra exclusiva.
      </p>
      
      <form className="w-full" action={formAction}>
        <div className="flex flex-col w-full gap-y-4">
          <Input
            label="Correo Electrónico"
            name="email"
            type="email"
            title="Ingresa un correo electrónico válido."
            autoComplete="email"
            required
            data-testid="email-input"
            className="border-gray-200 focus:border-[#D4AF37]"
          />
          <Input
            label="Contraseña"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            data-testid="password-input"
            className="border-gray-200 focus:border-[#D4AF37]"
          />
        </div>

        <ErrorMessage error={message} data-testid="login-error-message" />
        
        <SubmitButton 
          data-testid="sign-in-button" 
          className="w-full mt-8 bg-black hover:bg-[#D4AF37] text-white transition-all duration-300 uppercase tracking-widest h-12"
        >
          Iniciar Sesión
        </SubmitButton>
      </form>

      <div className="flex flex-col items-center gap-y-2 mt-8">
        <span className="text-center text-ui-fg-subtle text-small-regular">
          ¿Aún no eres miembro?
        </span>
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.REGISTER)}
          className="text-small-semi uppercase tracking-widest underline decoration-[#D4AF37] underline-offset-4 hover:text-[#D4AF37] transition-colors"
          data-testid="register-button"
        >
          Crear cuenta
        </button>
      </div>
    </div>
  )
}

export default Login