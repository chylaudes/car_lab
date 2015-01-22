function Car(make, model, year, color){
	this.make = make;
	this.model = model;
	this.year = year;
	this.color = color;
	this.state = "off";
	this.previous_owners = [];
	this.current_owner = "Manufacturer";
	this.passengers = [];
}


Car.prototype.sale = function(newOwner) {
	this.previous_owners.push(this.current_owner);
	this.current_owner = newOwner;
};

Car.prototype.paint = function(newColor){
	this.color = newColor;
};

Car.prototype.start = function(state) {
	this.state = "on";
};

Car.prototype.off = function(state) {
	this.state = "off";
};

Car.prototype.driveTo = function(destination) {
	if (this.state === "on")
	{
		console.log("driving to" + destination);
	}
};

Car.prototype.park = function(destination) {
	if (this.state === "off")
	{
		console.log("parked!!");
	}
};

Car.prototype.pick_up = function(name) {
	if (this.state === "on")
	{
		this.passengers.push(name);
			console.log( "driving to 'pick up " + name + "'");
	}
};
Car.prototype.dropOff = function(name) {
	if (this.state === "on")
	{
		this.passengers.splice(this.passengers.indexOf(this), 1);
		}

	};

module.exports=Car;