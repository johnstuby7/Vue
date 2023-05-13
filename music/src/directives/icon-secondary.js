export default {
  beforeMount(el, binding) {
    // the binding.value allows this directive to be reused for any icon
    let iconClass = `fa fa-${binding.value.icon} text-green-400 text-2xl`

    if (binding.value.right) {
      iconClass += ' float-right'
    }

    el.innerHTML += `<i class="${iconClass}"></i>`
  }
}
