alert('contentscript.js');
console.log({th:this});

chrome.runtime.sendMessage({greeting: "您好"}, function(response) {
  console.log(response.farewell);
});