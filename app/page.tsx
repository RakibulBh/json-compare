"use client";
import Textbox from "@/components/text-box";
import { useState } from "react";

export default function Home() {
  const [json1, setJson1] = useState<string>("");
  const [json2, setJson2] = useState<string>("");

  return (
    <main className="h-screen space-y-8">
      <div className="">
        <p className="text-3xl font-bold">
          JSON Difference Finder Project for BTM
        </p>
      </div>
      <div className="flex justify-between">
        <Textbox value={json1} onChange={setJson1} />
        <div className="px-8 flex items-center">
          <button className="rounded-md border-[1px] border-black p-2">
            Compare
          </button>
        </div>
        <Textbox value={json2} onChange={setJson2} />
      </div>
    </main>
  );
}

const results = () => {
  return <p>Hi</p>;
};
