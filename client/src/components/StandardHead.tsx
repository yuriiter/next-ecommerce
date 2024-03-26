import Head from "next/head";

type StandardHeadProps = {
  pageName: string;
};

export const StandardHead = ({ pageName }: StandardHeadProps) => (
  <Head>
    <title>{pageName} | Morent</title>
  </Head>
);
