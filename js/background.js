const img = ["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg","img6.jpg","img7.jpg","img8.jpg","img9.jpg","img10.jpg"];
const chosenImg = img[Math.floor(Math.random()*img.length)];
const bgImg = document.createElement("img")
bgImg.src = `img/${chosenImg}`
document.body.appendChild(bgImg)


