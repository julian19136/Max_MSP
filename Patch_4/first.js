autowatch = 1;

function decisionTree(value) {
	
	if ((value > 0 ) && (value < 115)) {
		outlet(0, 0);
	} else if ((value > 115 ) && (value < 165)) {
		outlet(0, 1);
	} else if ((value > 165 ) && (value < 225)) {
		outlet(0, 2);
	} else if ((value > 225 ) && (value < 275)) {
		outlet(0, 3);
	}
	
}