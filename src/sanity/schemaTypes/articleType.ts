import { defineField, defineType } from 'sanity'

export const articleType = defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      description: 'A short summary of the article.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Cover Image',
      type: 'image',
      description: 'Optional cover image for the article.',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
      description: 'The main content of the article.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Publish Date',
      type: 'date',
      options: {
        dateFormat: 'MMMM D, YYYY',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Agriculture', value: 'Agriculture' },
          { title: 'Corporate/Commercial', value: 'Corporate/Commercial' },
          { title: 'Data Privacy Protection', value: 'Data Privacy Protection' },
          { title: 'Dispute Resolution', value: 'Dispute Resolution' },
          { title: 'Intellectual Property', value: 'Intellectual Property' },
          { title: 'International Desk', value: 'International Desk' },
          { title: 'Probate & Family', value: 'Probate & Family' },
          { title: 'Real Estate & Construction', value: 'Real Estate & Construction' },
          { title: 'Tax Advisory & Regulation', value: 'Tax Advisory & Regulation' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Featured Article',
      type: 'boolean',
      description: 'Check this to feature the article in the carousel.',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'image',
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `by ${author}` }
    },
  },
})
