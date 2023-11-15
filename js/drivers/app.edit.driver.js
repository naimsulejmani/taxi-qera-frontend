document.addEventListener("DOMContentLoaded", () => {

    const txtName = document.getElementById("txtName");
    const txtSurname = document.querySelector("#txtSurname");
    const txtBirthdate = document.getElementById('txtBirthdate');
    const ddlLicenceCategory = document.getElementById(`ddlLicenceCategory`);
    const txtRegisterDate = document.getElementById("txtRegisterDate");
    const chbActive = document.querySelectorAll("#chbActive")[0];

    const btnSave = document.getElementById('btnSave');
    const btnCancel = document.getElementById('btnCancel');

    const onSave = async () => {
        const driverId = window.location.search.split('=')[1].trim();
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
        const driver = new Driver(driverId, name, surname, licenceCategory, birthdate, registerDate, active);
        console.log(driver);

        const apiDriver = new ApiDriver();
        await apiDriver.update(driverId, driver);
        window.location.href = "./list.html"
    }

    const onLoad = async () => {
        const driverId = window.location.search.split('=')[1].trim();

        const apiDriver = new ApiDriver();
        const result = await apiDriver.findById(driverId);
        console.log(result);

        if (result && result.id) {
            txtName.value = result.name;
            txtSurname.value = result.surname;
            ddlLicenceCategory.value = result.licenceCategory;
            txtBirthdate.value = result.birthdate;
            txtRegisterDate.value = result.registerDate;
            chbActive.checked = result.active;
        }

    }
    onLoad();

    btnSave.addEventListener("click", (event) => {
        event.preventDefault();
        onSave();
    })

});