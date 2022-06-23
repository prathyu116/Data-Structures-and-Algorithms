var order = [5, 1, 2 ,4 ,3 ]
var lane= []; var need = 1;
var state = true;
for (var i = 0; i < order.length; i++) {
	while (lane.length !==0 && lane[lane.length-1] == need) {
		need++;
		lane.pop();
	}
	if (order[i] == need) { //need always strart from 1
		need++;
	} else if (lane.length !==0 && lane[lane.length-1]  < order[i]) {
		state = false;
		break;
	} else {
		lane.push(order[i]);
	}
}
if (state) console.log("yes") 
else console.log("No") 
