import * as React from "react";
import { SVGProps } from "react";

const SvgIconMail = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g opacity={0.5} stroke="#444" strokeWidth={2} strokeLinecap="square">
      <path d="M4 11V1h16v10" />
      <path clipRule="evenodd" d="M23 15v8H1v-8h7v3h8v-3h7Z" />
      <path d="M9 6h6M9 10h6" />
    </g>
  </svg>
);

export default SvgIconMail;
