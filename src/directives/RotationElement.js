import Vue from "vue";

Vue.directive('my-tranform', {

    bind(el, binding, vnode) {
        let current = 0
        el.addEventListener('dblclick', () => {
            let increment = 90, timeTransition = 5, animate = false

            if (binding.value) {
                increment = binding.value.rotation
                timeTransition = binding.value.timeTransition
                animate = binding.value.animate
            }

            current += increment
            el.style.transform = `rotate(${current}deg)`
            if(animate) el.style.transition = `transform ${timeTransition}s`
        })
    }

})