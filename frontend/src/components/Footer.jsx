import { useContext } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaGooglePlay, FaApple } from "react-icons/fa";
import { ThemeContext } from "@/contexts/ThemeContext";


const Footer = () => {

    const { darkMode } = useContext(ThemeContext);
    const darkModeSpan = darkMode ? "from-green-900 to-violet-600" : "from-green-500 to-violet-200";
    const darkModeCol1 = darkMode ? "from-violet-500 to-violet-700" : "to-violet-500 from-violet-700";
    const darkModeH4 = darkMode ? "from-green-800 to-green-800 font-bold" : "to-green-600 font-bold from-green-600";
    const darkModeBg = darkMode ? "bg-purple-100" : "bg-zinc-900";
    const darkModeLi = darkMode ? "text-green-700 hover:text-violet-600" : "text-violet-400 hover:text-green-600";
    const darkModeCopy = darkMode ? "from-green-600 to-green-900" : "from-green-300 to-green-700";



  return (
    <footer className={`${darkModeBg}`}>
      {/* Sección superior */}
      <div className="max-w-full mx-auto px-6 py-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Columna 1 */}
        <div className="flex flex-col items-center text-center md:items-center md:text-left">
          <img src="/img/logo_proyect.png" alt="Logo" className="size-22 mb-3" />
          <div className={`text-transparent bg-clip-text bg-gradient-to-l ${darkModeCol1} font-bold text-3xl`}>
            Origin<span className="ml-1">Dev</span>
          </div>
          <div className="flex gap-4 mt-4">
            <FaFacebook className="text-3xl transition-colors duration-300 hover:text-blue-500 cursor-pointer" />
            <FaInstagram className="text-3xl transition-colors duration-300 hover:text-pink-500 cursor-pointer" />
            <FaLinkedin className="text-3xl transition-colors duration-300 hover:text-blue-700 cursor-pointer" />
            <FaTwitter className="text-3xl transition-colors duration-300 hover:text-sky-400 cursor-pointer" />
          </div>
        </div>

        {/* Columna 2 */}
        <div>
          <h4 className={`text-transparent bg-clip-text bg-gradient-to-l ${darkModeH4} font-bold text-xl mb-4`}>Legal</h4>
          <ul className="space-y-2 text-[15px] font-semibold">
            {[
              "Privacidad",
              "Términos y Condiciones",
              "Normas de la Comunidad",
              "Política de Cookies",
              "Propiedad Intelectual",
            ].map((item) => (
              <li key={item} className={`${darkModeLi} cursor-pointer transition-colors duration-300`}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Columna 3 */}
        <div className="flex flex-col items-start sm:items-center md:items-start text-left sm:text-center md:text-left">
          <h4 className={`text-transparent bg-clip-text bg-gradient-to-l ${darkModeH4} font-bold text-xl mb-4`}>Empleos</h4>
          <ul className="space-y-2 text-[15px] font-semibold">
            {[
              "Portal de Empleos",
              "Demandas de Devs",
              "Ofertas de Recluters",
              "Mis Postulaciones",
              "Oportunidades en tu Radar",
              "Eventos y Ferias Laborales",
            ].map((item) => (
              <li key={item} className={`${darkModeLi} cursor-pointer transition-colors duration-300`}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Columna 4 */}
        <div>
          <h4 className={`text-transparent bg-clip-text bg-gradient-to-l ${darkModeH4} font-bold text-xl mb-4`}>Herramientas</h4>
          <ul className="space-y-2 text-[15px] font-semibold">
            {[
              "Cargar CV o Portfolio",
              "Recursos de formación",
              "Simulador de Entrevistas",
              "Calculadora de Stack ideal",
              "Analizador de perfil",
              "Tips para destacar en el mundo tech",
            ].map((item) => (
              <li key={item} className={`${darkModeLi} cursor-pointer transition-colors duration-300`}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <hr className="border-gray-700 mb-1" />

      {/* Segunda sección */}
      <div className="flex flex-col sm:flex-row justify-around p-5 sm:p-6 max-w-full text-justify text-[14px] gap-4">
        <div>
          <FaGooglePlay className="w-6 h-8 my-2 transition-colors duration-300 hover:text-green-500 cursor-pointer"/>
          <FaApple className="w-6 h-8 my-4 transition-colors duration-300 hover:text-violet-500 cursor-pointer"/>
          <span className="flex text-justify wy-2">
            npm install app    
          </span>        
          
        </div>
        <div>
          <span className={`inline-block text-transparent bg-clip-text bg-gradient-to-b ${darkModeSpan} p-1`}>
            ¿Sos programador o reclutador? Esta app es para vos. Si estás
            buscando tu próximo desafío profesional, querés sumar talento tech a
            tu equipo, o simplemente explorar oportunidades en el mundo del
            desarrollo, esta plataforma es tu punto de partida. Con cientos de
            matches laborales concretados, creamos un espacio pensado para
            conectar personas con propósito. 
          </span>
          <span className={`inline-block text-transparent bg-clip-text bg-gradient-to-b ${darkModeSpan} p-1`}>
            Sabemos que hoy el trabajo también
            se construye online, y que la primera impresión importa tanto como
            el código limpio. En esta app, diseñamos una experiencia ágil,
            inclusiva y enfocada 100% en el ámbito laboral tech, donde podés
            encontrar desde tu próxima pasantía hasta el developer senior que
            encaje perfecto en tu equipo. 
          </span>
          <div className="mt-1">
            <span className={`inline-block text-transparent bg-clip-text bg-gradient-to-b ${darkModeSpan} p-1 mt-1.5`}>
              No importa si estás dando tus primeros
              pasos o si llevás años en la industria: acá vas a encontrar personas
              que entienden tu lenguaje (sí, ese que tiene variables y deadlines).
              ¿Querés sumar experiencia? ¿Buscar nuevos talentos? ¿Explorar sin
              compromiso? Este es tu lugar. Esta app no es solo un tablero de
              ofertas: es una comunidad dinámica donde se crean conexiones,
              proyectos y nuevas oportunidades todos los días.
            </span>
          </div>
        </div>
      </div>

      <hr className="border-gray-700 mt-1" />

      {/* Pie final */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[13px]">
        <p className={`text-transparent bg-clip-text bg-gradient-to-b ${darkModeCopy} font-semibold text-center md:text-left`}>
          © {new Date().getFullYear()} OriginDev. All rights reserved.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { href: "/terms", text: "Términos y condiciones" },
            { href: "/privacy", text: "Privacidad" },
            { href: "/security", text: "Seguridad" },
            { href: "/cookie", text: "Declaración de Cookies" },
          ].map(({ href, text }) => (
            <a
              key={text}
              href={href}
              className={`${darkModeLi} transition-colors duration-300`}
            >
              {text}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
