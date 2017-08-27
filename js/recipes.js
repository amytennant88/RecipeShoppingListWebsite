



$("ul").on("click", ".plus", function(event){

	//Get unit and ingredients inputs
	var unitText = $("input[placeholder='Unit']").val();
	var ingredientText = $("input[placeholder='Ingredient']").val();

	$(this).closest("ul").append("<li><span class='unit'>" + 
								unitText + 
								"</span><span class='ingredient'>" + 
								ingredientText + 
								"</span><span class='delete'><i class='fa fa-trash-o'></i></span></li>");

	//Reset unit and ingredient inputs
	$("input[placeholder='Unit']").val("");
	$("input[placeholder='Ingredient']").val("");

})