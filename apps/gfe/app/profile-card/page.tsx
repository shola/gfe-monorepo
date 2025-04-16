import Image from "next/image";

export default function ProfileCard() {
  return (
    <div className="container flex justify-center mt-[200px]">
      <div className="card flex flex-col w-[340px] bg-white rounded-lg text-center px-4 py-6 gap-10">
        <div className="card-non-interactive-content flex flex-col gap-6">
          <Image
            className="mx-auto"
            height={64}
            width={64}
            src="/profile.png"
            alt="Profile Picture"
          />
          <div className="user-name-and-title flex flex-col">
            <span className="text-neutral-900 text-xl">Sarah Dole</span>
            <span className="text-neutral-600 text-sm">
              Front End Engineer @ Microsoft
            </span>
          </div>
          <span className="text-neutral-600 text-base">
            I turn coffee into bugs which are fixed by someone else. Certified
            Stack Overflow and ChatGPT developer.
          </span>
        </div>
        <div className="card-controls">
          <button className="bg-indigo-700 text-white rounded-[4px] py-4 w-full mb-6">
            Contact me
          </button>
          <div className="flex flex-row justify-center gap-4">
            <button className="p-2">
              <svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.00083 0.666664C4.39665 0.666664 0.66748 4.39583 0.66748 9C0.66748 12.6875 3.0529 15.8021 6.3654 16.9062C6.78206 16.9792 6.93831 16.7292 6.93831 16.5104C6.93831 16.3125 6.9279 15.6562 6.9279 14.9583C4.83415 15.3437 4.29248 14.4479 4.12581 13.9792C4.03206 13.7396 3.62581 13 3.27165 12.8021C2.97998 12.6458 2.56331 12.2604 3.26123 12.25C3.91748 12.2396 4.38623 12.8542 4.54248 13.1042C5.29248 14.3646 6.4904 14.0104 6.96956 13.7917C7.04248 13.25 7.26123 12.8854 7.50083 12.6771C5.64665 12.4687 3.70915 11.75 3.70915 8.5625C3.70915 7.65625 4.03206 6.90625 4.56331 6.32291C4.47998 6.11458 4.18831 5.26041 4.64665 4.11458C4.64665 4.11458 5.34456 3.89583 6.93831 4.96875C7.605 4.78125 8.31333 4.6875 9.02166 4.6875C9.73 4.6875 10.4383 4.78125 11.105 4.96875C12.6987 3.88541 13.3967 4.11458 13.3967 4.11458C13.855 5.26041 13.5633 6.11458 13.48 6.32291C14.0112 6.90625 14.3342 7.64583 14.3342 8.5625C14.3342 11.7604 12.3862 12.4687 10.5321 12.6771C10.8342 12.9375 11.0946 13.4375 11.0946 14.2187C11.0946 15.3333 11.0842 16.2292 11.0842 16.5104C11.0842 16.7292 11.2404 16.9896 11.6571 16.9062C15.0492 15.7611 17.3332 12.5802 17.3342 9C17.3342 4.39583 13.605 0.666664 9.00083 0.666664Z"
                  fill="#4338CA"
                />
              </svg>
            </button>
            <button className="p-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.2802 13.2825H11.0589V9.80183C11.0589 8.97183 11.0421 7.90375 9.90142 7.90375C8.74334 7.90375 8.56642 8.80692 8.56642 9.74058V13.2825H6.34517V6.125H8.47892V7.10058H8.50767C8.80584 6.53808 9.53084 5.94437 10.6139 5.94437C12.8646 5.94437 13.2808 7.42567 13.2808 9.35375L13.2802 13.2825ZM3.83645 5.14562C3.12145 5.14562 2.54707 4.56687 2.54707 3.855C2.54707 3.14375 3.12207 2.56563 3.83645 2.56563C4.54895 2.56563 5.12645 3.14375 5.12645 3.855C5.12645 4.56687 4.54832 5.14562 3.83645 5.14562ZM4.9502 13.2825H2.7227V6.125H4.9502V13.2825ZM14.3914 0.5H1.6077C0.995824 0.5 0.500824 0.98375 0.500824 1.58063V14.4194C0.500824 15.0168 0.995824 15.5 1.6077 15.5H14.3896C15.0008 15.5 15.5008 15.0168 15.5008 14.4194V1.58063C15.5008 0.98375 15.0008 0.5 14.3896 0.5H14.3914Z"
                  fill="#4338CA"
                />
              </svg>
            </button>
            <button className="p-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.85675 0.66748C10.7946 0.66903 11.2698 0.673989 11.6805 0.686214L11.8422 0.691506C12.0291 0.698147 12.2134 0.706481 12.4357 0.716897C13.3224 0.757864 13.9273 0.898147 14.4586 1.1044C15.0078 1.3162 15.4717 1.60231 15.9349 2.06551C16.3974 2.5287 16.6836 2.99398 16.8961 3.5419C17.1016 4.07245 17.2419 4.67801 17.2836 5.56481C17.2935 5.78703 17.3015 5.97136 17.3081 6.15824L17.3133 6.31997C17.3255 6.7306 17.3311 7.20591 17.3328 8.14375L17.3335 8.76516C17.3336 8.84108 17.3336 8.91942 17.3336 9.00025L17.3335 9.23533L17.333 9.85675C17.3314 10.7946 17.3265 11.2698 17.3142 11.6805L17.3089 11.8422C17.3023 12.0291 17.294 12.2134 17.2836 12.4357C17.2426 13.3224 17.1016 13.9273 16.8961 14.4586C16.6842 15.0078 16.3974 15.4717 15.9349 15.9349C15.4717 16.3974 15.0057 16.6836 14.4586 16.8961C13.9273 17.1016 13.3224 17.2419 12.4357 17.2836C12.2134 17.2935 12.0291 17.3015 11.8422 17.3081L11.6805 17.3133C11.2698 17.3255 10.7946 17.3311 9.85675 17.3328L9.23533 17.3335C9.15941 17.3336 9.08108 17.3336 9.00025 17.3336L8.76516 17.3335L8.14375 17.333C7.20591 17.3314 6.7306 17.3265 6.31997 17.3142L6.15824 17.3089C5.97136 17.3023 5.78703 17.294 5.56481 17.2836C4.67801 17.2426 4.07384 17.1016 3.5419 16.8961C2.99328 16.6842 2.5287 16.3974 2.06551 15.9349C1.60231 15.4717 1.3169 15.0057 1.1044 14.4586C0.898147 13.9273 0.758564 13.3224 0.716897 12.4357C0.706997 12.2134 0.698922 12.0291 0.692381 11.8422L0.687139 11.6805C0.674947 11.2698 0.669389 10.7946 0.667589 9.85675L0.66748 8.14375C0.66903 7.20591 0.673989 6.7306 0.686214 6.31997L0.691506 6.15824C0.698147 5.97136 0.706481 5.78703 0.716897 5.56481C0.757864 4.67731 0.898147 4.07315 1.1044 3.5419C1.3162 2.99328 1.60231 2.5287 2.06551 2.06551C2.5287 1.60231 2.99398 1.3169 3.5419 1.1044C4.07315 0.898147 4.67731 0.758564 5.56481 0.716897C5.78703 0.706997 5.97136 0.698922 6.15824 0.692381L6.31997 0.687139C6.7306 0.674947 7.20591 0.669389 8.14375 0.667589L9.85675 0.66748ZM9.00025 4.83356C6.69781 4.83356 4.83356 6.69984 4.83356 9.00025C4.83356 11.3027 6.69984 13.1669 9.00025 13.1669C11.3027 13.1669 13.1669 11.3006 13.1669 9.00025C13.1669 6.69781 11.3006 4.83356 9.00025 4.83356ZM9.00025 6.50023C10.381 6.50023 11.5002 7.61908 11.5002 9.00025C11.5002 10.381 10.3813 11.5002 9.00025 11.5002C7.6195 11.5002 6.50023 10.3813 6.50023 9.00025C6.50023 7.6195 7.61908 6.50023 9.00025 6.50023ZM13.3752 3.58356C12.8008 3.58356 12.3336 4.05015 12.3336 4.62452C12.3336 5.19889 12.8002 5.6662 13.3752 5.6662C13.9496 5.6662 14.4169 5.19961 14.4169 4.62452C14.4169 4.05015 13.9488 3.58284 13.3752 3.58356Z"
                  fill="#4338CA"
                />
              </svg>
            </button>
            <button className="p-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.1707 0.875H16.9273L10.9048 7.75833L17.9898 17.125H12.4423L8.09733 11.4442L3.12569 17.125H0.36736L6.80903 9.7625L0.0123596 0.875H5.70069L9.62816 6.0675L14.1707 0.875ZM13.2032 15.475H14.7307L4.87069 2.43833H3.23153L13.2032 15.475Z"
                  fill="#4338CA"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
