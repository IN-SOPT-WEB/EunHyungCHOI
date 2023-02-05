import { rest } from "msw";

const users = [];

export const handlers = [
  rest.post("/login", (req, res, ctx) => {
    //sessionStorage.setItem("is-Authenticated", "true");
    if (!req.body.id) {
      return res(
        ctx.status(401),
        ctx.json({
          message: "아이디가 입력되지 않았습니다.",
        })
      );
    }
    if (!req.body.password) {
      return res(
        ctx.status(402),
        ctx.json({
          message: "비밀번호가 입력되지 않았습니다.",
        })
      );
    }

    // 유저 리스트에 추가
    users.push({
      id: req.body.id,
      password: req.password,
    });

    return res(
      ctx.status(200),
      ctx.json({
        id: req.body.id,
        password: req.body.password,
      })
    );
  }),
  rest.get("/user", (req, res, ctx) => {
    // const isAuthenticated = sessionStorage.getItem("is-authenticated");

    // if (!isAuthenticated) {
    //   return res(
    //     ctx.status(403),
    //     ctx.json({
    //       errorMessage: "Not authorized",
    //     })
    //   );
    // }

    return res(ctx.status(200), ctx.json(users));
  }),
];
