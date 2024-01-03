function SaveDriver() {
    const self = this;

    console.log(window.location.pathname);
    self.isNew = window.location.pathname.includes("new.html");

    const apiDriver = new ApiDriver();


    self.driver = new Driver(undefined, '', '', '', null, null, false);

    self.save = async function () {
        console.log(self.driver);
        try {
            if (self.isNew) {
                await apiDriver.register(self.driver);
            } else {
                await apiDriver.update(self.driver.id, self.driver);
            }
            window.location.href = './list.html';
        } catch (err) {
            console.log(err);
            alert(`Gabim: \n${err.response.data.message ?? err.message}`);

        }
    }

    if (!self.isNew) {
        self.onLoad = async function () {
            self.driver.id = window.location.search.split('=')[1].trim();
            try {
                const response = await apiDriver.findById(self.driver.id);
                console.log(response);
                if (response !== null) {
                    self.driver.name = response.name;
                    self.driver.active = response.active;
                    self.driver.licenceCategory = response.licenceCategory;
                    self.driver.surname = response.surname;
                    self.driver.registerDate = response.registerDate;
                    self.driver.createdAt = response.createdAt;
                    self.driver.createdBy = response.createdBy;
                    self.driver.birthdate = response.birthdate;
                } else {
                    alert(`Failed to load data for id: ${self.driver.id}`);
                    window.location.href = './list.html'
                }
            } catch (err) {
                alert(`Failed to load data for id: ${self.driver.id} with error: ${err.message}`);
                window.location.href = './list.html'
            }
        }


        self.onLoad();
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
                        <option value="B2">B2</option>
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