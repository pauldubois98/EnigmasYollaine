
function checkPassword0() {
  var password = document.getElementById("password0").value;
  var sha_password = SHA256(password.replace(/ /g, '').toUpperCase());
  if (
    sha_password ==
    "c8435b00e294b7b0ad44311d8d816b8eb1f52ce6abecf1008d4ee715f3c4f1e2"
  ) {
    document.getElementById("enigma0-check").style = "display: block";
    document.getElementById("enigma0-no-check").style = "display: none";
  } else {
    document.getElementById("enigma0-no-check").style = "display: block";
    document.getElementById("enigma0-check").style = "display: none";
    document.getElementById("password0").value = "";
  }
}

checkPassword0();


function checkPassword1() {
  var password = document.getElementById("password1").value;
  var sha_password = SHA256(password.replace(/ /g, '').toUpperCase());
  if (
    sha_password ==
    "3baf6e9cdf3e6ad26570155bda77598735ec015629ca24ba68e1b7ad2513dc18"
  ) {
    document.getElementById("enigma1-check").style = "display: block";
    document.getElementById("enigma1-no-check").style = "display: none";
  } else {
    document.getElementById("enigma1-no-check").style = "display: block";
    document.getElementById("enigma1-check").style = "display: none";
    document.getElementById("password1").value = "";
  }
}

checkPassword1();


function checkPassword2() {
  var password = document.getElementById("password2").value;
  var sha_password = SHA256(password.replace(/ /g, '').toUpperCase());
  if (
    sha_password ==
    "73c5b14d8fc6137203e7ee1f791cb59cc3e02a773f1e9a655012651f7527813f"
  ) {
    document.getElementById("enigma2-check").style = "display: block";
    document.getElementById("enigma2-no-check").style = "display: none";
  } else {
    document.getElementById("enigma2-no-check").style = "display: block";
    document.getElementById("enigma2-check").style = "display: none";
    document.getElementById("password2").value = "";
  }
}

checkPassword2();


function checkPassword3() {
  var password = document.getElementById("password3").value;
  var sha_password = SHA256(password.replace(/ /g, '').toUpperCase());
  if (
    sha_password ==
    "d122cd6b26b5b4bf61fc7e0b82902464384fe73c63c0863a18c845593bec2ffd"
  ) {
    document.getElementById("enigma3-check").style = "display: block";
    document.getElementById("enigma3-no-check").style = "display: none";
  } else {
    document.getElementById("enigma3-no-check").style = "display: block";
    document.getElementById("enigma3-check").style = "display: none";
    document.getElementById("password3").value = "";
  }
}

checkPassword3();


function checkPassword4() {
  var password = document.getElementById("password4").value;
  var sha_password = SHA256(password.replace(/ /g, '').toUpperCase());
  if (
    sha_password ==
    "23f1598f83fc522e5a8db40f323bd9360e6725d58080a1115168ea93eb825f5a"
  ) {
    document.getElementById("enigma4-check").style = "display: block";
    document.getElementById("enigma4-no-check").style = "display: none";
  } else {
    document.getElementById("enigma4-no-check").style = "display: block";
    document.getElementById("enigma4-check").style = "display: none";
    document.getElementById("password4").value = "";
  }
}

checkPassword4();

