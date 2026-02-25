"use client"

export default function Home() {
    return (
        <main className="flex flex-col md:flex-row items-center justify-center w-full space-x-5  p-4 select-none">
            {/* LEFT */}
            <section className="w-full md:w-1/2  p-4 rounded-xl bg-base-200">
                <span className="typing-badge px-4 font-semibold text-base">
                    Desde 2013 construyendo proyectos a la medida..
                </span>

                <h1 className="mt-6 mb-6 text-4xl font-bold leading-tight">
                    LLeva tus cuentas de forma simple, para negocios que no
                    quieren perder dinero.
                </h1>
                <p className="mb-8 text-lg text-slate-800 dark:text-slate-400 mt-3">
                    Ayudamos a emprendedores a entender sus números, evitar
                    errores y tomar decisiones financieras con claridad.
                    <br />
                    <span className="font-medium text-slate-900 dark:text-white">
                        Algunos empiezan, pocos terminan. Yo te acompaño a
                        hacerlo realidad.
                    </span>
                </p>

                <ul className="mb-10 space-y-3 text-slate-800 dark:text-slate-300">
                    <li>✔ Entiende tus números sin ser contador</li>
                    <li>✔ Recursos reales usados con clientes</li>
                    <li>✔ Detecta errores hoy mismo</li>
                    <li>
                        ✔ Un material extra para aplicar de inmediato en tu
                        negocio.
                    </li>
                    <li>
                        ✔ Estrategia práctica enviada directamente a tu correo.
                    </li>
                    <li>
                        ✔ Audio con los fundamentos esenciales para analizar tus
                        numeros, aplicable a cualquier negocio.
                    </li>
                    <li>✔ Acceso a contenidos y productos exclusivos.</li>
                </ul>

                <p className="mb-6 text-sm text-slate-600 dark:text-slate-400">
                    Cientos de personas ya están fabricando sus proyectos en
                    línea.
                </p>

                {/* FORM */}
                <form
                    className="space-y-4"
                    onSubmit={async (e) => {
                        e.preventDefault()

                        const email = e.target.email.value

                        await fetch("/api/contact", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({ email }),
                        })
                    }}>
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="Correo electrónico *"
                        className="input input-neutral w-full"
                    />

                    <div className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <input type="checkbox" required className="mt-1" />
                        <span>
                            Acepto la{" "}
                            <a href="/politicaPrivacidad" className="underline">
                                política de privacidad
                            </a>
                        </span>
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-lg bg-red-600 py-3 text-sm font-semibold text-white transition hover:bg-red-700">
                        Comensar hoy
                    </button>
                </form>

                <p className="mt-6 text-xs text-slate-500">
                    Tus datos serán guardados en CampaignMonitor y protegidos
                    según el RGPD.
                </p>
            </section>

            {/* RIGHT – VISUAL */}
            <section className="group perspective  w-full md:w-auto flex items-center justify-center ">
                <div className="hover-3d">
                    <figure className="w-full md:w-[370px] md:h-[225px] h-auto mx-auto rounded-xl bg-black p-6 text-center shadow-2xl select-none flex flex-col justify-center border border-white/10">
                        <h1 className="font-bold text-4xl text-white">
                            <strong className="text-yellow-400">1O</strong>
                            enConta
                        </h1>

                        <p className="mt-2 text-yellow-400 tracking-wide text-sm">
                            LOS NÚMEROS EN TU NEGOCIO
                        </p>
                    </figure>

                    {/* capas para efecto 3D */}
                    {Array.from({ length: 12 }).map((_, i) => (
                        <div key={i}></div>
                    ))}
                </div>
            </section>
        </main>
    )
}
