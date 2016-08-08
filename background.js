// 单击浏览器按钮时作出反应。
chrome.browserAction.onClicked.addListener(function(tab) {
  var viewTabUrl = chrome.extension.getURL('test-tab.html');
  var imageUrl = 'http://res.miku.us/res/img/default/2016/08/05/150810-890-hex3c7.gif';

  // 查找扩展程序中的所有页面，找到我们可以使用的一个。
  var views = chrome.extension.getViews();
  for (var i = 0; i < views.length; i++) {
    var view = views[i];

    // 如果这一视图有正确的 URL 并且还未使用……
    if (view.location.href == viewTabUrl && !view.imageAlreadySet) {

      // ……调用其中一个函数并设置属性。
      view.setImageUrl(imageUrl);
      view.imageAlreadySet = true;
      break; // 完成
    }
  }
});