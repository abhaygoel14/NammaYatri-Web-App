import * as React from "react";
import { GetServerSideProps } from "next";

export default function Home() {
  return <main>Homepage</main>;
}
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/homepage",
      permanent: false,
    },
  };
};
