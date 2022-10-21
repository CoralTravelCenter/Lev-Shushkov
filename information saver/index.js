// Данная доработка уже отключена т.к. разрабы накатили свою версию этой фичи

let contractPerson = {};
const formContractPerson = document.querySelector(".formPayerAndContractPerson");
const touristsForms = document.querySelectorAll(".formPassenger");

if (touristsForms) {
    createTouristsObjects(touristsForms);
}

function createTouristsObjects(formsArray) {
    for (let i = 0; i < formsArray.length; i++) {
        let touristObj = new Object();
        if (localStorage.getItem(`Tourist ${i + 1}`)) {
            touristObj = JSON.parse(localStorage.getItem(`Tourist ${i + 1}`));
            getInfo(touristObj, formsArray[i]);
        }

        formsArray[i].addEventListener("change", function (evt) {
            setTourist(evt, formsArray[i], touristObj, formsArray[i], `Tourist ${i + 1}`);
        });
    }
}

formContractPerson.addEventListener("change", function (evt) {
    setTourist(evt, formContractPerson, contractPerson, formContractPerson, "Contract Person");
});

if (localStorage.getItem("Contract Person")) {
    contractPerson = JSON.parse(localStorage.getItem("Contract Person"));
    getInfo(contractPerson, formContractPerson);
}

function setTourist(evt, touristForm, userObj, currentForm, objName) {
    const citizenship = touristForm.querySelector(".selectCitizenship");
    const checkBoxAgreement = touristForm.querySelector(".checkAddThisPersonMyPersonList");
    const genderContainer = touristForm.querySelector(".gender");
    const genderRadios = genderContainer.querySelectorAll("input");
    const radioMale = genderRadios[0];
    const radioFemale = genderRadios[1];
    const nameInput = touristForm.querySelector(".txtName");
    const midNameInput = touristForm.querySelector(".txtMiddleName");
    const surname = touristForm.querySelector(".txtSurname");
    const dateOfBirth = touristForm.querySelector(".txtBirthdate");
    const seriesOfDocument = touristForm.querySelector(".txtSeriesOfDocument");
    const documentNumber = touristForm.querySelector(".txtDocumentNumber");
    const devisionNumber = touristForm.querySelector(".txtDivisionNumber");
    const startDocument = touristForm.querySelector(".dateDocumentStartDate");
    const endDocument = touristForm.querySelector(".dateDocumentEndDate");
    const issuingAuthority = touristForm.querySelector(".txtPassportAuth");
    const mainPhoneNumber = touristForm.querySelector(".txtMobilePhone");
    const email = touristForm.querySelector(".txtEmail");
    const registrationAdress = touristForm.querySelector(".txtRegistrationAddress");
    const additionalPhoneNumber = touristForm.querySelector(".txtHomePhone");

    if (touristForm === currentForm) {
        if (radioMale.checked) {
            userObj.gender = "Male";
        }
        if (radioFemale.checked) {
            userObj.gender = "Female";
        }

        if (evt.target === citizenship) {
            const citizenshipValue = touristForm.querySelector(".CaptionCont").title;
            userObj.citizenship = citizenshipValue.split(" ").join("");
        }
        if (evt.target === nameInput) {
            userObj.name = nameInput.value;
        }
        if (evt.target === midNameInput) {
            userObj.midName = midNameInput.value;
        }
        if (evt.target === surname) {
            userObj.surname = surname.value;
        }
        if (evt.target === dateOfBirth) {
            userObj.dateOfBirth = dateOfBirth.value;
        }
        if (evt.target === seriesOfDocument) {
            userObj.seriesOfDocument = seriesOfDocument.value;
        }
        if (evt.target === documentNumber) {
            userObj.documentNumber = documentNumber.value;
        }
        if (evt.target === startDocument) {
            userObj.startDocument = startDocument.value;
        }
        if (evt.target === devisionNumber) {
            userObj.devisionNumber = devisionNumber.value;
        }
        if (evt.target === endDocument) {
            userObj.endDocument = endDocument.value;
        }
        if (evt.target === issuingAuthority) {
            userObj.issuingAuthority = issuingAuthority.value;
        }
        if (evt.target === mainPhoneNumber) {
            userObj.mainPhoneNumber = mainPhoneNumber.value;
        }
        if (evt.target === email) {
            userObj.email = email.value;
        }
        if (evt.target === registrationAdress) {
            userObj.registrationAdress = registrationAdress.value;
        }
        if (evt.target === additionalPhoneNumber) {
            userObj.additionalPhoneNumber = additionalPhoneNumber.value;
        }
        if (checkBoxAgreement.checked) {
            localStorage.setItem(`${objName}`, JSON.stringify(userObj));
        } else {
            localStorage.removeItem(`${objName}`);
        }
    }
}

