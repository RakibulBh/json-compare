"use client";
import Textbox from "@/components/text-box";
import { useState } from "react";

export default function Home() {
  const [json1, setJson1] = useState<string>("");
  const [json2, setJson2] = useState<string>("");
  const [comparisonResult, setComparisonResult] = useState<Line[]>([]);
  const [showResults, setShowResults] = useState<boolean>(false);

  // Converts string to object
  const parseJSON = (jsonString: string) => {
    try {
      return JSON.parse(jsonString);
    } catch (e) {
      return null;
    }
  };

  // This function will format the JSON
  const prettifyJSON = (obj: object) => {
    if (!obj) return "";
    return JSON.stringify(obj, null, 2);
  };

  // Compares the json strings line by line
  const compareJSON = (str1: string, str2: string) => {
    const obj1 = parseJSON(str1);
    const obj2 = parseJSON(str2);

    if (!obj1 || !obj2) {
      return [];
    }

    const lines1 = prettifyJSON(obj1).split("\n");
    const lines2 = prettifyJSON(obj2).split("\n");

    const result = [];
    const maxLines = Math.max(lines1.length, lines2.length);

    for (let i = 0; i < maxLines; i++) {
      const line1 = lines1[i] || "";
      const line2 = lines2[i] || "";
      result.push({
        line1,
        line2,
        isDifferent: line1 !== line2,
      });
    }

    return result;
  };

  const handleCompare = () => {
    const result = compareJSON(json1, json2);
    setComparisonResult(result);
    setShowResults(true);
  };

  const handleReset = () => {
    setShowResults(false);
    setJson1("");
    setJson2("");
    setComparisonResult([]);
  };

  if (showResults) {
    return (
      <main className="h-screen p-8 space-y-8">
        <div className="flex justify-between items-center">
          <p className="text-3xl font-bold">
            JSON Difference Finder Project for BTM
          </p>
          <button
            onClick={handleReset}
            className="rounded-md border-[1px] border-black p-2"
          >
            Reset
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <h3 className="font-medium">First JSON</h3>
            <div className="font-mono text-sm whitespace-pre border rounded p-4">
              {comparisonResult.map((line, idx) => (
                <div
                  key={`left-${idx}`}
                  className={`${
                    line.isDifferent ? "bg-red-100" : "bg-green-100"
                  } px-2`}
                >
                  {line.line1}
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-1">
            <h3 className="font-medium">Second JSON</h3>
            <div className="font-mono text-sm whitespace-pre border rounded p-4">
              {comparisonResult.map((line, idx) => (
                <div
                  key={`right-${idx}`}
                  className={`${
                    line.isDifferent ? "bg-red-100" : "bg-green-100"
                  } px-2`}
                >
                  {line.line2}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="h-screen p-8 space-y-8">
      <div className="">
        <p className="text-3xl font-bold">
          JSON Difference Finder Project for BTM
        </p>
      </div>
      <div className="flex justify-between">
        <Textbox id="text-box-1" value={json1} onChange={setJson1} />
        <div className="px-8 flex items-center">
          <button
            onClick={handleCompare}
            className="rounded-md border-[1px] border-black p-2"
          >
            Compare
          </button>
        </div>
        <Textbox id="text-box-2" value={json2} onChange={setJson2} />
      </div>
    </main>
  );
}
