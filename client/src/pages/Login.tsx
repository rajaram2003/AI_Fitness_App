import { AtSignIcon } from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {

  const [state, setState] = useState('sign up')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, seIsSubmitting] = useState(false)

  const navigate = useNavigate()

  return (
    <>
    <main className="login-page-container">
      <form className="login-form">
        <h2 className="text-3xl font-medium text-gray-900 dark:text-white">
          {state === 'login' ? "Sign In" : "Sign up"}
        </h2>
        <p className="mt-2 text-sm text-gray-500/90 dark:text-gray-400">
          {state === "login"
          ? "Welcome back! Sign in to continue your fitness journey."
          : "Create your account and start your fitness journey today."}
        </p>

        {/* Username */}

        {state !== 'login' && (
          <div className="mt-4">
            <label className="font-medium text-sm text-gray-700 dark:text-gray-300">Username</label>
            <div className="relative mt-2">
              <AtSignIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-4.5"/>
              <input type="text" placeholder="Choose a username" className="login-input" required/>
            </div>
          </div>
        )}
      </form>
    </main>
    </>
  )
}

export default Login