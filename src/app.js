import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group.vue'

Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup);

new Vue({
    el:'#app',
    data:{
        loading1:false,
    }
});