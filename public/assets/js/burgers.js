$(function(){

    $(".change-devoured").on("click", function(event){
        var id = $(this).data("id");

        var newDevoured = $(this).data("newdevoured");
        var newState = {
            devoured: newDevoured
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newState
        }).then(function(){
            console.log("changed devoured to", newDevoured);
            location.reload();
        });
    });

    $("#create-burger").on("click", function(event){
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger_name").val().trim()
        };


        $.ajax("/api/burgers",{
            type: "POST",
            data: newBurger
        }).then(function(){
            console.log("Created a burger!");
            location.reload();
        });
    });

    $(".delete-burger").on("click", function(event){
        var id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function(){
                console.log("Deleted: ", id);
                location.reload();
            }
        )
    })


});