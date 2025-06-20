
var projectName = '社区疫情防控平台';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
{
	name: '我的发布',
	url: '../forum/list-my.html'
},

]


var indexNav = [

{
	name: '商品信息',
	url: './pages/shangpinxinxi/list.html'
}, 

{
	name: '居民交流',
	url: './pages/forum/list.html'
}, 
{
	name: '公告信息',
	url: './pages/news/list.html'
},
{
	name: '意见反馈',
	url: './pages/messages/list.html'
}
]

var adminurl =  "http://localhost:8080/springbootvj6s2/admin/dist/index.html";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-taxi","buttons":["新增","查看","修改","删除"],"menu":"负责人","menuJump":"列表","tableName":"fuzeren"}],"menu":"负责人管理"},{"child":[{"appFrontIcon":"cuIcon-list","buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"appFrontIcon":"cuIcon-time","buttons":["查看","修改","删除"],"menu":"健康打卡","menuJump":"列表","tableName":"jiankangdaka"}],"menu":"健康打卡管理"},{"child":[{"appFrontIcon":"cuIcon-rank","buttons":["查看","修改","删除","审核"],"menu":"人员名单","menuJump":"列表","tableName":"renyuanmingdan"}],"menu":"人员名单管理"},{"child":[{"appFrontIcon":"cuIcon-list","buttons":["查看","修改","删除"],"menu":"签到报备","menuJump":"列表","tableName":"qiandaobaobei"}],"menu":"签到报备管理"},{"child":[{"appFrontIcon":"cuIcon-paint","buttons":["新增","查看","修改","删除"],"menu":"商品信息","menuJump":"列表","tableName":"shangpinxinxi"}],"menu":"商品信息管理"},{"child":[{"appFrontIcon":"cuIcon-present","buttons":["查看","修改","删除"],"menu":"采购需求","menuJump":"列表","tableName":"caigouxuqiu"}],"menu":"采购需求管理"},{"child":[{"appFrontIcon":"cuIcon-clothes","buttons":["查看","修改","删除"],"menu":"订单配送","menuJump":"列表","tableName":"dingdanpeisong"}],"menu":"订单配送管理"},{"child":[{"appFrontIcon":"cuIcon-group","buttons":["查看","修改","删除"],"menu":"居民交流","tableName":"forum"}],"menu":"居民交流"},{"child":[{"appFrontIcon":"cuIcon-message","buttons":["查看","修改","回复","删除"],"menu":"意见反馈","tableName":"messages"}],"menu":"意见反馈"},{"child":[{"appFrontIcon":"cuIcon-pay","buttons":["查看","修改"],"menu":"轮播图管理","tableName":"config"},{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"公告信息","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-cardboard","buttons":["查看","采购需求"],"menu":"商品信息列表","menuJump":"列表","tableName":"shangpinxinxi"}],"menu":"商品信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-time","buttons":["查看","审核"],"menu":"健康打卡","menuJump":"列表","tableName":"jiankangdaka"}],"menu":"健康打卡管理"},{"child":[{"appFrontIcon":"cuIcon-rank","buttons":["新增","查看"],"menu":"人员名单","menuJump":"列表","tableName":"renyuanmingdan"}],"menu":"人员名单管理"},{"child":[{"appFrontIcon":"cuIcon-list","buttons":["查看","审核"],"menu":"签到报备","menuJump":"列表","tableName":"qiandaobaobei"}],"menu":"签到报备管理"},{"child":[{"appFrontIcon":"cuIcon-present","buttons":["查看","配送"],"menu":"采购需求","menuJump":"列表","tableName":"caigouxuqiu"}],"menu":"采购需求管理"},{"child":[{"appFrontIcon":"cuIcon-clothes","buttons":["查看","修改"],"menu":"订单配送","menuJump":"列表","tableName":"dingdanpeisong"}],"menu":"订单配送管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-cardboard","buttons":["查看","采购需求"],"menu":"商品信息列表","menuJump":"列表","tableName":"shangpinxinxi"}],"menu":"商品信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"负责人","tableName":"fuzeren"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-time","buttons":["新增","查看"],"menu":"健康打卡","menuJump":"列表","tableName":"jiankangdaka"}],"menu":"健康打卡管理"},{"child":[{"appFrontIcon":"cuIcon-list","buttons":["新增","查看"],"menu":"签到报备","menuJump":"列表","tableName":"qiandaobaobei"}],"menu":"签到报备管理"},{"child":[{"appFrontIcon":"cuIcon-present","buttons":["查看","支付"],"menu":"采购需求","menuJump":"列表","tableName":"caigouxuqiu"}],"menu":"采购需求管理"},{"child":[{"appFrontIcon":"cuIcon-clothes","buttons":["查看"],"menu":"订单配送","menuJump":"列表","tableName":"dingdanpeisong"}],"menu":"订单配送管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-cardboard","buttons":["查看","采购需求"],"menu":"商品信息列表","menuJump":"列表","tableName":"shangpinxinxi"}],"menu":"商品信息模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
