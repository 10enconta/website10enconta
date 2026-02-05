export default function Footer() {
    const year = new Date().getFullYear()
    return (
        <footer className="bg-slate-200 py-8 text-center text-xs text-slate-700 dark:bg-slate-900 dark:text-slate-400">
            <p className="select-none">
                © {year} 10enconta – haciendo realidad tu idea de forma rentable
            </p>
            <div className="mt-2 flex justify-center gap-4">
                <a href="/politicaPrivacidad" className="underline">
                    Aviso legal
                </a>
                <a href="/politicaPrivacidad" className="underline">
                    Privacidad
                </a>
                <a href="/cookies" className="underline">
                    Cookies
                </a>
            </div>
        </footer>
    )
}
