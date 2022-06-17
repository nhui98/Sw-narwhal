import * as React from "react";
import { SVGProps } from "react";

const SvgIconStar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      opacity={0.3}
      fillRule="evenodd"
      clipRule="evenodd"
      d="m8 13.513 3.86 2.029c.726.382 1.593-.231 1.452-1.054l-.737-4.3L15.7 7.145a1.001 1.001 0 0 0-.555-1.706l-4.316-.627L8.898.9C8.56.217 7.439.217 7.103.9L5.173 4.812l-4.316.627a1 1 0 0 0-.555 1.706l3.124 3.044-.737 4.299c-.141.819.724 1.44 1.451 1.054L8 13.512Zm2.998-.684-2.532-1.331a.998.998 0 0 0-.932 0l-2.532 1.33.483-2.82a1 1 0 0 0-.287-.884L3.15 7.126l2.831-.411a1 1 0 0 0 .753-.547L8 3.602l1.267 2.566c.145.295.426.5.753.547l2.831.41-2.049 1.999a1 1 0 0 0-.287.885l.483 2.82Z"
      fill="#444"
    />
  </svg>
);

export default SvgIconStar;
