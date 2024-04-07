import {HeaderMenu} from "@/components/Common/Header/HeaderMenu";
import PaymentListAdvanced from "@/components/Payments/PaymentListAdvanced";
import SharedLayout from "@/components/Common/Layout/SharedLayout";

export default function Payments() {
  return (
    <SharedLayout>
        <PaymentListAdvanced />
    </SharedLayout>
  );
}