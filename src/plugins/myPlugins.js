//vue插件一定暴露一个对象
let myPlugins ={}

myPlugins.install = function(vue,option){
   //vue.prototype.$bus:任何组件都能使用
   //vue.directive
   //vue.component
   //vue.filter......
}

export default myPlugins