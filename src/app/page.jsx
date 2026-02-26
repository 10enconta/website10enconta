"use client"

import { useState } from "react"

export default function Home() {
    const [loading, setLoading] = useState(false)
    const [toast, setToast] = useState(null)

    async function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)

        const email = e.target.email.value

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            })

            const data = await res.json()

            if (res.ok && data.success) {
                setToast({
                    type: "success",
                    message: "Registro exitoso  Revisa tu correo.",
                })
                e.target.reset()
            } else {
                throw new Error("Error en envío")
            }
        } catch (error) {
            setToast({
                type: "error",
                message: "Hubo un error al enviar ",
            })
        }

        setLoading(false)

        setTimeout(() => {
            setToast(null)
        }, 3000)
    }

    return (
        <main
            className="
flex flex-col md:flex-row
items-center justify-center
w-full space-x-5 p-4 select-none

bg-slate-100
bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)]
bg-[size:40px_40px]
">
            {/* TOAST */}
            {toast && (
                <div className="toast toast-center toast-middle">
                    <div
                        className={`alert ${
                            toast.type === "success"
                                ? "alert-success"
                                : "alert-error"
                        } shadow-lg`}>
                        <span>{toast.message}</span>
                    </div>
                </div>
            )}

            {/* LEFT */}
            <section className="w-full md:w-1/2 p-4 rounded-xl bg-base-200 shadow-2xl ">
                <span className="typing-badge px-4 font-semibold text-base">
                    Desde 2013 construyendo proyectos a la medida..
                </span>

                <h1 className="mt-6 mb-6 text-base md:text-4xl font-bold leading-tight">
                    Lleva tus cuentas de forma simple, para negocios que no
                    quieren perder dinero.
                </h1>
                <div className="flex justify-center gap-6 text-yellow-400/80 text-lg"></div>
                <p className="mb-8 text-lg text-slate-800 dark:text-slate-400 mt-3">
                    Ayudamos a emprendedores a entender sus números, evitar
                    errores y tomar decisiones financieras con claridad.
                    <br />
                    <span className="font-medium text-slate-900 dark:text-white">
                        <i className="fas fa-calculator mr-2"></i>
                        Algunos empiezan, pocos terminan. Yo te acompaño a
                        hacerlo realidad.
                    </span>
                </p>

                <ul className="mb-10 space-y-3 text-slate-800 dark:text-slate-300">
                    <li>✔ Entiende tus números sin ser contador</li>
                    <li>✔ Recursos reales usados con clientes</li>
                    <li>✔ Detecta errores hoy mismo</li>
                    <li>✔ Material extra para aplicar de inmediato</li>
                    <li>✔ Estrategia práctica enviada a tu correo</li>
                    <li>✔ Audio con fundamentos esenciales</li>
                    <li>✔ Acceso a contenidos exclusivos</li>
                </ul>

                <p className="mb-6 text-sm text-slate-600 dark:text-slate-400">
                    Cientos de personas ya están fabricando sus proyectos en
                    línea.
                </p>

                {/* FORM */}
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="Correo electrónico *"
                        className="input input-neutral w-full"
                        disabled={loading}
                    />

                    <div className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <input
                            type="checkbox"
                            required
                            className="mt-1"
                            disabled={loading}
                        />
                        <span>
                            Acepto la{" "}
                            <a href="/politicaPrivacidad" className="underline">
                                política de privacidad
                            </a>
                        </span>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full rounded-lg bg-red-600 py-3 text-sm font-semibold text-white transition hover:bg-red-700 disabled:opacity-60 flex items-center justify-center gap-2">
                        {loading && (
                            <span className="loading loading-spinner loading-sm"></span>
                        )}
                        {loading ? "Enviando..." : "Comenzar hoy"}
                    </button>
                </form>

                <p className="mt-6 text-xs text-slate-500">
                    Tus datos serán protegidos según el RGPD.
                </p>
            </section>

            {/* RIGHT */}
            <section className="group perspective w-full md:w-auto flex items-center justify-center">
                <div className="hover-3d">
                    <figure className="w-full md:w-[370px] md:h-[200px] h-auto mx-auto rounded-xl bg-black/90 p-6 text-center shadow-2xl">
                        <h1 className="font-bold text-4xl text-white md:mt-8">
                            <strong className="text-yellow-400">10</strong>
                            enConta
                        </h1>
                        <p className="mt-2 text-yellow-400 tracking-wide text-sm">
                            LOS NÚMEROS EN TU NEGOCIO
                        </p>
                        <div className="mt-5 space-y-3">
                            <div className="h-[2px] w-full bg-yellow-400/40"></div>
                            <div className="h-[2px] w-4/5 bg-yellow-400/60"></div>
                            <div className="h-[2px] w-3/5 bg-yellow-400/80"></div>
                        </div>
                    </figure>

                    {Array.from({ length: 24 }).map((_, i) => (
                        <div key={i}></div>
                    ))}
                </div>
            </section>
        </main>
    )
}
