import { AnchorHTMLAttributes, DetailedHTMLProps, FC } from "react";

export const NativeLink: FC<
  DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
> = ({ href, children, ...props }) => {
  return (
    <a href={(process.env.NEXT_PUBLIC_ROOT_PATH ?? "") + href} {...props}>
      {children}
    </a>
  );
};
