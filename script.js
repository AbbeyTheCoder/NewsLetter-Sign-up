let submitBtn = document.getElementById("submit");
let dismissBtn = document.getElementById("dismiss-msg");
let errorMsg = document.getElementById("error-msg");

dismissBtn.addEventListener("click", function () {
  location.reload();
});

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  let userEmail = document.getElementById("email").value;
  let empty = userEmail.trim();

  if (empty && emailRegex.test(userEmail)) {
    document.getElementsByTagName("main")[0].style.display = "none";
    document.getElementById("success-msg").style.display = "flex";
    return;
  }
  errorMsg.style.display = "inline";
  document.getElementById("email").classList.add("invalid");
});
