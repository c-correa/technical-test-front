import type { SVGProps } from "react";
const FrameiconBlocks = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0_6939_2616"
      style={{ maskType: "luminance" }}
      maskUnits="userSpaceOnUse"
      x="2"
      y="2"
      width="20"
      height="20"
    >
      <path d="M22 2H2V22H22V2Z" fill="white" />
    </mask>
    <g mask="url(#mask0_6939_2616)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2H2V12H12V22H22V12H12V2Z"
        fill={props.fill}
      />
    </g>
  </svg>
);
export default FrameiconBlocks;
