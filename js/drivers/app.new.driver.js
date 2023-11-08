document.addEventListener("DOMContentLoaded", function () {

    const txtName = document.getElementById("txtName");
    const txtSurname = document.querySelector("#txtSurname");
    const txtBirthdate = document.getElementById('txtBirthdate');
    const ddlLicenceCategory = document.getElementById(`ddlLicenceCategory`);
    const txtRegisterDate = document.getElementById("txtRegisterDate");
    const chbActive = document.querySelectorAll("#chbActive")[0];

    const btnSave = document.getElementById('btnSave');
    const btnCancel = document.getElementById('btnCancel');


    async function onSave() {
        const name = txtName.value;
        const surname = txtSurname.value;
        const birthdate = txtBirthdate.value;
        const licenceCategory = ddlLicenceCategory.value;
        const registerDate = txtRegisterDate.value;
        const active = chbActive.checked;

        if (name.trim() === "") {
            txtName.style.backgroundColor = "red";
            return;
        }
        const driver = new Driver(0, name, surname, licenceCategory, birthdate, registerDate, active);
        console.log(driver);

        const apiDriver = new ApiDriver();
        await apiDriver.register(driver);

    }

    btnSave.addEventListener("click", function (event) {
        event.preventDefault();
        onSave();
    })


});