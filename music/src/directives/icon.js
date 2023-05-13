export default {
  beforeMount(el, binding) {
    // the binding.value allows this directive to be reused for any icon
    let iconClass = `fa fa-${binding.value} text-2xl`

    if (binding.arg === 'full') {
      iconClass = binding.value
    }

    if (binding.modifiers.right) {
      iconClass += ' float-right'
    }

    if (binding.modifiers.yellow) {
      iconClass += ' text-yellow-400'
    } else {
      iconClass = +' text-green-400'
    }

    el.innerHTML += `<i class="${iconClass}"></i>`
  }
}
