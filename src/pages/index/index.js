import App from './index'
import Vue from 'vue'

const app = new Vue( App )

app.$mount()

export default {
    config: {
        navigationBarTitleText: 'yanxuan-demo',
    }
}