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
  },
  Mutation: {
    patchEventPage: (_: unknown, { input }: { input: EventPageInput }) => {
      console.log("Patching event page", input);
      return input;
    },
  },
};
