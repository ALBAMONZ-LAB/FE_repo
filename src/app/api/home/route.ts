export async function GET() {
  try {
    const data = {
      components: [
        {
          type: "Header",
          props: {
            title: "서버 드리븐 UI 예시",
          },
        },
        {
          type: "Text",
          props: {
            content: "이 UI는 서버에서 동적으로 생성되었습니다.",
          },
        },
        {
          type: "Button",
          props: {
            label: "클릭하세요",
            onClick: 'alert("서버에서 정의된 동작입니다!")',
          },
        },
        {
          type: "Button",
          props: {
            label: "이벤트 화면으로 이동",
            onClick: 'window.location.href = "/event";',
          },
        },
        {
          type: "Table",
          props: {
            columns: ["이름", "나이", "직업"],
            rows: [
              ["김철수", "28", "개발자"],
              ["이영희", "32", "디자이너"],
              ["박민수", "45", "매니저"],
            ],
          },
        },
      ],
      timestamp: new Date().toISOString(),
    };

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("API 오류:", error);
    return new Response(JSON.stringify({ error: "내부 서버 오류" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
