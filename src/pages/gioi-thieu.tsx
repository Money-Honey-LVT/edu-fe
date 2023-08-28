import { GiayPhep } from "@/components/GiayPhep";
import { Layout } from "@/layout";
import { Card, Center, Stack, Text } from "@mantine/core";
import Image from "next/image";

export default function Introduce() {
  return (
    <Layout>
      <Stack>
        <Card bg="blue" shadow="xs" radius={"md"} padding={"xs"}>
          <Text color="white" fw={500}>
            Giới thiệu Trung tâm
          </Text>
        </Card>
        <Text>
          Công ty TNHH TMDV Kiều Vi có địa chỉ tại: số 24 (8 cũ) Trần Phú,
          phường Máy Tơ, quận Ngô Quyền, thành phố Hải Phòng Được Sở Kế hoạch
          Đầu tư thành phố Hải Phòng cấp Giấy chứng nhận đăng ký doanh nghiệp
          Công ty TNHH TMDV Kiều Vi, mã số doanh nghiệp: 0200823868, có mã ngành
          nghề kinh doanh 8559 Đăng ký: ngày 23/06/2008 thành lập Trung tâm Bồi
          dưỡng văn hóa Trần Phú với chức năng hoạt động giáo dục ngoài giờ
          chính khóa theo quyết định số 196/QĐ-SGDĐT-TrH ngày 20 tháng 03 năm
          2019. Trung tâm là một cơ sở giáo dục chuyên cung cấp các khóa học và
          chương trình học. Nhằm đáp ứng nhu cầu học tập và phát triển cá nhân
          đối với học sinh, giáo viên. Trung tâm là một địa điểm giáo dục đáng
          tin cậy và chất lượng, tạo điều kiện thuận lợi cho mọi người tiếp cận
          kiến thức và phát triển bản thân. Với đội ngũ giáo viên tận tâm và
          chương trình học tập đa dạng, trung tâm đóng góp quan trọng vào việc
          nâng cao trình độ học vấn và kỹ năng của cộng đồng.
        </Text>
        <Center mt={"md"}>
          <Image src={"/images/bg.jpg"} alt="bg" width={500} height={500} />
        </Center>
        <GiayPhep />
      </Stack>
    </Layout>
  );
}
