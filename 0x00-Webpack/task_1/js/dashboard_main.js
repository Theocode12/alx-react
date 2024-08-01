const $ = require("jquery");
const _ = require("lodash");

$('body').append("<p>Holberton Dashboard</p>");
$('body').append("<p>Dashboard data for the students</p>");
$('body').append("<button>Click here to get started</button>");
$('body').append("<p id='count'></p>");
$('body').append("<p>Copyright - Holberton School</p>");
$('button').on("click", _.debounce(updateCounter, 500, { leading: true, trailing: false }));

function updateCounter(){
	let count = $("#count").val()
	if (count) {
		count = +count + 1
		$("#count").text(`${count} clicks on the button`)

	} else {
		$("#count").val(1)
		$("#count").text(`${1} clicks on the button`)
	}
}
