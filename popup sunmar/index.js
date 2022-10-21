var modalPlace = document.querySelector("body");
var modalLayout = `<div class="popup__overlay"> <div class="popup__content-wrapper"><div class="popup__close-button">&times;</div><div  class="popup__link"> <img src="https://cdn.sunmar.ru/content/insider/russia/uae-offer-2022-04-01/sunmar_popup_v1.png" alt="" class="popup__content popup__content_desktop" /><img src="https://cdn.sunmar.ru/content/insider/russia/uae-offer-2022-04-01/sunmar_popup_v1_mo.png" alt="" class="popup__content popup__content_mobile" /></div></div></div>`;

modalPlace.insertAdjacentHTML("beforeend", modalLayout);
var modalOverlay = document.querySelector(".popup__overlay");
var closeButton = modalOverlay.querySelector(".popup__close-button");

function closeModalByEscape(evt) {
	if (evt.keyCode === 27) {
		closeModal();
	}
}

function closeModalByOverlay(evt) {
	if (evt.type === "click") {
		if (evt.target === evt.currentTarget) {
			closeModal();
		}
		closeModal();
	}
}

function closeModal() {
	modalOverlay.classList.remove("popup__overlay_active");
}

function openModal() {
	modalOverlay.classList.add("popup__overlay_active");
	localStorage.setItem("sunmar_info_popup", "opened");
}

closeButton.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", closeModalByOverlay);
window.addEventListener("keyup", closeModalByEscape);

openModal();
setTimeout(function () {
	if (!localStorage.getItem("sunmar_info_popup")) {
		openModal();
	}
}, 3000);
