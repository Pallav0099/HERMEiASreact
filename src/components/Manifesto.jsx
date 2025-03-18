"use client";
import { TextGenerateEffect } from "../design/TextGenerateEffect";

const manifesto = 'Manifesto: A more open and private future'
const paragraph1 = `In a world where our conversations are increasingly monitored, tracked, and commodified, your data catagorized and sold we stand for something different. We believe that privacy is not a luxury — it's a fundamental right.
`;

const paragraph2 = `At Hermeias, we are committed to creating tools and applications that put you in control. Our goal is simple: to empower individuals with secure and affordable tools from localized AI to messaging that is free from surveillance, advertising, or hidden agendas.`;

export function Manifesto() {
  return (
    <TextGenerateEffect className="font-bold text-xl md:text-2xl lg:text-3xl" duration={0.2} filter={true} words={manifesto} />
  );
}
export function Paragraph1() {
  return (
    <TextGenerateEffect className="text-md lg:text-lg mb-3" duration={0.4} filter={true} words={paragraph1} />
  );
}

export function Paragraph2() {
  return (
    <TextGenerateEffect className="text-md lg:text-lg mb-5" delay={1.5} duration={0.5} filter={true} words={paragraph2} />
  );
}

