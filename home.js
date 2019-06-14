var addBtn = $('.submit-btn');
var cardContainer =$('.card-container');
var greenActions = JSON.parse(localStorage.getItem('green-actions')) || [];
appendAllProjects();
// checklist of to-do items
function greenProjects() {
  var project = $('.new-project').val();

    cardContainer.append(`
        <div>
          <p class="addInProject">${project}</p>
          <button class="complete">Mark Complete</button>
        </div>
          `);
    setStorage(project);
    $('.new-project').val("");

}
addBtn.on("click", greenProjects);

function setStorage(project) {
  greenActions.push(project);
  var greenString = JSON.stringify(greenActions);
  localStorage.setItem('green-actions', greenString);
  console.log(localStorage);

}

function appendAllProjects () {
  greenActions.forEach(function(project) {
    cardContainer.append(`
      <div>
      <p class="addInProject">${project}</p>
      <button class="complete">Mark Complete</button>
      </div>
  `);
 });

}
cardContainer.on("click", ".complete", completedProject)

function completedProject(event) {
  var finishedProject = event.target.parentNode.children[0].textContent;
  var indexToDelete = greenActions.indexOf(finishedProject);
  greenActions.splice(indexToDelete, 1);
  var greenString = JSON.stringify(greenActions);
  localStorage.setItem('green-actions', greenString);

  event.target.parentNode.remove()
}
