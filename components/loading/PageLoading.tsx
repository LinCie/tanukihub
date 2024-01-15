import Image from "next/image";
import Link from "next/link";

import mari from "@/public/images/mari-sleep.png";
import Japanese from "@/components/typography/Japanese";
import Spinner from "@/components/loading/Spinner";

export default function PageLoading() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="flex items-center gap-8">
        <Japanese className="select-none text-2xl font-medium md:text-3xl">
          ちょっと待ってね。。。
        </Japanese>
        <Spinner className="h-6 w-6 md:h-8 md:w-8" />
      </div>
      <Image
        className="h-52 w-52 md:h-72 md:w-72"
        src={mari}
        alt="Loading..."
        width={500}
        height={500}
      />
      <div className="flex select-none gap-2 text-base md:text-lg">
        <Link
          href="https://www.pixiv.net/en/artworks/113407888"
          target="_blank"
          className="font-medium text-main-identity hover:underline dark:text-main-title-light"
        >
          Art
        </Link>
        by
        <Link
          href="https://www.pixiv.net/en/users/13926723"
          target="_blank"
          className="font-medium text-main-identity hover:underline dark:text-main-title-light"
        >
          <Japanese>杏仁レモンティー</Japanese>
        </Link>
      </div>
    </div>
  );
}
