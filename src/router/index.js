import Vue from 'vue'
import VueRouter from 'vue-router'
// 懒加载导入
const Home = () =>
    import ('../views/home/Home')
const Category = () =>
    import ('../views/category/Category')
const Cart = () =>
    import ('../views/cart/Cart')
const Profile = () =>
    import ('../views/profile/Profile')

Vue.use(VueRouter)
const routes = [
    // 在这里配置映射关系
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/profile',
        component: Profile
    },

]
const router = new VueRouter({
    routes,
    mode: 'history'
})
export default router