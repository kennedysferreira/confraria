export function Header() {
  return (
    <header className="flex justify-between items-end">
      <div className="flex items-center gap-2">
        <img src="/logo.svg" alt="logo" className="w-14 h-14" />
        <div className=" flex flex-col font-logo text-red-900 items-end">
          <h1 className="text-4xl">Confraria crista</h1>
          <p className="text-xs uppercase">setúbal</p>
        </div>
      </div>
      <nav>
        <ul className="flex gap-4 font-medium">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Sobre nos</a>
          </li>
          <li>
            <a href="">O que fazemos</a>
          </li>
          <div className="h-6 w-px bg-neutral-900"></div>
          <li>
            <a href="">Participe</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
