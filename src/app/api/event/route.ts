export async function GET() {
  try {
    const data = {
      backgroundImage: "https://picsum.photos/1000/1000",
      components: [
        {
          type: "Header",
          props: {
            title: "알바몬 특별 이벤트!",
          },
        },
        {
          type: "Text",
          props: {
            content: "이 이벤트는 알바몬에서 진행하는 특별 이벤트입니다.",
          },
        },
        {
          type: "EventButton",
          props: {
            label: "이벤트 참여하기",
            action: {
              type: "ALERT",
              payload: "이벤트 버튼 클릭됨",
            },
          },
        },
        {
          type: "EventButton",
          props: {
            label: "홈 화면 이동",
            action: {
              type: "NAVIGATE",
              payload: "/",
            },
          },
        },
        {
          type: "EventButtonWithFunction",
          props: {
            label: "이벤트 버튼",
            onClick: null,
          },
        },
        {
          type: "LinkButton",
          props: {
            label: "모달 열기",
            action: {
              type: "OPEN_MODAL",
              payload: "모달 열기",
            },
          },
        },
        {
          type: "User",
          props: {
            label: "유저 데이터",
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