function getGender(genderContainer, currentGender) {
    const allRadio = genderContainer.querySelectorAll("input");
    allRadio.forEach((radio) => {
        if (radio.value === currentGender) {
            radio.click();
        }
    });
}

function getInfo(userObj, touristForm) {
    const citizenshipContainer = touristForm.querySelector(".SumoSelect");
    const genderContainer = touristForm.querySelector(".gender");
    const nameInput = touristForm.querySelector(".txtName");
    const midNameInput = touristForm.querySelector(".txtMiddleName");
    const surname = touristForm.querySelector(".txtSurname");
    const dateOfBirth = touristForm.querySelector(".txtBirthdate");
    const seriesOfDocument = touristForm.querySelector(".txtSeriesOfDocument");
    const documentNumber = touristForm.querySelector(".txtDocumentNumber");
    const devisionNumber = touristForm.querySelector(".txtDivisionNumber");
    const startDocument = touristForm.querySelector(".dateDocumentStartDate");
    const endDocument = touristForm.querySelector(".dateDocumentEndDate");
    const issuingAuthority = touristForm.querySelector(".txtPassportAuth");
    const mainPhoneNumber = touristForm.querySelector(".txtMobilePhone");
    const email = touristForm.querySelector(".txtEmail");
    const registrationAdress = touristForm.querySelector(".txtRegistrationAddress");
    const additionalPhoneNumber = touristForm.querySelector(".txtHomePhone");

    if (userObj.gender) {
        if (userObj.gender === "Male") {
            getGender(genderContainer, "True");
        } else {
            getGender(genderContainer, "False");
        }
    }

    if (userObj.citizenship) {
        const options = citizenshipContainer.querySelector(".optWrapper");
        const allOptions = options.querySelectorAll(".opt");
        allOptions.forEach((tag) => {
            tag.classList.remove("selected");
        });
        allOptions.forEach((tag) => {
            const optName = tag.querySelector("label").textContent;
            if (optName === userObj.citizenship) {
                tag.classList.add("selected");
                tag.click();
            }
        });
    }
    if (userObj.name) {
        nameInput.value = userObj.name;
    }
    if (userObj.midName) {
        midNameInput.value = userObj.midName;
    }
    if (userObj.surname) {
        surname.value = userObj.surname;
    }
    if (userObj.dateOfBirth) {
        dateOfBirth.value = userObj.dateOfBirth;
    }
    if (userObj.seriesOfDocument) {
        seriesOfDocument.value = userObj.seriesOfDocument;
    }
    if (userObj.documentNumber) {
        documentNumber.value = userObj.documentNumber;
    }
    if (userObj.devisionNumber) {
        devisionNumber.value = userObj.devisionNumber;
    }
    if (userObj.startDocument) {
        startDocument.value = userObj.startDocument;
    }
    if (userObj.issuingAuthority) {
        issuingAuthority.value = userObj.issuingAuthority;
    }
    if (userObj.mainPhoneNumber) {
        mainPhoneNumber.value = userObj.mainPhoneNumber;
    }
    if (userObj.additionalPhoneNumber) {
        additionalPhoneNumber.value = userObj.additionalPhoneNumber;
    }
    if (userObj.email) {
        email.value = userObj.email;
    }
    if (userObj.registrationAdress) {
        registrationAdress.value = userObj.registrationAdress;
    }
    if (userObj.endDocument) {
        endDocument.value = userObj.endDocument;
    }
}
