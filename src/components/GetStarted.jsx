import React from "react";
import styles from "../styles";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div
    className={`w-[140px] h-[140px] ${styles.flexCenter} rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
  >
    <div
      className={`flex-col bg-primary w-[100%] h-[100%] ${styles.flexCenter} rounded-full`}
    >
      <div className={`flex-row ${styles.flexStart}`}>
        <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
          <span className="text-gradient">Get</span>
        </p>{" "}
        <img
          src={arrowUp}
          alt="arrow up"
          className="w-[23px] h-[23px] object-contain"
        />
      </div>{" "}
      <p className="font-poppins font-medium text-[18px] leading-[23px]">
        <span className="text-gradient">Started</span>
      </p>
    </div>
  </div>
);

export default GetStarted;
