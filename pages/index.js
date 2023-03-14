import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Box, Container } from "@mui/material";
// import anime from "animejs/lib/anime.es.js";
import Navbar from "@/components/Navbar";

import HomeHero from "@/components/HomeHero.js";
import React, { useRef, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });
const anime = require("animejs");
function Home() {
  // const divRef = useRef(null);

  // const div = divRef.current;

  // anime({
  //   targets: div,
  //   opacity: [0.8, 1],
  //   rotate: "360deg",
  //   duration: 2500,
  //   autoplay: true,
  //   // easing: "cubicBezier(.5, .05, .1, .3)",
  //   easing: "linear",
  //   loop: true,
  //   direction: "alternate",
  // });

  return (
    <>
      <Box
        sx={{
          // border: "2px solid red",

          position: "relative",
        }}
      >
        <Container
          maxWidth="lg"
          // sx={{ border: "2px solid blue", height: "100vh" }}
        >
          <Navbar />
          <HomeHero />

          <div
            // ref={divRef}
            className=" h-64 bg-emerald rounded-xl w-56 absolute top-20 right-0 -mr-24 blur-custom  opacity-100  "
          ></div>
          <div className=" h-64 bg-neon rounded-xl w-56 absolute bottom-0 left-0 -mr-24 blur-custom  opacity-100  "></div>

          {/* <div className=" h-full   w-blur rounded-xl absolute top-0 right-0  backdrop-blur-custom   "></div> */}
        </Container>
      </Box>
    </>
  );
}

export default Home;
