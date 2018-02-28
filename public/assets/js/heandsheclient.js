$(function () {
    $(".change-devour").on('click', function () {
        var id = $(this).data('id');
        var newDevour = $(this).data('newdevour');


        var newDevourState = {
            devour: newDevour
        }

        $.ajax("api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(function () {
            console.log('changed devour state to ', newDevour);
            location.reload();
        });
    });

    $(".create-form").on("submit", function() {
        event.preventDefault();
        var newBurger = {
            name: $("#burgerid").val().trim(),
            devoured: false
        }
        $("burgerid").val("");
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function(){
            console.log("added new burger");
            location.reload();
        })
    })

})