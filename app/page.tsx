
import ContentWrapper from "./components/contentWrapper";
import Image from "next/image";

import dragonImage from "@/public/polygonalRedDragon.png"

export default function Page() {
  return (
    <ContentWrapper>
      <div>Home</div>
      <Image src={dragonImage} alt="red polygonal dragon" unoptimized/>
    </ContentWrapper>
  );
}
