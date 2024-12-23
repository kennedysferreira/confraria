import { Description } from "@/components/description";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <div className="px-16 pt-4 bg-orange-100">
      <Header /> 
      <main className="space-y-40 mt-40">
        <section className="space-y-10">
          <div className="flex gap-20 justify-between">
            <h1 className="text-[84px] tracking-tight leading-tight font-semibold">Fortalecendo a fé e compartilhando o amor de Cristo.</h1>
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
        <section className="space-y-24">
          <Description
            title="Quem somos"
            description={
              <>
                <p>
                  Somos uma Confraria Cristã Bíblica, sem fim lucrativos, onde
                  se reúnem irmãos em Cristo, independente da Igreja Evangélica
                  a qual pertençam, com o objetivo de fortalecimento espiritual
                  bíblico cristão, bem como falar do amor de Cristo para
                  visitantes, convidados e no lugar em que fomos plantados pelo
                  Senhor.
                </p>
                <br />
                <p>
                  Fazendo assim com que todos conheçam a salvação que está em
                  Jesus Cristo e, a partir daí, essas pessoas também serem
                  discípulos e seguidores do Senhor Jesus.
                </p>
                <br />
                <p>
                  Nossa Confraria está aberta a participação de interessados em
                  conhecer a Jesus e a bíblia como regra de fé.
                </p>
              </>
            }
          />
          <Description
            title="Visão"
            description={
              <p>
                Queremos ser uma Confraria Cristã, compromissada com o Reino de
                Deus, sendo assim uma Entidade Acolhedora, que exprime o amor de
                Cristo pelas almas, colocando em práticao o grande mandamento do
                Senhor que é: amar a Deus sobre todas as coisas e ao próximo
                como a si mesmo (Mat. 22:37-39). Para isso, sendo fiél as
                sagradas escrituras, que é nossa base cristã.
              </p>
            }
          />
        </section>
        <section className="flex flex-col gap-10 items-center text-center bg-[#fa956b] px-16 py-20 mx-[-64px]">
          <span className="text-3xl font-semibold">1Pe 3.8</span>
          <h1 className="text-7xl font-semibold text-black">
            "Por fim, tenham todos o mesmo modo de pensar. Sejam cheios de
            compaixao uins pelos outros. Amem uns aos outros como irmaos.
            Mostrem misericordia e humildade"
          </h1>
        </section>
      </main>
      <Footer />
    </div>
  );
}
