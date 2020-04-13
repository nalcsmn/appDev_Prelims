

var btn = document.getElementById("home-page");
btn.addEventListener(btn,ageInput);
function ageInput(){
    var fName =document.getElementById("Fname").value;
    var mName =document.getElementById("Mname").value;
    var lName =document.getElementById("Lname").value;
    var address =document.getElementById("addresz").value;
    var fullname = fName+mName+lName;
    var arrFullname = fullname.split("");
    var nameLength=arrFullname.length;
    var addLength=address.length;
    var arrFullname = fullname.split("");
    var nameLength=arrFullname.length;
    var addLength=address.length;

    if(nameLength>addLength){
        //lastfirstmiddle w/o vowels
        var formated = lName+fName+mName;
        alert("NAME LENGTH IS GREATER THAT ADDRESS LENGTH. "+"\n NO VOWEL: "+noVowel(formated));
        // displayP.innerHTML=noVowel(formated);
        alert(formated);
    }else if(nameLength<addLength){//---if End{
        //REVERSE
            var reverseName = arrFullname.reverse();
            
            var addArr = address.split("");
            var output ="";
            console.log(addArr);
            console.log(reverseName);
            for(var i = 0; i < reverseName.length; i++){
                for(var x = 0; x < addArr.length; x++ ){
                    if(reverseName[i]==addArr[x]){
                        delete reverseName[i];
                    }
                    
                }
            }
        alert(reverseName.toString());
        //alert("ADDRESS LENGTH IS GREATER THAN FULLNAME: "+"\n REVERSED: "+reverseName);    
    }else{
        var addArr = address.split("");
        alert("LENGTHS ARE EQUAL."+"\n ADDRESS IN ARRAY: "+addArr);
        


    }




}


function noVowel(text){
	var output = "";
	for (var i = 0; i < text.length ; i++) {
		var charr=text[i];
		if("aeiou".match(charr.toLowerCase())==null){
			output+=charr;
		}
	}
	return output;
}