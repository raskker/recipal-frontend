import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from "./store/index"

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'material-design-icons-iconfont/dist/material-design-icons.css'


const vuetify = createVuetify({
  components,
  directives,
})

createApp(App).use(router).use(vuetify).use(store).mount('#app')

