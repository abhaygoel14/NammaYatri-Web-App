import * as React from "react";
import { GetServerSideProps } from "next";

/**
 * Renders the homepage component.
 * @returns {JSX.Element} - The homepage component.
 */
export default function Home() {
  return <main>Homepage</main>;
}
/**
 * This function is used in Next.js to redirect the user to the homepage.
 * @returns {object} An object containing the redirect destination and whether the redirect is permanent or not.
 */
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/homepage",
      permanent: false,
    },
  };
};
