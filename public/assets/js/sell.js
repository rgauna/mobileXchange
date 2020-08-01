$(document).ready(function () {

	var phoneSellForm = $("form.sell");
	var makeInput = $("input#make");
	var modelInput = $("input#model");
	var priceInput = $("input#price");
	var descriptionInput = $("textarea#description");
	var email = $("input#email")

	phoneSellForm.on("submit", function (event) {
		event.preventDefault();
		var userData = {
			make: makeInput.val().trim(),
			model: modelInput.val().trim(),
			price: priceInput.val().trim(),
			description: descriptionInput.val().trim(),
			email: email.val().trim(),
		};
		console.log("phone sell", userData);
		postPhone(userData);
	});

	function postPhone(userData) {
		$.post("/api/Sell", userData)
			.then(function (data) {
				window.location.replace("/members");
				// If there's an error, handle it by throwing up a bootstrap alert
			})
			.catch(handleLoginErr);
	};

	function handleLoginErr(err) {
		$("#alert .msg").text(err.responseJSON);
		$("#alert").fadeIn(500);
	}

});

$.get("/api/Sell", (data) => {
	for (var i = 0; i < data.length; i++) {
		var sellSection = $("<div>");
		sellSection.addClass("Selling");
		sellSection.attr("id", "phone_Sell-" + i);
		$("#phone-section").append(sellSection);

		$("#phone_Sell-" + i).append("<h4>" + data[i].phone_make + "<h4>");
		$("#phone_Sell-" + i).append("<h4>" + data[i].models + "<h4>");
		$("#phone_Sell-" + i).append("<h4>" + data[i].asking_price + "<h4>");
		$("#phone_Sell-" + i).append("<p>" + data[i].description + "<p>");
		$("#phone_Sell-" + i).append("<h4>" + data[i].email + "<h4>");
	}
});