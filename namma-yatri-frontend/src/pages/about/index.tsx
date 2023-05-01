import dynamic from "next/dynamic";
const NavbarComponent = dynamic(() => import("@/component/homepage/Navbar"));
const AutoComponent = dynamic(() => import("@/component/about/Auto"));
const IndexComponent = dynamic(() => import("@/component/about/Index"));
const MobilityComponent = dynamic(() => import("@/component/about/Mobility"));
const VisionComponent = dynamic(() => import("@/component/about/Vision"));
/**
 * Renders the About page, which includes a navigation bar and several components
 * that provide information about the company and its products.
 * @returns {JSX.Element} - The About page JSX element.
 */
export default function About() {
  return (
    <>
      <NavbarComponent />
      <IndexComponent />
      <AutoComponent />
      <MobilityComponent />
      <VisionComponent />
    </>
  );
}
