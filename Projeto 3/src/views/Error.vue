<template>
<div>
<div class="camera">
<h1 class="h1cc">Error 404</h1>
<h3>Page Not Found</h3>
</div>
<div id="camera" class="camera">
  <div class="camera-body">
    <div class="camera-body-1"></div>
    <div class="camera-body-2"></div>
    <div class="camera-body-3"></div>
    <div class="camera-body-4"></div>
    <div class="camera-body-5"></div>
  </div>

  <div class="lens-group">
    <div class="lens-group-1">
      <div class="lens-1 lens"></div>
      <div class="lens-2 lens"></div>
    </div>

    <div class="lens-group-2">
      <div class="lens-3 lens"></div>
      <div class="lens-4 lens"></div>
    </div>

    <div class="lens-group-3">
      <div class="lens-5 lens"></div>
      <div class="lens-6 lens"></div>
      <div class="lens-7 lens"></div>
      <div class="lens-8 lens"></div>
    </div>

    <div class="lens-group-4 lens-9 lens grey"></div>

    <div class="lens-group-5">
      <div class="lens-10 lens"></div>
      <div class="lens-11 lens"></div>
      <div class="lens-12 lens"></div>
      <div class="lens-13 lens grey"></div>
      <div class="lens-14 lens"></div>
    </div>

    <div class="lens-group-6 lens-15 lens grey"></div>
  </div>
  
  <div class="smoke"></div>
  <div class="smoke-camera-upper"></div>
  <div class="smoke-camera-bottom"></div>
  
  <!-- <input type="range" min="0" max="30" value="0" class="slider" id="slider" readonly> -->
</div>
</div>
</template>

