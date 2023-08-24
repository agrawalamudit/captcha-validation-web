let captcha = document.querySelector("#captcha");
let inputValue = document.querySelector("#input-box");
let btnSubmit = document.querySelector("#btn-submit");
let btnRefresh = document.querySelector("#btn-refresh");
let msg = document.querySelector(".msg");
let alphaNums = ['A', 'B', 'C', 'D', 'E', 'F', 'G',
        'H', 'I', 'J', 'K', 'L', 'M', 'N',
        'O', 'P', 'Q', 'R', 'S', 'T', 'U',
        'V', 'W', 'X', 'Y', 'Z', 'a', 'b',
        'c', 'd', 'e', 'f', 'g', 'h', 'i',
        'j', 'k', 'l', 'm', 'n', 'o', 'p',
        'q', 'r', 's', 't', 'u', 'v', 'w',
        'x', 'y', 'z', '0', '1', '2', '3',
        '4', '5', '6', '7', '8', '9'];

let ans = [];
generateCaptcha();

btnSubmit.onclick = () => {
  let v = inputValue.value;

  if (v == captcha.innerText) {
    msg.innerText = "Login Successful";
  } else {
    msg.innerText = "Invalid";
  }
  msg.style = "color: green; background-color: #D5FFD0;";
  inputValue.value = "";
  generateCaptcha();
};

btnRefresh.onclick = () => {
  msg.innerText = "";
  generateCaptcha();
};

function generateCaptcha() {
  ans = [];
  for (let i = 0; i < 7; i++) {
    ans.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
  }
  captcha.innerText = ans.join("");
  // console.log(ans.join(""));
}
