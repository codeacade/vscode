// from:  https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image

var myImage = new Image(100, 200);
myImage.src = 'picture.jpg';
document.body.appendChild(myImage);

//  equivalent of <img width="100" height="200" src="picture.jpg">

/////////////////////////////////////////////////////////////////
//  Example of async image loading with Promises:

function asyncImg(url) {
  return new Promise((resolve, reject) => {    
    const img = new Image()   //  Image() is build-in DOM object
    resolve(img)              //  assign img object to succesfull Promise (resolve)
    img.src = url             //  assign url parameter as image cource
  });
}


asyncImg('cat1.jpg').then(                   //  call Promise function and call .then
    img => document.body.appendChild(img),   //  option for succesfull Promise, and
    console.log("ALERT")                     //  option for unsuccesfull Promise
)

