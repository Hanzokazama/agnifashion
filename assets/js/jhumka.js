
function jhumka_onload() {
    jhumka_category();
    proforloop()
}

let key = new URL(window.location.href).searchParams.get("id");
let key2=new URL(window.location.href).searchParams.get("categ_id");


function jhumka_category() {
  for (let i = 0; i< product_data.length; i++) {
    if (key === product_data[i].product_id) {
        document.title = "Agni Fashion - " + product_data[i].product_name;
        document.getElementById("pd-hero").innerHTML += `
  <div class="container-fluid mb-4 ">
  <div class="row">
  <h2 class=" text-left product-headI" >`+ product_data[i].product_name + `</h2>
  </div>
  </div>

        <div class="col-lg-6 col-md-12 col-12">
        <div class="pd-img">
      <img src="assets/img/productimg/`+ product_data[i].img + `"  class="glightbox" alt="">
      <hr class="common-line" style="width:20%">
      <div class="small_img_grp">
      <section id="Iproduct" class="Iproduct bg-grey m-0 p-1">
      
      <div class="container">

      <div class="slide-container">

        <div
          class="Iproduct-swiper swiper swiper-initialized swiper-horizontal swiper-pointer-events aos-init aos-animate">

          <div class="swiper-wrapper" id="proforloop">

          </div>
          <div class="swiper-button-next"><i class="fa-solid fa-chevron-right icon"></i> </div>
        <div class="swiper-button-prev"><i class="fa-solid fa-chevron-left icon"></i></div> 
        </div>
        
      </div>
    </div>
    </div>
  </section>
      </div>
      
  </div>
  
</div>
<div class="col-lg-6 col-md-12 col-12">
  <div class="pd-about">      
  <h2 style="font-family:Whitney,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif;" class="mb-2 mt-2 price">Price:- ₹`+ product_data[i].product_price + ` /-</h2>
  <a href="javascript: void(0)" class="btn-cust5 my-4" onclick="watspdir('assets/img/productimg/`+ product_data[i].img + `')">Buy Now</a>  
  
  <h4 class="my-2 price">Description</h4>
 <p  class="mt-2 description">
 Every single piece of this jewellery is fully handmade and crafted to perfection. 
 Add something extra to your natural beauty with our handmade collection of Terracotta Earrings.
 <br>
 Exclusive Terracotta Earrings for gorgeous look with matching Stud Jhumka, Jewelry is
 made using Eco-friendly material and the most Amazing Techniques.
 <br>
 The Eco friendly Jewelry which are Elegant & Rustic Exotic Dressing Style when worn with
 Traditional Attire.
 <br>
 Check out our exclusive range of Terracotta Jewellery online for both your formal and casual
attires. This ethnic necklace set collection is made from natural ‘baked clay’
 </p> 

      
       
  </div>

</div>
`

    }
}
 // Testimonial slider
new Swiper(".Iproduct-swiper", {
speed: 800,
loop: true,
autoplay: {
  delay: 3000,
  disableOnInteraction: false,
},
// Default parameters

// Responsive breakpoints
breakpoints: {
  // when window width is <= 999px
  768: {
    slidesPerView: 3,
    spaceBetween: 10,
  },
  576: {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  320: {
    slidesPerView: 1,
    spaceBetweenSlides: 100,
  },
  
},


navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
},
});
GLightbox({
touchNavigation: true,
loop: false,
autoplayVideos: false,
selector: ".glightbox",
});

}



function showhide() {
var moreText = document.getElementById("more");
var btnText = document.getElementById("toggle");

if (dots.style.display === "none") {
dots.style.display = "inline";
btnText.innerHTML = "Read More"; 
moreText.style.display = "none";
} else {
dots.style.display = "none";
btnText.innerHTML = "Read Less"; 
moreText.style.display = "inline";
}
}



function proforloop(){
for (let i = 0; i< product_data.length; i++) {
  if(key2 === product_data[i].category_id){
    document.getElementById("proforloop").innerHTML+= 
    ` <div class="swiper-slide">
    <div class="row g-0 align-items-center mb-3">
      <div class="col-md-12">
        <div class="Iproduct-item"> 
        <a href="`+product_data[i].category_direct+`.html?id=`+product_data[i].product_id+`&categ_id=`+product_data[i].category_id+`" ><img src="assets/img/productimg/`+product_data[i].img+`" class="Iproduct-img" ></a>
        </div>
      </div>
    </div>`
  }
}
}


function watspdir(pic){
let wurl = getBase(pic);
console.log(wurl);
let whatsapp = "https://api.whatsapp.com/send/?phone=918838112883&text= Hi,I'm Interested in this Product, Can i get more details about this 👇🏼."+wurl ;
window.open(whatsapp)
}
