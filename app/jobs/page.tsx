import {JobsComp} from "@/components/Jobs/JobsComp";
import {HeaderMenu} from "@/components/Common/Header/HeaderMenu";
import SharedLayout from "@/components/Common/Layout/SharedLayout";

export default function Dashboard() {
  return (
      <SharedLayout>
          <JobsComp />
      </SharedLayout>
  );
}