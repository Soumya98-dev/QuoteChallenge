//*** ACCESSING THE "content" <div>
let content = document.getElementById("content");
//*** ADDING event listener
content.addEventListener("click", collapseQuote);

function collapseQuote(event) {
  let target = event.target;
  if (target.className != "cross") {
    return;
  } else {
    target.parentElement.remove();
  }
}