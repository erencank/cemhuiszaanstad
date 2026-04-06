import { defineField, defineType } from "sanity";

export default defineType({
  name: "term",
  title: "Begrip (Term)",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Begrip",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Uitleg (Description)",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    }),
  ],
});
