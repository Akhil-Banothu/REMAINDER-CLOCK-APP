function clock() {
   let date = new Date();
   let hr = date.getHours();
   let mn = date.getMinutes();
   let se = date.getSeconds();

   // converting 24 hour format into 12 hour format
   if(hr>12) {
      hr = hr - 12;
   }

   // calling the id for 'hours', 'minutes', 'seconds'
   let hour = document.getElementById('hours');
   hour.innerText = hr;
   let minute = document.getElementById('minutes');
   minute.innerText = mn;
   let second = document.getElementById('seconds');
   second.innerText = se;

}

setInterval(() => {
   clock();
}, 1000);


// calling the id 'midday' to change into 'AM' or 'PM'
let date = new Date();
let hr = date.getHours();

if(hr>=12) {
   let midday = document.getElementById('midday');
   midday.innerText = 'PM';
}
else if(hr<12) {
   let midday = document.getElementById('midday');
   midday.innerText = 'AM';
}


// setting 'good morning', 'good afternoon', 'good evening' and 'good night'
let greeting = document.getElementById('greeting');
if(hr>=12 && hr<16) {
   greeting.innerText = 'good afternoon !! take some sleep';
}
else if(hr>=16 && hr<20) {
   greeting.innerText = 'good evening !!';
}
else if(hr>=20 && hr<24) {
   greeting.innerText = 'good night !!';
}
else {
   greeting.innerText = 'good morning !! wake up !!'
}


// setting the image and the text when clicked on the button
button.addEventListener("click", function(){
   let d = new Date();
   let hour = d.getHours();
   let image = document.getElementById('image');

   let goodmorning = document.getElementById('goodmorning');
   let goodafternoon = document.getElementById('goodafternoon');
   let goodevening = document.getElementById('goodevening');
   let goodnight = document.getElementById('goodnight');

   if(parseInt(goodmorning.value)===hour) {
      document.getElementById("greeting4").innerText = 'grab some healthy breakfast!!!';
      image.src = './goodmorning_image.jpg';
   }
   else if(parseInt(goodafternoon.value)===hour) {
      document.getElementById("greeting4").innerText = "let's have some lunch !!";
      image.src = './goodafternoon_image.jpg';
   }
   else if(parseInt(goodevening.value)===hour) {
      document.getElementById("greeting4").innerText = 'stop yawning, get some tea... its just evening!';
      image.src = './lunch_image.jpg';
   }
   else if(parseInt(goodnight.value)===hour) {
      document.getElementById("greeting4").innerText = 'close your eyes and go to sleep';
      image.src = './goodnight_image.jpg';

   }
})

// selecting options and displaying the content
// for morning
let goodmor = document.getElementById('goodmorning');
let gm1 = document.getElementById('gm1');
goodmor.addEventListener('change', function() {
   let selectedopt1 = goodmor.options[goodmor.selectedIndex].textContent;
   gm1.textContent = selectedopt1;
})

// for afternoon
let goodaft= document.getElementById('goodafternoon');
let lunch1 = document.getElementById('lunch1');
goodaft.addEventListener('change', function() {
   let selectedopt2 = goodaft.options[goodaft.selectedIndex].textContent;
   lunch1.textContent = selectedopt2;
})

// for evening
let goodeve = document.getElementById('goodevening');
let tea1 = document.getElementById('tea1');
goodeve.addEventListener('change', function(){
   let selectedopt3 = goodeve.options[goodeve.selectedIndex].textContent;
   tea1.textContent = selectedopt3;
})

// for night
let goodni = document.getElementById('goodnight');
let night1 = document.getElementById('night1');
goodni.addEventListener('change', function() {
   let selectedopt4 = goodni.options[goodni.selectedIndex].textContent;
   night1.textContent = selectedopt4;
})