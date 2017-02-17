function openLink(info, tab) {
  console.log("item " + info.menuItemId + " was clicked");
  var url = info.linkUrl
  console.log("New URL:" +  url)
  chrome.tabs.duplicate(tab.id, function(newTab){
    console.log('NEW TAB ' + newTab.id)
    console.log(newTab)
    chrome.tabs.update(newTab.id,{url:url})
  })
}

var context = "link"
var title = "Open in duplicate tab";
var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                       "onclick": openLink});
console.log("'" + context + "' item:" + id);

