document.addEventListener("click", function (event) {
  const secondContainer = document.getElementById("second-container-1");
  console.log(secondContainer);
  console.log(event.target.name);
  const gridContainer = document.getElementById("grid-container-1");
  const containsClick = secondContainer.contains(event.target);

  if (!containsClick) {
    gridContainer.style.visibility = "hidden";
    secondContainer.style.height = "74px";
    secondContainer.style.border = "0.9px solid #C8C8C8";

    //remove the badge
    const badge = secondContainer.querySelector(".popular-badge");
    if (badge) {
      badge.remove();
    }
  }
});

//on click of radio button show the gridContainer
function showBadge() {
  const secondContainer = document.getElementById("second-container-1");
  const newDiv = document.createElement("div");
  newDiv.textContent = "Most Popular";
  newDiv.className = "popular-badge";
  newDiv.style.display = "inline-block";
  newDiv.style.backgroundColor = "#FF6B82";
  newDiv.style.color = "white";
  newDiv.style.position = "absolute";
  newDiv.style.top = "-11px"; //neg value is to position above the container
  newDiv.style.left = "220px";
  newDiv.style.borderRadius = "2px";
  newDiv.style.padding = "5px";
  newDiv.style.fontSize = "13px";
  newDiv.style.textTransform = "uppercase";

  secondContainer.appendChild(newDiv);
}

function showGridContainer(e) {
  const secondContainer = document.getElementById("second-container-1");
  const gridContainer = document.getElementById("grid-container-1");
  gridContainer.style.visibility = "visible";
  secondContainer.style.height = "174px";
  // showBadge();
  if (e.target.id == "radio-btn-2") {
    showBadge();
  }
}

const radioBtn = document.getElementById("radio-btn-2");
radioBtn.addEventListener("click", function (e) {
  showGridContainer(e);
});
