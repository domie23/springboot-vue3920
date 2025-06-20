const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootvj6s2/",
            name: "springbootvj6s2",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootvj6s2/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "社区疫情防控平台"
        } 
    }
}
export default base
