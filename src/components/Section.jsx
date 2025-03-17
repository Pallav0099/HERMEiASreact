const Section = ({
  id,
  children,
  className,
  component,
  childClassName = ""
}) => {
  const Component = component || "Section";

  // Default responsive padding and constraints
  const defaultClasses =
    "px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 " +
    "2xl:max-w-[1800px] mx-auto overflow-x-hidden" + "bg-black";

  return (
    <Component id={id} className={className}>
      <div className={`w-screen overflow-hidden ${defaultClasses} ${childClassName}`}>
        {children}
      </div>
    </Component>
  );
};

export default Section;