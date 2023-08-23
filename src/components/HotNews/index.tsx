import { Card, ScrollArea, Stack, Text } from "@mantine/core";
import React from "react";
import { NewsCard } from "./NewsCard";

export interface News {
  title: string;
  date: string;
}

interface Props {
  newsList: News[];
}
export const HotNews: React.FC<Props> = ({ newsList }) => {
  return (
    <Card radius={"md"} shadow="sm" withBorder w={"100%"}>
      <Card.Section bg={"blue"} py={"sm"}>
        <div className="text-center text-white text-bold text-md">
          Tin nổi bật
        </div>
      </Card.Section>
      <ScrollArea mah={600} w={"100%"} mt={"xs"}>
        <Stack w={"100%"}>
          {newsList.map((news, index) => (
            <NewsCard key={index} news={news} />
          ))}
        </Stack>
      </ScrollArea>
    </Card>
  );
};
