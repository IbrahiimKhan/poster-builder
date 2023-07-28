// Elements
const headerComponent = document.getElementById("headerComponent");
const imageComponent = document.getElementById("imageComponent");
const descriptionComponent = document.getElementById("descriptionComponent");
const itemsElement = document.getElementById("items");
const showHeader = document.getElementById("showHeader");
const showImage = document.getElementById("showImage");
const showDescription = document.getElementById("showDescription");
const headCross = document.getElementById("headCross");
const imageCross = document.getElementById("imageCross");
const descriptionCross = document.getElementById("descriptionCross");

// Initially hide all components
function hideAllComponents() {
  headerComponent.style.display = "none";
  imageComponent.style.display = "none";
  descriptionComponent.style.display = "none";
}
hideAllComponents();

// Show Header component
showHeader.addEventListener("click", function () {
  headerComponent.style.display = "block";
  showHeader.style.display = "none";
  document.getElementById("outputHeading").style.display="block"
  checkAndHideItems();
});

// Show Image component
showImage.addEventListener("click", function () {
  imageComponent.style.display = "block";
  showImage.style.display = "none";
  document.getElementById("outputImage").style.display="block"

  checkAndHideItems();
});

// Show Description component
showDescription.addEventListener("click", function () {
  descriptionComponent.style.display = "block";
  showDescription.style.display = "none";
  document.getElementById("outputDescription").style.display="block"

  checkAndHideItems();
});

// Functions to remove the components
function removeHeaderComponent() {
  headerComponent.style.display = "none";
  showHeader.style.display = "inline";
  document.getElementById("outputHeading").style.display="none"
  document.getElementById("outputHeading").textContent = "";
  checkAndHideItems();
}
function removeImageComponent() {
  imageComponent.style.display = "none";
  showImage.style.display = "inline";
  document.getElementById("outputImage").style.display="none"
  document.getElementById("outputImage").src = ""
  checkAndHideItems();
}
function removeDescriptionComponent() {
  descriptionComponent.style.display = "none";
  showDescription.style.display = "inline";
  document.getElementById("outputDescription").style.display="none"
  document.getElementById("outputDescription").textContent = "";
  checkAndHideItems();
}

// Add event listeners to the cross buttons
headCross.addEventListener("click", removeHeaderComponent);
imageCross.addEventListener("click", removeImageComponent);
descriptionCross.addEventListener("click", removeDescriptionComponent);

document.addEventListener("DOMContentLoaded", function () {
  // Function to update the content in the right column
  function updatePreview() {
    const heading = document.getElementById("heading").value.trim();
    const description = document.getElementById("description").value.trim();
    const imageFile = document.getElementById("imageFile").files[0];

    document.getElementById("outputHeading").textContent = heading;
    document.getElementById("outputDescription").textContent = description;

    if (imageFile) {
      const reader = new FileReader();
      reader.onload = function (event) {
        document.getElementById("outputImage").src = event.target.result;
      };
      reader.readAsDataURL(imageFile);
    }
  }

  // Add event listeners to the left column elements
  const headingInput = document.getElementById("heading");
  const descriptionInput = document.getElementById("description");
  const imageInput = document.getElementById("imageFile");

  headingInput.addEventListener("input", updatePreview);
  descriptionInput.addEventListener("input", updatePreview);
  imageInput.addEventListener("change", updatePreview);
});
//wrap the text

function wrapText(context, text, x, y, maxWidth, lineHeight) {
  const words = text.split(" ");
  let line = "";

  for (let i = 0; i < words.length; i++) {
    const testLine = line + words[i] + " ";
    const metrics = context.measureText(testLine);
    const testWidth = metrics.width;

    if (testWidth > maxWidth && i > 0) {
      context.fillText(line, x, y);
      line = words[i] + " ";
      y += lineHeight;
    } else {
      line = testLine;
    }
  }

  context.fillText(line, x, y);
}
// Function to download the right-side content as an image
function downloadImage() {
  const container = document.getElementById("output");
  const outputHeading = document.getElementById("outputHeading");
  const outputImage = document.getElementById("outputImage");
  const outputDescription = document.getElementById("outputDescription");

  const canvas = document.createElement("canvas");
  canvas.width = 800;
  canvas.height = 800;
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  const headingFontSize = 60;
  const headingMarginTop = 10;
  const descriptionFontSize = 15;
  const descriptionMarginTop = 20; 
  const descriptionMaxWidth = 780;

  ctx.font = `${headingFontSize}px Arial`;
  ctx.fillStyle = outputHeading.style.color ? outputHeading.style.color : "black";
  ctx.textAlign = "left"; 
  ctx.fillText(outputHeading.textContent, 10, 40 + headingMarginTop);

  ctx.drawImage(outputImage, 10, 60, outputImage.width, outputImage.height);

 
  ctx.font = `${descriptionFontSize}px Arial`;
  ctx.fillStyle = "black"
  ctx.textAlign = "left"; 

  // Calculate y-coordinate for the description 
  const descriptionY = 60 + outputImage.height + descriptionMarginTop;
  ctx.fillText(outputDescription.textContent, 10, descriptionY);
  wrapText(ctx, outputDescription.textContent, 10, descriptionY, descriptionMaxWidth, descriptionFontSize + 5);
  const downloadLink = document.createElement("a");
  downloadLink.href = canvas.toDataURL();
  downloadLink.download = "right_side_content.png";
  downloadLink.click();
}
// Function to handle alignment change
function handleAlignmentChange(alignment) {
  document.getElementById("outputHeading").style.textAlign = alignment;
 // document.getElementById("outputDescription").style.textAlign = alignment;
}

// Function to handle color change
function handleColorChange(color) {
  document.getElementById("outputHeading").style.color = color;
//  document.getElementById("outputDescription").style.color = color;
}

// Add event listeners to the color buttons
const blueColorBtn = document.getElementById("blue");
const blackColorBtn = document.getElementById("black");
const greenColorBtn = document.getElementById("green");

blueColorBtn.addEventListener("click", () => handleColorChange("blue"));
blackColorBtn.addEventListener("click", () => handleColorChange("black"));
greenColorBtn.addEventListener("click", () => handleColorChange("green"));

// Add event listeners to the alignment buttons
const leftAlignmentBtn = document.getElementById("left");
const centerAlignmentBtn = document.getElementById("center");
const rightAlignmentBtn = document.getElementById("right");

leftAlignmentBtn.addEventListener("click", () => handleAlignmentChange("left"));
centerAlignmentBtn.addEventListener("click", () => handleAlignmentChange("center"));
rightAlignmentBtn.addEventListener("click", () => handleAlignmentChange("right"));

// Add event listener to the download button
const downloadButton = document.getElementById("downloadButton");
downloadButton.addEventListener("click", downloadImage);

// Remove items text
function checkAndHideItems() {
  if (
    headerComponent.style.display === "block" &&
    imageComponent.style.display === "block" &&
    descriptionComponent.style.display === "block"
  ) {
    itemsElement.style.display = "none";
  } else {
    itemsElement.style.display = "";
  }
}
