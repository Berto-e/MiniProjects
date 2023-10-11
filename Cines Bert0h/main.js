const cinemaSeats = document.querySelectorAll("img");
const buyButton = document.querySelector("button");
let cinemaSeatsSelected = 0;

function update() {
  //esta función se está ejecutando siempre
  for (let i = 0; i < cinemaSeats.length; ++i) {
    cinemaSeats[i].addEventListener("click", function () {
      if (
        !cinemaSeats[i].classList.contains("occupied") &&
        !cinemaSeats[i].classList.contains("selected")
      ) {
        cinemaSeats[i].classList.add("selected");
        cinemaSeatsSelected++;
      } else if (cinemaSeats[i].classList.contains("selected")) {
        cinemaSeats[i].classList.remove("selected");
        cinemaSeatsSelected--;
      }
    });
  }
}

function buttonCheck() {
  buyButton.addEventListener("click", function () {
    if (cinemaSeatsSelected > 0) {
      for (let i = 0; i < cinemaSeats.length; ++i) {
        if (cinemaSeats[i].classList.contains("selected")) {
          cinemaSeats[i].classList.add("occupied");
        }
      }
      alert(
        "Ha realizado su compra de : " + cinemaSeatsSelected + " asientos."
      );
    } else alert("Porfavor seleccione lo asientos que desea reservar para continuar.");
    cinemaSeatsSelected = 0;
  });
}

update();
buttonCheck();
