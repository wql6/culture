import { defineEventHandler } from 'h3'
// @ts-ignore
import { getContent } from '@nuxt/content'

export default defineEventHandler(async () => {
    const content = await getContent('articles/example').fetch()
    return content.body
})
