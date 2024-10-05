// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group7Icon(props: Group7IconProps) {
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
        d={
          "M27.238 22.19h-4.952a.858.858 0 01-.858-.857V3.143A3.146 3.146 0 0124.572 0h.381a3.146 3.146 0 013.143 3.143v18.19a.859.859 0 01-.857.858zm-4.286-1.523h3.62V3.143c0-.892-.727-1.62-1.62-1.62h-.38c-.893 0-1.62.728-1.62 1.62v17.524z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M24.762 26.506c-.46 0-.88-.253-1.094-.66l-2.15-4.061a.76.76 0 111.346-.713l1.898 3.586 1.898-3.586a.763.763 0 011.347.713l-2.15 4.062a1.235 1.235 0 01-1.095.659zm2.571-16.887H22.19a.762.762 0 110-1.524h5.143a.762.762 0 110 1.524zm0 4.667H22.19a.762.762 0 110-1.524h5.143a.762.762 0 110 1.524z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M29.333 32H2.667A2.67 2.67 0 010 29.333V6.095A2.67 2.67 0 012.667 3.43h14.19a.762.762 0 110 1.523H2.667c-.63 0-1.143.513-1.143 1.143v23.238c0 .63.512 1.143 1.143 1.143h26.666c.63 0 1.143-.512 1.143-1.143V9.243a4 4 0 00-.51-1.954l-.027-.048-.079-.205a.763.763 0 011.422-.55l.04.106c.444.81.678 1.726.678 2.65v20.09A2.67 2.67 0 0129.333 32z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M17.81 11.81H4.951a.762.762 0 110-1.524H17.81a.762.762 0 110 1.524zm0 4.809H4.951a.762.762 0 110-1.524H17.81a.762.762 0 110 1.524zm0 4.81H4.951a.762.762 0 110-1.524H17.81a.762.762 0 110 1.524z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group7Icon;
/* prettier-ignore-end */
