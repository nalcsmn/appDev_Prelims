

var btn = document.getElementById("home-page");
btn.addEventListener(btn,ageInput);
function ageInput(){
	var fname = document.getElementById("first").value;
	var age = parseInt(document.getElementById("age").value);
	var fnumz = parseInt(document.getElementById("fnum").value);
	if(age <= 18){
		alert("less than 18");
		alert("Reversed Name is: " +reverse1(fname)); 
		alert(least(age));
	}
	else if(age >= 18){
		fibonacciSequence();
	}
	if(fnumz >= 321 && fnumz <=1234){
        alert(JSON.stringify(Date()));

    }else{
        var date = new Date();
        date.setDate(date.getDate() - 7)
        alert(date);
    }


}

/*FUNCTION FOR REVERSE*/
function reverse1(str) {
  if(!str || str.length < 2 || typeof str !== "string") {
    return new Error("Not a valid input");
  }
  const backwards = [];
  for (let i = str.length; i > -1; i--) {
    backwards.push(str[i]);
  }
  return backwards.join('');
}

/*FUNCTION FOR SORTING AGE*/
var btn = document.getElementById("home-page");
btn.addEventListener(btn,least);
function least(){
var friAge = parseInt(document.getElementById("fage").value);
var friAge2 = parseInt(document.getElementById("age2").value);
var friAge3 = parseInt(document.getElementById("age3").value);
var inputs = [friAge,friAge2,friAge3];
inputs.sort(upDown);
alert(inputs);
}

function upDown(a,b){
	return b-a;
}

function fibonacciSequence(){
	var firstname = document.getElementById("first").value;
	var lastname = document.getElementById("last").value;
	var middlename = document.getElementById("mid").value;
	var ageZ = document.getElementById("age").value;
	var addressZ = document.getElementById("address").value;
	var Course = document.getElementById("cour").value;
	var InterestZ = document.getElementById("inter").value;
	var FavoriteNumber = document.getElementById("fnum").value;

	var friNAME = document.getElementById("friend1").value;
	var friNAME2 = document.getElementById("friend2").value;
	var friNAME3 = document.getElementById("friend3").value;

	var friAGE = document.getElementById("fage").value;
	var friAGE2 = document.getElementById("age2").value;
	var friAGE3 = document.getElementById("age2").value;

	var fricOUR = document.getElementById("fcourse").value;
	var fricOUR2 = document.getElementById("fcourseTwo").value;
	var fricOUR3 = document.getElementById("fcourseTree").value;

	var friINT = document.getElementById("finterest").value;
	var friINT2 = document.getElementById("finterestTwo").value;
	var friINT3 = document.getElementById("finterestTree").value;

		var inputsfONE = [friNAME,friAGE,fricOUR,friINT];
		var inputsFTWO = [friNAME2,friAGE2,fricOUR2,friINT2];
		var inputsHREE = [friNAME3,friAGE3,fricOUR3,friINT3];

		var friends = {inputsfONE,inputsFTWO,inputsHREE}


	var Info ={firstname,lastname,middlename,ageZ,addressZ,Course,InterestZ,FavoriteNumber}
	var age = parseInt(document.getElementById("age").value);

	var x = 1;
    var y = 0;
    var z = 0;
    var evenNumbers = 0;
    for(var i =0 ; i< age; i++){

        z = x;
        x += y;
        y = z

        if(z % 2 == 0)
            evenNumbers += 1;
    }
	
	console.log(evenNumbers);
	

    if(evenNumbers % 2 == 0){
            alert("EVEN");
        

        alert(JSON.stringify(Info));
    }else{
		alert("SORT");
	
       
		// alert(JSON.stringify(inputsfONE));
		// alert(JSON.stringify(inputsFTWO));
		// alert(JSON.stringify(inputsHREE));

		friends.sort(courseSort);

        friends.forEach((friend)=>{
            alert(JSON.stringify(friend));
        })
    }
}

