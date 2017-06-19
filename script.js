// Your JS goes here

for (var i = 0; i < 36; i++) {
  var createDiv = document.createElement('div')
  createDiv.style.cssText = 'width:11.1%; height: 10vw; float:left; paddingBottom: 11.1%; background: black;'
  console.log(createDiv)
  document.body.appendChild(createDiv)

  var createDiv = document.createElement('div')
  createDiv.style.cssText = 'width:11.1%; height: 10vw; float:left; paddingBottom: 11.1%; background: red;'
  console.log(createDiv)
  document.body.appendChild(createDiv)
}
