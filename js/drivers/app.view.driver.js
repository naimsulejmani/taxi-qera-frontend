document.addEventListener("DOMContentLoaded", function () {


    const profili = document.getElementById('profili');
    async function loadData() {
        const driverId = window.location.search.split('=')[1].trim();
        const apiDriver = new ApiDriver();
        const data = await apiDriver.findById(driverId);
        profili.innerHTML = `
        <p style="color: lightblue">Name: ${data.name} </p>
        <p style="color: red">Surname: ${data.surname} </p>
        `
    }

    loadData()
});