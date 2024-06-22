import { Button } from "@/components/ui/button";
import Image from "next/image";
import base from "@/app/assets/base.svg";

export default function Home() {
  return (
    <div className="">
      Welcome to base pay
      <Image src={base} alt="basepay logo" width={50} height={50} />
      <Button>Hello</Button>
    </div>
  );
}
