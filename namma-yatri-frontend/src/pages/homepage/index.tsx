import useIsLargeView from "@/utils/useIsLarge";
import dynamic from "next/dynamic";

const NavbarComponent = dynamic(() => import("@/component/homepage/Navbar"));
const MapComponent = dynamic(() => import("@/component/map/Map"));
const PcLocationComponent = dynamic(
  () => import("@/component/homepage/PcLocation")
);
const MobileLocationComponent = dynamic(
  () => import("@/component/homepage/MobileLocation")
);

export default function Home() {
  const isLarge = useIsLargeView();
  return (
    <>
      <NavbarComponent />
      <MapComponent />
      {isLarge ? <PcLocationComponent /> : <MobileLocationComponent />}
    </>
  );
}
