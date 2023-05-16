<template>
  <div>
    <p>{{ num }}</p>
    <button type="button" @click.prevent="increment">Click Me</button>
    <p>{{ name }}</p>

    <p>
      <input type="text" v-model="phrase" />
    </p>
    <p>{{ reversedPhrase }}</p>
  </div>
</template>

<script>
import { ref, reactive, toRefs, watchEffect } from "vue"

export default {
  name: "App",
  setup() {
    let num = ref(0);

    function increment() {
      num.value++;
    }

    const user = reactive({
      name: "John",
      age: 33
    })

    setTimeout(() => {
      user.name = 'Luigi'
    }, 3000)

    const phrase = ref("")
    const reversedPhrase = ref("")

    watchEffect(() => {
      reversedPhrase.value = phrase.value.split("").reverse().join("");
    })

    return {
      num,
      increment,
      ...toRefs(user),
      phrase,
      reversedPhrase
    }
  }
};
</script>
