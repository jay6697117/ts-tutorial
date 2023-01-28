export default {};
export function printResult(param: any, tag: string = 'h1'): void {
  param = JSON.stringify(param);
  const node = document.createElement(tag);
  const hr = document.createElement('hr');
  node.innerHTML = param;
  document.body.appendChild(node);
  document.body.appendChild(hr);
}
