// DEFINE AOS LINK=========================================== */
AOS.init({
    duration: 1000,
    once: true,
});
// ========== BACK TO TOP
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $("#scroll").fadeIn();
        } else {
            $("#scroll").fadeOut();
        }
    });
    $("#scroll").click(function () {
        $("html, body").animate({
                scrollTop: 0,
            },
            40
        );
        return false;
    });
});

// <============== NAVBAR CSS ==================>
const sidebar = document.querySelector(".overlay");

    function Togleside() {
      sidebar.classList.add("show_nav");
      document.body.classList.add("overflow_hidden");
      document.body.classList.remove("overflow-auto");
      document.body.classList.add("vh-100");
    }

    function hideNav() {
      sidebar.classList.remove("show_nav");
      document.body.classList.add("overflow-auto");
      document.body.classList.remove("overflow_hidden");
      document.body.classList.remove("vh-100");
    }

// DIFINE CHANGE YEAR
const d = new Date();
let year = d.getFullYear();
document.getElementById("current-year").innerHTML = year;


// FORM VALIDATION

function handleSubmit(event) {
    event.preventDefault();
    let submitbtn = document.getElementById("send_message");
    let name = document.getElementById("name_input").value;
    let lastName = document.getElementById("lastName_input").value;
    let company = document.getElementById("company_input").value;
    let phone = document.getElementById("phone_input").value;
    let email = document.getElementById("email_input").value;
    let massageInput = document.getElementById("massage_input").value;
    document.getElementById("name_input").value = "";
    document.getElementById("lastName_input").value = "";
    document.getElementById("company_input").value = "";
    document.getElementById("phone_input").value = "";
    document.getElementById("email_input").value = "";
    document.getElementById("massage_input").value = "";
    alert('We will contact you soon')
    
  }
  $('.product_slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    dots:false,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 1000,
    pauseOnHover: false,
    cssEase: 'linear',
    arrows: false,
    centerMode:true,
    responsive: [{
      breakpoint: 1199,
      settings: {
        slidesToShow: 4.5,
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3.5,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2.5,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 2,
      }
    }
    ,
    {
      breakpoint: 475,
      settings: {
        slidesToShow: 1.5,
      }
    },
    {
      breakpoint: 360,
      settings: {
        slidesToShow: 1,
      }
    }
    ]
  });
