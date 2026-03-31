import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'boardMember',
  title: 'Bestuurslid (Board Member)',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Naam (Name)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Functie (Role)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Pasfoto (Photo)',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Volgorde (Display Order)',
      type: 'number',
      description: 'Lagere nummers verschijnen eerst (bijv. 1 voor Voorzitter)',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'image',
    },
  },
})
