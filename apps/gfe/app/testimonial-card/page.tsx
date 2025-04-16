import Image from "next/image";
import { Attribution } from "@repo/ui/gfe-attribution";
import "./page.css";

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen pt-[200px]">
      <div className="flex justify-center">
        <div className="flex flex-col max-w-[340px] gap-4 p-6 rounded-lg bg-[white] h-min">
          <div className="flex flex-row gap-4">
            <Image
              height={48}
              width={48}
              src="/profile-thumbnail.png"
              alt="avatar"
            />
            <div className="">
              <div className="font-bold text-lg">Sarah Dole</div>
              <div className="text-sm text-[#525252]">@sarahdole</div>
            </div>
          </div>
          <div className="text-md text-[#525252]">
            I&apos;ve been searching for high-quality abstract images for my
            design projects, and I&apos;m thrilled to have found this platform.
            The variety and depth of creativity are astounding!
          </div>
        </div>

        <Attribution />
      </div>
    </main>
  );
}
