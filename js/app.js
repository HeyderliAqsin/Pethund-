//Header-active
const header=document.querySelector("#header .bottom-header")
const myImg=document.getElementById("myImg")
window.onscroll=function(){

}

//Loading effect
$(window).on("load",function(){
  setTimeout(() => {
  $(".loader").fadeOut(200)
  }, 1000);
})


$(".slider").slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed: 6000,
    fade: true,
    infinite: true
})

//Scroll Indicator
let i = 0;
window.onload=function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 40);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}
//Count-Up
const counters=document.querySelectorAll('.counter')
const speed=200;
const curve=document.querySelector("#Curve")
window.onscroll=function(){
    console.log(window.pageYOffset+","+$("#Curve").offset().top
    )
    if(this.scrollY>400 ){
      header.classList.add("head-active");
      myImg.src="images/logoDark.png"
  }else{
      header.classList.remove("head-active")
      myImg.src="images/logo-light.png"
  }
    if(window.scrollY>=$("#Curve").offset().top-300){
        counters.forEach(counter=>{
            const updateCount = () => {
                const target=Number(counter.getAttribute('data-target'))
        
                const count =Number(counter.innerText);
        
                const increment=target / speed;
        
                if(count<target){
                    counter.innerText=Math.ceil(count+increment);
                    setTimeout(updateCount, 1)
        
                }else{
                    count.innerText=target;
                }
        
                }
            updateCount()
                
        })    }
}
//Menu-bar
const navMenu=document.querySelector(".bottom-header .menu-bar")
const menu=document.querySelector(".bottom-header .mobile")

navMenu.addEventListener("click",function(){
    menu.classList.toggle("mobile-active")
    console.log("mobile-active");
})  

//Mobile menu
$("#header  .mobile .dropped>a").click(function(e){
    e.preventDefault()
    $(".dropped-item").stop().slideUp()
    $(this).parent().find(".dropped-item").stop().slideToggle()
})

//Change Icon
$('.menu-bar').click(function(){
  $('.fas fa-bars').toggle('1000');
  $("i", this).toggleClass("fas fa-bars fas fa-times");
 
})

//Bottom scroll
$(function(){
  var aTop = $('.bottom-scroll');
aTop.click(function(){
  $("html, body").animate({ scrollTop: 0 }, "slow");
})
});




