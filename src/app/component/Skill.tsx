import { Skill as SkillType } from "../constant/common";

export const Skill = ({ id }: { id: SkillType }) => {
  return <span className="bg-slate-200 p-1 rounded-md">{id}</span>;
};
