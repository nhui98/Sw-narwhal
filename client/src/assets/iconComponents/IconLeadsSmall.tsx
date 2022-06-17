import * as React from "react";
import { SVGProps } from "react";

const SvgIconLeadsSmall = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      opacity={0.3}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 3c0 1.619-1.31 3.5-3 3.5S2 4.619 2 3c0-1.655 1.345-3 3-3 1.654 0 3 1.345 3 3Zm2-1h5.5a.5.5 0 1 1 0 1H10a.5.5 0 1 1 0-1Zm0 3h5.5a.5.5 0 1 1 0 1H10a.5.5 0 1 1 0-1Zm5.5 3h-3a.5.5 0 1 0 0 1h3a.5.5 0 1 0 0-1Zm-3 3h3a.5.5 0 1 1 0 1h-3a.5.5 0 1 1 0-1ZM8.204 7.987c-2.2-.652-4.275-.639-6.413-.006A2.484 2.484 0 0 0 0 10.379V13.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-3.114a2.486 2.486 0 0 0-1.796-2.4Z"
      fill="#000"
    />
  </svg>
);

export default SvgIconLeadsSmall;
