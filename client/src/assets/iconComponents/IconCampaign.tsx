import * as React from "react";
import { SVGProps } from "react";

const SvgIconCampaign = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 28 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      opacity={0.3}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.867 0h20.8c.479 0 .866.387.866.867V15.6c0 .48-.387.867-.866.867h-9.208L5.77 22.319a.867.867 0 0 1-1.437-.652v-5.2H.867A.866.866 0 0 1 0 15.6V.867C0 .387.387 0 .867 0Zm23.4 6.933h2.6c.478 0 .866.389.866.867v13a.867.867 0 0 1-.866.867h-2.6v3.466a.866.866 0 0 1-1.37.705l-5.841-4.171H9.149L13.11 18.2h9.422c.958 0 1.734-.776 1.734-1.733V6.933Z"
      fill="#fff"
    />
  </svg>
);

export default SvgIconCampaign;
