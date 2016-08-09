// 将选项保存在 chrome.storage 中。
function save_options() {
  var color = document.getElementById('color').value;
  var likesColor = document.getElementById('like').checked;
  chrome.storage.sync.set({
    favoriteColor: color,
    likesColor: likesColor
  }, function() {
    // 更新状态，告诉用户选项已保存。
    var status = document.getElementById('status');
    status.textContent = '选项已保存。';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// 从保存在 chrome.storage 中的首选项恢复选择框和复选框状态。
function restore_options() {
  // 使用默认值 color = 'red' 和 likesColor = true 。
  chrome.storage.sync.get({
    favoriteColor: 'red',
    likesColor: true
  }, function(items) {
    document.getElementById('color').value = items.favoriteColor;
    document.getElementById('like').checked = items.likesColor;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);