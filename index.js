

function back(){
	var str=document.getelmentbyID("scr").value;
	var str2=str.substr(0,str.length-1);
	document.getelmentbyID("scr").value=str2;
}