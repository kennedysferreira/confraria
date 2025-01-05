import { Carousel } from "@/components/carousel";
import { Description } from "@/components/description";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MainTitle } from "@/components/mainTitle";
import { UpcommingEvents } from "@/components/upcommingEvents";

export default function WhatWeDo() {
  const colorsWhatWeDo = ["bg-[#9ABEB1]", "bg-[#CFA4D5]", "bg-[#90F9A3]"];

  const data = [
    {
      title: "Amor ao próximo e compaixão",
      subtitle: "pe 3.8",
      content:
        "Valorizamos o cuidado com os outros, refletindo o amor de Cristo através de ações que promovem ajuda, conforto e esperança para quem mais precisa.",
    },
    {
      title: "Fé e esperança",
      subtitle: "Hb 11.1",
      content:
        "Cremos no poder da fé para transformar vidas e trazer esperança nos momentos mais difíceis.",
    },
    {
      title: "Serviço e dedicação",
      subtitle: "Jo 13.14",
      content:
        "Acreditamos no valor do serviço ao próximo, com humildade e coração dedicado a ajudar.",
    },
    {
      title: "Fé e esperança",
      subtitle: "Hb 11.1",
      content:
        "Cremos no poder da fé para transformar vidas e trazer esperança nos momentos mais difíceis.",
    },
  ];

  return (
    <div className="space-y-40 bg-[#161E42] px-16 pt-4 text-white">
      <Header />
      <main className="space-y-40">
        <MainTitle title={"O que fazemos"} />
        <section>
          <Description
            title={"Visão Geral"}
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
              </>
            }
          />
        </section>

        <section>
          <Carousel
            cards={data.map((item) => ({
              title: item.title,
              subTitle: item.subtitle,
              content: item.content,
            }))}
            colors={colorsWhatWeDo}
            carouselTitle={"Principais Direções"}
          />
        </section>

        <section className="flex flex-col gap-10">
          <h1 className="text-[68px] font-semibold">Proximos eventos</h1>
          <UpcommingEvents
            title={"Proximos eventos"}
            data={"25 de Dezembro"}
            location={"Setubal"}
            content="Em um típico domingo à tarde, a pequena comunidade se reúne ao redor do campo de futebol local, criando um cenário vibrante e cheio de energia. Amigos, familiares e vizinhos ocupam as arquibancadas improvisadas, trazendo cadeiras, bandeiras e, claro, muita empolgação. O jogo, embora amistoso, é levado a sério pelos jogadores amadores que vestem as cores de seus bairros com orgulho."
          />
          <UpcommingEvents
            title={"Proximos eventos"}
            data={"25 de Dezembro"}
            location={"Setubal"}
            content="Em um típico domingo à tarde, a pequena comunidade se reúne ao redor do campo de futebol local, criando um cenário vibrante e cheio de energia. Amigos, familiares e vizinhos ocupam as arquibancadas improvisadas, trazendo cadeiras, bandeiras e, claro, muita empolgação. O jogo, embora amistoso, é levado a sério pelos jogadores amadores que vestem as cores de seus bairros com orgulho."
          />
          <button className="text-2xl py-5 px-8 bg-white text-neutral-900 rounded self-end">See More</button>
        </section>
      </main>
      <Footer />
    </div>
  );
}
