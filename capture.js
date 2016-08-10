;new function(){
    
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


    var doc = window.document;
    var je = doc.createElement("script"); 
    je.setAttribute("type", "text/javascript"); 
    je.setAttribute("src", "//cdn.bootcss.com/html2canvas/0.5.0-beta4/html2canvas.min.js");
    var heads = doc.getElementsByTagName("head"); 
    if (heads.length) {
        heads[0].appendChild(je);
    } else {
        doc.documentElement.appendChild(je);
    }


    loadJquery(window, function($){
        var reportUrl = 'http://localhost:12345/reportPlayTime';

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
                    html2canvas(document.body).then(function(canvas){
                        canvas.id = 'screenshotCanvas';
                        document.body.appendChild(canvas);
                        var can = document.getElementById("screenshotCanvas");
                        var imgDataURI = can.toDataURL('image/png');
                        console.log({imgDataURI:imgDataURI});
                    });
                    /* var vWidth = find.width();
                    var vHeight = find.height();
                    var vTop = find.offset().top;
                    var vLeft = find.offset().left;
                    var cutHeight = domainList[i].cutHeight;
                    console.log({
                        width: vWidth,
                        height: domainList[i].cutHeight,
                        x: window.screenX + vLeft - document.body.scrollLeft,
                        y: window.screenY + vTop + (vHeight - cutHeight) - document.body.scrollTop
                    }); */
                    
                    /* (new Image).src = reportUrl + '?' + $.param({
                        width: find.width(),
                        height: find.height(),
                        x: find.offset().left + window.screenX - document.body.scrollLeft,
                        y: find.offset().top + window.screenY - document.body.scrollTop
                    }); */
                }
            }
        }
    });
    
};
