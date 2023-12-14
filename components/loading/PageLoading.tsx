import Image from "next/image";
import Link from "next/link";

import mari from "@/public/images/mari-sleep.png";
import Japanese from "@/components/typography/Japanese";
import Spinner from "@/components/loading/Spinner";

export default function PageLoading() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="flex items-center gap-8">
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
      <div className="flex select-none gap-2 text-lg">
        <Link
          href="https://www.pixiv.net/en/artworks/113407888"
          target="_blank"
          className="font-medium text-[#CC3E3E] hover:underline dark:text-white"
        >
          Art
        </Link>
        by
        <Link
          href="https://www.pixiv.net/en/users/13926723"
          target="_blank"
          className="font-medium text-[#CC3E3E] hover:underline dark:text-white"
        >
          <Japanese>杏仁レモンティー</Japanese>
        </Link>
      </div>
    </div>
  );
}
