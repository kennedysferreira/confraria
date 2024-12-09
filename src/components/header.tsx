import Link from "next/link";

export function Header() {
  return (
    <header className="flex justify-between items-end">
      <Link href="/" className="flex items-center gap-2">
        <img src="/logo.svg" alt="logo" className="w-14 h-14" />
        <div className="flex flex-col font-logo text-[#C53522] items-end relative">
          <h1
            className="relative text-4xl text-[#C53522] before:content-[attr(data-text)] before:absolute before:top-0 before:left-0 before:text-borderRed before:-z-10 before:translate-x-1 before:translate-y-1"
            data-text="Confraria crista"
          >
            Confraria crista
          </h1>

          <p
            className="relative text-xs uppercase text-[#C53522] before:content-[attr(data-text)] before:absolute before:top-0 before:left-0 before:text-borderRed before:-z-10 before:translate-x-1 before:translate-y-1"
            data-text="setúbal"
          >
            setúbal
          </p>
        </div>
      </Link>
      <nav>
        <ul className="flex gap-4 font-medium">
          <li className="group">
            <Link href="/aboutus" >
              Sobre nós
            </Link>
            <div className="h-px bg-neutral-900 w-0 group-hover:w-full transition-all duration-300"/>
          </li>
          <li className="group">
            <Link href="/whatwedo">O que fazemos</Link>
            <div className="h-px bg-neutral-900 w-0 group-hover:w-full transition-all duration-300"/>
          </li>
          <li className="group">
            <Link href="/getinvolved">Participe</Link>
            <div className="h-px bg-neutral-900 w-0 group-hover:w-full transition-all duration-300"/>
          </li>
          <div className="h-6 w-px bg-neutral-900"></div>
          <li className="group">
            <Link href="/signup">Sign Up</Link>
            <div className="h-px bg-neutral-900 w-0 group-hover:w-full transition-all duration-300"/>
          </li>
        </ul>
      </nav>
    </header>
  );
}
