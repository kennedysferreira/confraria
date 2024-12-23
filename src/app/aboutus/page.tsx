import { Carousel } from "@/components/carousel";
import { Description } from "@/components/description";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MainTitle } from "@/components/mainTitle";
import { title } from "process";

export default function AboutUs() {
  const colorsAboutUs = ["bg-[#B7D0FF]", "bg-[#F7C7B4]", "bg-[#89D299]"];
  return (
    <div className="space-y-40 bg-[#1B4040] px-16 pt-4 text-white">
      <Header />
      <main className="space-y-40">
        <MainTitle title={"Sobre Nos"} />
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
        <section>
          <Carousel
            cards={[
              {
                title: "Amor ao proximo e compaixao",
                subTitle: "João 3.18",
                content: "Filhinhos, não amemos de palavra nem de língua, mas de fato e de verdade",
              },
              {
                title: "Compromisso com a Verdade Bíblica",
                subTitle: " I Jo 5.20",
                content: "E sabemos que já o Filho de Deus é vindo, e nos deu entendimento para que conheçamos ao Verdadeiro; e no que é verdadeiro estamos, isto é, em seu Filho Jesus Cristo. Este é o verdadeiro Deus e a vida eterna",
              },
              {
                title: "Amor ao proximo e compaixao",
                subTitle: "João 3.18",
                content: "Filhinhos, não amemos de palavra nem de língua, mas de fato e de verdade",
              },
            ]}
            colors={colorsAboutUs} carouselTitle={"Valores"}          />
        </section>
        <section className="flex gap-40">
          <img src="/artAboutUs.png" alt="" />
          <div className="space-y-10">
            <h1 className="font-semibold text-[68px] leading-none">
              Nossa Inspiração
            </h1>
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
      <Footer />
    </div>
  );
}
