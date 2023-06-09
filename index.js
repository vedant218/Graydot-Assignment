
let lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");
const successMessage = document.getElementById("successMessage");
initialise();

function initialise() {
    for(list of lists){
        //To select a particular element and drag it to the respective container
        list.addEventListener("dragstart", function(e){
            let selected = e.target;
    
            rightBox.addEventListener("dragover", function(e){
                e.preventDefault();
            });
            rightBox.addEventListener("drop", function(e){
                rightBox.appendChild(selected);
                selected = null;
                this.style.backgroundColor = "";
                successMessage.innerText = "Item dropped in container 2 successfully!"
            });
    
            leftBox.addEventListener("dragover", function(e){
                e.preventDefault();
            });
            leftBox.addEventListener("drop", function(e){
                leftBox.appendChild(selected);
                selected = null;
                this.style.backgroundColor = ""
                successMessage.innerText = "Item dropped in container 1 successfully!";
            });

            // Visual aid for choosing a container
            rightBox.addEventListener("dragenter", function (e) {
                e.preventDefault();
                this.style.backgroundColor = "#0b0450";
            });
    
            leftBox.addEventListener("dragenter", function (e) {
                e.preventDefault();
                this.style.backgroundColor = "#0b0450";
            });
            
            //Reverts back to original colour
            
            rightBox.addEventListener("dragleave", function () {
                this.style.backgroundColor = "";
            });

            leftBox.addEventListener("dragleave", function () {
                this.style.backgroundColor = "";
            });
        })
    }
}

function resetContainers() { // to reset the containers and the events
    leftBox.innerHTML = `
    <div class="list" draggable="true">List Item 1</div>
        <div class="list" draggable="true">List Item 2</div>
        <div class="list" draggable="true">List Item 3</div>
        <div class="list" draggable="true">List Item 4</div>
  `;
  rightBox.innerHTML = "";
  successMessage.innerText = "";
  initialise();
}

