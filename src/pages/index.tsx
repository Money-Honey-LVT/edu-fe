import { Courses } from "@/components/Courses";
import { Teachers } from "@/components/Teachers";
import { Layout } from "@/layout";
import { ICourse } from "@/types/models/ICourse";
import { IUser } from "@/types/models/IUser";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import React from "react";

const HomePage = ({
  courses,
  teachers,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <Courses courses={courses} />
      <Teachers teachers={teachers} />
    </Layout>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps<{
  courses: ICourse[];
  teachers: IUser[];
}> = async () => {
  const responseCourses = await fetch(`http://localhost:8080/api/v1/courses`);
  const jsonCourses = await responseCourses.json();
  const courses = jsonCourses.data;

  const responseTeachers = await fetch(`http://localhost:8080/api/v1/teachers`);
  const jsonTeachers = await responseTeachers.json();
  const teachers = jsonTeachers.data;
  return {
    props: { courses, teachers: teachers },
  };
};
