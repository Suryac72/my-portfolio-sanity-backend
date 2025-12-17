import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'cv',
  title: 'CV / Resume',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'A short title for this CV entry (e.g., "Senior Frontend Resume")',
    }),
    defineField({
      name: 'file',
      title: 'CV File (PDF)',
      type: 'file',
      options: {
        accept: 'application/pdf',
      },
      description: 'Upload a PDF resume. The frontend uses the latest uploaded file for download.',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Optional short description or notes about this CV version.',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      description: 'Optional publish date used to order CV versions.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'file'
    }
  }
});
