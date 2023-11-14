
function handleLocalStorage(data) {
  console.log('Localstorage data', data);
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.type === 'localData') {
    handleLocalStorage(request.data);
  }
});
