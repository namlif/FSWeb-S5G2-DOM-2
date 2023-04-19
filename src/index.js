import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
document.querySelector("h1").addEventListener("click",function(e){
alert("Bana tıkladın!")
});


// Kodlar buraya gelecek!

//// MOUSEOVER ///

document.addEventListener("mouseover", (e) => {

    e.target.style.color = "orange";

    setTimeout(() => {
        e.target.style.color = "";
      }, 500);

})

/// KEYDOWN ///

document.addEventListener('keydown', function(event) {
    
    if (event.key === 'Enter') {
      document.querySelector('h1').textContent = 'Başlık Beş Saniye Boyunca ENTER olacak';
    }

    setTimeout(() => {
        document.querySelector("h1").textContent = "Eğlence Otobüsü";
      }, 2000);
      
})

/// WHEEL ///

// document.addEventListener('wheel', function(event) {
//     alert(`Fareyi ${event.deltaY} puan hareket ettirdiniz`);
//   });


/ LOAD ///

const headerImg = document.querySelector("header img");

headerImg.addEventListener("load", e => {

    alert(`Header görseli ${performance.now().toFixed(2)} saniyede yüklendi`)
})


// FOCUS ///

const input = document.querySelectorAll('header nav a');


input.forEach(link => {
    link.addEventListener("focus", () => {
      link.style.backgroundColor = "red";
      
      setTimeout(() => {
        link.style.backgroundColor = "white";
      }, 100);
    });
  }
);

/// RESIZE /// 

window.addEventListener('resize', function() {
    const h1Element = document.querySelector('h1');
    const windowWidth = window.innerWidth;
    const newFontSize = windowWidth / 100;
    h1Element.style.fontSize = `${newFontSize}px`;
  });