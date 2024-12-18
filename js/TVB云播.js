var rule = {
    模板: '自动',
    host: 'http://www.tvyb03.com',
    url: '/vod/type/id/fyclass/page/fypage.html',
    searchUrl:'/vod/search/page/fypage/wd/**.html',
        二级: {
        "title": "h1&&Text;.data:eq(0) a:eq(0)&&Text",
        "img": ".lazyload&&data-original",
        "desc": ";.data:eq(0) a:eq(2)&&Text;.data:eq(0) a:eq(1)&&Text;.data:eq(2)&&Text;.data:eq(3)&&Text",
        "content": ".text-collapse span&&Text",
        "tabs": ".myui-panel__head h3",
        "lists": ".myui-content__list:eq(#id) li"
    },
}