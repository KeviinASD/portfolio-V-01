"use client";
import {Mulish} from "next/font/google";
import Home from "@/src/ui/Home";

const mulish = Mulish({
  style: "normal",
  weight: ["400", "600", "700", "800", "900", "1000"],
  subsets: ["latin"],
});

function Homee() {
  return (
    <section className={`pl-20 home ${mulish.className}`}>
      <Home />
    </section>
  )
}

export default Homee;
