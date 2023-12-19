import { createApp } from 'vue'
import 'vant/lib/index.css'
import './assets/css/style.css'
import App from './App.vue'
import store from './store'
import router from './router'
import { 
  Button,
  NavBar,
  Tabbar,
  TabbarItem,
  Checkbox,
  Toast,
  Icon,
  Popup,
  Swipe,
  SwipeItem,
  PullRefresh,
  List,
  ActionBarIcon,
  Search,
  Field,
  SwipeCell,
  Uploader,
  Form,
  ActionSheet,
  DatePicker
} from 'vant'
import './utils/rem'
import { directives } from './utils/common'

const app = createApp(App)
directives(app)

app.use(Button)
app.use(NavBar)
app.use(Tabbar)
app.use(TabbarItem)
app.use(Checkbox)
app.use(Toast)
app.use(Icon)
app.use(Popup)
app.use(Swipe)
app.use(SwipeItem)
app.use(PullRefresh)
app.use(List)
app.use(ActionBarIcon)
app.use(Search)
app.use(Field)
app.use(SwipeCell)
app.use(Uploader)
app.use(Form)
app.use(ActionSheet)
app.use(DatePicker)

app.use(store)
app.use(router)
app.mount('#app')
// createApp(App).mount('#app')
