document.addEventListener("DOMContentLoaded", function () {
  // CHECK AVAILABILITY → scroll to rooms
  const checkBtn = document.getElementById("checkBtn");

  if (checkBtn) {
    checkBtn.addEventListener("click", function () {
      const roomsSection = document.querySelector(".rooms");

      if (roomsSection) {
        roomsSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // BOOK NOW → WhatsApp booking per room
  const bookButtons = document.querySelectorAll(".book-btn");

  bookButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const room = this.getAttribute("data-room");

      const phoneNumber = "27820000000"; // change later to real number

      const message = encodeURIComponent(
        "Hi, I would like to book: " + room + " at Sunrise Hotel.",
      );

      window.open(
        "https://wa.me/" + phoneNumber + "?text=" + message,
        "_blank",
      );
    });
  });

  // WHATSAPP GENERAL BUTTON
  const whatsappBtn = document.querySelector(".whatsapp");

  if (whatsappBtn) {
    whatsappBtn.addEventListener("click", function () {
      const phoneNumber = "27820000000";
      const message = encodeURIComponent("Hi, I want to book a room.");

      window.open(
        "https://wa.me/" + phoneNumber + "?text=" + message,
        "_blank",
      );
    });
  }
});
