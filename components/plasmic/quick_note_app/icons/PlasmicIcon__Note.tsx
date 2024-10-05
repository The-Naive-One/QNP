// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NoteIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NoteIcon(props: NoteIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
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
          "M6.839 3c-.753 0-1.475.298-2.008.828a2.823 2.823 0 00-.831 2v12.343c0 .75.3 1.47.831 2A2.845 2.845 0 006.839 21H17.16c.753 0 1.475-.298 2.008-.828.532-.53.831-1.25.831-2V5.828c0-.75-.3-1.47-.831-2A2.844 2.844 0 0017.16 3H6.84zm-1.29 2.829c0-.71.577-1.286 1.29-1.286H17.16c.712 0 1.29.576 1.29 1.286V18.17c0 .71-.578 1.286-1.29 1.286H6.84c-.713 0-1.29-.576-1.29-1.286V5.83zm3.354 1.285a.776.776 0 00-.774.772.77.77 0 00.774.771h3.613a.776.776 0 00.774-.771.77.77 0 00-.774-.772H8.903zm-.774 4.372a.77.77 0 01.774-.772h6.194a.776.776 0 01.774.772.77.77 0 01-.774.771H8.903a.775.775 0 01-.774-.771zm.774 2.828a.776.776 0 00-.774.772.77.77 0 00.774.771h5.162a.776.776 0 00.774-.771.77.77 0 00-.774-.772H8.902z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default NoteIcon;
/* prettier-ignore-end */
