var modalPlacePromoBahrein = document.querySelector("body");
var modalLayoutPromoBahrein = `
<div class="weekend-promo__overlay">
			<div class="weekend-promo__content-wrapper">
				<div class="weekend-promo__close-button">&times;</div>
				<a
					href="https://www.coral.ru/packagetours/moskva-to-bahreyn-tours/?q=%7b%22Bgn%22%3a%2230.07.2022%22%2c%22End%22%3a%2230.07.2022%22%2c%22Dr%22%3a%220%22%2c%22Acc%22%3a%227%22%2c%22Gest%22%3a%222%22%2c%22Q%22%3a%22ODzrbgqAtgVgjSQCGJgeB890Q3wDwHTtWrNFUs%2f7FgarUiQxkku%2bF0Tp9tLP6KYgc12hEUdvIbI8Ae%2bpWg0NK%2f%2bwJvPbRSoMROvYwDMyABYX8ddfVpTxrCoTM%2fGJMp1zPNXYjjn6Ot6n7ENlN0wkG%2f3YP7TujUdfVmyL2soQxV4%3d%22%2c%22Ts%22%3a0%2c%22Las%22%3afalse%2c%22AcId%22%3a0%2c%22FDate%22%3a%220001-01-01T00%3a00%3a00Z%22%2c%22Ref%22%3afalse%2c%22Pstatus%22%3afalse%2c%22TransferPrice%22%3a0.0%2c%22Chr%22%3atrue%2c%22Rglr%22%3afalse%2c%22Srt%22%3a1%7d&f=%7b%22Hid%22%3a%5b25781%2c25782%2c29046%2c25784%2c25804%2c25785%2c27112%2c25783%5d%2c%22Pr%22%3a%5b0.0%2c0.0%5d%2c%22Rh%22%3afalse%2c%22Ao%22%3a%5b%22available%22%5d%7d&page=1&pp=&sort=&banner_on_site=bahreyn-tours"
					class="weekend-promo__link"
				>
					<div class="weekend-promo__text-wrapper">
						<p class="weekend-promo__title">Ваш персональный промокод 3&nbsp;000&nbsp;₽ на&nbsp;покупку тура в&nbsp;Бахрейн</p>
						<p class="weekend-promo__description">
							<span>Откройте для себя Бахрейн!</span> Низкие цены на&nbsp;пакетные туры с&nbsp;первоклассными отелями Покупайте туры в&nbsp;Бахрейн с&nbsp;вылетом с&nbsp;15.07&nbsp;&mdash; 31.08 онлайн на&nbsp;сайте coral.ru с&nbsp;15&nbsp;по&nbsp;17 июля с&nbsp;дополнительной выгодой 3&nbsp;000&nbsp;₽!<br /><br />Укажите промокод <span>Bah</span> в&nbsp;поле &laquo;Примечание к&nbsp;заказу&raquo; или сообщите вашему менеджеру по&nbsp;телефону
						</p>
						<button class="weekend-promo__button">Выбрать&nbsp;тур</button>
						<p class="weekend-promo__legal">* Предложение действует с 15 по 17 июля 2022</p>
					</div>
					<img src="https://cdn.coral.ru/content/cms/russia/16-07-promo-popup/bahrein-coral.png" alt="Ваш персональный промокод в Бахрейн" class="weekend-promo__image" />
				</a>
			</div>
		</div>`;

modalPlacePromoBahrein.insertAdjacentHTML("beforeend", modalLayoutPromoBahrein);
var modalOverlayPromoBahrein = document.querySelector(".weekend-promo__overlay");
var closeButtonPromoBahrein = modalOverlayPromoBahrein.querySelector(".weekend-promo__close-button");

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
	modalOverlayPromoBahrein.classList.remove("weekend-promo__overlay_active");
}

function openModal() {
	modalOverlayPromoBahrein.classList.add("weekend-promo__overlay_active");
}

closeButtonPromoBahrein.addEventListener("click", closeModal);
modalOverlayPromoBahrein.addEventListener("click", closeModalByOverlay);
window.addEventListener("keyup", closeModalByEscape);

openModal();
