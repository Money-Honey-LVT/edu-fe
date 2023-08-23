import { Group, Stack, Text } from "@mantine/core";
import { News } from ".";
import { IconClock } from "@tabler/icons-react";

interface Props {
  news: News;
}

export const NewsCard: React.FC<Props> = ({ news }) => {
  const { title, date } = news;

  return (
    <Stack
      spacing={"sx"}
      w={"100%"}
      className="border-t-2 border-gray-700 py-2 border-dashed"
    >
      <Text color="blue" fw={500}>
        {title}
      </Text>
      <Group align="center" spacing={2}>
        <IconClock size={"1rem"} color="gray" />
        <Text color="dimmed">Ngày đăng: {date}</Text>
      </Group>
    </Stack>
  );
};
