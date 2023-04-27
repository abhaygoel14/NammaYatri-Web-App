import dynamic from "next/dynamic";

const NavbarComponent = dynamic(() => import("@/component/homepage/Navbar"));
const MapComponent = dynamic(() => import("@/component/map/Map"));
export default function Home() {
  return (
    <>
      <NavbarComponent />
      <MapComponent />
    </>
  );
}
