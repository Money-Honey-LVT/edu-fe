import { GiayPhep } from "@/components/GiayPhep";
import { Layout } from "@/layout";
import { Card, Center, Group, Stack, Text } from "@mantine/core";
import Head from "next/head";
import Image from "next/image";

export default function Introduce() {
  return (
    <Layout>
      <Head>
        <title>Giới thiệu về trung tâm</title>
      </Head>
      <Stack>
        <Card bg="blue" shadow="xs" radius={"md"} padding={"xs"}>
          <Text color="white" fw={500}>
            Giới thiệu trung tâm
          </Text>
        </Card>
        <div>
          <p>
            Trung tâm Bồi dưỡng Văn hóa Trần Phú (gọi tắt là Trung tâm trong quy
            chế này) là địa điểm tổ chức bồi dưỡng kiến thức và hoạt động ngoài
            giờ chính khóa của Công ty TNHH Thương mại dịch vụ Kiều Vi, có trụ
            sở đặt tại số 24 (số 8 Trần Phú cũ) Trần Phú, phường Máy Tơ, quận
            Ngô Quyền, Hải Phòng có đăng ký mã ngành kinh doanh: 8559
          </p>
          <ul>
            <li>
              - Bồi dưỡng kiến thức văn hóa cấp THCS và cấp THPT cho học sinh
              các lớp 1 - 12 và học sinh tự do (đã tốt nghiệp THCS, THPT), do
              Trung tâm tuyển sinh trên cơ sở nhu cầu tự nguyện của học sinh và
              được gia đình đồng ý góp phần củng cố nâng cao kiến thức, kỹ năng,
              giáo dục nhân cách của học sinh.
            </li>
            <li>
              - Quản lý các mô hình đào tạo hoặc liên kết đào tạo khác do Công
              ty ủy quyền.
            </li>
          </ul>
          <p>
            Đăng ký: ngày 23/06/2008 thành lập Trung tâm Bồi dưỡng văn hóa Trần
            Phú với chức năng hoạt động giáo dục ngoài giờ chính khóa theo quyết
            định số 196/QĐ-SGDĐT-TrH ngày 20 tháng 03 năm 2019.
          </p>
          <p>
            Trung tâm là một cơ sở giáo dục chuyên cung cấp các khóa học và
            chương trình học. Nhằm đáp ứng nhu cầu học tập và phát triển cá nhân
            đối với học sinh, giáo viên.{" "}
          </p>
          <p>
            Trung tâm là một địa điểm giáo dục đáng tin cậy và chất lượng, tạo
            điều kiện thuận lợi cho mọi người tiếp cận kiến thức và phát triển
            bản thân. Với đội ngũ giáo viên tận tâm và chương trình học tập đa
            dạng, trung tâm đóng góp quan trọng vào việc nâng cao trình độ học
            vấn và kỹ năng của cộng đồng.
          </p>
        </div>
        <Stack mt={"md"} align="center" spacing={"md"}>
          <Group>
            <Image src={"/images/bg.jpg"} alt="bg" width={350} height={350} />
            <Image
              src={"/images/anh-lop-1.jpg"}
              alt="bg"
              width={350}
              height={350}
            />
          </Group>
          <Group>
            <Image
              src={"/images/anh-lop-2.jpg"}
              alt="bg"
              width={350}
              height={350}
            />
            <Image
              src={"/images/anh-lop-3.jpg"}
              alt="bg"
              width={350}
              height={350}
            />
          </Group>
        </Stack>
        <p>
          Đối tượng học viên chủ yếu là học sinh các trường THPT, THCS và các
          đối tượng khác có nhu cầu theo học để nâng cao trình độ, góp phần củng
          cố, nâng cao kiến thức, kỹ năng, giáo dục nhân cách cho người học.
        </p>
        <p>
          Trung tâm Bồi dưỡng Văn hóa Trần Phú dự kiến tổ chức các lớp dạy bồi
          dưỡng kiến thức văn hóa các môn: Toán, Vật lý, Hóa học, Sinh học, Ngữ
          Văn, Ngoại ngữ, Địa lý, Lịch sử thực hiện dạy và học theo đúng quy
          định của Bộ Giáo dục và Đào tạo và phù hợp với nhu cầu của học sinh
        </p>
        <p>
          Tài liệu giảng dạy do các giáo viên của trung tâm biên soạn theo
          chương trình của Bộ giáo dục và đào tạo và căn cứ theo kế hoạc giảng
          dạy báo cáo hàng năm với Sở Giáo dục và đào tạo Hải Phòng
        </p>
        <ul>Trình độ của giáo viên:</ul>
        <li>
          Đạt trình độ chuẩn được đào tạo đối với từng cấp học theo quy định của
          Luật Giáo dục.
        </li>
        <li>
          Có đủ sức khỏe, có bằng đại học sư phạm các chuyên ngành khác nhau hay
          đại học ngành ngoại ngữ và chứng chỉ bồi dưỡng nghiệp vụ sư phạm đối
          với lớp ngoại ngữ.
        </li>
        <li>
          Có phẩm chất đạo đức tốt, thực hiện đầy đủ nghĩa vụ công dân và các
          quy định của pháp luật; hoàn thành các nhiệm vụ được giao tại cơ quan
          công tác.
        </li>
        <li>
          Được học sinh tín nhiệm đăng ký đề nghị dạy bồi dưỡng kiến thức, được
          phụ huynh học sinh đồng ý, ghi ý kiến hoặc xác nhận trực tiếp vào
          phiếu.
        </li>
        <li>
          Trung tâm có đội ngũ giáo viên chất lượng: Trung tâm đảm bảo chỉ tuyển
          dụng những giáo viên có trình độ chuyên môn cao, kinh nghiệm giảng dạy
          và tâm huyết với nghề. Đội ngũ giáo viên đáp ứng được nhu cầu học tập
          và sẵn lòng hỗ trợ học viên vượt qua khó khăn trong quá trình học
        </li>
        <li>
          Tạo điều kiện học tập tốt nhất: Trung tâm cam kết cung cấp môi trường
          học tập thân thiện và chất lượng, đảm bảo học viên cảm thấy thoải mái
          và tự tin trong quá trình học tập. Các phòng học được trang bị đầy đủ
          tiện nghi và công nghệ hiện đại để hỗ trợ việc giảng dạy và học tập
          hiệu quả
        </li>
        <GiayPhep />
      </Stack>
    </Layout>
  );
}
