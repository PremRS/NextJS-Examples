import fs from "fs";
import matter from "gray-matter";
import path from "path";

const postPath = path.join(process.cwd(), "posts");

export function getPostData(fileName) {
  const postSlug = fileName.replace(/\.md$/, "");

  const filePath = path.join(postPath, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const { data, content } = matter(fileContent);

  return {
    slug: postSlug,
    ...data,
    content,
  };
}

export function getAllPosts() {
  const postFiles = fs.readdirSync(postPath);

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}
