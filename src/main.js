import { createApp } from 'vue'
import App           from './App.vue'
import router        from './router.js'
import store         from './store/index.js'

import TheHeader     from './components/layout/global/TheHeader.vue'
import TheFooter     from './components/layout/global/TheFooter.vue'
import MenuBar       from './components/layout/global/MenuBar.vue'
import BaseButton    from './components/UI/BaseButton.vue'
import BaseCard      from './components/UI/BaseCard.vue'
import BaseAlert     from './components/UI/BaseAlert.vue'
import BaseLoader    from './components/UI/BaseLoader.vue'
import BaseDialog    from './components/UI/BaseDialog.vue'
import MenuList      from './components/layout/global/MenuList.vue'
import ActionCall    from './components/layout/global/ActionCall.vue'
import TheCart       from './components/layout/global/Cart.vue'



const app = createApp(App)


app.use(router)
app.use(store)

app.component('the-header', TheHeader)
app.component('the-footer', TheFooter)
app.component('the-cart', TheCart)
app.component('menu-bar', MenuBar)
app.component('base-button', BaseButton)
app.component('base-loader', BaseLoader)
app.component('base-alert', BaseAlert)
app.component('base-dialog', BaseDialog)
app.component('base-card', BaseCard)
app.component('menu-list', MenuList)
app.component('action-call', ActionCall)

app.mount('#app')
