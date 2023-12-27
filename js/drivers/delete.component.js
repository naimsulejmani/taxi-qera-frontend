lemonade.setComponents({ ViewDriver });
function DeleteDriver() {

    const self = this;
    const apiDriver = new ApiDriver();
    self.driver_id = window.location.search.split('=')[1].trim();


    self.delete = async function () {
        await apiDriver.removeById(self.driver_id);
        window.location.href='./list.html';
    }

    return `<div>
    <ViewDriver></ViewDriver>
    <hr>
    <button type="button" class="btn btn-danger" onclick="self.delete()">DELETE</button>
</div>`
}