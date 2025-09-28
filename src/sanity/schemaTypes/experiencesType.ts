import { defineField, defineType } from 'sanity'
import { TimelineIcon } from '@sanity/icons'

export const experiencesType = defineType({
    name: 'experience',
    title: 'Experiences',
    type: 'document',
    icon: TimelineIcon,
    fields: [
        defineField({
            name: 'jobTitle',
            type: 'string',
        }),
        defineField({
            name: 'company',
            type: 'string',
        }),
        defineField({
            name: 'startDate',
            type: 'datetime',
            options: {
                dateFormat: 'YYYY',
            }
        }),
        defineField({
            name: 'endDate',
            type: 'object',
            fields: [
                {
                    name: 'isCurrent',
                    type: 'boolean',
                    title: 'Current',
                    initialValue: false,
                },
                {
                    name: 'date',
                    type: 'datetime',
                    options: {
                        dateFormat: 'YYYY',
                    }
                }
            ]

        }),
        defineField({
            name: 'description',
            type: 'text',
        }),
        defineField({
            name: 'skills',
            type: 'array',
            of: [{ type: 'string' }],
        }),

    ]
})