<style scoped>
@keyframes type{
	  from{box-shadow: inset -3px 0px 0px #404040;}
	  to{box-shadow: inset -3px 0px 0px transparent;}
}



.h1cc{
	  font-size: 50px;
	  display: inline-block;
	  padding-right: 12px;
	  animation: type .5s alternate infinite;
	  margin: 10px;
	text-shadow: 0 2px 5px rgb(0 0 0 / 23%), 0 3px 10px rgb(0 0 0 / 16%);
}

 :root {
	 --margin-x: -5px;
	 --white: #fff;
	 --dark-grey: #3d3d3d;
	 --grey: #565656;
	 --mid-grey: #737373;
	 --semi-grey: #9f9f9f;
	 --semi-light-grey: #d0d0d0;
	 --light-grey: #fcfcfc;
}
 /* *, *:before, *:after {
	 box-sizing: border-box;
} */
 body {
	 display: flex;
	 align-items: center;
	 justify-content: center;
	 height: 100vh;
	 background: rgb(255, 255, 255);
	 overflow: hidden;
	 font-family: 'Lato', sans-serif;
	 color: #404040;
}
 .camera {
	 display: flex;
	 align-items: center;
	 position: relative;
	 margin-top: 20px;
	 margin-left: 40%;
}
 .camera-body {
	 position: relative;
	 width: 120px;
	 height: 205px;
	 z-index: 1;
	 transform: scale(0);
	 animation: camera 0.5s cubic-bezier(1, 1.6, 0.5, 1) forwards;
	 filter: drop-shadow(0 4px var(--dark-grey)) drop-shadow(0 -4px var(--dark-grey)) drop-shadow(4px 0 var(--dark-grey)) drop-shadow(-4px 0 var(--dark-grey));
}
 .camera-body-1 {
	 position: absolute;
	 top: 0;
	 left: 20px;
	 width: 70px;
	 height: 205px;
	 background: var(--mid-grey);
	 border-radius: 25px 25px 0;
}
 .camera-body-1:before {
	 content: '';
	 background: var(--dark-grey);
	 position: absolute;
	 width: 10px;
	 height: 10px;
	 border-radius: 50%;
	 top: 20px;
	 left: 35px;
	 z-index: 1;
	 transform: scale(0);
	 animation: camera 0.3s 0.8s cubic-bezier(1, 1.6, 0.5, 1) forwards;
	 box-shadow: 0 0 0 10px var(--grey), 0 0 0 15px var(--dark-grey), -20px 0 var(--dark-grey), -22px 0 var(--dark-grey), -24px 0 var(--dark-grey), -26px 0 var(--dark-grey), -28px 0 var(--dark-grey), -30px 0 var(--dark-grey);
}
 .camera-body-2 {
	 position: absolute;
	 top: 35px;
	 right: 10px;
	 width: 90px;
	 height: 100px;
	 background: var(--mid-grey);
	 border-radius: 0 20px 30px 0;
}
 .camera-body-2:before {
	 content: '';
	 position: absolute;
	 width: 5px;
	 height: 8px;
	 border-radius: 2px 0 0 2px;
	 background: var(--dark-grey);
	 left: -5px;
	 top: -10px;
	 box-shadow: 1px 125px 0 -1px var(--dark-grey), 1px 145px 0 -1px var(--dark-grey);
}
 .camera-body-3 {
	 position: absolute;
	 bottom: 0;
	 right: 0;
	 width: 100px;
	 height: 55px;
	 background: #606060;
	 box-shadow: inset -21px -20px 0 4px var(--grey);
	 border-radius: 0 50px 50px 40px;
}
 .camera-body-3:after {
	 content: '';
	 width: 10px;
	 height: 10px;
	 background: var(--dark-grey);
	 border-radius: 50%;
	 position: absolute;
	 right: 40px;
	 bottom: 15px;
	 box-shadow: 0 -20px var(--dark-grey), 0 -40px var(--dark-grey), 32px -10px 0 3px #333;
}
 .camera-body-3:before {
	 content: '';
	 width: 25px;
	 height: 55px;
	 background: linear-gradient(to bottom, var(--light-grey) 60%, #c3c3c3 60%, #c3c3c3 100%);
	 border: 5px solid var(--dark-grey);
	 border-radius: 5px;
	 bottom: 10px;
	 left: 15px;
	 position: absolute;
	 box-shadow: 42px 10px 0 -10px var(--dark-grey);
	 transform: scale(0);
	 animation: camera 0.3s 0.8s cubic-bezier(1, 1.6, 0.5, 1) forwards;
}
 .camera-body-4 {
	 position: absolute;
	 top: 50px;
	 right: 5px;
	 width: 110px;
	 height: 75px;
	 background: var(--grey);
	 border-radius: 100% / 30%;
	 border-top: 3px solid var(--dark-grey);
	 border-bottom: 3px solid var(--dark-grey);
	 box-shadow: inset 14px 0 var(--grey), inset -24px 14px 0 -8px var(--mid-grey), inset -24px -14px 0 -8px var(--mid-grey);
}
 .camera-body-4:before {
	 content: '';
	 position: absolute;
	 top: 50%;
	 left: 20px;
	 width: 25px;
	 height: 35px;
	 background: linear-gradient(to bottom, var(--light-grey) 50%, #c3c3c3 50%, #c3c3c3 100%);
	 border: 5px solid var(--dark-grey);
	 border-radius: 5px;
	 transform: translatey(-50%);
}
 .camera-body-4:after {
	 content: '';
	 position: absolute;
	 top: 50%;
	 left: 20px;
	 height: 10px;
	 width: 15px;
	 background: var(--dark-grey);
	 border-radius: 10px;
	 transform: translatey(-50%);
}
 .camera-body-5 {
	 position: absolute;
	 top: 15px;
	 right: 20px;
	 width: 20px;
	 height: 25px;
	 background: var(--mid-grey);
	 border-radius: 0 5px 0 0;
}
 .lens-group {
	 display: flex;
	 align-items: center;
	 margin-left: -3px;
	 margin-top: -27px;
}
 .lens-group [class*="lens-group-"] {
	 display: flex;
	 align-items: center;
}
 .lens-group > div {
	 margin-left: var(--margin-x);
	 opacity: 0;
}
 .lens-group .lens-group-1 {
	 animation: lens 1.2s 0.85s ease-in-out forwards;
}
 .lens-group .lens-group-2 {
	 animation: lens 1.2s 0.9s ease-in-out forwards;
}
 .lens-group .lens-group-3 {
	 animation: lens 1.2s 0.95s ease-in-out forwards;
}
 .lens-group .lens-group-4 {
	 animation: lens 1.2s 1s ease-in-out forwards;
}
 .lens-group .lens-group-5 {
	 animation: lens 1.2s 1.05s ease-in-out forwards;
}
 .lens-group .lens-group-6 {
	 animation: lens 1.2s 1.1s ease-in-out forwards;
}
 .lens-group .lens {
	 background: var(--light-grey);
	 background: linear-gradient(to bottom, var(--light-grey) 60%, #c2c2c2 60%, #c2c2c2 80%, var(--semi-grey) 80%, var(--semi-grey) 100%);
	 border: 5px solid var(--dark-grey);
	 border-radius: 5px;
}
 .lens-group .lens-1 {
	 height: 80px;
	 width: 30px;
	 position: relative;
	 border-left: 3px solid;
	 border-right: 0;
}
 .lens-group .lens-1:before {
	 content: '';
	 position: absolute;
	 top: 0;
	 right: 0;
	 bottom: 0;
	 width: 4px;
	 background: var(--semi-light-grey);
	 background: linear-gradient(to bottom, var(--semi-light-grey) 60%, var(--semi-grey) 60%, var(--semi-grey) 80%, var(--semi-grey) 80%, var(--semi-grey) 100%);
}
 .lens-group .lens-1:after {
	 content: '';
	 position: absolute;
	 top: -10px;
	 left: 4px;
	 width: 15px;
	 height: 20px;
	 border: 4px solid var(--dark-grey);
	 background: #b0b0b0;
	 border-radius: 4px;
}
 .lens-group .lens-2 {
	 height: 100px;
	 width: 30px;
	 margin-left: -5px;
}
 .lens-group .lens-3 {
	 height: 100px;
	 width: 35px;
	 position: relative;
}
 .lens-group .lens-3:before {
	 content: '';
	 position: absolute;
	 top: -10px;
	 left: 50%;
	 width: 20px;
	 height: 25px;
	 border: 4px solid var(--dark-grey);
	 background: #b0b0b0;
	 border-radius: 4px;
	 transform: translatex(-50%);
}
 .lens-group .lens-4 {
	 width: 15px;
	 height: 95px;
	 margin-left: -5px;
}
 .lens-group .lens-5 {
	 height: 90px;
	 width: 10px;
	 border-right: 0;
	 border-radius: 0;
}
 .lens-group .lens-6 {
	 height: 92px;
	 width: 5px;
	 transform: perspective(10px) rotatey(-5deg);
	 border-left: 0;
	 border-right: 0;
	 border-radius: 0;
}
 .lens-group .lens-6:before {
	 content: '';
	 position: absolute;
	 top: 0;
	 bottom: 0;
	 left: 50%;
	 width: 4px;
	 background: var(--semi-light-grey);
	 background: linear-gradient(to bottom, var(--semi-light-grey) 60%, var(--semi-grey) 60%, var(--semi-grey) 80%, var(--semi-grey) 80%, var(--semi-grey) 100%);
	 transform: translatex(-50%);
}
 .lens-group .lens-7 {
	 width: 15px;
	 height: 94px;
	 border-left: 0;
	 border-radius: 0;
}
 .lens-group .lens-8 {
	 width: 15px;
	 height: 105px;
	 margin-left: -5px;
}
 .lens-group .lens-9 {
	 position: relative;
	 width: 30px;
	 height: 110px;
}
 .lens-group .lens-9:before {
	 content: '';
	 position: absolute;
	 top: 0;
	 right: 0;
	 bottom: 0;
	 left: 0;
	 background: repeating-linear-gradient(transparent, transparent 5px, var(--dark-grey) 5px, var(--dark-grey) 7px);
}
 .lens-group .lens-10 {
	 width: 10px;
	 height: 90px;
	 border-right: 0;
	 border-radius: 0;
}
 .lens-group .lens-11 {
	 width: 5px;
	 height: 92px;
	 transform: perspective(10px) rotatey(-5deg);
	 border-left: 0;
	 border-right: 0;
	 border-radius: 0;
}
 .lens-group .lens-12 {
	 width: 20px;
	 height: 94px;
	 border-left: 0;
	 border-radius: 0;
}
 .lens-group .lens-13 {
	 position: relative;
	 width: 50px;
	 height: 105px;
	 margin-left: -5px;
}
 .lens-group .lens-13:before {
	 content: '';
	 position: absolute;
	 top: 0;
	 right: 10px;
	 bottom: 0;
	 left: 10px;
	 background: repeating-linear-gradient(transparent, transparent 5px, var(--dark-grey) 5px, var(--dark-grey) 7px);
}
 .lens-group .lens-13:after {
	 content: '';
	 position: absolute;
	 top: 0;
	 bottom: 0;
	 left: 50%;
	 background: linear-gradient(to bottom, var(--mid-grey) 60%, #5e5e5e 60%, #5e5e5e 80%, #545454 80%, #545454 100%);
	 transform: translate(-50%);
}
 .lens-group .lens-14 {
	 position: relative;
	 width: 30px;
	 margin-left: -5px;
	 height: 105px;
}
 .lens-group .lens-14:before {
	 content: '';
	 position: absolute;
	 top: 0;
	 right: 4px;
	 bottom: 0;
	 width: 5px;
	 background: #fe3d3f;
}
 .lens-group .lens-15 {
	 position: relative;
	 width: 30px;
	 height: 90px;
}
 .lens-group .lens-15:before {
	 content: '';
	 position: absolute;
	 top: -5px;
	 bottom: -5px;
	 left: 50%;
	 width: 1px;
	 background: var(--dark-grey);
	 transform: translatex(-50%);
}
 .lens-group .grey {
	 background: var(--mid-grey);
	 background: linear-gradient(to bottom, var(--mid-grey) 60%, #5e5e5e 60%, #5e5e5e 80%, #545454 80%, #545454 100%);
}
 /* .smoke {
	 background: var(--white);
	 width: 20px;
	 height: 20px;
	 border-radius: 50%;
	 margin-left: 50px;
	 margin-top: -30px;
	 opacity: 0;
	 animation: smoke 1s 1.5s ease forwards;
	 box-shadow: -10px 10px 0 0 var(--white), -10px -10px 0 0 var(--white), -5px -5px 0 0 var(--white), -5px 5px 0 0 var(--white);
}
 .smoke-camera-upper, .smoke-camera-bottom {
	 position: absolute;
	 top: -40px;
	 width: 10px;
	 height: 10px;
	 background: rgba(255, 255, 255, .2);
	 border-radius: 20px;
	 opacity: 0;
	 box-shadow: 20px 20px 0 -2px rgba(255, 255, 255, .6), 70px 20px 0 -2px rgba(255, 255, 255, .6);
	 animation: smoke-extra 1.5s 1.2s ease forwards;
}
 .smoke-camera-bottom {
	 top: auto;
	 bottom: -30px;
} 
  .no-animation .lens-group > [class*="lens-group-"] {
	 animation: none;
	 opacity: 1;
} 
  .slider {
	 -webkit-appearance: none;
	 position: absolute;
	 left: 50%;
	 bottom: -60px;
	 -webkit-appearance: none;
	 width: 200px;
	 height: 15px;
	 border-radius: 15px;
	 background: #404040;
	 outline: none;
	 user-select: none;
	 transform: translatex(-50%);
}
 .slider::-webkit-slider-thumb {
	 -webkit-appearance: none;
	 appearance: none;
	 width: 30px;
	 height: 30px;
	 border-radius: 50%;
	 background: #eee;
	 cursor: pointer;
	 box-shadow: 0 0 0 4px rgba(0, 0, 0, .1), 0 0 0 15px rgba(0, 0, 0, .1);
}
 .slider::-moz-range-thumb {
	 width: 30px;
	 height: 30px;
	 border-radius: 50%;
	 background: #eee;
	 cursor: pointer;
	 box-shadow: 0 0 0 4px rgba(0, 0, 0, .1), 0 0 0 15px rgba(0, 0, 0, .1);
} */
 @keyframes camera {
	 to {
		 transform: scale(1);
	}
}
 @keyframes lens {
	 20% {
		 opacity: 1;
	}
	 60% {
		 margin-left: 40px;
	}
	 80% {
		 margin-left: 40px;
	}
	 100% {
		 margin-left: 0;
		 opacity: 1;
	}
}
 @keyframes smoke {
	 80% {
		 opacity: 1;
		 box-shadow: -40px 40px var(--white), -40px -40px var(--white), -20px -20px var(--white), -20px 20px var(--white);
	}
	 100% {
		 opacity: 0;
		 width: 10px;
		 height: 10px;
		 box-shadow: -40px 40px 0 -10px var(--white), -40px -40px 0 -10px var(--white), -20px -20px 0 -10px var(--white), -20px 20px 0 -10px var(--white);
	}
}
 @keyframes smoke-extra {
	 50% {
		 width: 150px;
		 opacity: 1;
	}
	 100% {
		 width: 0;
		 opacity: 1;
	}
}
 
</style>

<script>

const camera = document.getElementById('camera');
const inputs = [].slice.call(document.querySelectorAll('input'));

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

function handleUpdate(e) {
  camera.classList.add('no-animation');
  camera.style.setProperty('--margin-x', this.value + 'px');
  camera
}

</script>