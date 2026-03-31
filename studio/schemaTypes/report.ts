import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'report',
  title: 'Jaarverslag (Report)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel (Title)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'year',
      title: 'Jaar (Year)',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'file',
      title: 'PDF Bestand (File)',
      type: 'file',
      options: {
        accept: '.pdf'
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'year',
    },
  },
})
