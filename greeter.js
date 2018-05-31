function greeter(person) {
    return "Hellow," + person.firstname + "" + person.lastname;
}
var user = { firstname: "Jane", lastname: "User" };
document.body.innerHTML = greeter(user);
