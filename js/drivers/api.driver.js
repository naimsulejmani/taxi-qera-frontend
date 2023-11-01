class ApiDriver {
    url = 'http://localhost:8080/api/drivers';

    async findAll() {
        const response = await fetch(this.url);
        return await response.json();
    }

    async findById(driverId) {
        const response = await fetch(`${this.url}/${driverId}`);
        return await response.json();
    }
}