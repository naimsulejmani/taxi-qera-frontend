class ApiDriver {
    url = 'http://localhost:8080/api/drivers';

    async findAll() {
        // const response = await fetch(this.url);
        // return await response.json();

        const response = await axios.get(this.url);
        return response.status === 200 ? response.data : [];
    }

    async findById(driverId) {
        // const response = await fetch(`${this.url}/${driverId}`);
        // console.log(response)
        // return await response.json();

        const response = await axios.get(`${this.url}/${driverId}`);
        return response.status === 200 ? response.data : [];
    }

    async removeById(driverId) {
        // const response = await fetch(`${this.url}/${driverId}`, {method: "DELETE"});
        // return await response.text();
        const response = await axios.delete(`${this.url}/${driverId}`);
        console.log(response);
        return response.status === 200 ? response.data : "NOT DELETED";
    }

    async register(driver) {

        // const response = await fetch(this.url,
        //     {
        //         method: "POST",
        //         body: JSON.stringify(driver),
        //
        //         headers: {
        //             "Content-Type": "application/json"
        //             // "Authorization" : "Bearer asdjlsadjsalkjdakjlsadjlaksdjlkad"
        //         }
        //     });
        // return await response.text();

        const response = await axios.post(this.url, driver)
        return response.status === 200 || response.status === 201 ? response.data : "NOT REGISTERED"
    }

    async update(driverId, driver) {
        // const response = await fetch(this.url + '/' + driverId,
        //     {
        //         method: "PUT",
        //         body: JSON.stringify(driver),
        //
        //         headers: {
        //             "Content-Type": "application/json"
        //             // "Authorization" : "Bearer asdjlsadjsalkjdakjlsadjlaksdjlkad"
        //         }
        //     });
        // return await response.text();
        const response = await axios.put(this.url + '/' + driverId, driver)
        return response.status === 200 || response.status === 201 ? response.data : "NOT REGISTERED"
    }

    async changeStatus(driverId, active) {
        // const response = await fetch(this.url + '/' + driverId,
        //     {
        //         method: "PATCH",
        //         body: JSON.stringify({active}),
        //
        //         headers: {
        //             "Content-Type": "application/json"
        //             // "Authorization" : "Bearer asdjlsadjsalkjdakjlsadjlaksdjlkad"
        //         }
        //     });
        // return await response.text();
        const response = await axios.patch(this.url + '/' + driverId, driver)
        return response.status === 200 || response.status === 201 ? response.data : "NOT REGISTERED"
    }

}