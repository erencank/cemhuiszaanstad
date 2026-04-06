import { defineField, defineType } from "sanity";

export default defineType({
  name: "committee",
  title: "Commissie / Orgaan",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Naam van Commissie (bijv. Bestuur)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Beschrijving",
      type: "array",
      of: [{ type: "block" }],
      description:
        "Uitgebreide uitleg over wat deze commissie of dit orgaan doet.",
    }),
    defineField({
      name: "order",
      title: "Volgorde op de pagina",
      type: "number",
      description:
        "Lagere nummers verschijnen bovenaan de pagina (bijv. 1 voor Bestuur).",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "members",
      title: "Leden",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "person",
              title: "Persoon",
              type: "reference",
              to: [{ type: "boardMember" }],
              validation: (Rule) => Rule.required(),
            },
            {
              name: "role",
              title: "Rol binnen dit orgaan (bijv. Voorzitter of Lid)",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: "person.name",
              subtitle: "role",
              media: "person.image",
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
