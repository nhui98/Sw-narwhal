import * as React from "react";
import { SVGProps } from "react";

const SvgIconConversationsSmall = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      opacity={0.3}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.5 0h12a.5.5 0 0 1 .5.5V9a.5.5 0 0 1-.5.5H7.188l-3.859 3.377A.5.5 0 0 1 2.5 12.5v-3h-2A.5.5 0 0 1 0 9V.5A.5.5 0 0 1 .5 0ZM14 4h1.5a.5.5 0 0 1 .5.5V12a.5.5 0 0 1-.5.5H14v2a.5.5 0 0 1-.79.407L9.84 12.5H5.278l2.286-2H13a1 1 0 0 0 1-1V4Z"
      fill="#000"
    />
  </svg>
);

export default SvgIconConversationsSmall;
