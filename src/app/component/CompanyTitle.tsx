import { FC } from "react";

interface CompanyTitleProps {
  name: string;
  url: string;
  imageUrl: string;
  imageAlt: string;
  color: string;
  present?: boolean;
  className?: string
}

export const CompanyTitle: FC<CompanyTitleProps> = ({
  name,
  url,
  imageUrl,
  imageAlt,
  color,
  present,
  className
}) => {
  return (
    <a href={url} target="_blank" className={className}>
      <div className="inline-flex gap-[10px] items-center mb-[20px]" title={present ? "I'm working here" : "I'm not working here anymore"}>
        <img
          style={{ borderColor: color }}
          className="lg:h-[40px] lg:w-[40px] h-[30px] w-[30px] border-[2px] bg-white rounded-full object-contain shadow-sm p-[4px]"
          src={imageUrl}
          alt={imageAlt}
        />

        <h3 className="text-[20px] lg:text-[25px] font-medium" style={{ color: color }}>
          {name}
        </h3>
        {present && <div className="w-[10px] h-[10px] rounded-full bg-green-500"></div>}
      </div>
    </a>
  );
};
