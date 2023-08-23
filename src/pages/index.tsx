import { Courses } from "@/components/Courses";
import { Teachers } from "@/components/Teachers";
import { Layout } from "@/layout";
import { MocksData } from "@/mocks";
import { ICourse } from "@/types/models/ICourse";
import { IUser } from "@/types/models/IUser";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import React from "react";

interface Props {
  courses: ICourse[];
  teachers: IUser[];
}
const HomePage: React.FC<Props> = ({
  courses,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <Courses courses={courses} />
      <Teachers />
    </Layout>
  )
};

export default HomePage;

export const getStaticProps: GetStaticProps<{
  courses: ICourse[];
}> = async () => {
  const courses = MocksData.Course;
  return {
    props: { courses },
  };
};
