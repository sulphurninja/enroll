const postFields = `
  _id,
  name,
  title,
  date,
  excerpt,
  coverImage,
  aadharNumber,
  co,
  Houseno,
  street,
  Landmark,
  Area,
  Village,
  PostOffice,
  District,
  State,
  Pincode,
  DOB,
  certifiername,
  designation,
  officeaddress,
  contactno,
  "slug": slug.current,
`;

export const indexQuery = `
*[_type == "post"] | order(date desc, _updatedAt desc) {
  ${postFields}
}`;

export const postQuery = `
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${postFields}
  }
}`;

export const postSlugsQuery = `
*[_type == "post" && defined(slug.current)][].slug.current
`;

export const postBySlugQuery = `
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`;
