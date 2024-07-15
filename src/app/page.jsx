"use client";

import ButtonTab from "@/components/ButtonTab";
import Item from "@/components/Item";
import React from "react";

const TABS = [
  {
    name: "ALL",
    value: "all",
  },
  {
    name: "Manpower Supply",
    value: "manpower_supply",
  },
  {
    name: "Mobile App / Websites",
    value: "mobile_app_website",
  },
  {
    name: "UI/UX Design",
    value: "ui_ux_design",
  },
];

const LIST = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  title: `Item ${i + 1}`,
  image: "https://picsum.photos/1920/1080",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas rerum fugiat, illo, dolore et, officia vero quam dolorum aliquid provident animi consequuntur? Quidem nihil enim rem nobis? Eaque, nihil.",
}));

export default function Home() {
  const [tabActive, setTabActive] = React.useState(TABS[0].value);

  const onClickChangeTab = React.useCallback(
    (value) => {
      if (value !== tabActive) {
        setTabActive(value);
      }
    },
    [tabActive],
  );

  return (
    <main className="container flex flex-1 flex-col gap-y-8 overflow-y-auto">
      <section className="flex w-full flex-1 flex-col gap-y-[60px] py-[60px]">
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-[10px] text-[12px]/[1.2] sm:text-[18px]/[1.8]">
          {TABS.map((item) => (
            <ButtonTab
              key={item.name}
              className={tabActive === item.value && "bg-yellow shadow-button"}
              value={item.value}
              onClick={onClickChangeTab}
            >
              <strong>{item.name}</strong>
            </ButtonTab>
          ))}
        </div>

        <div className="grid h-full flex-1 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]">
          {LIST.map((item) => (
            <Item key={item.id} data={item} />
          ))}
        </div>
      </section>
    </main>
  );
}
