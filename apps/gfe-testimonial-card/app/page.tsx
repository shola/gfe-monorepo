import Image from "next/image";
import "./page.css";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <body className="flex justify-center">
    <div className="flex flex-col max-w-[340px] gap-4 p-6 rounded-lg bg-[white] h-min">
      <div className="flex flex-row gap-4">
        <Image height={48} width={48} src="/profile-thumbnail.png" alt="avatar" />
        <div className="">
          <div className="font-bold text-lg">Sarah Dole</div>
          <div className="text-sm text-[#525252]">@sarahdole</div>
        </div>
      </div>
      <div className="text-md text-[#525252]">
        I've been searching for high-quality abstract images for my design projects, 
        and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!       
      </div>
    </div>

    <div className="credits" data-gfe-screenshot-exclude="true">
      A challenge by
      <a href="https://www.greatfrontend.com/projects?ref=challenges" target="_blank" rel="noreferrer">GreatFrontEnd Projects</a>. Built by
      <a href="https://www.greatfrontend.com/projects/u/olu" target="_blank" rel="noreferrer">Michael Olusola Situ</a>.
    </div>  

</body>
    </main>
  );
}
