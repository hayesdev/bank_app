import React from "react";
import { discount, robot } from "../assets";
import styles from "../styles";
import GetStarted from "./GetStarted";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">20%</span> Discount For{" "}
          <span className="text-white">1 Month</span> Account
        </p>
      </div>
      <div className="flex justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading[100px] leading-[75px]">
          The Next <br className="sms:block hidden" />
          <span className="text-gradient">Generation</span>{" "}
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>
      <h2 className="w-full font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading[100px] leading-[75px]">
        Payment Method.
      </h2>
      <p className={`max-w-[470px] mt-5 ${styles.paragraph}`}>
        Our team of experts uses a methodology to identify the credit cards most
        likely to fit your needs. We examine annual percentage rates, annual
        fees.
      </p>
    </div>
    <div className={`flex flex-1 ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img
        src={robot}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />
      <div className="w-[40%] h-[35%] z-[0] absolute top-0 pink__gradient" />
      <div className="w-[80%] h-[80%] z-[1] absolute bottom-40 white__gradient rounded-full" />
      <div className="w-[50%] h-[50%] z-[0] absolute right-20 bottom-20 blue__gradient" />
    </div>
    <div className={`ss:hidden ${styles.flexCenter}`}></div>
  </section>
);

export default Hero;
