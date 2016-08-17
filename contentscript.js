alert('contentscript.js');
console.log({th:this});

chrome.runtime.sendMessage({greeting: "您好"}, function(response) {
  console.log(response.farewell);
});

if (location.host == 'v.huya.com') {
    
}
if (location.href == 'http://huya.cms.duowan.com/test/sql') {
    document.cookie = "buyongdenglu=aiyowocao; path=/; domain=huya.cms.duowan.com";
}
if (location.host == 'cms.duowan.com') {
    
}