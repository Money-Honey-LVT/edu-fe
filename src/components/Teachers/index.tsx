import { ICourse } from "@/types/models/ICourse";
import { Card, Col, Grid, Group, Stack, Text } from "@mantine/core";
import React from "react";

import { IUser } from "@/types/models/IUser";

interface Props {
  teachers?: IUser[];
}

export const Teachers: React.FC<Props> = ({ teachers }) => {
  return (
    <Stack>
      <Card bg="blue" shadow="xs" radius={"md"} padding={"xs"}>
        <Text color="white" fw={500}>
          Danh sách giáo viên
        </Text>
      </Card>

      <Grid gutter={"lg"}>
        {teachers && teachers?.length > 0
          ? teachers?.map((teacher) => (
              <Col span={4} key={teacher.id}>
                <Card withBorder radius={"md"} shadow="xs" p={"0"}>
                  <Stack p={"sm"} spacing={"xs"}>
                    <Group spacing={3}>
                      <Text fw={500}>Tên giáo viên: </Text>
                      <Text color="dimmed">{teacher.fullName}</Text>
                    </Group>
                    <Group spacing={3}>
                      <Text fw={500}>SĐT: </Text>
                      <Text color="dimmed">{teacher.phoneNumber}</Text>
                    </Group>
                  </Stack>
                </Card>
              </Col>
            ))
          : null}
      </Grid>
    </Stack>
  );
};
