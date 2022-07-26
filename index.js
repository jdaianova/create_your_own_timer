const currentDate = new Date();
const dateTimer = document.querySelector("#date");
const nameTimer = document.querySelector("#name");
const pics = document.querySelectorAll(".pic");

pics.forEach((pic) => {
  pic.addEventListener("click", () => {
    pics.forEach((element) => {
      element.classList.remove("pic-selected");
    });
    pic.classList.add("pic-selected");
  });
});

const btnSubmitTimer = document.querySelector("#submit-timer");
btnSubmitTimer.onclick = (e) => {
  if (dateTimer.value && nameTimer.value && picSelected()) {
    localStorage.setItem("dateTimer", dateTimer.value);
    localStorage.setItem("nameTimer", nameTimer.value);
    localStorage.setItem("picId", picSelected());
  } else {
    e.preventDefault();
    document.querySelector(".popup-text").innerText = notEntered();
    document.querySelector(".popup").classList.add("popap-active");
    document.querySelector(".popup-close").onclick = () => {
      document.querySelector(".popup").classList.remove("popap-active");
    };
  }

  function picSelected() {
    let flag = false;
    pics.forEach((element) => {
      if (element.classList.contains("pic-selected")) {
        flag = element.id;
      }
    });
    return flag;
  }

  function notEntered() {
    if (!dateTimer.value) {
      return "Please set the date for your timer.";
    } else if (new Date(dateTimer.value) <= currentDate) {
      return "Your date has already happened, please set the date for your timer.";
    } else if (!nameTimer.value) {
      return "Please write the name of your timer.";
    } else if (nameTimer.value.trim() == "") {
      return "The name is empty, please write the name of your timer.";
    } else {
      return "Please select the background of your timer.";
    }
  }
};
