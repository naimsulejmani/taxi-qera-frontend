function SaveDriver() {
    const self = this;


    self.driver = new Driver(undefined, '', '', '', null, null, false);

    self.save = function () {
        console.log(self.driver);
    }

    return `<div id="profili">
            <div class="row g-3">
                <div class="col">
                    <label for="txtName" class="col-form-label">Name</label>
                </div>
                <div class="col">
                    <input type="text" id="txtName" class="form-control" :bind="self.driver.name"/>
                </div>
            </div>
            <div class="row g-3 my-1">
                <div class="col">
                    <label for="txtSurname" class="col-form-label">Surname</label>
                </div>
                <div class="col">
                    <input type="text" id="txtSurname" class="form-control" :bind="self.driver.surname"/>
                </div>
            </div>

            <div class="row g-3 my-1">
                <div class="col">
                    <label for="txtBirthdate" class="col-form-label">Birthdate</label>
                </div>
                <div class="col">
                    <input type="date" id="txtBirthdate" class="form-control" :bind="self.driver.birthdate"/>
                </div>
            </div>

            <div class="row g-3 my-1">
                <div class="col">
                    <label for="ddlLicenceCategory" class="col-form-label">Licence Category</label>
                </div>
                <div class="col">
                    <select class="form-select" aria-label="Default select example" id="ddlLicenceCategory"
                    :bind="self.driver.licenceCategory">
                        <option selected value="">Select One</option>   
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="E">E</option>
                    </select>
                </div>
            </div>

            <div class="row g-3 my-1">
                <div class="col">
                    <label for="txtRegisterDate" class="col-form-label">Register Date</label>
                </div>
                <div class="col">
                    <input type="date" id="txtRegisterDate" class="form-control" :bind="self.driver.registerDate"/>
                </div>
            </div>

            <div class="row g-3 my-1">
                <div class="col">
                    <label for="chbActive" class="col-form-label">Is Active</label>
                </div>
                <div class="col">
                    <input type="checkbox" id="chbActive" style="width: 35px; height: 35px;" :bind="self.driver.active"/>
                </div>
            </div>
            <button type="button" onclick="self.save()" class="btn btn-primary">SAVE</button>
        </div>`;
}