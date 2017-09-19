

//Add ingredient
$(".fa-plus").on("click", addIngredient);
$("input[placeholder='Unit']").keypress(addIngredientWithEnter);
$("input[placeholder='Ingredient']").keypress(addIngredientWithEnter);

function addIngredientWithEnter(event)
{
	//When enter pushed
	if(event.which === 13)
	{
		addIngredient();
	}	
}

function addIngredient()
{
	//Get unit and ingredients inputs
	var unitText = $("input[placeholder='Unit']").val();
	var ingredientText = $("input[placeholder='Ingredient']").val();

	if(unitText && ingredientText)
	{
		//Add unit and ingredient to recipe

		// var row = "<tr><td><input type='text' value='" + unitText + 
		// 					"'></td><td><input type='text' value='" + ingredientText + 
		// 					"'></td><td class='delete'><i class='fa fa-trash-o'></i></td></tr>"

		var row = "<tr><td>" + unitText + "</td><td>" + ingredientText + 
							"</td><td class='delete'><i class='fa fa-trash-o'></i></td></tr>"

		$(".table").append(row);

		//Reset unit and ingredient inputs
		$("input[placeholder='Unit']").val("");
		$("input[placeholder='Ingredient']").val("");
	}
}



//Delete ingredient
$("tbody").on("click", ".fa-trash-o", deleteIngredient);

function deleteIngredient()
{
	$(this).closest("tr").fadeOut(500, function(){
		$(this).remove(); //remove tr
	});
	event.stopPropagation(); //stop the parent listeners firing
}




//Change table entry to input when clicked
$("tbody").on("click", "td", function(event){
	var tableText = $(this).html();
	var inputHtml = "<input type='text' value='" + tableText + "'>"
	$(this).html(inputHtml);

	//Focus on input after clicked
	$(this).children().focus();
});

//Stop input click triggering td click
$("tbody").on("click", "input", function(event){
	event.stopPropagation();
});


//Save ingredient to table
$("tbody").on("change", "input", saveIngredientChanges);
$("tbody").on("blur", "input", saveIngredientChanges);

//When changed or clicked off make it a normal table entry again
 function saveIngredientChanges()
 {
	var text = $(this).val();

	//If empty use previous default value
	if(!text)
	{
		$(this).val(this.defaultValue);
	}

	text = $(this).val();

	$(this).closest("td").html(text);
}

