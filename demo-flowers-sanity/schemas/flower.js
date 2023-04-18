
import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'flower',
    type: 'document',
    title: 'Flower',
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
        name: 'flowername',
        title: 'Flower Name',
        type: 'string',
      }),
      defineField({
        name: 'sciencename',
        title: 'Science Name',
        type: 'string',
      }),
      defineField({
        name: 'description',
        title: 'Description',
        type: 'blockContent',
      }),
      defineField({
        name: 'sun',
        title: 'Sun',
        type: 'array',
        of: [{type: 'reference', to: {type: 'category'}}],
      }),
      defineField({
        name: 'soil',
        title: 'Soil',
        type: 'string',
        
      }),
      defineField({
        name: 'water',
        title: 'Water',
        type: 'string',
      }),
      
      defineField({
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'flowername',
          maxLength: 96,
        }
      })
      
    ]
  })