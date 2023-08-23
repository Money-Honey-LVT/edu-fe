import { FooterComponent } from "@/components/Footer";
import { HeaderComponent } from "@/components/Header";
import { HotNews } from "@/components/HotNews";
import { Hotline } from "@/components/Hotline";
import { MocksData } from "@/mocks";
import { Col, Grid } from "@mantine/core";
import React, { PropsWithChildren } from "react";

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="">
      <HeaderComponent />
      <div className="flex justify-center p-6">
        <Grid gutter={"lg"} w={"100%"}>
          <Col offset={2} span={8} className="px-6">
            {children}
          </Col>
          <Col span={2} w={"100%"} className="">
            <HotNews newsList={MocksData.HotNews} />
            <Hotline />
          </Col>
        </Grid>
      </div>
      <FooterComponent />
    </div>
  );
};
