const toggle = document.querySelector('.toggle');
const navigate = document.querySelector('.navbar');
const lines = document.querySelectorAll('.line');
const signin = document.querySelector('.signup-btn');
const dispbox = document.querySelector('.pop-up');
const close = document.querySelector('.close-cross');

toggle.addEventListener('click' , navigationShow);

function navigationShow(e){

  if(navigate.classList.contains("show-nav")){
    navigate.classList.remove("show-nav");
  }else{
    navigate.classList.add("show-nav");
  }

  for(i = 0; i < lines.length; i++){
    if(lines[i].classList.contains("rotate")){
      lines[i].classList.remove("rotate");
    }else{
      lines[i].classList.add("rotate");
    }
  }
}

signin.addEventListener('click' , popupShow);

function popupShow(e){
  dispbox.style.display = 'block';
}

close.addEventListener('click' , popupHide);

function popupHide(e){
  dispbox.style.display = 'none';
}


