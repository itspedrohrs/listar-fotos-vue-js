import Vue from "vue";

Vue.directive('my-tranform', {

    bind(el, binding, vnode) {
        let current = 0
        el.addEventListener('dblclick', () => {

            /**
             *
             * @type {string} typeAnimate - define type animation to component image
             */

            let typeAnimate

            /**
             *
             * @type {number} timeTransition - define type animation to component image
             */
            let timeTransition = 5

            /**
             *
             * @type {number} increment - define increment case if typeAnimate = rotation
             */
            let increment = 90

            if (binding.value) {
                if(binding.value.typeAnimate === 'rotation' || binding.value.typeAnimate === ''){
                    increment = binding.value.rotation
                    timeTransition = binding.value.timeTransition
                    current += increment
                    typeAnimate = `rotate(${current}deg)`
                } else if (binding.value.typeAnimate === 'scale'){
                    timeTransition = binding.value.timeTransition
                    current = '1.2'
                    typeAnimate = `scale(${current})`
                }
            }

            el.style.transform = typeAnimate
            if(binding.value.animate) el.style.transition = `transform ${timeTransition}s`
        })
    }

})