"use client";
import { useState } from "react";

interface CardProps {
  title: string;
  subTitle: string;
  content: string;
}

export function Carousel({
  cards,
  colors,
  carouselTitle,
}: {
  carouselTitle: string;
  cards: CardProps[];
  colors: string[];
}) {

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-[68px] font-semibold">{carouselTitle}</h1>
        <div className="flex gap-2">
          <button >
            <img src="/carouselSwitchBack.svg" alt="Anterior" />
          </button>
          <button >
            <img src="/carouselSwitchNext.svg" alt="Próximo" />
          </button>
        </div>
      </div>

      <div className="overflow-hidden mr-[-64px]">
        <div
          className={`flex gap-5 items-start transition-transform duration-500 ease-in-out`}
          
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className={`flex flex-col gap-6 p-10 text-neutral-900 rounded w-[35rem] flex-shrink-0 ${
                colors[index % colors.length]
              }`}
            >
              <h1 className="font-semibold text-4xl">{card.title}</h1>
              <div>
                <span className="font-bold text-2xl">{card.subTitle}</span>
                <p className="text-2xl">{card.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
