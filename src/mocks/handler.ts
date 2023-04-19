import { RequestHandler, rest } from "msw";

export const handlers: RequestHandler[] = [
  rest.get("/api/hello", (_, res, ctx) => {
    return res(ctx.json({ message: "Hello there!" }));
  }),
];
