// 永久网址：https://libvio.app
muban.首图2.二级.title = 'h1&&Text;.data:eq(0)&&Text'
muban.首图2.二级.desc = '.data.hidden-xs&&Text;;;.data:eq(1)&&Text;.data:eq(4)&&Text'
muban.首图2.二级.content = '.detail-content&&Text'
var rule = {
	title:'LIBVIO',
	模板:'首图2',
	host:'https://www.libvio.app',
	hostJs:'print(HOST);let html=request(HOST,{headers:{"User-Agent":PC_UA}});let src=jsp.pdfh(html,"li:eq(0)&&a:eq(2)&&href");print(src);HOST=src',
	// url:'/type/fyclass-fypage.html',
	url:'/show/fyclassfyfilter.html',
	filterable:1,//是否启用分类筛选,
	filter_url:'-{{fl.area}}-{{fl.by}}--{{fl.lang}}----fypage---{{fl.year}}',
	filter: 'H4sIAAAAAAAAA+1YXU8TQRT9L/Pch5kFWuSvGB5Ws1EC1qSgSUOamAAGRWhClE0jRk34KAm1qxKEJS1/pjPt/gtnmY97V+NakqJtMm9zzrl3t2d27kl3Vwkjc/dXyWJQJXPErwQ+KZCy/ySQiO9H/E0s8XN/6VlwU1ZO6Y1mstZMaQlIraDY3kWLv+/wg+Ok8VJrGSpblxw1xEU7U6epX65Xj8RlN3s9RZm6fndHkrpCA6OJ7+9A08Bog62voGlg+8JDsX9q+hQwWvLxBPo0MBrv/gBNA/gtEf4tUaZvO+LxkelTwPat1+UO8s0T02qxdXJ43a+3+q8axozF9vqvP4mta9lmbmGxrdg4713tGVmB2nyqqoNRDfwKOhiXZ72rzpAHw6PetOZuloifAn4K8x7wHuYZ8AzzFHiKeHbP8nKJ+FngZzFfAr6E+SLwRczPAD+DefDLsF8Gfhn2y8Avw34Z+GXYLwO/cokf05JffgSPadBuDZovhnxM8jzKenMCFECzApoGdv6+HYCmgZ2VsMO3Q5ABo2lCsgJoCkHTAE020hRAU4icKIDOOf+yBuc8BXgDH1Rh+8TOLo/rv22fCM+T8ExfYmVBltrIimMRvdXK44WVZdjA9jrfNLG4/PBpJUjvOl8g3v8I37+H6rAhnReGeSGaH9p/Dsrc0N6LZK7xD59Nq8Uu5FzITWLIjVtYTY8yrDKxMlRoiNNjGRVGU8CN9uSPtuUp+KXYLwW/FPul4JdivxT8UuyXgl+K/VLwK5cuasYgauR5HEnW3PpNzmXGRGSGm9ExmNHiaGY072Ug7w9/3tcW98XDTb+b/jv9clFC0/9vb177CdukNH21FgAA',
	headers:{
		'User-Agent':'MOBILE_UA'
	},
	class_parse:'.stui-header__menu li:gt(0):lt(7);a&&Text;a&&href;/(\\d+).html',
	// tab_exclude:'夸克网盘|百度云盘',
	pagecount:{"27":1},
	    lazy: $js.toString(() => {
        input = {
            parse: 1,
            url: input,
            js: 'document.querySelector("#playleft iframe").contentWindow.document.querySelector("#player").click()',
        }
    }),
	// searchUrl:'/search/**----------fypage---.html',
	searchUrl:'/index.php/ajax/suggest?mid=1&wd=**&limit=50',
	detailUrl:'/detail/fyid.html', //非必填,二级详情拼接链接
	搜索:'json:list;name;pic;;id',
}