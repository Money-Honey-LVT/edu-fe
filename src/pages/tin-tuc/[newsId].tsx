import { Layout } from "@/layout";
import { INews } from "@/types/models/INews";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import { Stack, Text } from "@mantine/core";
import Markdown from "markdown-to-jsx";
import * as cheerio from "cheerio";

const NewsDetailsPage = ({
  news,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <Head>
        <title>Trung Tâm Bồi Dưỡng Văn Hoá Trần Phú</title>
        <link rel="shortcut icon" href="/images/logo.jpg" />
      </Head>
      <div>
        <Text fw={600} fz={35}>
          {news.title}
        </Text>

        <Text fz={20}>
          <Markdown>{news.content}</Markdown>
        </Text>
      </div>
    </Layout>
  );
};

export default NewsDetailsPage;

export const getStaticPaths: GetStaticPaths = async () => {
  // Fetch news IDs from your API
  const responseNews = await fetch(`http://localhost:8080/api/v1/news`);
  const jsonNews = await responseNews.json();
  const news = jsonNews.data;

  const paths = news.map((item: INews) => ({
    params: { newsId: item.id.toString() },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps<{
  news: INews;
}> = async ({ params }) => {
  const newsId = params?.newsId;

  // Fetch specific news by ID
  const responseNews = await fetch(
    `http://localhost:8080/api/v1/news/${newsId}`
  );
  const jsonNews = await responseNews.json();
  const news = jsonNews.data;

  return {
    props: { news },
  };
};
