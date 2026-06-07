export default class User {

    full_name;
    email;
    dob;
    country;
    phone;
    password;
    confirm_password;

    constructor(full_name, email, dob, country, phone, password, confirm_password) {
        this.full_name = full_name;
        this.email = email;
        this.dob = dob;
        this.country = country;
        this.phone = phone;
        this.password = password;
        this.confirm_password = confirm_password;
    }
}