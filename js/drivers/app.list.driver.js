document.addEventListener("DOMContentLoaded", function () {

    const tableDriverBody = document.getElementById('tableDriverBody');

    async function loadData() {

        // kemi me kriju objektin e javascript qe thirr API
        const apiDriver = new ApiDriver();

        // kemi me load te dhenat
        const data = await apiDriver.findAll();
        tableDriverBody.innerHTML = "";
        // me shkru HTML
        console.log(data);
        data.forEach(driver => {
            const tableRow = `  <tr>
                    <td>${driver.id}</td>
                    <td>${driver.name}</td>
                    <td>${driver.surname}</td>
                    <td><input class="statusChange" type="checkbox" ${driver.active ? "checked" : ""} style="width: 25px; height: 25px"
                    data-driverId="${driver.id}"></td>
                    <td>${driver.licenceCategory}</td>
                    <td>
                        <a class="btn btn-light" href="./view.html?driverId=${driver.id}">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle-fill" viewBox="0 0 16 16">
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
</svg>
                        </a>
                        
                        <a class="btn btn-warning" href="./edit.html?driverId=${driver.id}"> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg>
                        </a>
                        
                        <a class="btn btn-danger" href="./delete.html?driverId=${driver.id}">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0  14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>
                        </a>
                    </td>
                </tr>`;
            tableDriverBody.innerHTML += tableRow;
        })
    }

    loadData();


    tableDriverBody.addEventListener("click", async (event) => {
        const target = event.target;
        console.log(target);
        if (target && target.className === 'statusChange') {
           const apiDriver = new ApiDriver();
           await apiDriver.changeStatus(target.dataset.driverid, target.checked);
           window.location.reload();
        }

    })

});