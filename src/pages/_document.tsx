import { Head, Html, Main, NextScript } from "next/document";

function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head />
      <body className="antialiased text-zinc-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
