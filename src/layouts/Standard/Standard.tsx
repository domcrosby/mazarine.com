import { NavBar, Footer } from "@/components";
import { StandardLayout } from "@/libs";

interface StandardProps {
  children: React.ReactNode;
}

export const Standard = ({ children }: StandardProps) => (
  <StandardLayout header={<NavBar />} footer={<Footer />}>
    {children}
  </StandardLayout>
);
