//push the whole html  inside the app using innerHTML

const app = document.getElementById("app")
app.innerHTML = `<div class="grid grid-cols-2 gap-4">
<!-- First Column -->
<div class="bg-[#50d71e]  pb-5 border rounded relative">
  <div class="text-center rounded -mt-4 w-5/6 mx-auto  bg-white py-2 px-4 text-center shadow-md">
    <div class="flex items-center justify-center">
      <i class="fa-brands fa-codepen mr-2"></i>
      <h2>Components</h2>
    </div>
  </div>

  <!-- header component -->
  <div id="headerComponent" class="border rounded mt-10 mx-3 relative ">

    <div class="bg-gray-200 w-20 rounded absolute -mt-3 ml-3  text-center ">

      <p class="">Heading</p>
    </div>
    <div class="bg-white -mt-2 -mr-1  rounded-full w-5 h-5 ml-0 absolute right-0   text-center ">
      <!-- custom style used to get the font awesome icon color only  -->
      <i id="headCross" class="fa-solid fa-xmark cursor-pointer" style="color: #ff0040;"></i>
    </div>
    <div class="px-3 py-10">
      <input type="text" id="heading" class="w-full px-1 py-2" placeholder="Type Here">
      <div class="flex justify-between mt-5">
        <div class="flex">
          <div class="border-r ">
            <div class="flex items-center bg-white px-1 py-1 rounded">
              <i class="fa-solid fa-left-long mr-1 mt-1 "></i>
              <p class="pr-3 cursor-pointer" id="left">Left</p>
            </div>
          </div>
          <div class="border-r ">
            <div class="flex items-center bg-white px-1 py-1 rounded">
              <i class="fa-solid fa-align-center mr-1 mt-1 "></i>
              <p class="pr-3 cursor-pointer" id="center">Center</p>
            </div>
          </div>
          <div class=" ">
            <div class="flex items-center bg-white px-1 py-1 rounded">
              <i class="fa-solid fa-right-long mr-1 mt-1 "></i>
              <p class="pr-3 cursor-pointer" id="right">Right</p>
            </div>
          </div>
        </div>

        <div class="flex">
          <div class="border-r ">
            <div class="flex items-center bg-white px-1 py-1 rounded">
              <i class="fa-solid fa-left-long mr-1 mt-1 "></i>
              <p class="pr-3 cursor-pointer" id="blue">Blue</p>
            </div>
          </div>
          <div class="border-r ">
            <div class="flex items-center bg-white px-1 py-1 rounded">
              <i class="fa-solid fa-align-center mr-1 mt-1 "></i>
              <p class="pr-3 cursor-pointer" id="black">Black</p>
            </div>
          </div>
          <div class=" ">
            <div class="flex items-center bg-white px-1 py-1 rounded">
              <i class="fa-solid fa-right-long mr-1 mt-1 "></i>
              <p class="pr-3 cursor-pointer" id="green">Green</p>
            </div>
          </div>
        </div>


      </div>
    </div>
  </div>
  <!-- image component -->
  <div id="imageComponent" class="border rounded mt-10 mx-3 relative ">

    <div class="bg-gray-200 w-30 px-2 rounded absolute -mt-3 ml-3  text-center ">

      <p class="">Poster Image</p>
    </div>
    <div class="bg-white -mt-2 -mr-1  rounded-full w-5 h-5 ml-0 absolute right-0   text-center ">

      <i class="fa-solid fa-xmark cursor-pointer" id="imageCross" style="color: #ff0040;"></i>
    </div>
    <div class="px-3 py-10 cursor-pointer">
      <div class="w-full  border-2 border-dashed px-1 py-2 h-40 relative ">
        <div>
          <input type="file" id="imageFile" class="opacity-0 -mt-1 bg-white w-full h-40 absolute"
            placeholder="Type Here">

        </div>
        <div class="flex items-center justify-center">
          <div class="py-4 mt-4 text-center mx-auto">
            <i class="fa-solid fa-upload"></i>
            <p>Click Upload or Drag and Drop</p>
            <p>SVG,PNG,JPG OR GIF (Max 800px ✗ 400px )</p>

          </div>

        </div>

      </div>

    </div>
  </div>
  <!-- desc component -->
  <div id="descriptionComponent" class="border rounded mt-10 mx-3 relative ">

    <div class="bg-gray-200 w-24 rounded absolute -mt-3 ml-3  text-center ">

      <p class="pr-1">Description</p>
    </div>
    <div class="bg-white -mt-2 -mr-1  rounded-full w-5 h-5 ml-0 absolute right-0   text-center ">

      <i class="fa-solid fa-xmark cursor-pointer" id="descriptionCross" style="color: #ff0040;"></i>
    </div>
    <div class="px-3 py-10">
      <textarea type="text" id="description" class="w-full px-1 py-2 rounded"
        placeholder="Write your thoughts here"></textarea>

    </div>
  </div>
  <div class="bg-[#50d71e] pb-5 text-center  relative">

    <!-- Buttons to show/hide components -->
    <p class="font-bold font text-2xl" id="items">Items</p>
    <button id="showHeader" class="mt-2 bg-yellow-200 px-10 rounded cursor-pointer py-2 ">Heading</button>
    <button id="showImage" class="mt-2 bg-green-400 px-10 rounded cursor-pointer py-2">Image</button>
    <button id="showDescription" class="mt-2 bg-blue-500 px-10 rounded cursor-pointer py-2"> Description</button>
  </div>
</div>
<div class="bg-[#50d71e]  pb-5 border rounded relative">
  <div class="text-center rounded -mt-4 w-5/6 mx-auto  bg-white py-2 px-4 text-center shadow-md">
    <div class="flex items-center justify-center">
      <i class="fa-solid fa-magnifying-glass mr-2"></i>
      <h2>Preview</h2>
    </div>
  </div>
  <div id="output" class="p-4 mt-4">
    <h1 class="text-5xl font-500 text-black" id="outputHeading"> </h1>
    <figure class="my-5">
      <img id="outputImage" src="" />

    </figure>
    <p id="outputDescription" class="text-slate-950"></p>
    <button id="downloadButton" class="mt-10">Download</button>

  </div>


</div>

</div>`

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
