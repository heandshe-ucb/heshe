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

    $("#submitBtn").on("click", function() {
        event.preventDefault();

        var userInputData = {};


        var cityState, distance, duration, date, time, experienceTypes = [];
        

        cityState = $('#cityandstate').val();
        distance = $('#distance').val();
        duration = $('#duration').val();
        date = $('#dateinput').val();
        time = $('#timeinput').val();
        experienceTypes = $('#experienceTypes').val();

        userInputData.cityState = cityState;
        userInputData.distance = distance;
        userInputData.duration = duration;
        userInputData.date = date;
        userInputData.time = time;
        userInputData.experienceTypes = experienceTypes;
        console.log(userInputData);

        $.ajax("/api/userinput", {
            type: "POST",
            data: userInputData
        }).then(function(){
            console.log("User Inputs from webclient");
            location.href = '/results';
        })
        // console.log(cityState, distance, duration, date, time, experienceTypes);

    });
        



})