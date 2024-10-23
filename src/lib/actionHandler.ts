export type ActionType = "ALERT" | "NAVIGATE" | "OPEN_MODAL" | "GET_USER";

export type Action = {
  type: ActionType;
  payload?: string;
};

export const handleAction = (action: Action) => {
  switch (action.type) {
    case "ALERT":
      alert(action.payload);
      break;
    case "NAVIGATE":
      if (action.payload) {
        window.location.href = action.payload;
      }
      break;
    case "OPEN_MODAL":
      // 모달 열기 로직 구현
      console.log("모달 열기:", action.payload);
      break;
    case "GET_USER":
      break;
    default:
      console.warn("알 수 없는 액션 타입:", action.type);
  }
};
