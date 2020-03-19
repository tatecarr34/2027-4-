console.clear();
const sad = document.getElementById("sad");
setInterval(upTime, 1000);

function upTime() {
  let theTime = Number($("#theTime").text());
  theTime = theTime + 1;
  $("#theTime").text(theTime);
}

$("input").change(onChange);

function onChange(evt) {
  let correct = $(this).data("correct");
  let response = $(this).val();
  
  console.log(md5(response));
  if (correct == md5(response)) {
    $(this)
      .removeClass("incorrect")
      .addClass("correct");
    let theScore = Number($("#score").text());
    theScore = theScore + 1;
    $("#score").text(theScore);
  } else {
    if (Math.random() > 0.1) {
      sad.play();
    }
    $(this)
      .removeClass("correct")
      .addClass("incorrect");
  }
}