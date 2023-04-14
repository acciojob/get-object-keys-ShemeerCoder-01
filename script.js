//your JS code here. If required.
const Student = {
	name:"abc"
}
Student.prototype.getKeys = function (){
	let keys = Object.keys(this);
	return keys;
}
