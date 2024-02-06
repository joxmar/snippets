export const jsCopyToClipboard = {
name : "Copy Text To Clipboard",
cats : ['javascript'],
language : "Javascript",
snippet : `
function CopyToClipboard(id){
  var r = document.createRange();
  r.selectNode(document.getElementById(id));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(r);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
}
`
}