import Image from "next/image";
import { Attribution } from "@workspace/ui/components/gfe-attribution";

export default function Page() {
  return (
    <div className="flex justify-center">
      <Card />
      <Attribution />
    </div>
  );
}

function Card() {
  return (
    <div className="rounded-lg w-[340px] mt-[120px] bg-white">
      <Image
        className="rounded-t-lg overflow-hidden"
        height={288}
        width={340}
        src="/spacejoy-YqFz7UMm8qE-unsplash.jpg"
        alt="living room photo"
      />
      <div className="card-bottom flex flex-col px-4 py-6 gap-2">
        <div className="badge flex">
          <span className="px-[8px] py-[2px] rounded-full bg-green-50 text-green-700 border-green-200 border-1 ">
            Interior
          </span>
        </div>
        <div className="font-semibold text-lg text-neutral-900">
          Top 5 Living Room Inspirations
        </div>
        <div className="text-md text-neutral-600">
          Curated vibrants colors for your living, make it pop & calm in the
          same time.
        </div>
        <button className="text-indigo-700 p-[2px] mt-6">
          <span className="flex flex-row gap-2 text-left">
            Read more{" "}
            <svg
              className="self-center"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.4763 6.16658L6.00633 1.69657L7.18483 0.518066L13.6667 6.99992L7.18483 13.4817L6.00633 12.3032L10.4763 7.83325H0.333328V6.16658H10.4763Z"
                fill="#4338CA"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}
