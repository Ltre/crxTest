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

loadJquery(window, function($){
    
    var domainList = {
        vhuya: {
            regexp: /^(https?:\/\/)?v\.huya\.com\/.*/i,
            selector: '#video_embed>embed:first',
            cutHeight: 40
        },
        youku: {
            regexp: /^(https?:\/\/)?([^.]+\.)*v\.youku\.com\/.*/i,
            selector: '#player>object:first',
            cutHeight: 40
        },
        bilibili: {
            regexp: /^(https?:\/\/)?(www\.)?bilibili\.com\/.*/i,
            selector: '#bofqi>object:first',
            cutHeight: 40
        }
    };

    for (var i in domainList) {
        if (location.href.match(domainList[i].regexp)) {
            var find = $(domainList[i].selector);
            if (find.size() > 0) {
                //以body为参照，获取x,y,width,height
                console.log({
                    width: find.width(),
                    height: domainList[i].cutHeight,
                    x: find.offset().left,
                    y: find.offset().top
                });
                
                //以整个屏幕为参照，获取x,y,width,height
                var vWidth = find.width();
                var vHeight = find.height();
                var vTop = find.offset().top;
                var vLeft = find.offset().left;
                var cutHeight = domainList[i].cutHeight;
                console.log({
                    width: vWidth,
                    height: domainList[i].cutHeight,
                    x: window.screenX + vLeft - document.body.scrollLeft,
                    y: window.screenY + vTop + (vHeight - cutHeight) - document.body.scrollTop
                });
            }
        }
    }
    
});
