import { ICourse } from "@/types/models/ICourse";
import { Card, Col, Grid, Stack, Text } from "@mantine/core";
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
        <Col></Col>
      </Grid>
    </Stack>
  );
};
