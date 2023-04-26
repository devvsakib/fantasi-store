import Link from 'next/link'
import { useState } from 'react'
import { toast } from 'react-hot-toast'

const LoginForm = () => {
  const [phone, setPhone] = useState('')
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false)
  const [error, setError] = useState('')
  const isValidPhoneNumber = /^(?:\+88|88)?(01[3-9]\d{8})$/; // Bangladeshi phone number regx

  const handlePhone = (e) => {
    const { value } = e.target
    if (isValidPhoneNumber.test(value)) {
      setError('')
      setPhone(value)
      setIsPhoneNumberValid(true)
    } else {
      setError('Invalid phone number')
      setPhone(value)
      setIsPhoneNumberValid(false)
    }

  }

  const handleLogin = (e) => {
    e.preventDefault()
    toast.success('Login successful')
  }
  return (
    <div className="flex-col shadow-2xl rounded-md p-5 md:p-5 my-20">
      <div className="pt-5 lg:text-left">
        <h1 className="text-2xl font-bold mb-5">Login</h1>
      </div>
      <div className="w-full  md:w-[400px]">
        <form onSubmit={handleLogin} className="flex  flex-col gap-2">
          <div className="relative">
            <input
              type="text"
              id="phone"
              name="phone"
              value={phone}
              onChange={handlePhone}
              required
              placeholder="Phone Number" className="outline-none border-b p-2 w-full" />
            {error && <p className="text-muted">{error}</p>}
          </div>
          <div className="">
            <input type="text" placeholder="Password" className="outline-none border-b p-2 w-full" required />
          </div>
          <div className="my-6">
            <button
              className={`bg-gray-300 ${isPhoneNumberValid
                ? 'hover:bg-gray-500 hover:text-white transition-colors durations-100 ease-linear rounded font-semibold w-full py-2 px-10 rounded-5'
                : 'cursor-not-allowed opacity-50 rounded font-semibold w-full py-2 px-10 rounded-5'
                }`}
              disabled={!isPhoneNumberValid}
            >
              Login</button>
          </div>
          <div className="flex items-center gap-3">
            <p>New to FantasiStore?</p>
            <Link href={'/register'}>
              <button type="button" className="btn btn-outline-primary">
                Register
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginForm