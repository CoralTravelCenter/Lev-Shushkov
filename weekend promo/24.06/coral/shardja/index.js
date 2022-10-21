var modalPlacePromoShardja = document.querySelector("body");
var modalLayoutPromoShardja = `
		<div class="weekend-promo__overlay">
			<div class="weekend-promo__content-wrapper">
				<div class="weekend-promo__close-button">&times;</div>
				<a
					href="#"
					class="weekend-promo__link"
				>
					<div class="weekend-promo__text-wrapper">
						<p class="weekend-promo__title">Ваш персональный промокод 3&nbsp;000&nbsp;₽ на&nbsp;покупку тура в&nbsp;Шарджу</p>
						<p class="weekend-promo__description">Покупайте туры в&nbsp;Шарджу с&nbsp;вылетом с&nbsp;15.07&nbsp;&mdash; 31.08 а/к AirArabia онлайн на&nbsp;сайте coral.ru с&nbsp;15&nbsp;по&nbsp;17&nbsp;июля с&nbsp;дополнительной выгодой 3&nbsp;000&nbsp;₽!<br /><br />Укажите промокод <span>UAE</span> в&nbsp;поле &laquo;Примечание к&nbsp;заказу&raquo; или сообщите вашему менеджеру по&nbsp;телефон</p>
						<button class="weekend-promo__button">Выбрать&nbsp;тур</button>
						<p class="weekend-promo__legal">* Предложение действует с&nbsp;15&nbsp;по&nbsp;17&nbsp;июля 2022</p>
					</div>
					<img src="https://cdn.coral.ru/content/cms/russia/16-07-promo-popup/shardja-coral.png" alt="Ваш персональный промокод в Шарджу" class="weekend-promo__image" />
				</a>
			</div>
		</div>`;

modalPlacePromoShardja.insertAdjacentHTML("beforeend", modalLayoutPromoShardja);
var modalOverlayPromoShardja = document.querySelector(".weekend-promo__overlay");
var closeButtonPromoShardja = modalOverlayPromoShardja.querySelector(".weekend-promo__close-button");
var buttonPromoShardja = modalOverlayPromoShardja.querySelector(".weekend-promo__button");

buttonPromoShardja.addEventListener("click", closeModal);
closeButtonPromoShardja.addEventListener("click", closeModal);
modalOverlayPromoShardja.addEventListener("click", closeModalByOverlay);
window.addEventListener("keyup", closeModalByEscape);

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
	modalOverlayPromoShardja.classList.remove("weekend-promo__overlay_active");
}

function openModal() {
	modalOverlayPromoShardja.classList.add("weekend-promo__overlay_active");
}

openModal();
