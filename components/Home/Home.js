import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import useWindowSize from "../../hooks/useWindowSize";
import { AiOutlineArrowRight } from "react-icons/ai";
import styled from "styled-components";
import Animator from "../UI/Animator";
import HomeForm from "./HomeForm";
const style = {
  wrapper: "h-[100vh] w-[100vw] flex flex-col",
  heading:
    "text-4xl md:text-4xl lg:text-5xl text-white  my-2 md:my-3 w-[100%] md:w-[80%] text-center md:text-left font-semibold",
  para: "tracking-normal text-white text-md md:text-md my-3 md:my-6 text-center md:text-left mx-auto md:mx-0 w-[100%] md:w-[65%] font1",
  para1:
    "tracking-normal text-white text-md md:text-md my-2 md:my-1 text-center md:text-left mx-auto md:mx-0 w-[100%] md:w-[65%] font1",
  btn: " px-8 md:px-6 py-3 md:py-4 transition duration-[200ms] max-w-fit mx-auto md:mx-0 ",
  arrow: `text-xl`,
  btnContainer:
    "cursor-pointer hover:opacity-[0.9]  mx-auto md:mx-0 my-2 flex items-center justify-start bg-white   text-gray-900  px-4",
  mainContent:
    "w-[100%] md:w-[65%] h-[80%] flex flex-col items-start justify-center  mx-auto font1 my-16 md:my-7",
  input:
    "mb-3 md:mb-4 border-b-2 border-stone-500 w-[100%] ring-none outline-none",
  label: "mt-3 md:mt-4",
};

const Home = (props) => {
  const { width } = useWindowSize();
  const FeaturedBackground1 = styled.div`
    background: radial-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url(${(width < 550 && "/mobile.png") ||
      (width > 550 && width < 1000 && "/homebg.jpeg") ||
      (width > 1000 && "/homebg.jpeg")});
    background-attachment: auto;
    height: ${width < 550 ? "190vh" : "110vh"};
    width: 100vw;
  `;
  const sendEmail = (e) => {
    e.preventDefault();
  };
  return (
    <Animator className={style.wrapper} style={{ fontFamily: "Poppins,serif" }}>
      <FeaturedBackground1 className="flex flex-col items-center">
        <Navbar />
        <div className="flex items-center sm:items-start justify-center w-[95%] md:w-[80%] flex-col md:flex-row py-12 md:py-4 lg:py-4 md:py-4">
          <div className={style.mainContent}>
            <h2 className={style.heading}>
              Ombré powderbrows geeft een strakke en volle look.{" "}
              {/* <span className="text-white">Mintstudio</span> */}
            </h2>
            <p className={style.para}>
            Heb jij altijd al gedroomd van perfecte wenkbrauwen die er natuurlijk uitzien en lang meegaan? Bij Perfect Eyes hebben we de oplossing voor jou! Onze getalenteerde permanente make-up artiesten gebruiken een semi-permanente make-up machine om hele fijne spikkels aan te brengen in de eerste huidlaag.
            </p>
            <p className={style.para1}>
            Met onze ombré powderbrows behandeling bereiken we een prachtig resultaat dat laag voor laag wordt opgebouwd. En het beste van alles? Het resultaat blijft tot wel twee jaar zitten! Onze behandeling heeft een herstelperiode van 6 tot 8 weken, waarin de wenkbrauwen steeds duidelijker en natuurlijker zichtbaar worden
            </p>
            <p className={style.para1}>
            Maak nu een afspraak bij Perfect Eyes en ervaar zelf het gemak en de schoonheid van permanente make-up! Onze passie voor permanente make-up en onze toewijding om elke klant zorgvuldig te behandelen, zorgt voor verbluffende resultaten. Wacht niet langer en boek nu jouw ombré powderbrows behandeling.
            </p>
            {/* <div
              className={style.btnContainer}
              onClick={() => onScroll("investments")}
            >
              <button className={style.btn}>BEGIN</button>
              <AiOutlineArrowRight className={style.arrow} />
            </div> */}
          </div>
          {/* adding the form */}
          <div className="color w-[95%] md:w-[60%] lg:w-[45%] bg-white rounded-md px-4 md:px-8 py-12 md:py-6 lg:py-12 flex flex-col ">
            <h2 className="font1 font-semibold text-center text-2xl md:text-2xl">
              Ontdek de beste versie van uzelf. Wij bellen u
              <span className="text-white"> terug! </span>{" "}
            </h2>
            <p className="text-white text-xs my-3 md:my-3 text-center">
              Laat ons u helpen om de eerste stap te zetten naar de beste versie
              van uzelf. Vul ons terugbelformulier in en ontdek hoe we u kunnen
              ondersteunen op uw reis naar persoonlijke groei en welzijn.
            </p>
            <HomeForm />
          </div>
        </div>
      </FeaturedBackground1>
    </Animator>
  );
};
export default Home;
