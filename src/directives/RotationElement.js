import Vue from "vue";

Vue.directive('my-tranform', {

    bind(el, binding, vnode) {
        let current = 0
        el.addEventListener('dblclick', () => {
            current += 90
            el.style.transform = `rotate(${current}deg)`
        })
    }

})