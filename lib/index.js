// set client
const client = require("contentful").createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});
  
  // get all posts
  export async function getAllPosts() {
    const entries = await client.getEntries({
      content_type: "hurcBlogContent2",
      order: "-fields.date",
    });
    return entries?.items;
  }
  
  // get a post by slug
  export async function getPostBySlug(slug) {
    const entries = await client.getEntries({
      content_type: "hurcBlogContent2",
      limit: 1,
      "fields.slug[in]": slug,
    });
    return entries?.items[0];
  }
  
  // get more 3 latest posts
  export async function getMorePosts(slug) {
    const entries = await client.getEntries({
      content_type: "hurcBlogContent2",
      limit: 3,
      order: "-fields.date",
      "fields.slug[nin]": slug,
    });
    return entries?.items;
  }
  
  function parsePostSlug({ fields }) {
    return {
      slug: fields.slug,
    };
  }
  
  function parsePostSlugEntries(entries, cb = parsePostSlug) {
    return entries?.items?.map(cb);
  }
  
  // get all slugs of posts
  export async function getAllPostsWithSlug() {
    const entries = await client.getEntries({
      content_type: "hurcBlogContent2",
      select: "fields.slug",
    });
    return parsePostSlugEntries(entries, (post) => post.fields);
  }