async function whenDataReceived (url) {
	const res = await fetch(url);

	return await res.json();

}

module.exports = whenDataReceived;