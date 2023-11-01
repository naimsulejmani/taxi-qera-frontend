class Driver {
    constructor(
        id,
        name,
        surname,
        licenceCategory,
        birthdate,
        registerDate,
        active = true,
        createdAt,
        createdBy
    ) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.licenceCategory = licenceCategory;
        this.birthdate = birthdate;
        this.registerDate = registerDate;
        this.active = active;
        this.createdAt = createdAt;
        this.createdBy = createdBy;
    }

    toTableRow() {
        return `  <tr>
                    <td>${this.id}</td>
                    <td>${this.name}</td>
                    <td>${this.surname}</td>
                    <td>${this.active}</td>
                    <td>${this.licenceCategory}</td>
                </tr>`;
    }
}









