module.exports = function(args){
	args = args || '';
	var arr = [];

	var current = null;
	var quoted = null;

	function addcurrent(){
		if(current){
			arr.push(current);
			current = null;
		}
	}

	for(var i=0; i<args.length; i++){
		var c = args.charAt(i);

		if(c==" "){
			if(quoted){
				quoted += c;
			}
			else{
				addcurrent();
			}
		}
		else if(c=="\""){
			if(quoted){
				quoted += c;
				arr.push(quoted);
				quoted = null;
			}
			else{
				addcurrent();
				quoted = c;
			}
		}
		else{
			if(quoted){
				quoted += c;
			}
			else{
				if(current){
					current += c;
				}
				else{
					current = c;
				}
			}
		}
	}

	addcurrent();

	return arr;
}