function slapyou(from, to) {
	var out;
	var exp = Math.round(Math.random() * 999 + 1);
	if (Math.random() < 0.5) {
		out = from + " fails to slap " + to + " and loses " + exp.toString() + " experience!";
	} else {
		out = from + " slaps " + to + " and gains " + exp.toString() + " experience!";
	}

	if (from === "trambes") {
		out = out + " OhISay hon hon hon!";
	}

	return out;
}

slapyou(user, input);
