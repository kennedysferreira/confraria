import { Header } from "@/components/header";

export default function Home() {
  return (
    <div className="space-y-40">
      <Header />
      <main>
        <section className="space-y-10">
          <div className="flex gap-20 justify-between">
            <h1 className="text-[84px] font-semibold">Fortalecendo a fé e compartilhando o amor de Cristo.</h1>
            <aside className="flex flex-col items-end justify-between">
              <button className="bg-red-900 px-8 py-5 rounded text-white">Button</button>
              <p className="text-lg w-80">
                Este site não é mais uma igreja, mas uma comunidade de pessoas
                unidas pela fé em Cristo, dedicadas ao fortalecimento espiritual
                e à partilha do amor de Jesus.
              </p>
            </aside>
          </div>
          <img src="/hero.png" alt="hero" className="w-full" />
        </section>
      </main>
    </div>
  );
}
