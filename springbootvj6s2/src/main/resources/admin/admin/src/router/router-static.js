import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import forum from '@/views/modules/forum/list'
    import news from '@/views/modules/news/list'
    import caigouxuqiu from '@/views/modules/caigouxuqiu/list'
    import yonghu from '@/views/modules/yonghu/list'
    import shangpinxinxi from '@/views/modules/shangpinxinxi/list'
    import fuzeren from '@/views/modules/fuzeren/list'
    import messages from '@/views/modules/messages/list'
    import qiandaobaobei from '@/views/modules/qiandaobaobei/list'
    import renyuanmingdan from '@/views/modules/renyuanmingdan/list'
    import config from '@/views/modules/config/list'
    import jiankangdaka from '@/views/modules/jiankangdaka/list'
    import dingdanpeisong from '@/views/modules/dingdanpeisong/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/forum',
        name: '居民交流',
        component: forum
      }
      ,{
	path: '/news',
        name: '公告信息',
        component: news
      }
      ,{
	path: '/caigouxuqiu',
        name: '采购需求',
        component: caigouxuqiu
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/shangpinxinxi',
        name: '商品信息',
        component: shangpinxinxi
      }
      ,{
	path: '/fuzeren',
        name: '负责人',
        component: fuzeren
      }
      ,{
	path: '/messages',
        name: '意见反馈',
        component: messages
      }
      ,{
	path: '/qiandaobaobei',
        name: '签到报备',
        component: qiandaobaobei
      }
      ,{
	path: '/renyuanmingdan',
        name: '人员名单',
        component: renyuanmingdan
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/jiankangdaka',
        name: '健康打卡',
        component: jiankangdaka
      }
      ,{
	path: '/dingdanpeisong',
        name: '订单配送',
        component: dingdanpeisong
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
