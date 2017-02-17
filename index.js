function openLink (info, tab) {
  var url = info.linkUrl
  chrome.tabs.duplicate(tab.id, function (newTab) {
    chrome.tabs.update(newTab.id, {url: url})
  })
}

chrome.contextMenus.create({
  'title': 'Open in duplicate tab',
  'contexts': ['link'],
  'onclick': openLink
}
)
