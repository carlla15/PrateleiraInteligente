import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//Css do boostrap
import 'bootstrap/dist/css/bootstrap.css';
//Css geral
import './assets/main.css'
// Importar o JavaScript do Bootstrap e o Popper.js
import 'bootstrap/dist/js/bootstrap.bundle';

const app = createApp(App)

app.use(router)

app.mount('#app')
