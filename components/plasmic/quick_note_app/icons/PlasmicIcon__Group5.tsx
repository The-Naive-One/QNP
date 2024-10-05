// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group5Icon(props: Group5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 27 27"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M22.982 18.723h-4.178A.724.724 0 0118.08 18V2.652A2.654 2.654 0 0120.732 0h.322a2.654 2.654 0 012.651 2.652V18a.724.724 0 01-.723.723zm-3.616-1.285h3.053V2.652c0-.753-.613-1.366-1.366-1.366h-.32c-.754 0-1.367.613-1.367 1.366v14.785z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M20.893 22.364c-.388 0-.742-.213-.924-.556l-1.814-3.427a.642.642 0 111.136-.601l1.602 3.025 1.601-3.025a.644.644 0 011.137.6l-1.815 3.428a1.042 1.042 0 01-.923.556zm2.169-14.248h-4.339a.643.643 0 110-1.286h4.34a.643.643 0 110 1.286zm0 3.938h-4.339a.643.643 0 110-1.286h4.34a.643.643 0 110 1.286z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M24.75 27H2.25C1.01 27 0 25.99 0 24.75V5.143c0-1.24 1.01-2.25 2.25-2.25h11.973a.643.643 0 110 1.286H2.25a.965.965 0 00-.964.964V24.75c0 .532.432.964.964.964h22.5a.965.965 0 00.964-.964V7.799c0-.576-.148-1.147-.43-1.65l-.023-.04-.067-.172a.644.644 0 011.2-.464l.035.09c.373.683.57 1.455.57 2.235v16.951A2.25 2.25 0 0124.75 27z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M15.027 9.964H4.179a.643.643 0 110-1.285h10.848a.643.643 0 110 1.285zm0 4.058H4.179a.643.643 0 110-1.285h10.848a.643.643 0 110 1.285zm0 4.058H4.179a.643.643 0 110-1.285h10.848a.643.643 0 110 1.285z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group5Icon;
/* prettier-ignore-end */
