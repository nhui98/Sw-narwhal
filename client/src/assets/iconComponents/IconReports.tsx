import * as React from "react";
import { SVGProps } from "react";

const SvgIconReports = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m10.219 6.938-3.563 7.125H0C.469 6.186 6.938 0 14.906 0c7.969 0 14.438 6.188 15 14.063h-7.312c-.375 0-.657.28-.844.562l-3 6-6.844-13.688c-.281-.656-1.406-.656-1.687 0Zm9.375 16.125 3.562-7.125h6.657C29.343 23.811 22.875 30 14.905 30S.47 23.812 0 15.937h7.219c.375 0 .656-.187.843-.562l3-6 6.844 13.688c.188.375.469.562.844.562s.656-.281.844-.563Z"
      fill="#fff"
    />
  </svg>
);

export default SvgIconReports;
