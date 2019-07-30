

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



function bracketValidator(bracesList) {
	var list = [];

	for(i=0;i<bracesList.length;i++){
		switch(bracesList[i]){
			case '{': list.push(bracesList[i]);
			break;
			case '[':list.push(bracesList[i]);
			break;
			case '(':list.push(bracesList[i]);
			break;
		}
		if(list.length === 0){
			return false;
		}
		switch(bracesList[i]){
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
		if(fileString.length === 0){
			//Alert
		var successAlert = document.createElement('div');
		var node = document.createTextNode("No code provided!");
		successAlert.setAttribute("class","alert alert-warning alert-dismissible fade show");
		successAlert.setAttribute("id","alert-area");
		successAlert.appendChild(node);

		//close button
		var closeButton = document.createElement('button');
		var crossIcon = document.createTextNode("x");
		closeButton.setAttribute("type","button");
		closeButton.setAttribute("class","close");
		closeButton.setAttribute("data-dismiss","alert");
		closeButton.appendChild(crossIcon);

		//write elements in html
		document.getElementById("alertArea").appendChild(successAlert);
		document.getElementById("alert-area").appendChild(closeButton);
		}
		else{
		//Alert
		var successAlert = document.createElement('div');
		var node = document.createTextNode("Success!");
		successAlert.setAttribute("class","alert alert-success alert-dismissible fade show");
		successAlert.setAttribute("id","alert-area");
		successAlert.appendChild(node);

		//close button
		var closeButton = document.createElement('button');
		var crossIcon = document.createTextNode("x");
		closeButton.setAttribute("type","button");
		closeButton.setAttribute("class","close");
		closeButton.setAttribute("data-dismiss","alert");
		closeButton.appendChild(crossIcon);

		//write elements in html
		document.getElementById("alertArea").appendChild(successAlert);
		document.getElementById("alert-area").appendChild(closeButton);
		}
	}
	else{
		var errorAlert = document.createElement('div');
		var node = document.createTextNode("Bracket missing!");
		errorAlert.setAttribute("class","alert alert-danger alert-dismissible fade show");
		errorAlert.setAttribute("id","alert-area");
		errorAlert.appendChild(node);

		//close button
		var closeButton = document.createElement('button');
		var crossIcon = document.createTextNode("x");
		closeButton.setAttribute("type","button");
		closeButton.setAttribute("class","close");
		closeButton.setAttribute("data-dismiss","alert");
		closeButton.appendChild(crossIcon);

		//write elements in html
		document.getElementById("alertArea").appendChild(errorAlert);
		document.getElementById("alert-area").appendChild(closeButton);
	}
}

