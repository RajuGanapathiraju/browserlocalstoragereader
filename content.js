function sendLocalStorageToBackground() {
  const localStorageData = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    localStorageData[key] = value;
  }

  chrome.runtime.sendMessage({ type: 'localData', data: localStorageData });
}

sendLocalStorageToBackground();
