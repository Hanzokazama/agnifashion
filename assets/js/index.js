//------------------------------
//  index page
// -----------------------------

function indexonload() {
  index_categ_function()
  setProjectVisitCount();
}

function index_categ_function() {
  for (let i = 0; i < index_categ.length; i++) {

    document.getElementById("pro").innerHTML += `
    <div class="col-12 col-sm-12 col-md-6 col-lg-4" data-aos="fade-up">
      <div class="card" style=" background-color: rgba(13, 20, 26, 0.7) !important;">
        <img src="assets/img/`+index_categ[i].lcl_img+`" class="card-img-top"  alt="">
        <div class="card-img-overlay c-img d-flex flex-column justify-content-center">
            <h5 class="card-title c-t1">`+ index_categ[i].productname + `</h5>
            <h5 class="card-title c-t2">collection</h5>
           <a class="btn-cust2 mt-3 " href="product.html?id=`+ index_categ[i].category_id + `" >shop now</a>
        </div>
      </div>
    </div>`
  }

}

// Testimonial slider
new Swiper(".testimonials-swiper", {
  speed: 600,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 50,
  // Responsive breakpoints
  breakpoints: {
    // when window width is <= 999px
    1024: {
      slidesPerView: 2,
      spaceBetweenSlides: 50,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// ------------------------
// MAIL AND NAME,SUB,MESG CHECK
// ------------------------

function checkmail(){
  let mail= document.getElementById("email").value;
  let checkmail=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (mail.match(checkmail)) {
    return true;
    
}
else {
    alert("Invalid Email address.");
    return false;
}
}

function checkname(){
let mail= document.getElementById("email").value;
let name=document.getElementById("name").value;
let sub=document.getElementById("subject").value;
let msg=document.getElementById("msg").value;

if (name=="") {
  alert("Every box must be filled out.");
  return false;
}
else if(msg==""){
  alert("Every box must be filled out.");
  return false;
}
else if(sub==""){
  alert("Every box must be filled out.");
  return false;
}
else if(mail==""){
  alert("Every box must be filled out.");
  return false;
}
else {
 return true;
}
}
// ------------------------
// MAIL AND NAME,MSG,SUB END
// ------------------------

// ------------------------
// CONTACT BTN FUNCTION API
// ------------------------
function contactbtn(){
if (checkname()==false,
checkmail()==false)
{
  alert("Try again")
  return false;
}
else 
{
  alert("Your message sent successfully")
  let mail= document.getElementById("email").value="";
  let name=document.getElementById("name").value="";
  let sub=document.getElementById("subject").value="";
  let msg=document.getElementById("msg").value="";
}

}
// ------------------------
// CONTACT BTN FUCTION END
// ------------------------

// ------------------------
// CONTACT BTN WHATSAPP
// ------------------------
function sentwatsapp(){
  if (checkname()==false,
  checkmail()==false)
  {
    alert("Try again")
    return false;
  }
  else 
  {
    let name= document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let subject=document.getElementById("subject").value;
    let message= document.getElementById("msg").value;
    
    let link="https://api.whatsapp.com/send/?phone=918838112883&text= Name :"+ name +  ",Email :" +email +",Subject :"+ subject +",Message :"+message;
    window.open(link);

    alert("Your message sent successfully")
    let mail= document.getElementById("email").value="";
    let Name=document.getElementById("name").value="";
    let sub=document.getElementById("subject").value="";
    let msg=document.getElementById("msg").value="";
  }
}

  

// ------------------------
// CONTACT WHATSAPP END 
// ------------------------

// ------------------------
// API GET 
// ------------------------
function getemail()
  {
 let mail= document.getElementById("email").value;
return mail
  }
function getname()
  {
let name=document.getElementById("name").value;
return name
  }
function getsub()
  {
 let sub=document.getElementById("subject").value;
return sub
  }
function getmsg()
  {
  let msg=document.getElementById("msg").value;
 return msg
  }
// ------------------------
// API END 
// ------------------------

function showloadingb(){
 
  $("#loading").removeClass("d-none");
  $("#loading").addClass("d-block");
  
}
function hideloadingb(){
  $("#loading").addClass("d-none");
}