<template>
  <div>
    <p>{{ num }}</p>
    <p>{{ double }}</p>
    <button type="button" @click.prevent="increment">Click Me</button>
    <p>{{ name }}</p>

    <p>
      <input type="text" v-model="phrase" />
    </p>
    <p>{{ reversedPhrase }}</p>

    <app-alert :user="user" />

    <button type="button" ref="btn">Button</button>
  </div>
</template>

<script>
import { ref, reactive, toRefs, watchEffect, onBeforeMount, onMounted } from "vue"
import AppAlert from "@/components/Alert.vue"
import { useNumber } from "@/hooks/number"
import { usePhrase } from "@/hooks/phrase"

export default {
  name: "App",
  components: { AppAlert },
  setup() {
    const btn = ref(null)

    onBeforeMount(() => {
      console.log("onBeforeMount")
    })
    onMounted(() => {
      console.log("onMounted")

      btn.value.addEventListener('click', () => {
        console.log("Button CLicked")
      })
    })


    const user = reactive({
      name: "John",
      age: 33
    })

    setTimeout(() => {
      user.name = 'Luigi'
    }, 3000)


    const { num, increment, double } = useNumber()
    const { phrase, reversedPhrase, num: phraseNum } = usePhrase()

    return {
      num,
      increment,
      ...toRefs(user),
      phrase,
      reversedPhrase,
      double,
      user,
      btn,
      phraseNum
    }
  }
};
</script>
