import { createClient } from "contentful";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_API_SPACE,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_API_TOKEN,
  host: process.env.NEXT_PUBLIC_CONTENTFUL_API_HOST,
});

export async function loadPublications() {
  const res = await client
    .getEntries({
      content_type: "publications",
      select: "fields",
      order: "-fields.date",
    })
    .catch((error) => {
      console.error(error);
    });
  return res.items;
}