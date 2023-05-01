const vm = Vue.createApp({
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe'
    }
  }
}).mount('#app')

setTimeout(() => {
  vm.firstName = 'Bob';
}, 2000);

// Vue.createApp({
//   data() {
//     return {
//       firstName: 'Steve',
//       lastName: 'Rogers'
//     }
//   }
// }).mount('#app2')