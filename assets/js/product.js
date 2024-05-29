
function productonload() {
  product_page_function();
  product_data_function();
}


let key = new URL(window.location.href).searchParams.get("id");

function product_page_function() {
  for (let i = 0; i < product_page.length; i++) {
    if (key === product_page[i].category_id) {
      document.title = "Agni Fashion - " + product_page[i].page_title;
      document.getElementById("product_title").innerHTML += ` 
            <div class="col-12 align-item-center">
                <div class="section-title">
                    <h2>`+ product_page[i].title + `</h2>
                    <hr class="common-line">
                </div>
            </div>`
            document.getElementById("product_content").innerHTML +=`
            <div class="col-12 align-item-center"> 
            <span>`+product_page[i].product_content+`</span>
            `
    }
  }
}



// =================================
// specific product page
// =================================


function product_data_function() {
  for (let i = 0; i < product_data.length; i++) {
    if (key === product_data[i].category_id) {
      document.getElementById("spro").innerHTML += `
        <div class="col-12 col-sm-12 col-md-6 col-lg-4"  data-aos="fade-up"> 
        <div class="card_individual_product">
          <div class="img_container">
          <div class="row  " style="text-align:center">
          <span class="product-head">`+ product_data[i].product_name + `</span>
          </div>
            <img src="assets/img/productimg/`+ product_data[i].img + `" class="glightbox"  >
          </div>
          <div class="card_content_container ">
          <div class="row d-flex justify-content-between align-items-center m-0 pt-1">
          <a class="btn-cust3" href="`+product_data[i].category_direct+`.html?id=`+product_data[i].product_id+`&categ_id=`+product_data[i].category_id+`" >View Details</a>
            <a href=# class="pricetag">₹`+product_data[i].product_price +`/- </a>
          </div>
            <div class="row justify-content-center pt-1" >
            <a href="javascript: void(0)" class="btn-cust4 " onclick="watspdir('assets/img/productimg/`+ product_data[i].img + `')" >Buy Now</a>
            </div>
         </div>
      </div>
    </div>`
    }

  }
  $(function () {
    var target = $('#spro2');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  });
  GLightbox({
    touchNavigation: true,
    loop: false,
    autoplayVideos: false,
    selector: ".glightbox",
  });
}
    function watspdir(pic){
    let wurl = getBase(pic);
    console.log(wurl);
    let whatsapp = "https://api.whatsapp.com/send/?phone=918838112883&text= Hi,I'm Interested in this Product, Can i get more details about this 👇🏼."+wurl ;
    window.open(whatsapp)
}


