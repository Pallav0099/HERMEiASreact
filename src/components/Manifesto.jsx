"use client";
import { TextGenerateEffect } from "../design/TextGenerateEffect";

const paragraph1 = `In a world where our conversations are increasingly monitored, tracked, and commodified, your data catagorized and sold we stand for something different. We believe that privacy is not a luxury — it's a fundamental right.
`;

const paragraph2 = `At Hermeias, we are committed to creating tools and applications that put you in control. Our goal is simple: to empower individuals with secure and affordable tools from localized AI to messaging that is free from surveillance, advertising, or hidden agendas.`;

export function Paragraph1() {
  return (
    <TextGenerateEffect className="font-bold px-8 lg:px-20" duration={0.5} filter={true} words={paragraph1} />
  );
}

export function Paragraph2() {
  return (
    <TextGenerateEffect className="px-8 lg:px-20" delay={2} duration={1.5} filter={true} words={paragraph2} />
  );
}

