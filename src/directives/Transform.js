import Vue from "vue";

Vue.directive('transform', {

    bind(el, binging) {

        let current = 0;

        el.addEventListener('dblclick', function () {

            let incremento = binging.value || 90;
            let efeito;

            if (!binging.arg || binging.arg == 'rotate') {

                if (binging.modifiers.reverse) {
                    current -= incremento;
                } else {
                    current += incremento;
                }
                efeito = `rotate(${current}deg)`;

            } else if (binging.arg == 'scale') {
                efeito = `scale(${incremento})`;
            }

            el.style.transform = efeito;

            if (binging.modifiers.animate) el.style.transition = 'transform .5s';

        });
    }
});