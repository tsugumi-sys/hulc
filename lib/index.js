// set client
const client = require("contentful").createClient({
    space: 'hgattmovespa',
    accessToken: 'zS2n0KtYW7DfvoKkhrLBS1lNpxEX17OeX5tTlZau4y8',
});
  
  // get all posts
  export async function getAllPosts(content_type) {
    const entries = await client.getEntries({
      content_type: content_type,
      order: "-fields.date",
    });
    return entries?.items;
  }
  
  // get a post by slug
  export async function getPostBySlug(slug, content_type) {
    const entries = await client.getEntries({
      content_type: content_type,
      limit: 1,
      "fields.slug[in]": slug,
    });
    return entries?.items[0];
  }
  
  // get more 3 latest posts
  export async function getMorePosts(slug, content_type) {
    const entries = await client.getEntries({
      content_type: content_type,
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
  export async function getAllPostsWithSlug(content_type) {
    const entries = await client.getEntries({
      content_type: content_type,
      select: "fields.slug",
    });
    return parsePostSlugEntries(entries, (post) => post.fields);
  }