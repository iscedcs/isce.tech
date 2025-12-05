import RegisterNav from "@/components/pages/store/registerlayout";
import { Footer } from "react-day-picker";

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <aside>
        <RegisterNav />
          {children}
        <Footer/>
      </aside>
  );
}
