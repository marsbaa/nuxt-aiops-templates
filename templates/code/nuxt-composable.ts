/**
 * use{{ComposableName}} composable
 * Example: const { data, pending, error, refresh } = use{{ComposableName}}({ id: '123' })
 */
import { useAsyncData, useNuxtApp } from '#app'

interface {{ComposableName}}Params {
  id: string
}

interface {{ComposableName}}Response {
  id: string
  title: string
  description?: string
}

export function use{{ComposableName}}(params: {{ComposableName}}Params) {
  const { $apiClient } = useNuxtApp() // inject your API client

  const handler = async () => {
    const { id } = params
    if (!id) throw new Error('Missing id')
    return $apiClient.get<{{ComposableName}}Response>(`/resource/${id}`)
  }

  const { data, pending, error, refresh, status } = useAsyncData(
    `{{composableKey}}:${params.id}`,
    handler,
    {
      server: true,
      lazy: false,
      default: () => null,
      transform: (response) => response?.data,
    }
  )

  return {
    data,
    pending,
    error,
    status,
    refresh,
  }
}
