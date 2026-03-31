import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'policyPlan',
  title: 'Beleidsplan (Policy Plan)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel (Title e.g. Beleidsplan)',
      type: 'string',
      validation: (Rule) => Rule.required(),
      initialValue: 'Beleidsplan',
    }),
    defineField({
      name: 'startYear',
      title: 'Startjaar (Start Year)',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'endYear',
      title: 'Eindjaar (End Year)',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Omschrijving (Intro/Description text)',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Schrijf hier een uitgebreide inleiding (Rich Text).',
    }),
    defineField({
      name: 'file',
      title: 'Document (PDF)',
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
      startYear: 'startYear',
      endYear: 'endYear',
    },
    prepare(selection) {
      const {title, startYear, endYear} = selection
      return {
        title: `${title} ${startYear} - ${endYear}`,
        subtitle: `Beleidsplan PDF`,
      }
    }
  },
})
