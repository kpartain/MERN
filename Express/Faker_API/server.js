const express = require("express");
const faker = require("faker");
const app = express();
const port = 8000;

class User {
    constructor() {
        this._id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor() {
        this._id = faker.datatype.uuid();
        this.name = faker.company.companyName();
        this.street = faker.address.streetAddress();
        this.city = faker.address.city();
        this.state = faker.address.country();
        this.zipCode = faker.address.country();
        this.country = faker.address.country();
    }
}

class Both {
    constructor() {
        this.user = new User();
        this.company = new Company();
    }
}
app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});

app.get("/api/users/new", (req, res) => {
    let newUser = new User();
    res.json(newUser);
});

app.get("/api/companies/new", (req, res) => {
    let newCompany = new Company();
    res.json(newCompany);
});

app.get("/api/user/company", (req, res) => {
    let arrBoth = [new User(), new Company];
    res.json(arrBoth);
});

app.listen(port, () => console.log(`Listening on port: ${port}`));
