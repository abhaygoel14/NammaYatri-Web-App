import Error from "next/error";

/**
 * The Document component is a Next.js component that is used to customize the
 * HTML document that is rendered for each page. This component sets the meta tags
 * for the Open Graph protocol, which is used by social media platforms to display
 * information about the website when it is shared.
 * @returns The HTML document with the appropriate meta tags for the Open Graph protocol.
 */
function Page({ statusCode }: any) {
  return <Error statusCode={statusCode}></Error>;
}

Page.getInitialProps = ({ res, err }: any) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

/**
 * The default export for the Page component.
 * This component represents a single page in the application.
 * @returns The Page component.
 */
export default Page;
