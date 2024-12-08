import { Description } from "@/components/description";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MainTitle } from "@/components/mainTitle";

export default function AboutUs() {
  return (
    <div className="space-y-40 bg-[#1B4040] px-16 py-4 text-white"> 
      <Header />
      <main className="space-y-40">
        <MainTitle title={"Sobre Nos"}/>
        <Description
          title="Visão"
          description={
            <>
              <p>
                Somos uma Confraria Cristã Bíblica, sem fim lucrativos, onde se
                reúnem irmãos em Cristo, independente da Igreja Evangélica a
                qual pertençam, com o objetivo de fortalecimento espiritual
                bíblico cristão, bem como falar do amor de Cristo para
                visitantes, convidados e no lugar em que fomos plantados pelo
                Senhor.
              </p>
              <br />
              <p>
                Fazendo assim com que todos conheçam a salvação que está em
                Jesus Cristo e, a partir daí, essas pessoas também serem
                discípulos e seguidores do Senhor Jesus. Vale lembrar que somos
                membros de Igrejas Evangélicas e estamos debaixo da cobertura
                espiritual de nossos pastores e líderes.
              </p>
              <br />
              <p>
                Nossa Confraria está aberta a participação de interessados em
                conhecer a Jesus e a bíblia como regra de fé.
              </p>
            </>
          }
        />
        <section className="flex gap-40">
          <img src="/artAboutUs.png" alt="" />
          <div className="space-y-10">
            <h1 className="font-semibold text-[68px] leading-none">Nossa Inspiração</h1>
            <div className="space-y-6 text-[22px]">
              <p>
                Somos uma Confraria Cristã Bíblica, sem fim lucrativos, onde se
                reúnem irmãos em Cristo, independente da Igreja Evangélica a
                qual pertençam, com o objetivo de fortalecimento espiritual
                bíblico cristão, bem como falar do amor de Cristo para
                visitantes, convidados e no lugar em que fomos plantados pelo
                Senhor.
              </p>
              <p>
                Fazendo assim com que todos conheçam a salvação que está em
                Jesus Cristo e, a partir daí, essas pessoas também serem
                discípulos e seguidores do Senhor Jesus. Vale lembrar que somos
                membros de Igrejas Evangélicas e estamos debaixo da cobertura
                espiritual de nossos pastores e líderes.
              </p>
              <p>
                Nossa Confraria está aberta a participação de interessados em
                conhecer a Jesus e a bíblia como regra de fé.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
}
