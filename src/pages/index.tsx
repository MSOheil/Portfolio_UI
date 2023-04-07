import Image from "next/image";
import { Inter } from "next/font/google";
import CmpHome from "../../components/Home/Home";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <CmpHome />
    </>
  );
}
