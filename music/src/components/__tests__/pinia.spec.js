import { setActivePinia, createPinia } from 'pinia'
import useUserStore from '@/stores/user'
import { beforeEach, describe, test } from 'vitest'

describe('stores', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  test('Authenticate user', async () => {
    const store = useUserStore()

    expect(store.userLoggedIn).not.toBe(false)
    await store.authenticate({})

    expect(store.userLoggedIn).toBe(false)
  })
})
