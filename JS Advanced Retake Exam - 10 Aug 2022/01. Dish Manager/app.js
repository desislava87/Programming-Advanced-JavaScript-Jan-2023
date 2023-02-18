window.addEventListener("load", solve);

function solve() {

  let firstNameElement = document.getElementById('first-name');
  let lastNameElement = document.getElementById('last-name');
  let ageElement = document.getElementById('age');
  let genderElement = document.getElementById('genderSelect');
  let descriptionElement = document.getElementById('task');
  let submitBtnElement = document.getElementById('form-btn');
  let ulElementProgress = document.getElementById('in-progress');

  submitBtnElement.addEventListener('click', submit);
  function submit(e) {
    e.preventDefault();

    if(firstNameElement == '' || lastNameElement == '' || ageElement == '' || genderElement == '' || 
      descriptionElement == '') {
        return;
    }

    let fName = firstNameElement.value;
    let lName = lastNameElement.value;
    let age = ageElement.value;
    let gender = genderElement.value;
    let description = descriptionElement.value;
    let descriptionWithDish = `Dish description: ${descriptionElement.value}`;


    let liElement = elGenerator('li');
    liElement.classList.add('each-line');

    let articleElement = elGenerator('article');

    elGenerator('h4', `${fName} ${lName}`, articleElement);
    elGenerator('p', `${gender}, ${age}`, articleElement);
    elGenerator('p', `${descriptionWithDish}`, articleElement);

    liElement.appendChild(articleElement);

    let btnEdit = elGenerator('button', 'Edit');
    btnEdit.classList.add('edit-btn');
    let btnComplete = elGenerator('button', 'Mark as complete');
    btnComplete.classList.add('complete-btn');

    let progressCount = document.getElementById('progress-count');
    progressCount.textContent = Number(progressCount.textContent) + 1;

    liElement.appendChild(btnEdit);
    liElement.appendChild(btnComplete);
    ulElementProgress.appendChild(liElement);

    firstNameElement.value = '';
    lastNameElement.value = '';
    ageElement.value = '';
    genderElement.value = '';
    descriptionElement.value = '';

    btnEdit.addEventListener('click', onEdit);
    function onEdit(e) {
      e.preventDefault();

      firstNameElement.value = fName;
      lastNameElement.value = lName;
      ageElement.value = age;
      genderElement.value = gender;
      descriptionElement.value = description;

      progressCount.textContent = Number(progressCount.textContent) - 1;
      liElement.remove();
    }

    
    btnComplete.addEventListener('click', complete);
    function complete(e) {
      e.preventDefault();
      
      progressCount.textContent = Number(progressCount.textContent) - 1;
      liElement.remove();

      let ulFinishedElement = document.getElementById('finished');
      let liFinishedElement = elGenerator('li');
      liFinishedElement.classList.add('each-line');
      let articleFinishedElement = elGenerator('article');

      elGenerator('h4', `${fName} ${lName}`, articleFinishedElement);
      elGenerator('p', `${gender}, ${age}`, articleFinishedElement);
      elGenerator('p', `${descriptionWithDish}`, articleFinishedElement);

      liFinishedElement.append(articleFinishedElement)
      ulFinishedElement.append(liFinishedElement);

    }

    let btnClear = document.getElementById('clear-btn');

    btnClear.addEventListener('click', onClear);
    function onClear(e) {
      e.preventDefault();
    
      let liElementFinished = document.getElementsByClassName('each-line');
      liElementFinished[0].remove();

    }

  }

  function elGenerator(type, content, parent) {
    const element = document.createElement(type);
    element.textContent = content;

    if (parent) {
      parent.appendChild(element);
    }
    return element;
  }
}
