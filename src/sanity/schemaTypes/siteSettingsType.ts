import { CogIcon } from 'lucide-react'
import { defineType } from 'sanity'

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: CogIcon,
  fields: [
    {
      name: 'title',
      type: 'string',
      initialValue: 'Site Settings',
      readOnly: true,
    },
    {
      name: 'resume',
      title: 'Resume PDF',
      type: 'file',
      options: { accept: 'application/pdf' },
    },
    {
      name: 'resumeFileName',
      title: 'Resume File Name',
      type: 'string',
    },
  ],
  preview: {
    prepare: () => ({ title: 'Site Settings' }),
  },
}) 