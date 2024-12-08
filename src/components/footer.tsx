export function Footer() {
  return (
    <footer className="space-y-20 px-16 py-20 mx-[-64px] bg-neutral-800 text-white ">
      <div className="flex flex-col gap-6 bg-neutral-900 p-2 justify-between w-1/2 rounded">
        <div className="flex gap-2.5  items-start mt-8 px-5">
          <h1 className="text-lg font-semibold w-56">
            Subscribe to our Community Newsletter
          </h1>
          <p className="text-sm text-stone-400 flex-1">
            Subscribe to our Community Newsletter
          </p>
        </div>

        <div className="flex justify-between bg-white/5 py-4 px-5">
          <input
            type="text"
            className="w-full bg-transparent outline-none text-2xl font-semibold placeholder:text-neutral-600 placeholder:text-4xl placeholder:font-semibold"
            placeholder="email"
          />
          <button className="p-4 bg-violet-300 rounded">
            {" "}
            <img src='/arrowBlack.svg' alt="" />{" "}
          </button>
        </div>
      </div>

      <div className=" flex justify-between text-neutral-900">
        <button className="p-4 bg-amber-400 rounded h-fit">
          <img src='/community.png' alt="" />
        </button>
        <button className="p-4 bg-[#ff573a] rounded h-fit">
          <img src='/donation.png' alt="" />
        </button>
        <ul className="flex flex-col space-y-5 font-medium text-lg p-8 bg-orange-100 rounded">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Sobre nos</a>
          </li>
          <li>
            <a href="">O que fazemos</a>
          </li>
          <li>
            <a href="">Participe</a>
          </li>
        </ul>
        <div className="space-y-5 bg-orange-100 font-medium text-lg p-8  rounded h-fit">
          <div className="space-y-2">
            <p>4170 41st Ave S, Suite 101 Fargo, ND 58104</p>
            <p>+1 888 319-3663</p>
          </div>
          <nav>
            <ul className="flex gap-4">
              <li>
                <a href="">Facebook</a>
              </li>
              <li>
                <a href="">Instagram</a>
              </li>
              <li>
                <a href="">Linkedin</a>
              </li>
              <li>
                <a href="">Youtube</a>
              </li>
            </ul>
          </nav>
        </div>
        <button className="flex items-center gap-24 p-8 bg-violet-300 rounded h-fit font-medium text-lg">
          Get in touch <img src='/arrowBlack.svg' alt="" />
        </button>
      </div>
    </footer>
  );
}
