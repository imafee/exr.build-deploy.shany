export function ajax(method, url, cbStateChange, cbError) {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url, true);
  xhr.onreadystatechange = () => handleStateChange.call(xhr, cbStateChange);
  xhr.onerror = () => handleError.call(xhr, cbError);
  xhr.send(null);
  return xhr;
}

function handleStateChange(cbStateChange) {
  // 通信成功时，状态值为4
  if (this.readyState === 4) {
    if (this.status !== 200) {
      console.error(this.statusText);
      return;
    }
    cbStateChange(this.response);
  }
}

function handleError(cbError) {
  cbError(this.statusText);
}
