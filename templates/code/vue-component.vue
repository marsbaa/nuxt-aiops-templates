<script setup lang="ts">
import { computed, ref } from 'vue'
import { useFeatureStore } from '@/stores/{{featureStore}}'

type Variant = 'primary' | 'secondary'

interface Props {
  title: string
  description?: string
  variant?: Variant
  disabled?: boolean
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'submit'): void
  (e: 'cancel'): void
}>()

const store = useFeatureStore()
const isLoading = computed(() => store.isLoading)
const errorMessage = computed(() => store.error)

const localValue = ref('')

const handleSubmit = async () => {
  if (props.disabled || isLoading.value) return
  await store.performAction(localValue.value)
  emit('submit')
}

const handleCancel = () => emit('cancel')
</script>

<template>
  <section :aria-busy="isLoading">
    <header>
      <h2>{{ title }}</h2>
      <p v-if="description">{{ description }}</p>
    </header>

    <div class="content">
      <slot name="body">
        <input
          v-model="localValue"
          type="text"
          :disabled="disabled || isLoading"
          aria-label="Input"
        />
      </slot>
    </div>

    <footer>
      <button
        :class="['btn', variant ?? 'primary']"
        :disabled="disabled || isLoading"
        @click="handleSubmit"
      >
        {{ isLoading ? 'Saving...' : 'Submit' }}
      </button>
      <button class="btn ghost" type="button" @click="handleCancel">
        Cancel
      </button>
    </footer>

    <p v-if="errorMessage" class="error" role="alert">
      {{ errorMessage }}
    </p>
  </section>
</template>

<style scoped>
section {
  display: grid;
  gap: 1rem;
  padding: 1.25rem;
  border: 1px solid var(--surface-border, #dcdfe6);
  border-radius: 0.75rem;
  background: var(--surface-bg, #fff);
}

header h2 {
  margin: 0;
  font-size: 1.1rem;
}

.btn {
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid transparent;
  cursor: pointer;
  font-weight: 600;
}

.btn.primary {
  background: #2563eb;
  color: #fff;
}

.btn.secondary {
  background: #f3f4f6;
  color: #111827;
  border-color: #d1d5db;
}

.btn.ghost {
  background: transparent;
  color: #374151;
}

.error {
  color: #b91c1c;
}
</style>
