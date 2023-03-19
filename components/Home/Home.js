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
      url(${(width < 500 && "/homebg.jpeg") ||
      (width > 500 && width < 1000 && "/homebg.jpeg") ||
      (width > 1000 && "/homebg.jpeg")});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
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
              Doormiddel van een semi-permanente make-up machine worden er hele
              fijne spikkels gezet in de eerste huidlaag. Laag voor laag wordt
              de intensiviteit naar wens opgebouwd.
            </p>
            <p className={style.para1}>
              Een ombré powderbrows behandeling heeft een herstel periode van 6
              to 8 weken. Na de eerste behandeling zullen de wenkbrauwen in de
              eerste 10 dagen lichtelijk vervellen. Na de eerste 10 dagen zal
              het resultaat licht van kleur zijn doordat de eerste huidlaag aan
              het herstellen is. Veel klanten merken dan ook dat de wenkbrauwen
              steeds duidelijker maar tegelijkertijd ook natuurlijker zichtbaar
              wordt tijdens een herstel pierode.
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
          <div className="bg-[#c6b28e] w-[95%] md:w-[60%] lg:w-[45 %] bg-white rounded-md px-4 md:px-8 py-12 md:py-6 lg:py-12 flex flex-col ">
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
