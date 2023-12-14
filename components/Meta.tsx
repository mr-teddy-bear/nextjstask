import Head from "next/head";
import { FC, PropsWithChildren } from "react";

interface Seo {
  title: string;
  description?: string;
  image?: string;
}

//custom comp for seo
export const Meta: FC<PropsWithChildren<Seo>> = ({
  title,
  children,
  description,
  image,
}) => {
  return (
    <>
      <Head>
        <title itemProp="headline">{title}</title>
        {description ? (
          <>
            <meta
              itemProp="description"
              name="description"
              content={description}
            />
            <meta property="og:locale" content="en" />
            <meta property="og:title" content={title} />
            <meta property="og:image" content={image} />
            <meta property="og:description" content={description} />
          </>
        ) : (
          <meta name="robots" content="noindex, nofollow" />
        )}
      </Head>
      {children}
    </>
  );
};
