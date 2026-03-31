import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel (Title)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Datum (Date)',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'time',
      title: 'Tijd (Time e.g., 19:00)',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Locatie (Location)',
      type: 'string',
      initialValue: 'Cemhuis Zaanstad',
    }),
    defineField({
      name: 'description',
      title: 'Omschrijving (Description)',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'date',
    },
  },
})
