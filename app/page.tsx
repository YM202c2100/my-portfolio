import Image from "next/image";

import dragonImage from "@/public/polygonalRedDragon.png"

export default function Page() {
  return (<>
    <div>Home</div>
    <Image src={dragonImage} alt="red polygonal dragon" unoptimized/>
  </>);
}
