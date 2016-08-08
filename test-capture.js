function loadJquery(win, onload){
    if (win.jQuery) {
	    var doc = win.document;
		var je = doc.createElement("script"); 
		je.setAttribute("type", "text/javascript"); 
		je.setAttribute("src", "//cdn.bootcss.com/jquery/2.1.4/jquery.min.js");
		var heads = doc.getElementsByTagName("head"); 
		if (heads.length) {
			heads[0].appendChild(je);
		} else {
			doc.documentElement.appendChild(je);
		}
    }
	var iv = setInterval(function(){
        win.jQuery && ! function(){
            clearInterval(iv);
            if ('function' == typeof onload) {
                win.jQuery(function(){
                    onload(win.jQuery);
                });
            }
        }();
    }, 10);
}


/* new function(){
    var doc = win.document;
    var je = doc.createElement("script"); 
    je.setAttribute("type", "text/javascript"); 
    je.setAttribute("src", "//cdn.bootcss.com/html2canvas/0.4.1/html2canvas.min.js");
    var heads = doc.getElementsByTagName("head"); 
    if (heads.length) {
        heads[0].appendChild(je);
    } else {
        doc.documentElement.appendChild(je);
    }
}; */


/**
 * @todo 测试自动匹配截屏区域
 */
loadJquery(window, function($){
    if (location.href.match(/^(https?:\/\/)?(www\.)?bilibili.com\/.*/i)) {
        var areaz = $('#bofqi');
        var t1 = areaz[0].offsetTop + parseInt(areaz.css('height').replace('px', '')) - 70;//上top
        var t2 = areaz[0].offsetTop + parseInt(areaz.css('height').replace('px', '')) - 40;//下top
        var l1 = areaz[0].offsetLeft;//左left
        var l2 = areaz[0].offsetLeft + parseInt(areaz.css('left').replace('px', '')) - 40;//右left
        console.log([t1, t2, l1, l2]);//fuck
        console.log({width:areaz.css('width')});
        console.log({height:areaz.css('height')});
        console.log({offsetLeft:areaz[0].offsetLeft});
        console.log({offsetTop:areaz[0].offsetTop});
        //开始截图过程，直接利用canvas画图（猜测）
    }
});