"use client";

import { useEffect } from "react";
import Typed from "typed.js";
import { getYearsOfWorkingBySkill } from "../constant/common";

export default function Animation() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("show-ani");
        } else {
          entry.target.classList.remove("show-ani");
        }
      });
    });

    const scrollUpEl = document.querySelectorAll(".hidden-ani");
    const scrollUpFromLeftEl = document.querySelectorAll(
      ".hidden-ani-from-left"
    );
    const scrollUpFromRightEl = document.querySelectorAll(
      ".hidden-ani-from-right"
    );
    const scrollUpFromBotEl = document.querySelectorAll(".hidden-ani-from-bot");

    scrollUpEl.forEach((el) => {
      observer.observe(el);
    });
    scrollUpFromLeftEl.forEach((el) => {
      observer.observe(el);
    });
    scrollUpFromRightEl.forEach((el) => {
      observer.observe(el);
    });
    scrollUpFromBotEl.forEach((el) => {
      observer.observe(el);
    });

    const isMoblie = window.innerWidth < 1024;
    let typed1: any,
      typed2: any,
      typed31: any,
      typed32: any,
      typed41: any,
      typed42: any,
      typed5: any;

    if (!isMoblie) {
      typed1 = new Typed("#intro-1", {
        strings: [" Hey There,<br /> I&apos;m Elvis"],
        typeSpeed: 20,
        showCursor: false,
        startDelay: 0,
      });
      typed2 = new Typed("#intro-2", {
        strings: ["lebaothinh.krb@gmail.com"],
        startDelay: 1000,
        typeSpeed: 15,
        showCursor: false,
      });
      typed31 = new Typed("#intro-3-1", {
        strings: [
          getYearsOfWorkingBySkill(
            "ReactJs",
            "NextJs",
            "VueJs",
            "NuxtJs",
            "Angular4",
            "Angular8"
          ).toFixed(1).toString().padStart(2, '0')
        ],
        startDelay: 1800,
        typeSpeed: 50,
        showCursor: false,
      });
      typed32 = new Typed("#intro-3-2", {
        strings: ["year<br />experience"],
        startDelay: 2200,
        typeSpeed: 20,
        showCursor: false,
      });
      typed41 = new Typed("#intro-4-1", {
        strings: ["Making the web look good and work even better"],
        startDelay: 2800,
        typeSpeed: 15,
        showCursor: false,
      });
      typed42 = new Typed("#intro-4-2", {
        strings: ["And i love what i do."],
        startDelay: 4000,
        typeSpeed: 20,
        showCursor: false,
      });
      typed5 = new Typed("#intro-5", {
        strings: ["Find me on"],
        startDelay: 4800,
        typeSpeed: 20,
        showCursor: false,
      });
    }

    if (isMoblie) {
      typed1 = new Typed("#intro-1", {
        strings: [" Hey There,<br /> I&apos;m Elvis"],
        typeSpeed: 20,
        showCursor: false,
        startDelay: 0,
      });
      typed41 = new Typed("#intro-4-1", {
        strings: ["Making the web look good and work even better"],
        startDelay: 1000,
        typeSpeed: 15,
        showCursor: false,
      });
      typed42 = new Typed("#intro-4-2", {
        strings: ["And i love what i do."],
        startDelay: 2300,
        typeSpeed: 20,
        showCursor: false,
      });
      typed31 = new Typed("#intro-3-1", {
        strings: ["05"],
        startDelay: 3200,
        typeSpeed: 50,
        showCursor: false,
      });
      typed32 = new Typed("#intro-3-2", {
        strings: ["year<br />experience"],
        startDelay: 3400,
        typeSpeed: 20,
        showCursor: false,
      });
    }

    return () => {
      if (!isMoblie) {
        typed1.destroy();
        typed2.destroy();
        typed31.destroy();
        typed32.destroy();
        typed41.destroy();
        typed42.destroy();
        typed5.destroy();
      } else {
        typed1.destroy();
        typed31.destroy();
        typed32.destroy();
        typed41.destroy();
        typed42.destroy();
      }
    };
  }, []);
  return null;
}
