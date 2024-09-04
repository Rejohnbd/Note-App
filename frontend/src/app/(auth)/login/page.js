'use client'

import Button from '@/components/Button'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Label from '@/components/Label'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import AuthSessionStatus from '@/app/(auth)/AuthSessionStatus'

import LeftSide from "@/components/signin";
import RightSide from '@/components/signin/RightSide'
import signinImg from "/public/static/images/illustration/signin.svg";

const Login = () => {
    const router = useRouter()

    const { login } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [shouldRemember, setShouldRemember] = useState(false)
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    useEffect(() => {
        if (router.reset?.length > 0 && errors.length === 0) {
            setStatus(atob(router.reset))
        } else {
            setStatus(null)
        }
    })

    const submitForm = async event => {
        event.preventDefault()

        login({
            email,
            password,
            remember: shouldRemember,
            setErrors,
            setStatus,
        })
    }

    return (
        <section className="bg-white dark:bg-darkblack-500">
            <div className="flex flex-col lg:flex-row justify-between min-h-screen">
                <div className="lg:w-1/2 px-5 xl:pl-12 pt-10">
                    {/* <PasswordResetModal
                        isActive={modalOpen}
                        modalData={modalData}
                        handelModalData={setModalData}
                        handleActive={setModalOpen}
                    /> */}
      
                    <div className="max-w-[450px] m-auto pt-24 pb-16">
                        <header className="text-center mb-8">
                        <h2 className="text-bgray-900 dark:text-white text-4xl font-semibold font-poppins mb-2">
                            Welcome Back.
                        </h2>
                        <p className="font-urbanis text-base font-medium text-bgray-600 dark:text-bgray-50">
                            Login to your account
                        </p>
                        </header>
                        
                        <form onSubmit={submitForm}>
                        <div className="mb-4">
                            <Input
                                id="email"
                                type="email"
                                value={email}
                                className="text-bgray-800 text-base border border-bgray-300 dark:border-darkblack-400 dark:bg-darkblack-500 dark:text-white h-14 w-full focus:border-success-300 focus:ring-0 rounded-lg px-4 py-3.5 placeholder:text-bgray-500 placeholder:text-base"
                                onChange={event => setEmail(event.target.value)}
                                required
                                autoFocus
                                placeholder="Email"
                            />
                            <InputError messages={errors.email} className="mt-2" />
                        </div>
                        <div className="mb-6 relative">
                            <Input
                                id="password"
                                type="password"
                                value={password}
                                className="text-bgray-800 text-base border border-bgray-300 dark:border-darkblack-400 dark:bg-darkblack-500 dark:text-white h-14 w-full focus:border-success-300 focus:ring-0 rounded-lg px-4 py-3.5 placeholder:text-bgray-500 placeholder:text-base"
                                onChange={event => setPassword(event.target.value)}
                                required
                                autoComplete="current-password"
                            />
                            <InputError messages={errors.password} className="mt-2" />
                        </div>
                        <div className="flex justify-between mb-7">
                            <div className="flex items-center space-x-3">
                                <label
                                    htmlFor="remember_me"
                                    className="inline-flex items-center">
                                    <input
                                        id="remember_me"
                                        type="checkbox"
                                        name="remember"
                                        className="w-5 h-5 dark:bg-darkblack-500 focus:ring-transparent rounded-full border border-bgray-300 focus:accent-success-300 text-success-300"
                                        onChange={event =>
                                            setShouldRemember(event.target.checked)
                                        }
                                    />
                                    <span className="ml-2 text-sm text-gray-600">
                                        Remember me
                                    </span>
                                </label>
                            </div>
                            <div>
                                <a
                                    onClick={() => setModalOpen(true)}
                                    data-target="#multi-step-modal"
                                    className="modal-open text-success-300 font-semibold text-base underline"
                                >
                                    Forgot Password?
                                </a>
                            </div>
                        </div>
                            <Button
                                className="py-3.5 flex items-center justify-center text-white font-bold bg-success-300 hover:bg-success-400 transition-all rounded-lg w-full"
                            >
                                Sign In
                            </Button>
                        </form>
                        <p className="text-center text-bgray-900 dark:text-bgray-50 text-base font-medium pt-7">
                            Don’t have an account?
                            <Link href="/register" className="font-semibold underline">
                                Sign Up
                            </Link>
                        </p>

                        <div className="relative mt-6 mb-5">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300 dark:border-darkblack-400"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="bg-white dark:bg-darkblack-500 px-2 text-base text-bgray-600">
                            Or
                            </span>
                        </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-4">
                        <a
                            href="#"
                            className="inline-flex justify-center items-center gap-x-2 border border-bgray-300 dark:border-darkblack-400 rounded-lg px-6 py-4 text-base text-bgray-900 dark:text-white font-medium"
                        >
                            <svg
                            width="23"
                            height="22"
                            viewBox="0 0 23 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                d="M20.8758 11.2137C20.8758 10.4224 20.8103 9.84485 20.6685 9.24597H11.4473V12.8179H16.8599C16.7508 13.7055 16.1615 15.0424 14.852 15.9406L14.8336 16.0602L17.7492 18.2737L17.9512 18.2935C19.8063 16.6144 20.8758 14.144 20.8758 11.2137Z"
                                fill="#4285F4"
                            />
                            <path
                                d="M11.4467 20.625C14.0984 20.625 16.3245 19.7694 17.9506 18.2936L14.8514 15.9408C14.022 16.5076 12.9089 16.9033 11.4467 16.9033C8.84946 16.9033 6.64512 15.2243 5.85933 12.9036L5.74415 12.9131L2.7125 15.2125L2.67285 15.3205C4.28791 18.4647 7.60536 20.625 11.4467 20.625Z"
                                fill="#34A853"
                            />
                            <path
                                d="M5.86006 12.9036C5.65272 12.3047 5.53273 11.663 5.53273 11C5.53273 10.3369 5.65272 9.69524 5.84915 9.09636L5.84366 8.96881L2.774 6.63257L2.67357 6.67938C2.00792 7.98412 1.62598 9.44929 1.62598 11C1.62598 12.5507 2.00792 14.0158 2.67357 15.3205L5.86006 12.9036Z"
                                fill="#FBBC05"
                            />
                            <path
                                d="M11.4467 5.09664C13.2909 5.09664 14.5349 5.87733 15.2443 6.52974L18.0161 3.8775C16.3138 2.32681 14.0985 1.375 11.4467 1.375C7.60539 1.375 4.28792 3.53526 2.67285 6.6794L5.84844 9.09638C6.64514 6.77569 8.84949 5.09664 11.4467 5.09664Z"
                                fill="#EB4335"
                            />
                            </svg>
                        </a>
                        <a
                            href="#"
                            className="inline-flex justify-center items-center gap-x-2 border border-bgray-300 dark:border-darkblack-400 rounded-lg px-6 py-4 text-base text-bgray-900 dark:text-white font-medium"
                        >
                            <svg
                            className="fill-bgray-900 dark:fill-white"
                            width="21"
                            height="22"
                            viewBox="0 0 21 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path d="M19.8744 7.50391C19.7653 7.56519 17.1672 8.85841 17.1672 11.7258C17.2897 14.9959 20.4459 16.1427 20.5 16.1427C20.4459 16.2039 20.0235 17.7049 18.7724 19.2783C17.7795 20.6336 16.6775 22 15.004 22C13.4121 22 12.8407 21.0967 11.004 21.0967C9.03147 21.0967 8.47335 22 6.96314 22C5.28967 22 4.10599 20.5603 3.05896 19.2178C1.69871 17.4606 0.54254 14.703 0.501723 12.0553C0.474217 10.6522 0.774128 9.27304 1.53544 8.10158C2.60998 6.46614 4.52835 5.35595 6.6233 5.31935C8.22845 5.2708 9.65703 6.30777 10.6366 6.30777C11.5754 6.30777 13.3305 5.31935 15.3163 5.31935C16.1735 5.32014 18.4592 5.55173 19.8744 7.50391ZM10.5009 5.03921C10.2151 3.75792 11.004 2.47663 11.7387 1.65931C12.6774 0.670887 14.1601 0 15.4388 0C15.5204 1.28129 15.0031 2.53791 14.0785 3.45312C13.2489 4.44154 11.8203 5.18565 10.5009 5.03921Z" />
                            </svg>
                        </a>
                        </div>
                    </div>
                </div>
                <RightSide img={signinImg} />
            </div>
        </section>
    )
}

export default Login
