"use client";

import { useEffect, useState } from "react";

type ComponentType = {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: Record<string, any>;
};

type UIConfig = {
  message: string;
  components: ComponentType[];
  timestamp: string;
};

export default function Home() {
  const [uiConfig, setUiConfig] = useState<UIConfig | null>(null);

  useEffect(() => {
    fetch("/api/home")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUiConfig(data);
      })
      .catch((error) => console.error("Error fetching UI config:", error));
  }, []);

  // 동적 컴포넌트 렌더링 함수
  const DynamicComponent = ({ type, props }: ComponentType) => {
    switch (type) {
      case "Header":
        return <h1 className="text-2xl font-bold mb-4">{props.title}</h1>;
      case "Text":
        return <p className="mb-4">{props.content}</p>;
      case "Button":
        return (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => eval(props.onClick)}
          >
            {props.label}
          </button>
        );
      case "Table":
        return (
          <table className="border-collapse border border-gray-300 mb-4">
            <thead>
              <tr>
                {props.columns.map((column: string, index: number) => (
                  <th key={index} className="border border-gray-300 px-4 py-2">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {props.rows.map((row: string[], rowIndex: number) => (
                <tr key={rowIndex}>
                  {row.map((cell: string, cellIndex: number) => (
                    <td
                      key={cellIndex}
                      className="border border-gray-300 px-4 py-2"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        );
      default:
        return null;
    }
  };

  if (!uiConfig) {
    return <div>로딩 중...</div>;
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {uiConfig.components?.map((component, index) => (
          <DynamicComponent key={index} {...component} />
        ))}
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
