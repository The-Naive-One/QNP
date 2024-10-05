// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group12IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group12Icon(props: Group12IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M1.171 1.34v1.233h26.097V1.34H1.17zM.187 0C.084 0 0 .096 0 .214V3.7c0 .118.084.214.187.214h28.065c.103 0 .187-.096.187-.214V.214c0-.118-.084-.214-.187-.214H.187zM9.98 19.19h8.456v8.306L9.98 32V19.19zm1.17 1.34h6.115v6.112l-6.114 3.256v-9.367z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M2.999 2.573H.968l1.017 2.011 7.738 15.304.339.67h8.217l.339-.668 1.131-2.23a7.484 7.484 0 01-.734-1.221l-1.41 2.778h-6.868L3.677 5.253l-.678-1.34H25.37l-.68 1.34-.15.296a5.714 5.714 0 011.292.122l.55-1.085 1.022-2.013H2.999z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M24.14 6.995c-2.762 0-5.001 2.562-5.001 5.723 0 3.16 2.24 5.722 5.001 5.722 1.348 0 2.571-.61 3.47-1.601a.796.796 0 01.133-.151c.866-1.03 1.399-2.429 1.399-3.97 0-3.16-2.24-5.723-5.002-5.723zm5.025 10.315c.88-1.259 1.406-2.855 1.406-4.592 0-4.064-2.88-7.357-6.43-7.357-3.552 0-6.431 3.293-6.431 7.357 0 4.063 2.879 7.357 6.43 7.357 1.519 0 2.914-.602 4.014-1.609l2.626 3.005a.653.653 0 001.01 0 .903.903 0 000-1.157l-2.625-3.004z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group12Icon;
/* prettier-ignore-end */
