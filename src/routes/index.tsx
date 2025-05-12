import { createFileRoute } from '@tanstack/react-router'
import React from 'react'
import { ArticleCard } from '../components/article-card'
import { keepDays } from '../lib/config'
import { getPastDays } from '../lib/utils'

export const Route = createFileRoute('/')({
  loader: async ({ context }) => {
    const { env } = context.cloudflare || {}
    const runEnv = env?.NEXTJS_ENV
    const pastDays = getPastDays(keepDays)
    const posts = (await Promise.all(
      pastDays.map(async (day) => {
        const post = await env?.HACKER_NEWS_KV.get(`content:${runEnv}:hacker-news:${day}`, 'json')
        return post as unknown as Article
      }),
    )).filter(Boolean)

    return { posts, env }
  },
  component: Home,
})

function Home() {
  const { posts, env } = Route.useLoaderData()

  return (
    <>
      {posts.map(post => (
        <ArticleCard
          key={post.date}
          article={post}
          staticHost={env.NEXT_STATIC_HOST}
          showSummary
        />
      ))}
    </>
  )
}
