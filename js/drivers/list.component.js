function ListDrivers() {
    const self = this;
    const api = new ApiDriver();

    self.findAll = async function() {
        self.drivers = await api.findAll();
        console.log(self.drivers);
    }

    self.isChecked = function(active) {
        return active ? "checked" : "";
    }


    self.findAll();


    lemonade.set('ListDrivers', self);

    return `<main>
        <h2>Lista e shofereve</h2>
        <div class="my-1">
            <a href="./new.html" class="btn btn-primary">NEW</a>
        </div>
        <div class="table-responsive small">
            <table class="table table-striped table-sm" >
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Surname</th>
                    <th scope="col">Active</th>
                    <th scope="col">Licence Category</th>
                    <th scope="col">(actions)</th>
                </tr>
                </thead>
                <tbody id="tableDriverBody" :loop="self.drivers">
 <tr>
                    <td>{{self.id}}</td>
                    <td>{{self.name}}</td>
                    <td>{{self.surname}}</td>
                    <td>{{self.active ? <input class="statusChange" type="checkbox" checked style="width: 25px; height: 25px"
                    data-driverId="{{self.id}}"/> : <input class="statusChange" type="checkbox" style="width: 25px; height: 25px"
                    data-driverId="{{self.id}}"/>}}</td>
                    <td>{{self.licenceCategory}}</td>
                    <td>
                        <a class="btn btn-light" href="./view.html?driverId={{self.id}}">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle-fill" viewBox="0 0 16 16">
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
</svg>
                        </a>
                        
                        <a class="btn btn-warning" href="./edit.html?driverId={{self.id}}"> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg>
                        </a>
                        
                        <a class="btn btn-danger" href="./delete.html?driverId={{self.id}}">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0  14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>
                        </a>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </main>`
}