import alfy from "alfy";
import { fetchAllPosts } from "./lib/fetchAllPosts";
import { fetchAllScraps } from "./lib/fetchAllScraps";

const username = process.env.USER_NAME;

const createItem = (title, subtitle, url, icon) => {
  return {
    title,
    subtitle,
    arg: url,
    icon: {
      type: "png",
      path: icon,
    }
  };
}

(async () => {
  if(alfy.input.length > 1) {
    const posts = await fetchAllPosts(username);
    const scraps = await fetchAllScraps(username);

    const items = alfy.inputMatches([...posts, ...scraps], "title").map((p) => createItem(p.title, p.url, p.url, p.icon));

    if (!items.length) {
      alfy.output(
          [createItem("The requested post was not found. ⚠️", "", "")]);
      return;
    }
    alfy.output(items);
  } else {
    alfy.output([createItem("Loading...", "", "")])
  }
})()
