import { News } from "@/components/News";
import { Layout } from "@/layout";
import { INews } from "@/types/models/INews";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";

const NewsPage = ({
  allNews,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <Head>
        <title>Trung Tâm Bồi Dưỡng Văn Hoá Trần Phú</title>
        <link rel="shortcut icon" href="/images/logo.jpg" />
      </Head>
      <News news={allNews} />
    </Layout>
  );
};

export default NewsPage;
export const getStaticProps: GetStaticProps<{
  allNews: INews[];
}> = async () => {
  const responseNews = await fetch(`http://localhost:8080/api/v1/news`);
  const jsonNews = await responseNews.json();
  const news = jsonNews.data;
  return {
    props: { allNews: news },
  };
};
