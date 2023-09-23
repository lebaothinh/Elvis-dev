import { FC } from "react";
import { Project } from "../constant/common";
import { Skill } from "./Skill";

interface CompanyProps {
  data: Project;
}

export const Company: FC<CompanyProps> = ({ data }) => {
  return (
    <a
      href={data.link}
      target="_blank"
      className="hover:transition-all basis-[100%] lg:basis-[calc(calc(100%_/_2)_-_10px)] xl:basis-[calc(calc(100%_/_3)_-_calc(80px_/_3))] group"
      title={data.private ? "This project is private" : ""}
    >
      <div
        className="relative h-[300px] text-white bg-cover bg-no-repeat lg:h-[350px] bg-white rounded-2xl shadow-md p-6 bg-blue/50 overflow-hidden"
        style={{
          backgroundColor: data.color,
        }}
      >
        <h2 className="text-[24px] leading-[1] font-medium mb-[12px] mr-6">
          {data.name}
        </h2>
        <p>{data.description}</p>
        <img
          src={data.bgImageUrl}
          alt={data.bgImageAlt}
          className="mx-auto mt-[10px] rounded-lg"
        />

        {data.private && (
          <div className="text-white absolute top-6 right-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}
      </div>
      <div className="bg-white m-0 shadow-sm rounded-b-2xl overflow-hidden max-h-0 px-6 py-0 transition-all duration-1000 group-hover:duration-1000 group-hover:-mt-3 group-hover:p-6 group-hover:max-h-[500px]">
        <p className="mb-2">
          <span className="font-medium">Responsibities:</span>{" "}
          {data.responsibities}
        </p>
        <p className="mb-2">
          <span className="font-medium">Main skills:</span>{" "}
          <span className="flex flex-wrap gap-1">{data.skills.map((skill) => (
            <Skill key={skill} id={skill} />
          ))}</span>
        </p>
        <p>
          <span className="font-medium">Time:</span>{" "}
          {data.from.toLocaleDateString()} - {data.to.toLocaleDateString()}
        </p>
      </div>
    </a>
  );
};
