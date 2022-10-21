const modalPlacePromo = document.querySelector("body");
const modalLayoutPromo = `
<div class="weekend-promo__overlay">
<div class="weekend-promo__content-wrapper">
	<div class="weekend-promo__close-button">&times;</div>
	<a
		href="https://www.sunmar.ru/packagetours/moskva-to-egipet-tours/?q=%7b%22Bgn%22%3a%2204.09.2022%22%2c%22End%22%3a%2204.09.2022%22%2c%22Dr%22%3a%220%22%2c%22Acc%22%3a%226%22%2c%22Gest%22%3a%222%22%2c%22Q%22%3a%22j5S9bMn7aqMLKm%2bIbNM9MehZRxZDgDTNXlQSMrHiMkv8efUryrq653%2fuHIuQB2Zy%2bx8XIPLtzPzz8er62PL6Wi7XHNQudvQQi4wbcXsqgNE%2bQqTE4jrugrtNcsoJi1QkP3WnNcDz5awSkpQJEwjkVg%3d%3d%22%2c%22Ts%22%3a0%2c%22Las%22%3afalse%2c%22AcId%22%3a0%2c%22FDate%22%3a%220001-01-01T00%3a00%3a00Z%22%2c%22Ref%22%3afalse%2c%22Pstatus%22%3afalse%2c%22TransferPrice%22%3a0.0%2c%22Chr%22%3atrue%2c%22Rglr%22%3afalse%2c%22Srt%22%3a1%7d&f=%7B%22Rh%22:false,%22Ao%22:[%22available%22]%7D&page=1"
		class="weekend-promo__link"
	>
		<div class="weekend-promo__text-wrapper">
			<p class="weekend-promo__title">Ваш персональный промокод на&nbsp;<span>скидку&nbsp;3%</span> на&nbsp;покупку тура в&nbsp;Египет</p>
			<p class="weekend-promo__description">Прямые рейсы в&nbsp;Хургаду и&nbsp;Шарм-эль-Шейх ежедневно! Невероятное Красное море, увлекательные экскурсии и&nbsp;многое другое.
			<br /><br />
			Покупайте туры в&nbsp;Египет онлайн на&nbsp;сайте sunmar.ru с&nbsp;13&nbsp;по&nbsp;14&nbsp;августа с&nbsp;дополнительной выгодой 3%! Укажите промокод <span>Egypt</span>  в&nbsp;поле &laquo;Примечание к&nbsp;заказу&raquo; или сообщите вашему менеджеру по&nbsp;телефону.</p>
			<button class="weekend-promo__button">Перейти к&nbsp;бронированию</button>
			<p class="weekend-promo__legal">*Предложение действует с&nbsp;13&nbsp;по&nbsp;14&nbsp;августа 2022&nbsp;на полные пакетные туры в&nbsp;Египет с&nbsp;вылетом с&nbsp;3&nbsp;по&nbsp;30&nbsp;сентября 2022</p>
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
}

function openModal() {
	modalOverlayPromo.classList.add("weekend-promo__overlay_active");
}

closeButtonPromo.addEventListener("click", closeModal);
modalPromoButton.addEventListener("click", closeModal);
modalOverlayPromo.addEventListener("click", closeModalByOverlay);
window.addEventListener("keyup", closeModalByEscape);

openModal();
