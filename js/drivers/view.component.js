function ViewDriver() {
    const self = this;

    const apiDriver = new ApiDriver();
    self.driver_id = window.location.search.split('=')[1].trim();
    self.driver = undefined;

    self.find = async function () {
        self.driver = await apiDriver.findById(self.driver_id);
        self.refresh('driver');
    }

    self.find()

    return `<div>
        <table class="table">
            <tr>
                <th>Name</th> 
                <td>{{self.driver.name}}</td>
            </tr>
             <tr>
                <
                
                th>Surname</th> 
                <td>{{self.driver.surname}}</td>
            </tr>
            <tr>
                <th>Licence Category</th> 
                <td>{{self.driver.licenceCategory}}</td>
            </tr>
              </tr>
            <tr>
                <th>Active</th> 
                <td>{{self.driver.active ? 'YES' : 'NO'}}</td>
            </tr>
        </table>
</div>`
}