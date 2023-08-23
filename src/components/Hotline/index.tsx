import { Card, Group, Stack, Text } from "@mantine/core";
import { IconHome2, IconPhone } from "@tabler/icons-react";

export const Hotline = () => {
  return (
    <Card mt={"lg"} radius={"md"} shadow="sm" withBorder w={"100%"}>
      <Card.Section bg={"blue"} py={"sm"}>
        <div className="text-center text-white text-bold text-md">Hỗ trợ</div>
      </Card.Section>
      <Group align="center" position="apart" spacing={"xs"}>
        <Stack spacing={0} mt={"xs"}>
          <Text color="blue" fw={500}>
            Hotline
          </Text>
          <Text color="dimmed">0902150168</Text>
        </Stack>
      </Group>
      <Group align="center" position="apart" spacing={"xs"}>
        <Stack spacing={0} mt={"xs"}>
          <Text color="blue" fw={500}>
            Địa chỉ
          </Text>
          <Text color="dimmed">
            24 P. Trần Phú, Máy Tơ, Ngô Quyền, Hải Phòng
          </Text>
        </Stack>
      </Group>
    </Card>
  );
};
