import type { SVGProps } from "react";
const Frameicon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0_6939_2529"
      maskUnits="userSpaceOnUse"
      x="2"
      y="2"
      width="20"
      height="20"
    >
      <path d="M22 2H2V22H22V2Z" fill="white" />
    </mask>
    <g mask="url(#mask0_6939_2529)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 12.0671L12 2L2 12.0671H11.8667L2 22H22L12.1333 12.0671H22Z"
        fill="white"
      />
    </g>
  </svg>
);
export default Frameicon;
