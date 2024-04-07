'use client'
import DashboardComp from "@/components/Dashboard/stats/DashboardComp";
import SharedLayout from "@/components/Common/Layout/SharedLayout";
import {Container} from "@mantine/core";
import PaymentsChart from "@/components/Dashboard/charts/PaymentsChart";

export default function Dashboard() {
  return (
      <SharedLayout>
        <DashboardComp />
          <Container size="lg" py="xl">
              <PaymentsChart/>
          </Container>
      </SharedLayout>
  );
}