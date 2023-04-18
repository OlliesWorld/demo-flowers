
import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'home',
    type: 'document',
    title: 'Home',
    fields: [    
      defineField({
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),
    defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
      }),
      defineField({
        name: 'subtitle',
        title: 'SubTitle',
        type: 'string',
      }),
      defineField({
        name: 'blurb',
        title: 'Blurb',
        type: 'string',
      }),
      defineField({
        name: 'blurb2',
        title: 'blurb2',
        type: 'string',
      }),
      
      defineField({
        name: 'body',
        title: 'Body',
        type: 'blockContent',
      }),
      defineField({
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        }
      })
      
    ]
  })