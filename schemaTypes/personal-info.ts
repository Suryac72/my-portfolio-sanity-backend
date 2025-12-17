import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'personalInformation',
  title: 'Personal Information',
  type: 'document',
  fields: [
  
    // Additional fields
    defineField({
      name: 'contactUsImage',
      title: 'Contact Us Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'contactUsDescription',
      title: 'Contact Us Description',
      type: 'text',
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'contactUsTitle',
      title: 'Contact Us Title',
      type: 'string',
    }),
    // Additional contact & personal fields used by the frontend
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
    }),
    defineField({
      name: 'linkedin',
      title: 'LinkedIn URL',
      type: 'url',
    }),
    defineField({
      name: 'github',
      title: 'GitHub URL',
      type: 'url',
    }),
    defineField({
      name: 'age',
      title: 'Age',
      type: 'string',
    }),
    defineField({
      name: 'residence',
      title: 'Residence',
      type: 'string',
    }),
    defineField({
      name: 'freelance',
      title: 'Freelance',
      type: 'string',
    }),
    // Languages list used in frontend Skills component
    defineField({
      name: 'languages',
      title: 'Languages',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Name', type: 'string' },
            { name: 'level', title: 'Level (0-100)', type: 'number' },
          ],
        },
      ],
    }),
    defineField({
      name: 'extraSkills',
      title: 'Extra Skills',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],

  preview: {
    select: {
      title: 'name',
      subtitle: 'contactUsTitle',
      media: 'contactUsImage',
    },
  },
});
