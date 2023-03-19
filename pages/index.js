import Head from "next/head";
import React, { useState } from "react";
import Home from "../components/Home/Home";
import Treatment from '../components/Treatment/Treatment'
import Explain from "../components/Explain/Explain";
import Footer from "../components/Footer/Footer";
import Animator from "../components/UI/Animator";
import { scroller } from "react-scroll";
import About from "../components/About/About";
const style = {
  wrapper: "",
};
export default function Main() {
  const onScroll = (value) => {
    if (typeof window !== "undefined") {
      // browser code
      scroller.scrollTo(`${value}`, {
        duration: 900,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }
  };
  return (
    <Animator>
      <div className={style.container}>
        <Head>
          <title> Powder Brows- Perfect Eyes Academy</title>
          <meta
            name="description"
            content="Powder Brows- Perfect Eyes Academy"
          />
          <link rel="icon" href="/logo.png" />
        </Head>
        <div className="contact">
          <Home />
        </div>
        <div className="aboutus">
          {/* <About onScroll={onScroll} /> */}
        </div>
        <div className="services">
          {/* <Treatment /> */}
        </div>
        <div className="why">
          {/* <Explain /> */}
        </div>
        {/* <Footer onScroll={onScroll} /> */}
      </div>
    </Animator>
  );
}
export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
