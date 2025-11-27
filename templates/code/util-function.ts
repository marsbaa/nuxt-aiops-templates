/**
 * Safe JSON parse with fallback and error tagging.
 *
 * Example:
 * const result = safeParseJSON<User>(raw, { onError: (e) => logger.error(e) })
 */
export interface SafeParseOptions {
  onError?: (error: unknown) => void
  fallback?: unknown
}

export function safeParseJSON<T = unknown>(
  value: string,
  options: SafeParseOptions = {}
): T | null {
  const { onError, fallback = null } = options
  try {
    return JSON.parse(value) as T
  } catch (error) {
    if (onError) onError(error)
    return fallback as T | null
  }
}
