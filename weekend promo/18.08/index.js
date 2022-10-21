const modalPlacePromo = document.querySelector("body");
const modalLayoutPromo = `
<div class="weekend-promo__overlay">
<div class="weekend-promo__content-wrapper">
	<div class="weekend-promo__close-button">&times;</div>
	<a
		href="#"
		class="weekend-promo__link"
	>
		<div class="weekend-promo__text-wrapper">
			<p class="weekend-promo__title">Ваш персональный промокод на&nbsp;<span>скидку&nbsp;3%</span> на&nbsp;покупку тура в&nbsp;Египет</p>
			<p class="weekend-promo__description"><span>Прямые регулярные рейсы</span> в&nbsp;Хургаду и&nbsp;Шарм-эль-Шейх <span>по&nbsp;цене чартера!</span>
			<br /><br />
			Невероятное Красное море, увлекательные экскурсии и&nbsp;многое другое. 
			<br><br>
			Покупайте туры в&nbsp;Египет онлайн на&nbsp;сайте sunmar.ru с&nbsp;19&nbsp;по&nbsp;22&nbsp;августа
с&nbsp;дополнительной выгодой 3%! Укажите промокод <span>Egypt</span> в&nbsp;поле 
&laquo;Примечание к&nbsp;заказу&raquo; или сообщите вашему менеджеру по&nbsp;телефону.
			</p>
			<button class="weekend-promo__button">Перейти к&nbsp;бронированию</button>
			<p class="weekend-promo__legal">*Предложение действует с&nbsp;19&nbsp;по&nbsp;22&nbsp;августа 2022&nbsp;на полные пакетные туры в&nbsp;Египет
			** При необходимости, вы&nbsp;можете позвонить на&nbsp;горячую линию и&nbsp;продлить действие
			промокода, просто обозначив оператору желаемую дату бронирования тура</p>
		</div>
		<img src="https://cdn.sunmar.ru/content/cms/russia/14-07-weekend-promo/egypt-12-08.png" alt="Ваш персональный промокод в Египет" class="weekend-promo__image desktop" />
		<img src="https://cdn.sunmar.ru/content/cms/russia/14-07-weekend-promo/egypt-12-08_mobile.png" alt="Ваш персональный промокод в Египет" class="weekend-promo__image mobile" />
	</a>
</div>
</div>`;

modalPlacePromo.insertAdjacentHTML("beforeend", modalLayoutPromo);
const modalOverlayPromo = document.querySelector(".weekend-promo__overlay");
const closeButtonPromo = modalOverlayPromo.querySelector(".weekend-promo__close-button");
const modalPromoButton = modalOverlayPromo.querySelector(".weekend-promo__button");
const startDate = "18.08.2022";

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
	}
}

function closeModal() {
	modalOverlayPromo.classList.remove("weekend-promo__overlay_active");
	if (localStorage.getItem(`weekendPromo_${startDate}`)) {
		localStorage.setItem(`weekendPromo_${startDate}`, "second_click");
	} else {
		localStorage.setItem(`weekendPromo_${startDate}`, "first_click");
	}
}

function openModal() {
	if (localStorage.getItem(`weekendPromo_${startDate}`) === "second_click") {
		return;
	}
	modalOverlayPromo.classList.add("weekend-promo__overlay_active");
}

closeButtonPromo.addEventListener("click", closeModal);
modalPromoButton.addEventListener("click", closeModal);
modalOverlayPromo.addEventListener("click", closeModalByOverlay);
window.addEventListener("keyup", closeModalByEscape);

openModal();
