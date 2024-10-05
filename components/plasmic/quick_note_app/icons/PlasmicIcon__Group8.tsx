// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group8IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group8Icon(props: Group8IconProps) {
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
          "M18.498 31.822H1.769C.794 31.822 0 30.917 0 29.804V2.018C0 .906.794 0 1.769 0h8.637c.976 0 1.77.906 1.77 2.019V3.68c0 .196.14.356.312.356l11.951.064c.976 0 1.77.906 1.77 2.019v2.539c0 .458-.327.83-.73.83-.401 0-.728-.37-.728-.83v-2.54c0-.196-.14-.356-.312-.356L12.487 5.7c-.975 0-1.769-.905-1.769-2.018V2.019c0-.197-.14-.357-.312-.357H1.769c-.172 0-.312.16-.312.357v27.784c0 .197.14.357.312.357h16.729c.402 0 .728.372.728.831 0 .46-.326.832-.728.832z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M7.285 31.763c-.403 0-.729-.372-.729-.832V10.353c0-1.113.813-2.018 1.812-2.018h20.155c1 0 1.812.905 1.812 2.018v5.795c0 .46-.326.832-.729.832-.402 0-.728-.372-.728-.832v-5.795a.356.356 0 00-.356-.356H8.368a.356.356 0 00-.355.356v20.578c0 .46-.327.832-.729.832z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M25.392 32c-3.644 0-6.608-3.187-6.608-7.104 0-3.917 2.964-7.104 6.608-7.104 3.644 0 6.608 3.187 6.608 7.104C32 28.813 29.036 32 25.392 32zm0-12.642c-2.84 0-5.152 2.485-5.152 5.538 0 3.053 2.311 5.538 5.152 5.538 2.84 0 5.151-2.485 5.151-5.538 0-3.053-2.31-5.538-5.151-5.538z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M25.34 29.57c-.402 0-.729-.371-.729-.83v-7.6c0-.459.327-.832.729-.832.402 0 .729.372.729.832v7.6c0 .458-.327.83-.73.83z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M29.606 25.744h-8.013c-.402 0-.728-.372-.728-.831 0-.46.326-.832.729-.832h8.012c.403 0 .73.372.73.832 0 .46-.327.831-.73.831z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group8Icon;
/* prettier-ignore-end */
