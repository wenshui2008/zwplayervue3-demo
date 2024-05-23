import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//-If registering zwplayervue as a local component, 
//-please import it within each component，otherwise comment it out
createApp(App).use(router).mount('#app')
 
//-If zwplayervue is used as a global registration component,
//-please uncomment the exemption code
// import ZwModule from 'zwplayervue3'
// createApp(App).use(ZwModule).use(router).mount('#app')

