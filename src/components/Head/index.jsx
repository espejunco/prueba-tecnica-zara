import NextHead from "next/head";

export const Head = ({ title }) => {
  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content="The Zara Studio Nicholson collection" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
};
