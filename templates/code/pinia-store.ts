import { defineStore } from 'pinia'

export interface {{StoreName}}State {
  items: Array<{ id: string; title: string }>
  isLoading: boolean
  error: string | null
}

export const use{{StoreName}}Store = defineStore('{{store-id}}', {
  state: (): {{StoreName}}State => ({
    items: [],
    isLoading: false,
    error: null,
  }),
  getters: {
    hasError: (state) => Boolean(state.error),
    count: (state) => state.items.length,
  },
  actions: {
    async fetchItems() {
      this.isLoading = true
      this.error = null
      try {
        // TODO: replace with real API/Firebase call
        const data = await Promise.resolve([{ id: '1', title: 'Example' }])
        this.items = data
      } catch (err) {
        this.error = err instanceof Error ? err.message : 'Unknown error'
      } finally {
        this.isLoading = false
      }
    },
    addItem(item: { id: string; title: string }) {
      this.items = [...this.items, item]
    },
    clearError() {
      this.error = null
    },
  },
})
