import { rest } from "msw";

const baseURL = "https://travel-checker-api-nd.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        id: 1,
        owner: "nigel",
        created_at: "29 Oct 2022",
        updated_at: "30 Oct 2022",
        name: "",
        content: "Hi",
        image: "https://res.cloudinary.com/niged/image/upload/v1/media/images/nigel_cjtmbf",
        is_owner: false,
        following_id: null,
        posts_count: 1,
        followers_count: 5,
        following_count: 3
        })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];