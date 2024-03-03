export const post = {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Full Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "aadharNumber",
      title: "AadharNumber",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "co",
      title: "C/o",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "Houseno",
      title: "House No./ Bldg. /Apt.",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "street",
      title: "Street/Road/Lane",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "Landmark",
      title: "Landmark",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "Area",
      title: "Area/Locality/Sector",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "Village",
      title: "Village/Town/City",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "PostOffice",
      title: "Post Office",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "District",
      title: "District",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "State",
      title: "State",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "Pincode",
      title: "PIN Code",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "DOB",
      title: "Date of Birth",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "certifiername",
      title: "Name of the Certifier",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "designation",
      title: "Designation",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "officeaddress",
      title: "Office Address",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "contactno",
      title: "Contact Number",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "excerpt",
      title: "DATE",
      type: "string",
    },
    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],

};
