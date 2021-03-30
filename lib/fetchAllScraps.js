import alfy from "alfy"
import { emojiPath } from "./emojiPath";

export const fetchAllScraps = async (username) => {
  const options = {
    json: true,
    maxAge: 60000
  };

  const res = await alfy.fetch(
    `https://zenn.dev/api/scraps?username=${username}`,
    options
  );
  return res.scraps.map((p) => {
    p.url = `https://zenn.dev/${username}/scraps/${p.slug}`
    p.icon = emojiPath("📑")
    return p
  })
};
