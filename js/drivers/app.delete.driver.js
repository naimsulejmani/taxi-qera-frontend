document.addEventListener("DOMContentLoaded", function () {

    const profili = document.getElementById('profili');

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
        `
        } else {
            profili.innerHTML = `<div>
            <p style="color:red">404 Resource Not Found</p>
            <hr>
            <a href="./list.html" class="btn btn-link">Go back</a>
            </div>`
        }
    }
    loadData()
});