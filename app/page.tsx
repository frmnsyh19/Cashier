import { ClientHomeProduct } from "./components/ClientHomeProduct";

import { DetailMobile } from "./components/utils/DetailMobile";
import { Navbar } from "./components/utils/Navbar";

export default function Home() {
  return (
    <div className=" w-full flex flex-col bg-gray-200 ">
      <DetailMobile />
      <Navbar />
      <ClientHomeProduct />
    </div>
  );
}
