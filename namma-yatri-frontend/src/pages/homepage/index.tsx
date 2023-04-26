import dynamic from "next/dynamic";

const NavbarComponent = dynamic(() => import("@/component/Navbar"));
export default function Home() {
  return (
    <>
      <NavbarComponent />
    </>
  );
}
