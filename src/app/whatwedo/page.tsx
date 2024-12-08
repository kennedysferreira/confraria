import { Description } from "@/components/description";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MainTitle } from "@/components/mainTitle";

export default function WhatWeDo() {
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
      </main>
      <Footer />
    </div>
  );
}
