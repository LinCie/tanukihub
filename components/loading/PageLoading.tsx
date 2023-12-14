import Image from "next/image";

import mari from "@/public/images/mari-sleep.png";
import Japanese from "@/components/typography/Japanese";
import Spinner from "@/components/loading/Spinner";

export default function PageLoading() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="flex items-center gap-10">
        <Japanese className="select-none text-3xl font-medium">
          ちょっと待ってね。。。
        </Japanese>
        <Spinner className="h-8 w-8" />
      </div>
      <Image
        className="h-72 w-72"
        src={mari}
        alt="Loading..."
        width={500}
        height={500}
      />
    </div>
  );
}
