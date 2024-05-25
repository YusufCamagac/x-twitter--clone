import React, { useState, useRef } from "react";
import { useClickAway } from "react-use";

const Search = () => {
  const [query, setQuery] = useState("");
  const [focus, setFocus] = useState(false);

  const ref = useRef();
  useClickAway(ref, () => {
    setFocus(false);
  });

  return (
    <div
      ref={ref}
      className="min-h-[32px] h-[53px] mb-3 flex items-center sticky top-0 bg-black z-10"
    >
      <label className="h-[43px] rounded-full bg-[#202327] w-full relative group border border-transparent focus-within:bg-black focus-within:border-[#1d9bf0]">
        <div className="w-[56px] h-full flex items-center justify-center absolute top-0 left-0  pointer-events-none">
          <svg
            viewBox="0 0 24 24 "
            height={18.75}
            className="min-w-[32px] text-[#7167b]  "
          >
            <path
              fill="currentColor"
              d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Ara"
          className="w-full h-full bg-transparent placeholder-[#71767b] rounded-full outline-none pl-[55px] text-[15px]"
          value={query}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onChange={(e) => setQuery(e.target.value)}
        />
      </label>

      {focus && (
        <div className="absolute w-[350px] top-full -left-px -translate-y-1  bg-black shadow-box text-center max-h-[calc(80vh-53px)] rounded-lg min-h-[100px] ">
          <p className="p-3 pt-5 text-[#71767b] leading-5">
            Kişileri, listeleri veya anahtar kelimeleri aramayı dene
          </p>
        </div>
      )}
    </div>
  );
};

export default Search;
