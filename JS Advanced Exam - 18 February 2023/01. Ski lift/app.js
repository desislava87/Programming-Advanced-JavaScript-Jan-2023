window.addEventListener('load', solve);

function solve() {

    let firstNameElement = document.getElementById('first-name');
    let lastNameElement = document.getElementById('last-name');
    let countPeopleElement = document.getElementById('people-count');
    let fromDateElement = document.getElementById('from-date');
    let daysCountElement = document.getElementById('days-count');
    let nextBtnElement = document.getElementById('next-btn');
    let ulTicketInfoList = document.querySelector('.ticket-info-list');
    let ulTConfirmTicket = document.querySelector('.confirm-ticket');
    let divElement = document.getElementById('main');
    let divContent = divElement;

    let bodyEl = document.getElementById('body');
    let body = bodyEl.textContent;

    nextBtnElement.addEventListener('click', next);
    function next(e) {
        e.preventDefault();
    
        if(firstNameElement == '' || lastNameElement == '' || countPeopleElement == '' || 
            fromDateElement == '' || daysCountElement == '') {
            return;
        }

        let fName = firstNameElement.value;
        let lName = lastNameElement.value;
        let countPeople = countPeopleElement.value;
        let fromDate = fromDateElement.value;
        let daysCount = daysCountElement.value;

      
        let liElement = elGenerator('li');
        liElement.classList.add('ticket');

        let articleElement = elGenerator('article');

        elGenerator('h3', `Name: ${fName} ${lName}`, articleElement);
        elGenerator('p', `From date: ${fromDate}`, articleElement);
        elGenerator('p', `For ${daysCount} days`, articleElement);
        elGenerator('p', `For ${countPeople} people`, articleElement);

        liElement.appendChild(articleElement);

        let btnEdit = elGenerator('button', 'Edit');
        btnEdit.classList.add('edit-btn');
        let btnContinue = elGenerator('button', 'Continue');
        btnContinue.classList.add('continue-btn');

        liElement.appendChild(btnEdit);
        liElement.appendChild(btnContinue);
        ulTicketInfoList.appendChild(liElement);

        firstNameElement.value = '';
        lastNameElement.value = '';
        countPeopleElement.value = '';
        fromDateElement.value = '';
        daysCountElement.value = '';

        nextBtnElement.disabled = true;
        btnEdit.disabled = false;
        btnContinue.disabled = false;

        btnEdit.addEventListener('click', onEdit);
        function onEdit(e) {
            e.preventDefault();

            firstNameElement.value = fName;
            lastNameElement.value = lName;
            countPeopleElement.value = countPeople;
            fromDateElement.value = fromDate;
            daysCountElement.value = daysCount;
      
            liElement.remove();
            nextBtnElement.disabled = false;
        }

        btnContinue.addEventListener('click', onContinue);
        function onContinue(e) {
            e.preventDefault();

            let articleConfirmElement = elGenerator('article');

            elGenerator('h3', `Name: ${fName} ${lName}`, articleConfirmElement);
            elGenerator('p', `From date: ${fromDate}`, articleConfirmElement);
            elGenerator('p', `For ${daysCount} days`, articleConfirmElement);
            elGenerator('p', `For ${countPeople} people`, articleConfirmElement);

            let liConfirmElement = elGenerator('li');
            liConfirmElement.classList.add('ticket-content');
            liConfirmElement.appendChild(articleConfirmElement);

            let btnConfirm = elGenerator('button', 'Confirm');
            btnConfirm.classList.add('confirm-btn');
            let btnCancel = elGenerator('button', 'Cancel');
            btnCancel.classList.add('cancel-btn');

            liConfirmElement.appendChild(btnConfirm);
            liConfirmElement.appendChild(btnCancel);
            ulTConfirmTicket.appendChild(liConfirmElement);
            liElement.remove();
            nextBtnElement.disabled = false;

            btnCancel.addEventListener('click', onCancel);
            function onCancel(e) {
                e.preventDefault();
    
                liConfirmElement.remove();
                nextBtnElement.disabled = false;
            }

            btnConfirm.addEventListener('click', onConfirm);
            function onConfirm(e) {
                e.preventDefault();
                divElement.remove();

                let h1El = elGenerator('h1', 'Thank you, have a nice day!', bodyEl);
                h1El.setAttribute('id','thank-you');
                let btnBack = elGenerator('button', 'Back', bodyEl);
                btnBack.setAttribute('id','back-btn');

                btnBack.addEventListener('click', onBack);
                function onBack(e) {
                    e.preventDefault();
        
                    h1El.remove();
                    btnBack.remove();
                    
                    liElement.remove();
                    liConfirmElement.remove();
                    // bodyEl.textContent = body;

                    // let html = document.getElementsByName('html');
                    bodyEl.appendChild(divContent);
                }
            }
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


    
    
