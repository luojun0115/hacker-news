import { createFileRoute } from '@tanstack/react-router'
import React from 'react'
import { ArticleCard } from '../../../components/article-card'

export const Route = createFileRoute('/post/$date')({
  loader: async ({ params, context }) => {
    const { env } = context.cloudflare || {}
    const runEnv = env?.NEXTJS_ENV
    const { date } = params

    const post = await env?.HACKER_NEWS_KV.get(`content:${runEnv}:hacker-news:${date}`, 'json') as unknown as Article

    if (!post) {
      throw new Error('Post not found')
    }

    return { post, env }
  },
  component: PostPage,
})

function PostPage() {
  const { post, env } = Route.useLoaderData()

  return (
    <ArticleCard
      key={post.date}
      article={post}
      staticHost={env.NEXT_STATIC_HOST}
      showFooter
    />
  )
}
