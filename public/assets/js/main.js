$(function () {
    $(".changeDevoured").on("click", function (event) {
      const id = $(this).data("id");
      const devouredstate = $(this).data("devouredstate");
      const newDevouredState = {
        devoured: devouredstate
      };
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function () {
            console.log("Burger is now devoured", newDevouredState);
          location.reload();
        }
      );
    });

    $("#makeBurger").on("click", function (event) {
      event.preventDefault();
      var newBurger = {
        name: $("#newBurgerName").val().trim(),
        devoured: false
      };
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function () {
          console.log("created New Burger");
          location.reload();
        }
      )
    })
  });