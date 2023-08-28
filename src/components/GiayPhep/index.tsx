import { Card, Center, Image, Stack, Text } from "@mantine/core";

export const GiayPhep = () => {
  return (
    <Stack mt={"xl"}>
      <Card bg="blue" shadow="xs" radius={"md"} padding={"xs"}>
        <Text color="white" fw={500}>
          Giấy phép hoạt động
        </Text>
      </Card>
      <Center mt={"lg"}>
        <Image
          withPlaceholder
          alt="anh-giay-phep"
          src={"/images/giay-phep-1.jpg"}
        />
        <Image
          withPlaceholder
          alt="anh-giay-phep"
          src={"/images/giay-phep-2.jpg"}
        />
      </Center>
    </Stack>
  );
};
