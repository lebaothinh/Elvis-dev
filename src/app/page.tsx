import {
  CodeBracketIcon,
  ComputerDesktopIcon,
  HandRaisedIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import Animation from "./component/Animation";
import { Company } from "./component/Company";
import { CompanyTitle } from "./component/CompanyTitle";
import { COMPANIES, getYearsOfWorkingBySkill } from "./constant/common";

export default function Home() {
  return (
    <>
      <div className="pt-[30px] lg:pt-[45px] flex flex-col justify-between h-[calc(100vh_-_115px)] lg:h-[calc(100vh_-_123px)] px-[20px] lg:px-[50px] xl:px-[77px] bg-me bg-no-repeat bg-[center_bottom] bg-contain">
        <div className="flex justify-between gap-[15px] lg:items-center flex-col lg:flex-row lg:h-[120px]">
          <h1
            className="lg:text-6xl text-5xl leading-[1.1] font-bold text-yankees-blue"
            id="intro-1"
          ></h1>
          <h2 className="text-base">
            <span id="intro-4-1">
              {/* Making the web look good and work even better */}
            </span>
            <br />
            <span id="intro-4-2">{/* And i love what i do. */}</span>
          </h2>
        </div>
        <a href="mailto:lebaothinh.krb@gmail.com" className="inline w-fit">
          <h2
            className="hidden lg:inline font-bold text-base text-chinese-orange"
            id="intro-2"
          >
            {/* lebaothinh.krb@gmail.com */}
          </h2>
        </a>
        <div className="flex justify-between items-center h-[60px] lg:h-[100px] xl:h-[255px] text-yankees-blue bg-white lg:bg-transparent rounded-full px-[20px] mb-[10px] lg:mb-[unset]">
          <div className="flex items-center gap-[10px]">
            <h3
              className="text-[30px] lg:text-[50px] leading-[1] font-bold "
              id="intro-3-1"
            >
              {/* 05 */}
            </h3>
            <h3
              className="uppercase text-[11px] lg:text-[17px] leading-[1.2]"
              id="intro-3-2"
            >
              {/* year
              <br />
              experience */}
            </h3>
          </div>
          <h2 className="flex items-center gap-[10px] lg:gap-[20px]">
            <span className="hidden lg:inline-flex" id="intro-5">
              {/* Find me on */}
            </span>
            <a
              target="_blank"
              title="See my profile"
              className="jello-horizontal hidden-ani"
              href="https://www.linkedin.com/in/bao-thinh-le/"
            >
              <svg
                className="w-[35px] h-[35px] lg:w-[40px] lg:h-[40px] xl:w-[48px] xl:h-[48px]"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="48"
                height="48"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#0288D1"
                  d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                ></path>
                <path
                  fill="#FFF"
                  d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                ></path>
              </svg>
            </a>
            <a
              target="_blank"
              title="Call me on Skype"
              href="skype:live:38df09da38c09772?userinfo"
              className="jello-horizontal hidden-ani"
            >
              <svg
                className="w-[35px] h-[35px] lg:w-[40px] lg:h-[40px] xl:w-[48px] xl:h-[48px]"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="48"
                height="48"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#03a9f4"
                  d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"
                ></path>
                <path
                  fill="#03a9f4"
                  d="M33.5 22A11.5 11.5 0 1 0 33.5 45 11.5 11.5 0 1 0 33.5 22zM14.5 3A11.5 11.5 0 1 0 14.5 26 11.5 11.5 0 1 0 14.5 3z"
                ></path>
                <path
                  fill="#fff"
                  d="M24.602,36C18,36,15,32.699,15,30.199C15,28.898,15.898,28,17.199,28c2.801,0,2.102,4.102,7.402,4.102c2.699,0,4.199-1.5,4.199-3c0-0.902-0.402-1.902-2.199-2.402l-5.902-1.5C16,24,15.102,21.398,15.102,18.898c0-5.098,4.699-6.898,9.098-6.898C28.301,12,33,14.199,33,17.199c0,1.301-1,2.102-2.301,2.102c-2.398,0-2-3.402-6.801-3.402c-2.398,0-3.797,1.102-3.797,2.703c0,1.598,1.898,2.098,3.598,2.5l4.402,1C32.898,23.199,34,26,34,28.699C33.898,32.898,30.898,36,24.602,36z"
                ></path>
              </svg>
            </a>
          </h2>
        </div>
      </div>

      <div
        id="work-section"
        className="lg:snap-start bg-white px-[20px] lg:px-[50px] lg:h-screen xl:p-[100px] flex flex-col lg:flex-row lg:gap-[50px] xl:gap-[60px] items-center"
      >
        <div className="snap-start lg:snap-align-none lg:flex-[1] flex flex-col gap-[30px] lg:gap-[20px] xl:gap-[13px] flex-[100vh] justify-center ">
          <div className="hidden-ani-from-left w-full border border-yankees-blue/5 shadow-[rgba(0,_0,_0,_0.04)_0px_3px_5px] hover:shadow-[rgba(149,_157,_165,_0.2)_0px_8px_24px] p-[20px] lg:p-[20px_30px] xl:p-[26px_40px] bg-white rounded-lg flex gap-[35px] items-center">
            <div className="bg-myrtle-green xl:w-[70px] xl:h-[70px] lg:w-[60px] lg:h-[60px] w-[50px] h-[50px] flex justify-center items-center rounded-full shrink-0">
              <CodeBracketIcon className="text-white xl:w-[25px] xl:h-[25px] lg:h-[23px] lg:w-[23px] w-[20px] h-[20px]" />
            </div>
            <div className="flex flex-col justify-center gap-[8px]">
              <p className="lg:text-[23px] xl:text-[25px] text-[20px] leading-[1.1] font-bold">
                Main frameworks
              </p>
              <p className="xl:text-base lg:text-[15px] text-[14px] leading-[0.9] text-yankees-blue/80">
                ReactJs, NextJs:{" "}
                {getYearsOfWorkingBySkill("ReactJs", "NextJs").toFixed(1)} years
              </p>
              <p className="xl:text-base lg:text-[15px] text-[14px] leading-[0.9] text-yankees-blue/80">
                VueJs, NuxtJs:{" "}
                {getYearsOfWorkingBySkill("VueJs", "NuxtJs").toFixed(1)} years
              </p>
              <p className="xl:text-base lg:text-[15px] text-[14px] leading-[0.9] text-yankees-blue/80">
                Angular 4+:{" "}
                {getYearsOfWorkingBySkill("Angular4", "Angular8").toFixed(1)}{" "}
                years
              </p>
            </div>
          </div>

          <div className="hidden-ani-from-left w-full border border-yankees-blue/5 shadow-[rgba(0,_0,_0,_0.04)_0px_3px_5px] hover:shadow-[rgba(149,_157,_165,_0.2)_0px_8px_24px] p-[20px] lg:p-[20px_30px] xl:p-[26px_40px] bg-white rounded-lg flex gap-[35px] items-center">
            <div className="bg-maize xl:w-[70px] shrink-0 xl:h-[70px] lg:w-[60px] lg:h-[60px] w-[50px] h-[50px] flex justify-center items-center rounded-full">
              <HandRaisedIcon className="text-white xl:w-[25px] xl:h-[25px] lg:h-[23px] lg:w-[23px] w-[20px] h-[20px]" />
            </div>
            <div className="flex flex-col justify-center gap-[8px]">
              <p className="text-[20px] lg:text-[23px] xl:text-[25px] font-bold">
                Skills
              </p>
              <p className="text-[14px] xl:text-base lg:text-[15px]  text-yankees-blue/80">
                HTML, CSS, Javascript, Typescript, SCSS, Responsive Web, Web
                Performance, Accessibility, SEO, Google Analytics, Webpack,
                I18n, Git, Design, Docker, Google Could, AWS, Writing unit test,
                Drawing chart SVG, D3js, Setup project...
              </p>
            </div>
          </div>

          <div className="hidden-ani-from-left w-full border border-yankees-blue/5 shadow-[rgba(0,_0,_0,_0.04)_0px_3px_5px] hover:shadow-[rgba(149,_157,_165,_0.2)_0px_8px_24px] p-[20px] lg:p-[20px_30px] xl:p-[26px_40px] bg-white rounded-lg flex gap-[35px] items-center">
            <div className="bg-chinese-orange xl:w-[70px] xl:h-[70px] lg:w-[60px] lg:h-[60px] w-[50px] h-[50px] flex justify-center items-center rounded-full shrink-0">
              <UserIcon className="text-white xl:w-[25px] xl:h-[25px] lg:h-[23px] lg:w-[23px] w-[20px] h-[20px]" />
            </div>
            <div className="flex flex-col justify-center gap-[8px]">
              <p className="lg:text-[23px] xl:text-[25px] text-[20px] font-bold">
                Responsibities
              </p>
              <p className="xl:text-base lg:text-[15px] text-[14px] text-yankees-blue/80">
                80% coding, 20% management
              </p>
            </div>
          </div>
        </div>

        <div className="snap-start lg:snap-align-none lg:flex-[1] flex flex-col gap-[30px] py-[20px] xl:gap-[50px] lg:h-screen flex-[100vh] justify-center">
          <h1 className="hidden-ani-from-right text-[30px] text-center lg:text-left lg:text-[45px] xl:text-[50px] leading-[1] text-yankees-blue font-bold">
            What do i help?
          </h1>
          <p className="hidden-ani-from-right leading-[32px] text-base">
            I specialize in React, VueJS, Angular, and I&apos;m also fascinated
            about creating design and make it real through clean, maintainable,
            and performant code.
          </p>
          <p className="hidden-ani-from-right leading-[32px] text-base">
            I can work independently, I’m self learner, patient and thoughtful.
            I alway find a way to make products better and better user
            experience.
          </p>
          <div className="hidden-ani-from-right flex flex-wrap gap-[10px] lg:gap-[30px] text-center">
            <div className="flex-[calc(50%_-_5px)] lg:flex-[calc(50%_-_15px)] xl:flex-[unset]">
              <h1 className="text-[40px] leading-[1.2] text-yankees-blue font-bold">
                ⚽
              </h1>
              <p>Football (Soccer)</p>
            </div>
            <div className="flex-[calc(50%_-_5px)]  lg:flex-[calc(50%_-_15px)] xl:flex-[unset]">
              <h1 className="text-[40px] leading-[1.2] text-yankees-blue font-bold">
                🎸
              </h1>
              <p>Playing Guitar</p>
            </div>
            <div className="flex-[calc(50%_-_5px)]  lg:flex-[calc(50%_-_15px)] xl:flex-[unset]">
              <h1 className="text-[40px] leading-[1.2] text-yankees-blue font-bold">
                🏸
              </h1>
              <p>Badminton</p>
            </div>
            <div className="flex-[calc(50%_-_5px)]  lg:flex-[calc(50%_-_15px)] xl:flex-[unset]">
              <h1 className="text-[40px] leading-[1.2] text-yankees-blue font-bold">
                🌊
              </h1>
              <p>Swimming</p>
            </div>
          </div>
        </div>
      </div>

      <div
        id="experience-section"
        className="bg-[#F8F7F1] p-[30px_20px] lg:p-[50px] xl:p-[77px] snap-start"
      >
        <h2 className="text-[30px] lg:mb-[40px] lg:text-[45px] leading-[1] mb-[30px] xl:mb-[50px] font-bold text-yankees-blue text-center  hidden-ani-from-bot">
          My Work Experience
        </h2>

        {COMPANIES.reverse().map((company, index) => {
          return (
            <div className="hidden-ani-from-bot" key={index}>
              <CompanyTitle
                name={company.name}
                imageUrl={company.imageUrl}
                imageAlt={company.imageAlt}
                color={company.color}
                url={company.url}
                present={index === 0}
              />
              <div className="flex flex-wrap gap-[15px] lg:gap-[20px] xl:gap-[40px] mb-[40px]">
                {company.projects.reverse().map((project) => (
                  <Company key={project.id} data={project} />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="pb-[20px]">
        <Link
          className="mx-auto text-base py-2 px-4 block w-fit rounded-full border-2 text-maize border-maize"
          href="/posts"
        >
          View my posts
        </Link>
      </div>
      <Animation />
    </>
  );
}
