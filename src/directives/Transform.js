import Vue from "vue";

Vue.directive('meu-transform',{

    bind(el, binging, vnode){

        let current = 0;

        el.addEventListener('dblclick', function (){

            let incremento = 90;
            let animate = false;

            if (binging.value) {
                incremento = binging.value.incremento;
                animate = binging.value.animate;
            }

            current+=incremento;

            el.style.transform = `rotate(${current}deg)`;

           if (animate) el.style.transition = 'transform .5s';

        });
    }
});