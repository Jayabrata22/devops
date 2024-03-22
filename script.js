document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.card');
  const columns = document.querySelectorAll('.board-column');

  let draggedCard = null;

  // Add event listeners for card dragging
  cards.forEach(card => {
      card.addEventListener('dragstart', dragStart);
      card.addEventListener('dragend', dragEnd);
  });

  // Add event listeners for column dragging
  columns.forEach(column => {
      column.addEventListener('dragover', dragOver);
      column.addEventListener('dragenter', dragEnter);
      column.addEventListener('dragleave', dragLeave);
      column.addEventListener('drop', drop);
  });

  function dragStart() {
      draggedCard = this;
      setTimeout(() => this.style.display = 'none', 0);
  }

  function dragEnd() {
      draggedCard.style.display = 'block';
      draggedCard = null;
  }

  function dragOver(e) {
      e.preventDefault();
  }

  function dragEnter(e) {
      e.preventDefault();
      this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
  }

  function dragLeave() {
      this.style.backgroundColor = 'initial';
  }

  function drop() {
      this.appendChild(draggedCard);
      this.style.backgroundColor = 'initial';
  }
});

// AddItem on todo list

function addItem() {
  var newTaskInput = document.createElement("input");
  newTaskInput.className = "card";
  newTaskInput.type = "text";
  newTaskInput.placeholder = "New Task";
  
  // Set up event listeners for the new input field
  newTaskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      var newTaskValue = this.value.trim();
      if (newTaskValue !== "") {
        var newTask = document.createElement("div");
        newTask.className = "card";
        newTask.textContent = newTaskValue;
        newTask.draggable = true;
        newTask.addEventListener("dragstart", drag);
        this.parentNode.replaceChild(newTask, this);
      }
    }
  });

  // Replace the plus button with the new input field
  var addButton = document.querySelector(".add-item");
  addButton.parentNode.replaceChild(newTaskInput, addButton);
  
  // Focus on the new input field
  newTaskInput.focus();
}
