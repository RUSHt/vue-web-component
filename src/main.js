import Vue from 'vue'

import WebComponent from './components/WebComponent.vue'

import wrap from '@vue/web-component-wrapper'; 

window.customElements.define('my-custom-element', wrap(Vue, WebComponent));
