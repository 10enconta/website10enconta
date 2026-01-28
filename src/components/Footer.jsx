export default function Footer() {
  return (
    <footer className="bg-slate-200 py-8 text-center text-xs text-slate-700 dark:bg-slate-900 dark:text-slate-400">
              <p>© 2025 iTorre – haciendo realidad tu idea de forma rentable</p>
        <div className="mt-2 flex justify-center gap-4">
          <a href="/aviso-legal" className="underline">Aviso legal</a>
          <a href="/privacidad" className="underline">Privacidad</a>
          <a href="/cookies" className="underline">Cookies</a>
        </div>
    </footer>
  );
}

