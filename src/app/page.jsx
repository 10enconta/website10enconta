import Image from "next/image";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-black dark:text-slate-100">
      <main className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 py-24 md:grid-cols-2">

        {/* LEFT */}
        <section>
          <Image
            src="/logo-10enconta.svg"
            alt="10enconta"
            width={140}
            height={40}
            className="mb-8"
            priority
          />

          <span className="mb-4 inline-block rounded-full border border-gold px-4 py-1 text-xs font-semibold text-gold">
            Desde 2025 construyendo proyectos que funcionan
          </span>

          <h1 className="mt-6 mb-6 text-4xl font-bold leading-tight">
            Contabilidad simple para negocios que no quieren perder dinero
          </h1>

          <p className="mb-8 text-lg text-slate-700 dark:text-slate-400">
            Ayudamos a emprendedores a entender sus números, evitar errores y
            tomar decisiones financieras con claridad.
            <br />
            <span className="font-medium text-slate-900 dark:text-white">
              Algunos empiezan, pocos terminan. Yo te acompaño a hacerlo realidad.
            </span>
          </p>

          <ul className="mb-10 space-y-3 text-slate-700 dark:text-slate-300">
            <li>✔ Entiende tus números sin ser contador</li>
            <li>✔ Emails prácticos y accionables</li>
            <li>✔ Recursos reales usados con clientes</li>
            <li>✔ Detecta fugas de dinero hoy mismo</li>
          </ul>

          <p className="mb-6 text-sm text-slate-600 dark:text-slate-400">
            Miles de personas ya están fabricando sus proyectos en línea.
          </p>

          {/* FORM */}
          <form className="space-y-4">
            <input
              type="email"
              required
              placeholder="Correo electrónico *"
              className="input input-neutral"
            />

            <div className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
              <input type="checkbox" required className="mt-1" />
              <span>
                Acepto la{" "}
                <a href="/privacidad" className="underline">
                  política de privacidad
                </a>
              </span>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-red-600 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              Recibir el audio y comenzar hoy
            </button>
          </form>

          <p className="mt-6 text-xs text-slate-500">
            Tus datos serán guardados en CampaignMonitor y protegidos según el RGPD.
          </p>
        </section>

        {/* RIGHT – VISUAL */}
        <section className="group perspective">
        <div className="hover-3d">
  {/* content */}
  <figure className="max-w-100 rounded-2xl bg-black">
    <img src="https://imgur.com/ZgJ4bS3.png" alt="3D card" />
  </figure>
  {/* 8 empty divs needed for the 3D effect */}
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
        </section>

      </main>

<Footer />

    </div>
  );
}

