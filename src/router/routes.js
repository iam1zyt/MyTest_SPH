import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'

export default [
    {
        path:'/shopCart',
        component:ShopCart,
        meta:{show:true}
    },
    {
        path:'/addCartSuccess',
        name:'addCartSuccess',
        component:AddCartSuccess,
        meta:{show:true}
    },
    {
        path:'/detail/:skuId',
        component:Detail,
        meta:{show:true}
    },
    {
        path:"/home",
        component:Home,
        meta:{show:true},
    }
    ,
    {
        path:"/login",
        component:Login,
        meta:{show:false}

    }
    ,
    {
        path:"/register",
        component:Register,
        meta:{show:false}

    }
    ,
    {
        name:"search",
        path:"/search/:keyword?",
        component:Search,
        meta:{show:true},
        
    },
    //重定向，在项目跑起来时。访问/，立马定向到首页
    {
        path:'',
        redirect:'/home'
    }
]