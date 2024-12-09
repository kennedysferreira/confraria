import { Card } from "@/components/card";
import { Description } from "@/components/description";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MainTitle } from "@/components/mainTitle";

export default function WhatWeDo() {
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
  ];

  return (
    <div className="space-y-40 bg-[#161E42] px-16 py-4 text-white">
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
          <div className="flex items-center justify-between">
            <h1 className="text-[68px] font-semibold">Principais Direçoes</h1>
            <div className="flex flex-wrap gap-1">
              <button>
                <img src="/carouselSwitchBack.svg" alt="" />
              </button>
              <button>
                <img src="/carouselSwitchNext.svg" alt="" />
              </button>
            </div>
          </div>

          <div className="flex gap-10 items-start overflow-hidden mr-[-64px]">
            
              {data.map((item, index) => (
                <Card
                  key={index}
                  title={item.title}
                  subTitle={item.subtitle}
                  content={item.content}
                />
              ))}
            

            
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
