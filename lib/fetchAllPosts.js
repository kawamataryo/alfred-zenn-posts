import alfy from "alfy"
import { emojiPath } from "./emojiPath";

export const fetchAllPosts = async (username) => {
  const options = {
    json: true,
    maxAge: 60000
  };

  const res = await alfy.fetch(
    `https://api.zenn.dev/users/${username}/articles`,
    options
  );
  const posts = res.articles.map((p) => {
    p.url = `https://zenn.dev/${username}/articles/${p.slug}`
    p.icon = emojiPath(p.emoji)
    return p
  })

  return posts
};
