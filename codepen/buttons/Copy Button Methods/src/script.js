var btn = document.querySelector('.copy--button'),
  btnn = document.querySelector('.data--copy--button');
//status box for when the copy button is pressed
function copyStatus(button, status) {
  let statusBubble = document.querySelector('.copy--status--bubble')
  let successIcon = `<i class='material-icons check_circle'>check</i>`;
  let failIcon = `<i class='material-icons'>Highlight Off</i>`;
  statusBubble.classList.add('status--fade--in');

  setTimeout(function() {
    statusBubble.classList.remove('status--fade--in');

  }, 1500)

  if (status === true) {
    statusBubble.innerHTML = successIcon + 'copy successful';
  }
  if (status === false) {
    statusBubble.innerHTML = failIcon + 'copy failed';
  }

}

//basic copy function for grabing text that is visible
function basicCopy(obj, btn) {

  function basicCopyActivate() {
    let object = document.querySelector(obj);
    let range = document.createRange();
    range.selectNode(object);
    window.getSelection().addRange(range);

    try {
      let success = document.execCommand('copy');
      let msg = success ? 'successful' : 'unsuccessful';
      copyStatus(btn, true)
      console.log(msg);
    } catch (err) {
      console.log(err);
      copyStatus(btn, false);
    }
    window.getSelection().removeAllRanges();
  }
  btn.addEventListener('click', basicCopyActivate);
}
//copying the data value of an element. 
//takes the 'data' and puts that inside of a div element that is
//hidden off to the left and top of the page
//selects that text, executes the copy command, removes the selection
//an alternate method would be to create the "clipboard" node inside of the function
//to hold the data and then removed once the function is complte.
function dataCopy(obj, localBtn, data) {
  let dataButton = document.querySelector(localBtn);

  function dataCopyActivate() {

    let item = document.querySelector(obj),
      clipboardArea = document.createElement('div'),
      dataRange = document.createRange(),
      content = item.getAttribute(data);

    clipboardArea.classList.add('hidden--clipboard');
    clipboardArea.style.cssText =
      `position: absolute;
       left: -9999px;
       top: -9999px;`;

    clipboardArea.innerText = content;

    document.body.appendChild(clipboardArea);

    dataRange.selectNode(clipboardArea);
    window.getSelection().addRange(dataRange);
    try {
      let success = document.execCommand('copy');
      let msg = success ? 'successful' : 'unsuccessful';
      console.log(msg);
      copyStatus(localBtn, true)
    } catch (err) {
      console.log(err);
      copyStatus(localBtn, false);
    }
    window.getSelection().removeAllRanges();
  }
  dataButton.addEventListener('click', dataCopyActivate)
}
basicCopy('.copy--area', btn);
dataCopy('.twitter--link', '.data--copy--button', 'href');
dataCopy('.arb', '.data--copy--button--2', 'value');
