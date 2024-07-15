import Image from "next/image";
import React from "react";

function Item(props) {
  const { data } = props;
  return (
    <a href="##">
      <div className="z-1 shadow-card relative col-span-1 overflow-auto rounded-xl bg-transparent transition-all duration-200 ease-in-out hover:-translate-y-1">
        <div className="relative aspect-square h-full w-full">
          <Image
            src="https://picsum.photos/1920/1080"
            fill
            className="object-cover"
            alt="item-image"
          />
        </div>

        <div className="z-2 absolute bottom-[20px] left-0 w-full px-4">
          <div className="w-full rounded-xl bg-white p-4">{data.title}</div>
        </div>
      </div>
    </a>
  );
}

export default Item;
