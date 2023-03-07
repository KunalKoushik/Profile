const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const share = document.querySelector(".Share");

//   Modal open function
const openModal = () => {
  console.log("Modal is Open");
  modal.classList.add("active");
  overlay.classList.add("overlayactive");
};

// Modal close function
const closeModal = () => {
  modal.classList.remove("active");
  overlay.classList.remove("overlayactive");
};

const openshare = () =>{
  share.classList.add("active")
  overlay.classList.add("overlayactive");
}

const closeshare = ()=>{
  share.classList.remove("active");
  overlay.classList.remove("overlayactive");
}