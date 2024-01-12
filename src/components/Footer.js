import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white text-black text-sm flex flex-col items-center space-y-3 lg:flex lg:flex-row lg:items-center lg:justify-between py-2 px-5 border-t border-black">
      <div className="flex items-center space-x-3">
        <a href={"https://about.google/?fg=1"} className="hover:underline">
          About
        </a>

        <a
          className="hover:underline"
          href={
            "https://ads.google.com/intl/en_in/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&fg=1"
          }
        >
          Advertising
        </a>

        <a
          className="hover:underline"
          href={"https://www.google.com/intl/en_in/business/"}
        >
          Business
        </a>

        <a
          className="hover:underline"
          href={"https://www.google.com/search/howsearchworks/?fg=1"}
        >
          How Search Works
        </a>
      </div>

      <div className="flex items-center space-x-3">
        <a
          className="hover:underline"
          href={"https://policies.google.com/privacy?hl=en-IN&fg=1"}
        >
          Privacy
        </a>

        <a
          className="hover:underline"
          href={"https://policies.google.com/terms?hl=en-IN&fg=1"}
        >
          Terms
        </a>

        <p className="hover:underline">Settings</p>
      </div>
    </footer>
  );
}
