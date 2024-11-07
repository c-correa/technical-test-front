import type { SVGProps } from "react";
const BarChar = (props: SVGProps<SVGSVGElement>) => (
  <svg
  width={props.width}
  height={props.height}
  viewBox="0 0 24 24"
  fill='none'
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 20V10M12 20V4M6 20V14"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default BarChar;
