
import StoreNav from "@/components/pages/store/storelayout";
import { Footer } from "react-day-picker";

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
        <StoreNav />
          {children}
        <Footer/>
      </div>
  );
}
