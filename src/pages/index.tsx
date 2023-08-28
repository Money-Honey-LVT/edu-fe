import { Courses } from "@/components/Courses";
import { GiayPhep } from "@/components/GiayPhep";
import { Teachers } from "@/components/Teachers";
import { Layout } from "@/layout";
import { MocksData } from "@/mocks";
import { ICourse } from "@/types/models/ICourse";
import { IUser } from "@/types/models/IUser";
import { Center } from "@mantine/core";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import React from "react";

const HomePage = ({
  courses,
  teachers,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <Head>
        <title>Trung Tâm Bồi Dưỡng Văn Hoá Trần Phú</title>
        <link rel="shortcut icon" href="/images/logo.jpg" />
      </Head>
      <Courses courses={courses} />
      <Teachers teachers={teachers} />
      <GiayPhep />
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
    props: { courses: MocksData.Course, teachers: teachers },
  };
};
