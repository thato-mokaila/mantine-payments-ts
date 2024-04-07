import {ReservationsComp} from "@/components/Reservations/ReservationsComp";
import {HeaderMenu} from "@/components/Common/Header/HeaderMenu";
import SharedLayout from "@/components/Common/Layout/SharedLayout";

export default function Reservations() {
  return (
    <SharedLayout>
        <ReservationsComp />
    </SharedLayout>
  );
}