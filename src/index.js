/* Interactive Canvas App
  How app works
    - define a wrapper obj Canvas.
    - Use Fabric to define the Obj you wanna draw.
    - Add it to the canvas.
  By: mohammed@redapesolutions.com
*/

// TODO: place required npm packages here after you remove the CDN links

// var data = {
//   //
// }

// var canvasApp = new Vue({
//   data: data
// })

$(document).ready(function () {
// global settings and variables
  var canvas = this.__canvas = new fabric.Canvas('main_canvas')
  fabric.Object.prototype.transparentCorners = false
  var radius = 500
  var imgs = ['./assets/rose.jpg', './assets/pyramid.jpg', './assets/majestic_cat.jpg', './assets/sleepy_cat.jpg', './assets/small_cat.jpg']
  canvas.setHeight(500)
  canvas.setWidth(500)

  $('#addTxt').click(() => {
    var text = new fabric.Text('some text here', {
      left: (Math.random() * 100) + 200,
      top: (Math.random() * 100) + 200 })
    canvas.add(text)
  })

  $('#addImg').click(() => {
  // adding an canvas image with it's props
    fabric.Image.fromURL(imgs[Math.floor(Math.random() * imgs.length)], function (img) {
      img.scale(Math.random()).set({
        left: (Math.random() * 100) + 100,
        top: (Math.random() * 100) + 100,
        angle: -(Math.random() * 100),
        clipTo: function (ctx) {
          ctx.arc(0, 0, radius, 0, Math.PI * 2, true)
        }
      })
      canvas.add(img)
    })
  })

  $('#uploadImg').click(() => {
  // upload images to canvas
    inprogress('upload images')
  })

  $('#clearCanvas').click(() => {
    // simply clear the canvas
    canvas.clear()
    // (function animate () {
    //   fabric.util.animate({
    //     startValue: Math.round(radius) === 50 ? 50 : 300,
    //     endValue: Math.round(radius) === 50 ? 300 : 50,
    //     duration: 1000,
    //     onChange: function (value) {
    //       radius = value
    //       canvas.renderAll()
    //     },
    //     onComplete: animate
    //   })
    // })()
  })

  $('#changeBg').click(() => {
    // accessing canvas background property and rerendering canvas obj
    canvas.backgroundColor = jscolor
    canvas.renderAll()
  })

  // // animating image files
  // (function animate () {
  //   fabric.util.animate({
  //     startValue: Math.round(radius) === 50 ? 50 : 300,
  //     endValue: Math.round(radius) === 50 ? 300 : 50,
  //     duration: 1000,
  //     onChange: function (value) {
  //       radius = value
  //       canvas.renderAll()
  //     },
  //     onComplete: animate
  //   })
  // })()
})

// Work in porgress function for the unfinished stuff
function inprogress (feature) {
  window.alert(feature + ' : ' + 'is a work in progress')
}
