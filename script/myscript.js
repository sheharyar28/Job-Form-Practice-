
function callFunctionName(){
	var x = document.main.name.value;
	if(isNaN(x)){
		document.getElementById("inoname").style.display="none";
		document.getElementById("name").style.color="black";
		document.getElementById("name").style.backgroundColor="lightgreen";	
		document.getElementById("iname").style.display="inline";
	}
	else{
		document.getElementById("iname").style.display="none";
		document.getElementById("name").style.color="white";
		document.getElementById("name").style.backgroundColor="red";	
		document.getElementById("iname").style.display="none";
		document.getElementById("inoname").style.display="inline"; 	
	}	
}
function callFunctionAge(){
	var y = document.getElementById("age").value;
	if(isNaN(y) || y <17){
		document.getElementById("iage").style.display="none";
		document.getElementById("age").style.color="white";
		document.getElementById("age").style.backgroundColor="red";
		document.getElementById("iage").style.display="none";
		document.getElementById("inoage").style.display="inline";
	}
	else{
		document.getElementById("inoage").style.display="none";
		document.getElementById("age").style.color="black";
		document.getElementById("age").style.backgroundColor="lightgreen";	
		document.getElementById("iage").style.display="inline";	
		}
}

function callFunctionEmail(){
	var y = document.getElementById("email").value;
	if(y.length > 10 && y.indexOf("@") != -1 && y.indexOf(".com") != -1){
		document.getElementById("inoemail").style.display="none";
		document.getElementById("email").style.color="black";
		document.getElementById("email").style.backgroundColor="lightgreen";	
		document.getElementById("iemail").style.display="inline";	
	}
	else{
		document.getElementById("iemail").style.display="none";
		document.getElementById("email").style.color="white";
		document.getElementById("email").style.backgroundColor="red";
		document.getElementById("iemail").style.display="none";
		document.getElementById("inoemail").style.display="inline";
		}
}


function callFunctionPnumber(){
	var y = document.getElementById("pnumber").value;
	if(!isNaN(y) && y.length > 0 && y.length == 11 && y.indexOf("0")==0){
		document.getElementById("inopnumber").style.display="none";
		document.getElementById("pnumber").style.color="black";
		document.getElementById("pnumber").style.backgroundColor="lightgreen";	
		document.getElementById("ipnumber").style.display="inline";	
	}
	else{
		document.getElementById("ipnumber").style.display="none";
		document.getElementById("pnumber").style.color="white";
		document.getElementById("pnumber").style.backgroundColor="red";
		document.getElementById("ipnumber").style.display="none";
		document.getElementById("inopnumber").style.display="inline";
		}
}

function callFunctionIq(){
	var y = document.getElementById("iq").value;
	if(y = "" || y < 50 || y > 300){
		document.getElementById("iiq").style.display="none";
		document.getElementById("iq").style.color="white";
		document.getElementById("iq").style.backgroundColor="red";
		document.getElementById("iiq").style.display="none";
		document.getElementById("inoiq").style.display="inline";
	}
	else{
		document.getElementById("inoiq").style.display="none";
		document.getElementById("iq").style.color="black";
		document.getElementById("iq").style.backgroundColor="lightgreen";	
		document.getElementById("iiq").style.display="inline";	
		}
}

function callFunctionDoa(){
	var y = document.getElementById("doa").value;
	var today = new Date();
	var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	
	if(y < date){
		document.getElementById("idoa").style.display="none";
		document.getElementById("doa").style.color="white";
		document.getElementById("doa").style.backgroundColor="red";
		document.getElementById("idoa").style.display="none";
		document.getElementById("inodoa").style.display="inline";
	}
	else{
		document.getElementById("inodoa").style.display="none";
		document.getElementById("doa").style.color="black";
		document.getElementById("doa").style.backgroundColor="lightgreen";	
		document.getElementById("idoa").style.display="inline";	
		}
}

function myFunction(form){
	var err= [];
	var valid=true;
	var ids= [];
	
	if(form.genderMale.checked==false && 
	form.genderFemale.checked==false && 
	form.genderOther.checked==false){
		err.push("*Select at least One");
		ids.push("gender-err");
		valid=false;
	}
	
	if((form.Cage.checked==false &&
	form.Cvehicle.checked==false) &&
	(form.Cwork.checked==false &&
	form.Cemployment.checked==false) &&
	(form.Ceducation.checked==false &&
	form.Cstudy.checked==false)){
		err.push("*Select at least One");
		ids.push("check-err");
		valid=false;
	}
	if(form.textabout.value.length < 50){
		err.push("*Enter more than 50 words");
		ids.push("text-err");
		valid=false;
	}		
	
if(valid==false){
	//document.getElementsByTagName("input").style.border = "1px solid green";
	for(var i=0;i<ids.length;i++){
		document.getElementById(ids[i]).innerHTML= err[i];
	}
	return valid;
}
else{
	return valid;
}
}