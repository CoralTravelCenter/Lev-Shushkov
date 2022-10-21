const modalPlacePromo = document.querySelector("body");
const modalLayoutPromo = `
<div class="weekend-promo__overlay">
			<div class="weekend-promo__content-wrapper">
				<div class="weekend-promo__close-button">&times;</div>
				<a
					href="https://www.sunmar.ru/packagetours/moskva-to-turtsiya-tours/?q=%7b%22Bgn%22%3a%2221.10.2022%22%2c%22End%22%3a%2221.10.2022%22%2c%22Dr%22%3a%220%22%2c%22Acc%22%3a%227%22%2c%22Gest%22%3a%222%22%2c%22Q%22%3a%22vNUSDLKIZxfia9dSCa8hBqPOd9uy3%2fDtv%2fTCN46tdHuDp%2bHubJHWsqOo4gCJxsDi5f5UyyxFWUcyvVGabYIaptXpeFL9SsUwRNZ%2fVOdOQq%2f417XjMVxDsJZyo6BUehMUcY8wGKrU5tx02ftip6O0OQ%3d%3d%22%2c%22Ts%22%3a0%2c%22Las%22%3afalse%2c%22AcId%22%3a0%2c%22FDate%22%3a%220001-01-01T00%3a00%3a00Z%22%2c%22Ref%22%3afalse%2c%22Pstatus%22%3afalse%2c%22TransferPrice%22%3a0.0%2c%22Chr%22%3atrue%2c%22Rglr%22%3afalse%2c%22Srt%22%3a1%7d&f=%7B%22Rh%22:false,%22Ao%22:[%22available%22]%7D&page=1"
					class="weekend-promo__link"
				>
					<div class="weekend-promo__text-wrapper">
						<p class="weekend-promo__title">Ваш персональный промокод на&nbsp;<span>скидку&nbsp;3%</span> на&nbsp;покупку тура в&nbsp;Турцию</p>
						<p class="weekend-promo__subtitle">Удобные, прямые и&nbsp;регулярные&nbsp;рейсы&nbsp;в&nbsp;Турцию</p>
						<p class="weekend-promo__description">
							Покупайте туры в&nbsp;Турцию с&nbsp;дополнительной <b>скидкой 3%!</b> Укажите промокод <b>Turkey</b> в&nbsp;поле &laquo;Примечание к&nbsp;заказу&raquo; или сообщите вашему менеджеру по&nbsp;телефону.
						</p>
						<button class="weekend-promo__button">Перейти к&nbsp;бронированию</button>
						<p class="weekend-promo__legal">* Предложение действует с&nbsp;19.10.22&nbsp;&mdash; 23.10.22, не&nbsp;распространяется на&nbsp;туры на&nbsp;базе GDS перевозки. ** Не&nbsp;суммируется с&nbsp;другими акционными предложениями</p>
					</div>
					<img src="https://cdn.sunmar.ru/content/insider/russia/sunmar-popup/egypt-12-08.png" alt="Ваш персональный промокод в Турцию" class="weekend-promo__image desktop" />
					<img src="https://cdn.sunmar.ru/content/insider/russia/sunmar-popup/egypt-12-08_mobile.png" alt="Ваш персональный промокод в Турцию" class="weekend-promo__image mobile" />
				</a>
			</div>
		</div>`;

modalPlacePromo.insertAdjacentHTML("beforeend", modalLayoutPromo);
const modalOverlayPromo = document.querySelector(".weekend-promo__overlay");
const closeButtonPromo = modalOverlayPromo.querySelector(".weekend-promo__close-button");
const modalPromoButton = modalOverlayPromo.querySelector(".weekend-promo__button");
const startDate = "19.10.2022";

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
