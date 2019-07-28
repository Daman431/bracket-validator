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
			case '}':if(list[i-1] === '(' || list[i-1] === '['){
					 	return false;
					 }
					 list.pop();
					 break;
			case ']':if(list[i-1] === '(' || list[i-1] === '{'){
					 	return false;
					 }
					 list.pop();
					 break;
			case ')':if(list[i-1] === '{' || list[i-1] === '['){
					 	return false;
					 }
			  		 list.pop();
					 break;
		}
	}
		if(list.length === 0){
				return true;
			}
	console.log(list)
	
}

var file = "{}()()()"
var checkBraces = bracketValidator(file);
console.log(checkBraces);