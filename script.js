
document.addEventListener("DOMContentLoaded", function () {
  // نافذة ترحيب بسيطة
  var modal = document.getElementById("welcomeModal");
  var closeBtn = document.querySelector(".close");
  var welcomeText = document.getElementById("welcomeText");

  if (modal && !localStorage.getItem("welcomedModal")) {
    modal.style.display = "block";
    var name = prompt("ما اسمك؟ 😊");
    if (name) {
      welcomeText.textContent = "👋 أهلاً " + name + "! نورت مطعم La Luce 🍝";
    }
    localStorage.setItem("welcomedModal", "true");
  }

  if (closeBtn) {
    closeBtn.onclick = function () {
      modal.style.display = "none";
    };
  }

  // نموذج الحجز
  var form = document.getElementById("reservationForm");
  var confirmationMsg = document.getElementById("confirmationMsg");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var name = document.getElementById("name").value;
      var phone = document.getElementById("phone").value;
      var date = document.getElementById("date").value;

      if (name === "" || phone === "" || date === "") {
        alert("رجاءً املأ كل الحقول!");
        return;
      }

      if (isNaN(phone)) {
        alert("رقم الجوال يجب أن يكون أرقام فقط!");
        return;
      }

      confirmationMsg.textContent = "✅ تم حجزك يا " + name + " في " + date + "!";
      form.reset();
    });
  }

  // حساب التوتل
  var items = document.querySelectorAll(".menuItem");
  var totalDisplay = document.getElementById("totalPrice");

  function updateTotal() {
    var total = 0;
    for (var i = 0; i < items.length; i++) {
      if (items[i].checked) {
        total += parseFloat(items[i].dataset.price);
      }
    }

    if (totalDisplay) {
      totalDisplay.textContent = "المجموع: " + total + " ريال";
    }
  }

  for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("change", updateTotal);
  }

  updateTotal(); // لحساب التوتل أول ما تفتح الصفحة
});





