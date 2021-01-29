// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeCases = {
  '♡' : '♥',
  '♥' : '♡'
}
let errors = document.getElementById("modal")
let likes = document.getElementsByClassName("like-glyph")
console.log(likes)
for (let like of likes) {
  like.addEventListener("click", likeFunction)
}

function likeFunction(event) {
  console.log(event.target.innerText)
  mimicServerCall()
  .then(function(response) {
    event.target.innerText = likeCases[event.target.innerText]
    if(event.target.innerText == '♥') {
      event.target.className = ' activated-heart'
    }else{
      event.target.className = ''
    }
    return response.json
  })
  .catch(function(error) {
    console.log("ERRORS")
    errors.className = ""
    setTimeout(function(){
      errors.className = "hidden"
    },5000)
  })
}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
