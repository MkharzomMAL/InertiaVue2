import Vue from 'vue'
import { createInertiaApp } from '@inertiajs/vue2'

createInertiaApp({
    resolve: name => {
      const pages = require.context('./Pages', true, /\.vue$/i)
      return pages(`./${name}.vue`)
    },
    setup({ el, App, props, plugin }) {
      Vue.use(plugin)
  
      new Vue({
        render: h => h(App, props),
      }).$mount(el)
    },
  });
  