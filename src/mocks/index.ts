import { News } from "@/components/HotNews";
import { ICourse } from "@/types/models/ICourse";

const HotNews: News[] = [
  {
    title: "Hướng dẫn tuyển sinh tháng 9/2023",
    date: "25/8/2023",
  },
  {
    title: "Hướng dẫn tuyển sinh tháng 9/2023",
    date: "25/8/2023",
  },
];

const Course: ICourse[] = [
  {
    id: "c0724220-cce5-4ab4-bd84-3b5fca3a9160",
    name: "Ngữ văn 9",
    description: "Ngữ văn cô S",
    room: {
      id: "f72a02e4-627c-4dcc-a0e0-bf5e146c157f",
      createdAt: "2023-08-19T22:02:15.13585",
      name: "401",
      description: "Phòng 401",
      capacity: 35,
      image: "string",
    },
    timeTableList: [
      {
        inDate: "MONDAY",
        start: "08:00:00",
        end: "10:00:00",
      },
    ],
  },
  {
    id: "c0724220-cce5-4ab4-bd84-3b5fca3a9160",
    name: "Vật lý 9",
    description: "Vật lý cơ bản",
    room: {
      id: "f72a02e4-627c-4dcc-a0e0-bf5e146c157f",
      createdAt: "2023-08-19T22:02:15.13585",
      name: "401",
      description: "Phòng 201",
      capacity: 35,
      image: "string",
    },
    timeTableList: [
      {
        inDate: "MONDAY",
        start: "08:00:00",
        end: "10:00:00",
      },
    ],
  },
  {
    id: "c0724220-cce5-4ab4-bd84-3b5fca3a9160",
    name: "Toán 9",
    description: "Toán cơ bản, nắm chắc 8 điểm",
    room: {
      id: "f72a02e4-627c-4dcc-a0e0-bf5e146c157f",
      createdAt: "2023-08-19T22:02:15.13585",
      name: "401",
      description: "Phòng 202",
      capacity: 35,
      image: "string",
    },
    timeTableList: [
      {
        inDate: "MONDAY",
        start: "08:00:00",
        end: "10:00:00",
      },
    ],
  },
];
export const MocksData = { HotNews, Course };
