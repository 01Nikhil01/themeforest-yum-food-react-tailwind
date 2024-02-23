import SimplebarReactClient from "../../SimplebarReactClient";
import VerticalMenu from "./VerticalMenu";
import { logoDarkImg } from "../../../assets/data";
import { logoLightImg } from "../../../assets/data";
import { getClientVerticalMenuItems, getHorizontalMenuItems } from "@/helpers";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div
        id="mobile-menu"
        className="hs-overlay fixed left-0 top-0 z-60 hidden h-full w-full  max-w-[270px] -translate-x-full transform border-r border-default-200  bg-white transition-all hs-overlay-open:translate-x-0 dark:bg-default-50 "
        tabIndex={-1}
      >
        <div className="flex h-16 items-center justify-center border-b border-dashed border-default-200 transition-all duration-300">
          <Link to="#">
            <img
              src={logoDarkImg}
              width={130}
              height={40}
              alt="logo"
              className="flex h-10 dark:hidden"
            />
            <img
              src={logoLightImg}
              width={130}
              height={40}
              alt="logo"
              className="hidden h-10 dark:flex"
            />
          </Link>
        </div>
        <SimplebarReactClient className="">
          <nav className="hs-accordion-group flex w-full flex-col flex-wrap p-4 bg-red-300">
            <VerticalMenu menuItems={getClientVerticalMenuItems()} />
          </nav>
        </SimplebarReactClient>
      </div>
    </>
  );
};

export default Navbar;