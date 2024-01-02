import { createApp } from 'vue'
import router from './routers'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import '@fortawesome/fontawesome-free/css/all.css';

const app = createApp(App);

app.use(router)
app.mount("#app")