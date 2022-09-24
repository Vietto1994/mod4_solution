/*var message = "in global";
console.log("global: message = " + message);

var a = function() {
	var message = "inside a";
	console.log("a: message = " + message);

    function b () {
	  console.log("b: message = " + message);

}

	b();
}



a();*/



/*var x function() {
	console.log("hello");
	return;

};

var x;
console.log(x);

if (x == undefined) {
	console.log("x is undefined");
}

x = 5;
if (x == undefined) {
	console.log("x is undefined");
}
else {
	console.log("x has been defined");
}*/



/*var string = "hello";
string += " world ";
string = string + " world ";
console.log(string + "!");*/

//****математические опкраторы
//console.log((5 + 4) / 3);
//console.log(undefined / 5);
//function test1 (a) {
//	console.log(a / 5);
//}
//test1();

/*var x = 4, y = 4;
if (x == y) {
	console.log("x=4 is equal to y=4");
}

x = "4";
if (x == y) {
	console.log("x='4' is equal to y=4");
}

if (x === y) {
	console.log("Strict:x=4 is equal to y=4")
}
else {
	console.log("Strict:x=4 is NOT equal to y=4");
}*/

/*if (false || 0 || undefined || "" || 0 || NaN) {
	console.log("This line wont ever execute");
}
else {
	console.log ("all false");
}

if (true && "hello" && 1 && -1 && "false") {
   console.log("all true");
}*/

/*function a()
{
	return 
	{
		name:"Yakov"
	};
}

function b() {
	return {
	name: "rob"
	};
}

console.log(a());
console.log(b());*/

/*var sum = 0;
for (var i = 0; i < 10; i++) {
	console.log(i);
	sum = sum + i;
}
console.log("sum of 0 through 9 ghgh: " + sum);*/
/*function orderChickenWith(sideDish) {
	sideDish = sideDish || "whatever!"
	console.log("Сhicken with " + sideDish);
}
orderChickenWith("noodles");
orderChickenWith();*/

/*var company = new Object();
company.name = "Facebook";
company.ceo = new Object();
company.ceo.firstNmae = "Mark";
company.ceo.favColor = "blue";
console.log(company);
console.log("Company CEO name is: " 
	+ company.ceo.firstNmae);
console.log(company["name"]);
var stockPropNmae = "stock of company";
company[stockPropNmae] = 110;
//company["stock of company"] = 110;
console.log("Stock price is: " + company[stockPropNmae]);*/

/*var facebook = {
	name: "facebook",
	ceo: {
		firstNmae: "Mark",
		favColor:"blue"
	},

	"stock of company": 110
};

var company = {
	ceo: {},
	"stock of company":110 
}

console.log(facebook);*/
/*function multiply(x,y) {
	return x * y;
}
//console.log(multiply(5, 3));
multiply.version = "v.1.0.0";
console.log(multiply.version);

//фабрика функций
function makeMultiplier(multiplier) {
	var myFunc = function (x) {
     return multiplier * x;
	};

	return myFunc;
}

var slogenie = makeMultiplier(10);
console.log(slogenie(20));
var doubleAll = makeMultiplier(3);
console.log(doubleAll(100));

//Аргументы
function doOperationFont(x ,operation) {
	return operation(x);
}
var result = doOperationFont(5 ,slogenie)
console.log(result);
result = doOperationFont(100, doubleAll);
console.log(result);*/

/*var a = 17;
var b = a;
console.log("a: " + a);
console.log("b: " + b);

b = 5;
console.log("after b update:");
console.log("a: " + a);
console.log("b: " + b);*/


/*var a = { x: 7};
var b = a;
console.log(a);
console.log(b);


b.x = 5;
console.log("after b.x update:")
console.log(a);
console.log(b);*/

/*function chanelPrimitive(primitiveValue) {
	console.log("in chanelPrimitive...");
	console.log("before:");
	console.log(primitiveValue);

	primitiveValue = 5;
	console.log("after:");
	console.log(primitiveValue);

}
var value = 7;
chanelPrimitive(value);
console.log("after chanelPrimitive,orig value:")
console.log(value);*/

/*function chanelObject(obValue) {
	console.log("in chanelObject...");
	console.log("before:");
	console.log(obValue);

	obValue.x = 5;
	console.log("after:");
	console.log(obValue);
}

value = {x: 7};
chanelObject(value);
console.log("after chanelPrimitive,orig value:")
console.log(value);*/

/*function test() {
	console.log(this);
	this.myName = "Vitaliy"; 
}

test();
console.log(window.myName);*/
//function construction

/*function Circle (radius) {
  this.radius = radius;
}
Circle.prototype.getArea = 
   function () {
	return Math.PI * Math.pow(this.radius, 2);
}

var myCircle = new Circle(10);
console.log(myCircle);



var myOtherCircle = new Circle(20);
console.log(myOtherCircle);


/*var literalCircle = {
	radius: 10,

	getArea: function () {
		var self = this;
		console.log(this);

		var increaseRadius = function () {
			self.radius = 20; 
		};
		increaseRadius();
		console.log(this.radius);
		return Math.PI * Math.pow(this.radius, 2);
	}
};

console.log(literalCircle.getArea());*/

/*function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function () {
  console.log(this.name + " likes barking! Bark!");
}

var max = new Dog("leon", "Buddy");
max.bark();*/

/**/
/*var array = new Array();
array[0] = "Vitaly";
array[1] = 2;
array[2] = function(name) {
	console.log("hello " + name);
};
array[3] = {course: "HTML, CSS and JS"};
console.log(array);
//array[2]("Vitaly");
array[2](array[0]);
console.log(array[3].course);*/

 /*var names = ["Vitaly" , "john" , "Yakov"];
//console.log(names);
for (var i = 0; i < names.length; i++) {
	console.log("Hello "+ names[i]); 
}

names[99] = "jim";
for (var i = 0; i < names.length; i++) {
	console.log("Hello "+ names[i]); 
}*/

/**/
/*var names2 = ["Vitaly", "john", "Yakov"];

/*var myObj = {
  name: "Vitaly",
  course: "HTML/CSS/JS",
  platform: "Coursera"
};
for (var prop in myObj) {
   console.log(prop + ": " + myObj[prop]);
}*/

//for (var name in names2) {
//	console.log("Hello " + names2[name]);
//}

/*names2.greeting = "Hi!";
for (var name in names2) {
	console.log("Hello " + names2[name]);
}


var counter = 0;
var myArray = ["Yaakov", 2 , 3 , 4,6,9];
for (var i = 0; i < myArray.length; i++) {
  counter++;
}
console.log(counter);*/

/*	function b() {
	console.log("Multiplier is: " + multiplier);
}
b();


	return (
		function(x) {
          return multiplier * x;
		}
		);
}


var doubleAll = makeMultiplier(5);
console.log(doubleAll(10));*/

