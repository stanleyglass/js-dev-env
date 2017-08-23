export default function getBaseUrl() {
	return getQueryStringParameterbyName('useMockApi') ? 'http://localhost:3001/' : 'https://blooming-wave-37452.herokuapp.com/';
}

function getQueryStringParameterbyName(name, url) {
	if (!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}
