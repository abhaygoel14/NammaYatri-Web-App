import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import AutoLoader from "@/component/AutoLoader";

/**
 * A component that displays a loading spinner until the page has finished loading.
 * @param {Object} props - The props object for the component.
 * @param {React.ReactNode} props.children - The child components to render once the page has loaded.
 * @returns The Loading component.
 */
export default function Loading(props: { children: React.ReactNode }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleStart = (url: string) => {
      if (url !== router.asPath) {
        setLoading(true);
      }
    };

    const handleComplete = (url: string) => {
      if (url === router.asPath) {
        setTimeout(() => setLoading(false), 1000);
      }
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router.pathname]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (loading) {
        setLoading(false);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [loading]);

  useEffect(() => {
    if (router.pathname === "/homepage") {
      setLoading(true);
    }
  }, [router.pathname]);

  return <>{loading ? <AutoLoader /> : props.children}</>;
}
