import express from "express";
import { getPostsService } from "./service/getPostsService.js";
import { postNewPost } from "./service/postNewPost.js";
import { postNewUser } from "./service/postNewUser.js";
import { searchService } from "./service/searchService.js";

const app = express();
const port = process.env.PORT || 3000;

app.get("/users/search", (req, res) => {
  (async () => {
    const data = await searchService(req.query.q);
    const users = data ? data : "Something went wrong";
    const status = data ? 200 : 500;
    return res.status(status).send(users);
  })();
});

app.get("/posts", async (req, res) => {
  const data = await getPostsService();
  return res.send(data);
});

app.post("/users", async (req, res) => {
  const data = await postNewUser(req.headers);
  return res.send(data);
});

app.post("/posts", async (req, res) => {
  const data = await postNewPost(req.headers);
  return res.send(data);
});

app.listen(port, () => {
  console.log("Server is running...");
});
