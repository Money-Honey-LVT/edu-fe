import { ICourse } from "@/types/models/ICourse";
import { Card, Col, Grid, Stack, Text } from "@mantine/core";
import React from "react";
import { CourseCard } from "./ClassCard";

interface Props {
  courses: ICourse[];
}

export const Courses: React.FC<Props> = ({ courses }) => {
  return (
    <Stack mb={"md"}>
      <Card bg="blue" shadow="xs" radius={"md"} padding={"xs"}>
        <Text color="white" fw={500}>
          Danh sách lớp học
        </Text>
      </Card>

      <Grid gutter={"lg"}>
        {courses.map((course) => (
          <Col key={course.id} span={6}>
            <CourseCard classInfo={course} />
          </Col>
        ))}
      </Grid>
    </Stack>
  );
};
