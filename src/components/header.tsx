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
          <li>
            <Link href="/aboutus">Sobre nos</Link>
          </li>
          <li>
            <Link href="/whatwedo">O que fazemos</Link>
          </li>
          <li>
            <Link href="/getinvolved">Participe</Link>
          </li>
          <div className="h-6 w-px bg-neutral-900"></div>
          <li>
            <Link href="/signup">Sign Up</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
