document.addEventListener("DOMContentLoaded", function () {

    const profili = document.getElementById('profili');
    const btnDeleteDriver = document.getElementById('btnDeleteDriver');

    async function loadData() {
        const driverId = window.location.search.split('=')[1].trim();
        const apiDriver = new ApiDriver();

        const data = await apiDriver.findById(driverId);

        if (!data.status || data.status === 200) {
            console.log(data);
            profili.innerHTML = `
        <p style="color: lightblue">Name: ${data.name} </p>
        <p style="color: red">Surname: ${data.surname} </p>
        <p>Licence Category: ${data.licenceCategory}</p>
        <input type="checkbox" ${data.active ? 'checked' : ''} disabled readonly>
        `;
            btnDeleteDriver.style.display = 'block';
        } else {
            profili.innerHTML = `<div>
            <p style="color:red">404 Resource Not Found</p>
            <hr>
            <a href="./list.html" class="btn btn-link">Go back</a>
            </div>`
        }
    }

    loadData()

    async function deleteDriver() {
        const driverId = window.location.search.split('=')[1].trim();

        if (!confirm("Are you sure that you want to delete driver with id: " + driverId))
            return;

        const apiDriver = new ApiDriver();
        const response = await apiDriver.removeById(driverId);
        console.log(response);
        if (!response) {
            // window.location.pathname = '/taxi-qera-frontend/pages/drivers/list.html'
            window.location.href = './list.html'
        }
    }

    btnDeleteDriver.addEventListener("click", function () {
        deleteDriver();
    })
});