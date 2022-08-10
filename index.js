let container = document.querySelector(".row")


window.addEventListener("load",()=>{

  let divs = ""
  for(let i=0;i<28;i++){
    divs+=`<div class="col col-lg-3 col-md-4 col-sm-12">
      <img src="images/youtube.jpg" alt="">
      <h4>Hakuna Matata</h4>
      <i class="material-symbols-outlined">account_circle</i>
      <p>Lorem ipsum dolorunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis a</p>
    </div>`
  }
  container.innerHTML = divs
})
