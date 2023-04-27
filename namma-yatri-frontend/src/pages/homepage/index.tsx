import dynamic from "next/dynamic";

const NavbarComponent = dynamic(() => import("@/component/homepage/Navbar"));
export default function Home() {
  return (
    <>
      <NavbarComponent />
    </>
  );
}
