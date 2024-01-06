var count = 1;
var interval;
var img = document.querySelector(".slider");
function nextImage() {
  console.log(img);
  count = (count % 6) + 1;
  img.setAttribute("src", "./imgs/" + count + ".jpg");
  console.log(count);
}
function prevImage() {
  console.log("previous image");
  console.log(count);
  count--;
  if (count < 1) count = 6;
  img.setAttribute("src", "./imgs/" + count + ".jpg");
}
function startSlider() {
  interval = setInterval(nextImage, 400);
  console.log("startSlider");
}
function stopSlider() {
  clearInterval(interval);
  console.log("stopSlider");
}



// function prevImage() {
//   count = ((count - 2 + 6) % 6) + 1;
//   img.setAttribute("src", `./imgs/${count}.jpg`);
// }
