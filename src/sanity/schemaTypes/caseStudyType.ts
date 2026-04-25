import { defineField, defineType, defineArrayMember } from 'sanity'
import { ProjectsIcon } from '@sanity/icons'

export const caseStudyType = defineType({
    name: 'caseStudy',
    title: 'Case Studies',
    type: 'document',
    icon: ProjectsIcon,
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'year',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'description',
            type: 'text',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'stack',
            type: 'array',
            of: [defineArrayMember({ type: 'string' })],
        }),
        defineField({
            name: 'liveUrl',
            type: 'url',
            validation: (rule) => rule.uri({ allowRelative: true, scheme: ['http', 'https'] }),
        }),
        defineField({
            name: 'sourceUrl',
            type: 'url',
            validation: (rule) => rule.uri({ allowRelative: true, scheme: ['http', 'https'] }),
        }),
        defineField({
            name: 'order',
            type: 'number',
            title: 'Display Order',
            initialValue: 0,
        }),
    ],
    orderings: [
        {
            title: 'Display Order',
            name: 'orderAsc',
            by: [{ field: 'order', direction: 'asc' }],
        },
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'year',
        },
    },
})
