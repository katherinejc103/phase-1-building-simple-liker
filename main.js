// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const errorModal = document.querySelector('#modal')

// Your JavaScript code goes here!
// function clickHeart(){
//   mimicServerCall();

// }

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM Content was Loaded')
  errorModal.classList.add('hidden')
  // findLikes();
  clickListner();
})

// function findLikes() {
//   const likeArr = document.querySelectorAll(".like-gyph")
  
//   likeArr.forEach((singularLike) => {
//     singularLike.addEventListener("click", () => console.log("YOU FOUND ME "))
//   })
// }

function clickListner(){
  document.addEventListener('click', (event) => {
    if(event.target.classList.value +++ 'like-glyph'){
      console.log('YOU FOUND ME! LIKE!')
    }
  })
}

if(event.target.classList[0] === 'like-glyph'){
  mimicServerCall()
    .then((response) => {
    })
    .catch((error) => {
    console.log(error);
    errorModal.remove("hidden");
    setTimeOut(() => {
      hideError()
    }, 3000)
    })

}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
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
