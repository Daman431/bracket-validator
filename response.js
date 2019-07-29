

function prefix(file) {
	var bracesList = [];
	for(i=0;i<file.length;i++){
		switch(file[i]){
			case '{': bracesList.push(file[i]);
			break;
			case '[': bracesList.push(file[i]);
			break;
			case '(': bracesList.push(file[i]);
			break;
			case '}': bracesList.push(file[i]);
			break;
			case ']': bracesList.push(file[i]);
			break;
			case ')': bracesList.push(file[i]);
			break;
		}
	}
	return bracesList;
}



function bracketValidator(file) {
	var list = [];

	for(i=0;i<file.length;i++){
		switch(file[i]){
			case '{': list.push(file[i]);
			break;
			case '[':list.push(file[i]);
			break;
			case '(':list.push(file[i]);
			break;
		}
		if(list.length === 0){
			return false;
		}
		switch(file[i]){
			case '}':if(list[list.length-1] === '(' || list[list.length-1] === '['){
					 	return false;
					 }
					 list.pop();
					 break;
			case ']':if(list[list.length-1] === '(' || list[list.length-1] === '{'){
					 	return false;
					 }
					 list.pop();
					 break;
			case ')':if(list[list.length-1] === '{' || list[list.length-1] === '['){
					 	return false;
					 }
			  		 list.pop();
					 break;
		}
	}
		if(list.length === 0){
				return true;
			}	
}
function buttonClick() {
	var fileString = document.getElementById('file').value;
	var bracesList = prefix(fileString);
	var checkBraces = bracketValidator(bracesList);	
	if(checkBraces){
		alert("Braces are Balanced!");
	}
	else{
		alert("ERROR!")
	}
}

