import { useLocation } from "react-router-dom";
import { IconCaret } from "../../assets/iconComponents";

export default function Breadcrumbs() {
  const { pathname } = useLocation();
  const paths = pathname.split("/");
  paths.shift();

  return (
    <div className="breadcrumbs">
      {paths.length > 0 &&
        paths.map((path, index) => (
          <div className="breadcrumb" key={path}>
            {index > 0 && <IconCaret />}
            {path}
          </div>
        ))}
    </div>
  );
}
