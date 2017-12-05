
	//array of animals
	var animals = ["cat", "dog", "dolphin", "unicorn"]

	function displayAnimal(){

	// API KEY: YwPDrGM0Yc7AZCqC4zh2NArVKpj7UF5G
	var person = $(this).attr("data-person");
 	var queryURL = `http://api.giphy.com/v1/gifs/search?q=${person}&api_key=3H53YGitIbzMUqdwlwPkTR3HE1H6DWgV&limit=5`;
//`https://api.giphy.com/v1/gifs/search?q=${person}&api_key=dc6zaTOxFJmzC&limit=5`
    $.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
      var results = response.data;
      for (var i = 0; i < results.length; i++) {
        
          var animalDiv = $("<div class='animal'>");
          var rating = results[i].rating;

          var pOne = $("<p>").text("Rating: " + rating);

          animalDiv.append(pOne);

          var imgURL = results[i].images.fixed_height.url;

          var image = $("<img>").attr("src", imgURL);

          animalDiv.append(image);
          
         $("#animal-view").prepend(animalDiv);
}
       })








	}

    function renderButtons() {
    	console.log('am i being called?')
        // Deleting the movies prior to adding new movies
        // (this is necessary otherwise you will have repeat buttons)
        $("#buttons-view").empty();


        // Looping through the array of animals
        for (var i = 0; i < animals.length; i++) {

          // Then dynamicaly generating buttons for each movie in the array
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var a = $("<button>");
          console.log(a);
          // Adding a class of movie to our button
          a.addClass("animal");
          // Adding a data-attribute
          a.attr("data-person", animals[i]);
          // Providing the initial button text
          a.text(animals[i]);
          // Adding the button to the buttons-view div
          $("#buttons-view").append(a);
        }
      }

     $("#add-animal").on("click", function(event){
     	event.preventDefault();
     	console.log("works")
        // This line grabs the input from the textbox
        var animal = $("#animal-input").val().trim();
        console.log(animal);
        // // Adding movie from the textbox to our array
        animals.push(animal);

        // Calling renderButtons which handles the processing of our movie array
        renderButtons();
     })

     $(document).on("click", ".animal", displayAnimal);

     renderButtons();
