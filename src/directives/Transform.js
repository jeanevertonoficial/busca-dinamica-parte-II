import Vue from "vue";

Vue.directive('meu-transform',{

    bind(el, binging){

        let current = 0;

        el.addEventListener('dblclick', function (){
            let incremento = binging.value || 90;
            current+=incremento;
            el.style.transition = 'transform .8s';
            el.style.transform = `rotate(${current}deg)`;
        });
    }
});