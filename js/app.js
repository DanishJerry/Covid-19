$(document).ready(function () {

  $('#menu').click(function () {
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');
  });

  $(window).on('scroll load', function () {

    $('#menu').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');

    if ($(window).scrollTop() > 0) {
      $('.scroll-top').show();
    } else {
      $('.scroll-top').hide();
    }

    // scroll spy 


    $('section').each(function () {

      let height = $(this).height();
      let offset = $(this).offset().top - 200;
      let id = $(this).attr('id');
      let top = $(window).scrollTop();

      if (top > offset && top < offset + height) {
        $('.navbar ul li a').removeClass('active')
        $('.navbar').find(`[href="#${id}"]`).addClass('active');
      }

    });

  });

  // smooth scrolling

  $('a[href*="#"]').on('click', function (e) {

    e.preventDefault();

    $('html, body').animate({

      scrollTop: $($(this).attr('href')).offset().top,

    },
      500,
      'linear'
    )

  })

});


//code for fetching covid19 API

/*var form = document.getElementById('myForm');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  var country = document.getElementById('country').value;

  var url = "https://api.covid19api.com/dayone/country/" + country;
  covidData(url);
 
});
async function covidData(url){
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);

  let length = data.length;
  let index = length - 1;

  let confirmed = document.getElementById('confirmed');
  let recovered = document.getElementById('recovered');
  let deaths = document.getElementById('deaths');

  confirmed.innerHTML="";
  recovered.innerHTML="";
  deaths.innerHTML="";

  confirmed.append("Total confirmed Cases: "+ data[index].Confirmed);
  recovered.append("Total Recovered Cases: "+ data[index].Recovered);
  deaths.append("Total Deaths: "+ data[index].Deaths);

}*/


