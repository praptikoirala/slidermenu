const toggle = document.querySelector('.toggle');
const navigate = document.querySelector('.navbar');

toggle.addEventListener('click' , printOut);

function printOut(e){

  if(navigate.classList.contains("show-nav")){
    navigate.classList.remove("show-nav");
  }else{
    navigate.classList.add("show-nav");
  }
}
