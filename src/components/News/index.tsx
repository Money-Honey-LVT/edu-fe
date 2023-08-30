import { INews } from "@/types/models/INews";
import { Card, Col, Grid, Image, Stack, Text } from "@mantine/core";
import * as cheerio from "cheerio";
import Markdown from "markdown-to-jsx";
import Link from "next/link";
import React from "react";

interface Props {
  news?: INews[];
}
export const News: React.FC<Props> = ({ news }) => {
  // function extractFirstImageSrc(html: string): string | null {
  //   const parser = new DOMParser();
  //   const doc = parser.parseFromString(html, "text/html");
  //   const imgElement = doc.querySelector("img");

  //   if (imgElement) {
  //     return imgElement.getAttribute("src");
  //   }

  //   return null;
  // }

  function getFirstImageSrcFromHtml(htmlString: string): string | null {
    const $ = cheerio.load(htmlString);
    const firstImageSrc = $("img").first().attr("src");
    return firstImageSrc || null;
  }
  return (
    <Stack>
      <Card bg="blue" shadow="xs" radius={"md"} padding={"xs"}>
        <Text color="white" fw={500}>
          Tin tức
        </Text>
      </Card>

      {news && news?.length > 0
        ? news?.map((news) => (
            <div key={news.id}>
              <Card withBorder radius={"sm"} shadow="sm">
                <Grid>
                  <Col span={5}>
                    <a href={`/tin-tuc/${news.id}`}>
                      <Image
                        alt=""
                        withPlaceholder
                        src={getFirstImageSrcFromHtml(news.content)}
                        height={300}
                      />
                    </a>
                  </Col>
                  <Col span={7}>
                    <Stack>
                      <a href={`/tin-tuc/${news.id}`}>
                        <Text fw={"bold"} fz={"xl"}>
                          {news.title}
                        </Text>
                      </a>
                      <Markdown>{`${news.content.slice(0, 35)}...`}</Markdown>
                    </Stack>
                  </Col>
                </Grid>
              </Card>
            </div>
          ))
        : null}
    </Stack>
  );
};
