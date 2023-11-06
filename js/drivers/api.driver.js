class ApiDriver {
    url = 'http://localhost:8080/api/drivers';

    async findAll() {
        const response = await fetch(this.url);
        return await response.json();
    }

    async findById(driverId) {
        const response = await fetch(`${this.url}/${driverId}`);
        console.log(response)
        return await response.json();
    }

    async removeById(driverId) {
        const response = await fetch(`${this.url}/${driverId}`, {method: "DELETE"});
        return await response.text();
    }
}