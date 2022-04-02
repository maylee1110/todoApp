const inputForm =document.querySelector("#inputForm");
const inputBox =document.querySelector("#inputBox")
const submit = document.querySelector("#submit")
const greeting = document.querySelector("#greeting")
const userLocal = localStorage.getItem("username")
const logoutBtn = document.querySelector("#logoutBnt")
const HIDDEN_CLASS = "hidden"
const USERNAME_KEY = "username"

  if(userLocal===null){
   inputForm.classList.remove(HIDDEN_CLASS);
   inputForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const userName = inputBox.value;
    localStorage.setItem(USERNAME_KEY,userName);
    inputForm.classList.add(HIDDEN_CLASS);
    paintGreetings(userName);
    logoutBtn.classList.remove(HIDDEN_CLASS);
    })
 
  }else{
    paintGreetings(userLocal);
      
  }

  function paintGreetings(a){
    greeting.innerText = ` hello! ${a}`
    greeting.classList.remove(HIDDEN_CLASS);
    logoutBtn.classList.remove(HIDDEN_CLASS);
  }


logoutBtn.addEventListener("click",logoutButton)

function logoutButton(){
  localStorage.removeItem(USERNAME_KEY);
  localStorage.removeItem("todos");
  window.location.reload();
}