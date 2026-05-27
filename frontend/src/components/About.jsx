import React, { useContext, useState } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";

const About = () => {
  /**** SWITCH THEME ****/
  const { darkMode } = useContext(ThemeContext);
  const darkModeTitleBg = darkMode
    ? "bg-gray-400 hover:bg-zinc-900"
    : "bg-zinc-900 hover:bg-gray-400";
  const darkModeTitle = darkMode
    ? "text-green-500 hover:text-violet-900"
    : "text-violet-400 hover:text-green-600";
    const darkModeCotentBg = darkMode
    ? "bg-zinc-900"
    : "bg-gray-400";
    const darkModeContent = darkMode 
    ? "text-violet-600" 
    : "text-green-900";

  const [isMainOpen, setIsMainOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const accordionData = [
    {
      title: "Nuestra Misión",
      content:
        "Somos una empresa comprometida con la excelencia, enfocados en brindar soluciones innovadoras que generen un impacto positivo en nuestros clientes y en la comunidad.",
    },
    {
      title: "Nuestra Visión",
      content:
        "Ser reconocidos como líderes en nuestro sector, distinguidos por nuestra capacidad de innovación y por las relaciones duraderas que construimos con nuestros clientes.",
    },
    {
      title: "Nuestros Valores",
      content:
        "Integridad, pasión por lo que hacemos, trabajo en equipo y mejora continua son los principios que guían cada una de nuestras acciones.",
    },
    {
      title: "Qué Nos Diferencia",
      content:
        "Nuestro enfoque personalizado, la calidad de nuestros servicios y nuestro compromiso con resultados medibles nos distingue en el mercado.",
    },
  ];

  const toggleMainAccordion = () => {
    setIsMainOpen(!isMainOpen);
    if (!isMainOpen) {
      setActiveIndex(null);
    }
  };

  const toggleSubAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-full mx-auto mt-12 px-4">
      <div className="rounded-[10px] overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
        <button
          className={`px-8 py-6 cursor-pointer font-semibold text-xl flex justify-between items-center transition-all duration-300 ${darkModeTitle} ${darkModeTitleBg}`}
          onClick={toggleMainAccordion}
          aria-expanded={isMainOpen}
        >
          ¿Querés saber más de nosotros?
        </button>

        {isMainOpen && (
          <div className="bg-[#f7fafc] w-full">
            {accordionData.map((item, index) => (
              <div
                key={index}
                className={`border-b border-[#e2e8f0] last:border-b-0`}
              >
                <button
                  className={`w-full px-8 py-5 text-left text-[1.1rem] font-medium text-[#2d3748] flex justify-between items-center cursor-pointer transition-colors duration-200 ${darkModeTitleBg} ${darkModeTitle} `}
                  onClick={() => toggleSubAccordion(index)}
                  aria-expanded={activeIndex === index}
                >
                  {item.title}
                  <span className="text-[1.3rem] font-bold">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </button>
                {activeIndex === index && (
                  <div className={`px-8 py-6 ${darkModeCotentBg} ${darkModeContent} p-1 leading-relaxed border-l-4 border-green-600`}>
                    <p className="m-0 text-justify whitespace-normal break-words">
                      {item.content}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
