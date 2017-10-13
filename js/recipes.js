
function initalise()
{
	//Add ingredient
	$(".add").on("click", ".fa-plus", addIngredient);
	$("input[placeholder='Unit']").keypress(addIngredient);
	$("input[placeholder='Ingredient']").keypress(addIngredient);

	//Delete ingredient
	$("tbody").on("click", ".fa-trash-o", deleteIngredient);

	//Change table entry to input when clicked
	$("tbody").on("click", ".editable", tableEntryToInput);

	//Stop input click triggering td click
	$("tbody").on("click", "input", function(event){
		event.stopImmediatePropagation();
	});

	//Save ingredient changes to table
	$("tbody").on("change", "input", saveIngredientChanges);
	$("tbody").on("blur", "input", saveIngredientChanges);
}


//Add recipe
$(".addRecipe").on("click", ".fa-plus", addRecipe);

function addRecipe()
{
	var recipeHtml = "<div class='col-lg-4 col-sm-6'>" +
									   "<div class='recipe'>" + 
			  						   "<input class='recipeName' type='text' placeholder='Name'>" +
											   "<table class='table'>" +
												   "<thead>" +
													   "<tr>" +
														   "<th class='unit'><input type='text' placeholder='Unit'></th>" +
															 "<th class='ingredient'><input type='text' placeholder='Ingredient'></th>" +
															 "<th class='add'><i class='fa fa-plus'></i></th>" +
														 "</tr>" +
													 "</thead>" +
													 "<tbody>" +
													 "</tbody>" +
												 "</table>" +
										 "</div>" +
									 "</div>"

	$(".row").append(recipeHtml);

	initalise();
}


//Add ingredient
function addIngredient()
{
	//Only add if plus clicked or enter pressed
	if(event.which === 13 || event.which === 1)
	{
		//Get unit and ingredients inputs
		var unitText = $(this).closest("tr").find("input[placeholder='Unit']").val();
		var ingredientText = $(this).closest("tr").find("input[placeholder='Ingredient']").val();

		if(unitText && ingredientText)
		{
			//Add unit and ingredient to recipe
			var row = "<tr><td class='editable'>" + unitText + 
			          "</td><td class='editable'>" + ingredientText + 
								"</td><td class='delete'><i class='fa fa-trash-o'></i></td></tr>"

			$(this).closest(".table").append(row);

			//Reset unit and ingredient inputs
			$(this).closest("tr").find("input[placeholder='Unit']").val("");
			$(this).closest("tr").find("input[placeholder='Ingredient']").val("");
		}
	}
}


//Delete ingredient
function deleteIngredient(event)
{
	$(this).closest("tr").fadeOut(500, function(){
		$(this).remove(); //remove tr
	});
	//alert("delete");

	event.stopImmediatePropagation(); //stop the parent listeners firing
}


//Change table entry to input when clicked
function tableEntryToInput(event)
{
	//alert("tableentryToInput");
	var tableText = $(this).html();
	var inputHtml = "<input type='text' value='" + tableText + "'>"
	$(this).html(inputHtml);
	//alert($(this).html());

	//Focus on input after clicked
	$(this).children().focus();

	event.stopImmediatePropagation()
}


//Save ingredient changes to table
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

