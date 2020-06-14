var sendContacts = document.querySelector(".contacts-link");
var contactsPopup = document.querySelector(".modal-contacts");
var contactsClose = contactsPopup.querySelector(".modal-close");
var contactsEmail = contactsPopup.querySelector(".contacts-email");
var contactsName = contactsPopup.querySelector(".contacts-name");
var contactsForm = contactsPopup.querySelector(".contacts-form");
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

sendContacts.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactsPopup.classList.add("modal-show");

  if (storage) {
    contactsEmail.value = storage;
    contactsEmail.focus();
  } else {
    contactsName.focus();
  }
});

contactsClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactsPopup.classList.remove("modal-show");
});

contactsForm.addEventListener("submit", function (evt) {
  if (!contactsEmail.value || !contactsEmail.value) {
    evt.preventDefault();
  } else {
    if (isStorageSupport) {
      localStorage.setItem("email", contactsEmail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (contactsPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      contactsPopup.classList.remove("modal-show");
    }
  }
});

var mapLink = document.querySelector(".contacts-link-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});

// var orderLink = document.querySelector(".modal-order-buy");
// var orderPopup = document.querySelector(".modal-order");
// var orderClose = orderPopup.querySelector(".modal-close");