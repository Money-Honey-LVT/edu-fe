import { Notification, Text } from "@mantine/core";
import { IconLocation, IconPhone } from "@tabler/icons-react";
import { useState } from "react";
import { notifications } from "@mantine/notifications";

export function FooterComponent() {
  const [comment, setComment] = useState<{
    fullname?: string;
    phoneNumber?: string;
    email?: string;
    content?: string;
  }>();

  const handleSubmitComment = () => {
    fetch("http://localhost:8080/api/v1/feedback", {
      method: "POST",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    }).then(() => {});
    setComment({
      email: "",
      phoneNumber: "",
      content: "",
    });
    notifications.show({
      message: "Cảm ơn bạn đã để lại đánh giá",
      withCloseButton: true,
      autoClose: 1200,
      color: "blue",
    });
  };

  return (
    <footer className="bg-[url('/images/bg-footer.jpg')]">
      <div className="py-6 px-28 flex  grid grid-cols-2 gap-x-12">
        <div className="text-white">
          <span className="text-xl">Giới thiệu</span>
          <div className="flex items-center gap-x-2">
            <IconLocation size={"0.8rem"} />
            <span>Địa chỉ: Số 24 P.Trần Phú, Máy Tơ, Ngô Quyền, Hải Phòng</span>
          </div>
          <div className="flex items-center gap-x-2">
            <IconPhone size={"0.8rem"} />
            <span>Điện thoại: 0902150168</span>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col w-full gap-y-5 ">
            <Text color="white" fz={"lg"} fw={600}>
              Để lại đánh giá, góp ý của bạn về trung tâm
            </Text>
            <input
              placeholder="Điện thoại"
              className="p-2"
              value={comment?.phoneNumber}
              onChange={(e) =>
                setComment({ ...comment, phoneNumber: e.currentTarget.value })
              }
            />
            <input
              placeholder="Email"
              className="p-2"
              value={comment?.email}
              onChange={(e) =>
                setComment({ ...comment, email: e.currentTarget.value })
              }
            />
            <textarea
              placeholder="Góp ý, nhận xét"
              className="p-2"
              value={comment?.content}
              onChange={(e) =>
                setComment({ ...comment, content: e.currentTarget.value })
              }
            />
            <button
              className="bg-blue-500 w-fit py-2 px-5 text-white"
              onClick={handleSubmitComment}
            >
              Gửi đánh giá
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
