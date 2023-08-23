import { DateParser, ICourse } from "@/types/models/ICourse";
import { Badge, Card, Group, Image, Stack, Text } from "@mantine/core";
import React from "react";

interface Props {
  classInfo: ICourse;
}

export const CourseCard: React.FC<Props> = ({ classInfo }) => {
  const { name, students, description, room, timeTableList } = classInfo;

  return (
    <Card withBorder radius={"md"} shadow="xs" p={"0"}>
      <Card.Section>
        <Image height={"100px"} src={"/images/class.avif"} alt="class-image" />
      </Card.Section>
      <Stack p={"sm"} spacing={"xs"}>
        <Text fw={"bold"}>{name}</Text>
        <Text color="dimmed">{description}</Text>
        <Group position="apart">
          {room?.name && <Badge color="blue">Phòng {room?.name}</Badge>}
          {room?.capacity && (
            <Badge color="gray">Số lượng tối đa: {room?.capacity}</Badge>
          )}
        </Group>
        <Group spacing={"xs"}>
          {timeTableList ? (
            <>
              <Text color="dimmed">Thời gian:</Text>
              {timeTableList.map((time, index) => (
                <Text key={index} color="dimmed">
                  {DateParser(time.inDate)}({time.start} -{time.end})
                </Text>
              ))}
            </>
          ) : null}
        </Group>
      </Stack>
    </Card>
  );
};
