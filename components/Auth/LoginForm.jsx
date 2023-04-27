import AuthProvider, { AuthContext } from '@/context/AuthProvider'
import api from '@/lib/API'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'

const LoginForm = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const { setUserDetails } = useContext(AuthContext)
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [success, setSuccess] = useState(false)
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false)
  const [error, setError] = useState('')
  const isValidPhoneNumber = /^(?:\+88|88)?(01[3-9]\d{8})$/; // Bangladeshi phone number regx
  const [user, setUser] = useState({
    phoneNumber: "",
    password: "",
  })
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
    setIsLoading(true)
    setUser({
      ...user,
      phoneNumber: phone,
      password: password
    })
    if (user.phoneNumber) {
      api.post("user/login", user)
        .then(res => {
          if (res.status === 200) {
            setSuccess(true)
            setUserDetails(res.data)
            localStorage.setItem('userDetails', JSON.stringify(res.data))
            toast.success(res.data.message, {
              duration: 3000,
            })
            console.log(res.data.usertype);
            if (res.data.usertype === "admin") return router.push("/admin")
            router.push("/customer")
          } else {
            setSuccess(true)
            toast.error(res.data.message, {
              duration: 3000,
            })
          }
          setIsLoading(false)
        })
        .catch(error => {
          toast.error(error.response.data.message)
        })
    }
  }

  useEffect(() => {
    if (success) {
      setPhone('')
      setPassword('')
    }
  }, [success])

  return (
    <div className="flex-col shadow-2xl rounded-md p-5 md:p-5 my-20" >
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
            <input type="text" onChange={e => setPassword(e.target.value)} placeholder="Password" className="outline-none border-b p-2 w-full" required />
          </div>
          <div className="my-6">
            <button
              type="submit"
              className={`bg-gray-300 hover:bg-gray-500 hover:text-white transition-colors durations-100 ease-linear rounded font-semibold w-full py-2 px-10 rounded-5`}
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
    </div >
  )
}

export default LoginForm