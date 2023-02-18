window.addEventListener('load', solve);

function solve() {

    let firstNameElement = document.getElementById('first-name');
    let lastNameElement = document.getElementById('last-name');
    let dateInElement = document.getElementById('date-in');
    let dateOutElement = document.getElementById('date-out');
    let peopleCountElement = document.getElementById('people-count');
    let buttonNextElement = document.getElementById('next-btn');
    let infoListElement = document.querySelector('.info-list');
    let confirmListElement = document.querySelector('.confirm-list');
    let headingConfirmElement = document.getElementById('verification');



    buttonNextElement.addEventListener('click', (e) => {
        e.preventDefault();

        let firstName = firstNameElement.value;
        let lastName = lastNameElement.value;
        let fromDate = dateInElement.value;
        let dateOut = dateOutElement.value;
        let peopleCount = peopleCountElement.value;

        if (!firstName || 
            !lastName || 
            !fromDate || 
            !dateOut || 
            !peopleCount ||
            new Date(fromDate) >= new Date(dateOut)) {
            return;
        }


        let liElemetInfoList = document.createElement('li');
        liElemetInfoList.classList.add('reservation-content');

        let articleElementInfoList = document.createElement("article");

        let fullName = document.createElement('h3');
        fullName.textContent = `Name: ${firstName} ${lastName}`;

        let pElementFromDate = document.createElement('p');
        pElementFromDate.textContent = `From date: ${fromDate}`;

        let pElementDateOut = document.createElement('p');
        pElementDateOut.textContent = `To date: ${dateOut}`;

        let pElementpeopleCount = document.createElement('p');
        pElementpeopleCount.textContent = `For ${peopleCount} people`;

        fullName.style.borderBottom = '1px dotted black';
        pElementFromDate.style.borderBottom = '1px dotted black';
        pElementDateOut.style.borderBottom = '1px dotted black';
        pElementpeopleCount.style.borderBottom = '1px dotted black';

        articleElementInfoList.appendChild(fullName);
        articleElementInfoList.appendChild(pElementFromDate);
        articleElementInfoList.appendChild(pElementDateOut);
        articleElementInfoList.appendChild(pElementpeopleCount);

        liElemetInfoList.appendChild(articleElementInfoList);


        let editButtonElement = document.createElement('button');
        editButtonElement.classList.add('edit-btn');
        editButtonElement.textContent = 'Edit';

        let continueButtonElement = document.createElement('button');
        continueButtonElement.textContent = 'Continue';
        continueButtonElement.classList.add('continue-btn');


        liElemetInfoList.appendChild(editButtonElement);
        liElemetInfoList.appendChild(continueButtonElement);

        infoListElement.appendChild(liElemetInfoList);


        let editFirstName = firstNameElement.value;
        let editLastName = lastNameElement.value;
        let editDateIn = dateInElement.value;
        let editDateOut = dateOutElement.value;
        let editpeopleCount = peopleCountElement.value;

        firstNameElement.value = '';
        lastNameElement.value = '';
        dateInElement.value = '';
        dateOutElement.value = '';
        peopleCountElement.value = '';
        headingConfirmElement.textContent = '';

        buttonNextElement.disabled = true;

        editButtonElement.addEventListener('click', (e) => {

            firstNameElement.value = editFirstName;
            lastNameElement.value = editLastName;
            dateInElement.value = editDateIn;
            dateOutElement.value = editDateOut;
            peopleCountElement.value = editpeopleCount;


            liElemetInfoList.remove();
            // editButtonElement.remove();
            // continueButtonElement.remove();
            buttonNextElement.disabled = false;

        });


        continueButtonElement.addEventListener('click', (e) => {

            confirmListElement.appendChild(liElemetInfoList);


            let confirmButtonElement = document.createElement('button');
            confirmButtonElement.classList.add('confirm-btn');
            confirmButtonElement.textContent = 'Confirm';
    
            let cancelButtonElement = document.createElement('button');
            cancelButtonElement.textContent = 'Cancel';
            cancelButtonElement.classList.add('cancel-btn');

            confirmListElement.appendChild(confirmButtonElement);
            confirmListElement.appendChild(cancelButtonElement);

            // liElemetInfoList.remove();
            editButtonElement.remove();
            continueButtonElement.remove();

            confirmButtonElement.addEventListener('click', (e) => {
                confirmListElement.remove();

                headingConfirmElement.classList.add('reservation-confirmed')
                headingConfirmElement.textContent = 'Confirmed.';
                buttonNextElement.disabled = false;

            });

            cancelButtonElement.addEventListener('click', (e) => {
                confirmListElement.remove();

                headingConfirmElement.classList.add('reservation-cancelled')
                headingConfirmElement.textContent = 'Cancelled.';
                buttonNextElement.disabled = false;

            });
        });
    });
}






    
    
