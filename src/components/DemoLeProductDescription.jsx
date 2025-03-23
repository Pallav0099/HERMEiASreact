import { TextGenerateEffect } from "../design/TextGenerateEffect"

const DemoLeProductDescription = () => {
    return (
        <section className="items-center py-5 min-h-[150vh] px-[5vw] lg:px-[13.5vw]">
            <div className="min-h-[60vh] md:min-h-[40vh]">

            </div>
            <div className="max-w-6xl">
                <TextGenerateEffect words={'Heading Heading Heading Heading Heading'} duration={.5} className={"flex text-center text-2xl lg:text-3xl"} />
                <p className="text-xl motion-preset-slide-up-md mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis velit tincidunt nulla tristique porttitor. Integer mattis, diam efficitur hendrerit elementum, ante mi viverra est, porta viverra nunc nisl sodales nisi. Nullam vel ullamcorper elit. Nulla condimentum ex vitae facilisis vestibulum. </p>
            </div>
        </section>
    )
}
export default DemoLeProductDescription;