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
      name: 'image',
      title: 'Pasfoto (Photo)',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
