import {defineField, defineType} from 'sanity'
import { BiCategory as icon } from 'react-icons/bi';

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
})
