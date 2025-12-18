import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'profile',
  title: 'Profile',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'bio',
      title: 'Biography',
      type: 'text',
    }),
    defineField({
      name: 'resume',
      title: 'Resume PDF',
      type: 'file',
      options: { accept: 'application/pdf' },
    }),
  ],
  preview: {
    select: { title: 'name' },
  },
});