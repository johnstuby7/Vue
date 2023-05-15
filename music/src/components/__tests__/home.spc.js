import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home.vue'
import { expect, test, describe } from 'vitest'
import SongItem from '@/components/SongItem.vue'

describe('Home.vue', () => {
  test('renders list of songs', () => {
    const songs = [{}, {}, {}]

    const component = shallowMount(Home, {
      data() {
        return {
          songs
        }
      }
    })

    // FIndallCOmpoennts will search for all songItem compoents in the home page
    const items = component.findAllComponents(SongItem)

    expect(items).toHaveLength(songs.length)
  })
})
