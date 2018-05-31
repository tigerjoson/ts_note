interface Person{
	firstname:string;
	lastname:string;
}
function greeter(person:Person){
	return "Hellow,"+person.firstname+""+person.lastname;
}
let user = {firstname:"Jane",lastname:"User"};
document.body.innerHTML=greeter(user);