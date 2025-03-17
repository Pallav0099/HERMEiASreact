import { Paragraph1, Paragraph2 } from "./Manifesto";
import OurTeam from "./OurTeam";
const About = () => {
  return (
    <section id="about" className="relative z-10">
        <Paragraph1 />
        <Paragraph2 />
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <OurTeam />
    </section>
  );
};

export default About;