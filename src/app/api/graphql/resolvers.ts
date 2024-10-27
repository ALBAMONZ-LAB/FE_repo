import { EventPageInput } from "./types";

export const resolvers = {
  Query: {
    hello: () => "Hello from GraphQL Yoga!",
    user: (_: unknown, { id }: { id: string }) => {
      return {
        id,
        name: "김규리",
        email: "gyul@example.com",
      };
    },
    eventPage: (_: unknown, { id }: { id: string }) => {
      return {
        id,
        title: "이벤트 페이지",
        description: "이벤트 페이지 설명",
        photo: "이벤트 페이지 사진",
      };
    },
    eventPageWithFunction: (_: unknown, { type }: { type: string }) => {
      return {
        type,
        bannerImage: "https://www.shinailbo.co.kr/news/photo/202307/1728759_885803_4829.jpg",
        eventMainImage: "이벤트 메인 이미지",
        buttonList: [{
          type: "mainEventButton",
          label: "메인이벤트",
        }]
      };
    },
  },
  Mutation: {
    patchEventPage: (_: unknown, { input }: { input: EventPageInput }) => {
      console.log("Patching event page", input);
      return input;
    },
  },
};
