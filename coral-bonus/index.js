const initialData = {
	layout: `<div class="coralBonus">
    <div class="coralBonus__hover">
        <p class="coralBonus__title">Активируйте карту CoralBonus и получите
			<span class="coralBonus__hover-bonuses">1 119</span>
			<img src="https://cdn.coral.ru/content/insider/russia/coralbonus/currency_white.png">
		</p>
        <p>Для начисления бонусов, укажите номер карты в поле "Примечание к заказу"</p>
        <a href="#">Активировать</a>
    </div>
	<div class="coralBonus__wrap">
		<span class="coralBonus__bonuses">1&nbsp;420</span>
		<div class="coralBonus__currency"></div>
		<div class="coralBonus__descr"><span>на&nbsp;карту</span><span>СoralBonus</span></div>
	</div>
</div>
`,
	styles: `
<style>
.hotellist .item .info .summaries {
	row-gap: 10px;
  }
  
  .hotellist .summaries .facilitysummary {
	line-height: 3 !important;
	flex-grow: 0;
	border-right: 1px solid #d0d0d0;
  }
  
  .facilitysummary .flex-nowrap {
	display: flex;
  }
  
  .coralBonus {
	background: linear-gradient(37.53deg, #209cff 1.18%, #68e0cf 86.66%);
	border-radius: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: 8px;
	position: relative;
	cursor: pointer;
	padding: 3px;
  }
  
  .coralBonus_mobile {
	display: flex;
	justify-content: space-between;
	align-items: center;
  }
  
  .coralBonus__wrap {
	background: #fff;
	width: 100%;
	height: 100%;
	border-radius: 3px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 5px;
	padding: 6px 8px;
  }
  
  .coralBonus__bonuses {
	font-style: normal;
	font-weight: 600;
	font-size: 23px;
	line-height: 1;
	background: linear-gradient(37.53deg, #209cff 1.18%, #68e0cf 86.66%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;
	text-fill-color: transparent;
  }
  @media screen and (max-width: 1006px) {
	.coralBonus__bonuses {
	  font-size: 20px;
	}
  }
  @media screen and (max-width: 768px) {
	.coralBonus__bonuses {
	  font-size: 0.875rem;
	}
  }
  
  .coralBonus__currency {
	width: 15px;
	height: 17px;
	background: url(https://cdn.coral.ru/content/insider/russia/coralbonus/currency.png) no-repeat;
	background-size: contain;
	background-position: center;
  }
  @media screen and (max-width: 1006px) {
	.coralBonus__currency {
	  width: 10px;
	  height: 11px;
	}
  }
  
  .coralBonus__descr {
	display: flex;
	flex-direction: column;
	line-height: 1.2;
  }
  @media screen and (max-width: 1006px) {
	.coralBonus__descr {
	  flex-direction: row;
	  gap: 5px;
	}
  }
  @media screen and (max-width: 768px) {
	.coralBonus__descr {
	  flex-direction: column;
	  gap: unset;
	}
  }
  
  .coralBonus__hover {
	display: flex;
	flex-direction: column;
	position: absolute;
	align-items: center;
	width: 220px;
	background: linear-gradient(189.35deg, #0193cf 19.81%, #4a72af 100%);
	box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.15);
	border-radius: 12px;
	bottom: 100%;
	padding: 24px;
	text-align: center;
	color: #fff;
	font-style: normal;
	font-weight: 400;
	font-size: 12px;
	line-height: 1.2;
	opacity: 0;
	pointer-events: none;
	transition: 0.3s;
	z-index: 9999;
  }
  @media screen and (max-width: 1006px) {
	.coralBonus__hover {
	  right: 0;
	}
  }
  .coralBonus__hover p {
	margin: 0 0 24px 0;
  }
  .coralBonus__hover a {
	border: 2px solid #ffffff;
	border-radius: 8px;
	padding: 11px 47px;
	color: #fff !important;
	transition: 0.3s;
  }
  .coralBonus__hover a:hover {
	color: #fff !important;
	opacity: 0.7;
	transition: 0.3s;
  }
  .coralBonus__hover .coralBonus__title {
	font-size: 16px;
	margin: 0 0 16px 0;
  }
  .coralBonus__hover .coralBonus__title img {
	width: 11px;
	margin-bottom: 2px;
  }
  .coralBonus__hover:hover {
	opacity: 1;
	pointer-events: auto;
	transition: 0.3s;
  }
  .coralBonus__hover::after {
	content: "";
	width: 0;
	height: 0;
	border-style: solid;
	border-width: 10px 7px 0 7px;
	border-color: #4a72af transparent transparent transparent;
	position: absolute;
	bottom: -10px;
  }
  @media screen and (max-width: 1006px) {
	.coralBonus__hover::after {
	  right: 60px;
	}
  }
  
  .coralBonus__hover_visible {
	opacity: 1;
	pointer-events: auto;
	transition: 0.3s;
  }
  
  .bonus-wrapper {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 20px;
	margin: 0.5rem 0 30px 0;
  }
  .bonus-wrapper .coralBonus__wrap {
	padding: 3px 5px;
  }
  .bonus-wrapper .coralBonus {
	margin-left: 0;
  }
  .bonus-wrapper .coralBonus__bonuses {
	font-size: 18px;
  }
  .bonus-wrapper .coralBonus__descr {
	flex-direction: row;
  }
  .bonus-wrapper .coralBonus__currency {
	width: 12px;
	height: 15px;
  }
  .bonus-wrapper .coralBonus__hover {
	top: 100%;
	bottom: unset;
  }
  .bonus-wrapper .coralBonus__hover::after {
	border-width: 0 10px 10px 10px;
	border-color: transparent transparent #0193cf transparent;
	top: -10px;
  }
  .bonus-wrapper .promo-price-ico {
	max-width: unset;
	max-height: 33px;
	margin-left: 0;
  }
  
  .btnSelectRoom {
	margin-top: 40px !important;
  }
  
  .promo-price-ico__wrapper {
	row-gap: 10px !important;
  }
  .promo-price-ico__wrapper .coralBonus {
	width: -webkit-fit-content;
	width: -moz-fit-content;
	width: fit-content;
	align-self: flex-end;
  }
  .promo-price-ico__wrapper .coralBonus__wrap {
	padding: 3px 6px;
	gap: 3px;
	justify-content: unset;
  }
  .promo-price-ico__wrapper .coralBonus {
	margin-left: 0;
	padding: 2px;
	cursor: auto !important;
  }
  .promo-price-ico__wrapper .coralBonus__bonuses {
	font-size: 10px;
  }
  .promo-price-ico__wrapper .coralBonus__descr {
	flex-direction: row;
	gap: 3px;
	font-size: 10px;
  }
  @media screen and (max-width: 1439px) {
	.promo-price-ico__wrapper .coralBonus__descr {
	  flex-direction: column;
	  gap: 0px;
	}
  }
  .promo-price-ico__wrapper .coralBonus__currency {
	width: 9px;
	height: 10px;
  }
  @media screen and (max-width: 768px) {
	.promo-price-ico__wrapper .coralBonus__currency {
	  width: 7px;
	  height: 8px;
	}
  }
  
  .flight-buttons {
	display: flex;
	flex-direction: column;
	row-gap: 10px;
  }
  .flight-buttons .coralBonus__wrap {
	padding: 3px 6px;
	gap: 2px;
  }
  .flight-buttons .coralBonus {
	margin-left: 0;
	padding: 2px;
	cursor: auto !important;
  }
  @media screen and (min-width: 1007px) and (max-width: 1199px) {
	.flight-buttons .coralBonus {
	  width: -webkit-fit-content;
	  width: -moz-fit-content;
	  width: fit-content;
	  align-self: flex-end;
	}
  }
  .flight-buttons .coralBonus__bonuses {
	font-size: 10px;
  }
  .flight-buttons .coralBonus__descr {
	flex-direction: row;
	gap: 3px;
	font-size: 10px;
  }
  @media screen and (max-width: 1439px) {
	.flight-buttons .coralBonus__descr {
	  flex-direction: column;
	  gap: 0;
	}
  }
  @media screen and (max-width: 1199px) {
	.flight-buttons .coralBonus__descr {
	  flex-direction: row;
	  gap: 3px;
	}
  }
  .flight-buttons .coralBonus__currency {
	width: 9px;
	height: 10px;
  }
  .flight-buttons .bonus-mobile_wrap {
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
  }
  
  .price-container-fix {
	flex-direction: column-reverse !important;
	flex-flow: wrap-reverse;
	row-gap: 20px;
  }
  
  @media screen and (min-width: 1007px) {
	.price-wrapper-fix {
	  gap: 20px;
	}
  }
  
  .price-fix {
	max-width: 100%;
	width: 100%;
	display: flex;
	flex-direction: row-reverse;
	align-items: center;
	-moz-column-gap: 5px;
		 column-gap: 5px;
  }
  .price-fix .coralBonus {
	margin-left: 10px;
  }
  .price-fix .coralBonus__bonuses {
	font-size: 18px;
  }
  .price-fix .coralBonus__bonuses::after {
	content: attr(data-bonuses);
  }
  .price-fix .coralBonus__currency {
	width: 12px;
	height: 17px;
  }
  .price-fix .coralBonus__descr {
	flex-direction: row;
	gap: 5px;
	color: #4a4a4a;
	font-size: 16px;
  }
  .price-fix .coralBonus__wrap {
	background: #f1f7fc;
  }
  
  .bonus-benefit-container {
	display: flex;
	flex-direction: column;
	align-items: flex-end;
  }
  
  .beenfit-wrapper-fix {
	align-items: flex-start !important;
  }
  
  .total-price-fix .coralBonus {
	margin-left: 0;
  }
  .total-price-fix .coralBonus__bonuses {
	font-size: 14px;
	align-self: flex-end !important;
  }
  .total-price-fix .coralBonus__bonuses::after {
	content: attr(data-bonuses);
  }
  .total-price-fix .coralBonus__currency {
	width: 10px;
	height: 13px;
  }
  .total-price-fix .coralBonus__descr {
	flex-direction: row;
	gap: 5px;
  }
  
  .bonus-container-fix {
	display: flex;
	justify-content: space-between;
	width: 100%;
	padding: 0 !important;
	align-items: center;
  }
  
  .mobile-promo-wrapper .coralBonus {
	width: -webkit-fit-content;
	width: -moz-fit-content;
	width: fit-content;
	float: right;
	margin-right: 10px;
	margin-left: 0;
	margin-top: 6px;
	padding: 2px;
  }
  .mobile-promo-wrapper .coralBonus__bonuses {
	align-self: flex-end !important;
  }
  .mobile-promo-wrapper .coralBonus__wrap {
	background: #f1f7fc;
	gap: 3px;
	padding: 3px 6px;
  }
  @media screen and (max-width: 575px) {
	.mobile-promo-wrapper .coralBonus__currency {
	  width: 9px;
	  height: 10px;
	}
  }
  .mobile-promo-wrapper .coralBonus__descr {
	flex-direction: row;
	gap: 3px;
  }
  @media screen and (max-width: 575px) {
	.mobile-promo-wrapper .mobile-prices-wrapper {
	  display: flex;
	  align-items: flex-end;
	}
  }
  @media screen and (max-width: 575px) {
	.mobile-promo-wrapper {
	  display: flex;
	  width: 100%;
	  flex-direction: column;
	}
  }
</style>`,
};
document.querySelector("head").insertAdjacentHTML("beforeend", initialData.styles);

// Скрипт определяет на какой странице находится
const url = location.pathname;
const urlArr = url.split("/");
let step = urlArr[1];
const finalStep = urlArr[3];

if (finalStep === "add-passenger") {
	step = finalStep;
}

// В зависимости от того на какой странице находимся - запускается нужный скрипт
switch (step) {
	case "packagetours":
		searchPageBonuses(); // tours search page
		break;
	case "hotels":
		hotelPageBonuses(); // on hotel page
		break;
	case "flight-list":
		flightsPageBonuses(); // on flights page
		break;
	case "package":
		additionalServicesPageBonuses(); // additional services page
		break;
	case "add-passenger":
		addPassengerPageBonuses(); // add-passenger page
		break;
}

// Страница поиска туров
function searchPageBonuses() {
	const hotelList = document.querySelector(".hotellist");
	const hotelsCards = hotelList.querySelectorAll(".item");

	// Перебор всех отелей на странице поиска
	hotelsCards.forEach((hotelCard) => {
		const hotelPriceContainer = hotelCard.querySelector(".action-discount-price").firstElementChild;
		const price = getCorrectPrice(hotelPriceContainer);
		const bonuses = Math.floor(price * 0.01).toLocaleString("ru");
		// Для десктопа отдельно - для мобайла отдельно
		if (window.innerWidth > 1006) {
			const coralBonusPlace = hotelCard.querySelector(".summaries");
			coralBonusPlace.insertAdjacentHTML("beforeend", initialData.layout);
			const iconsContainer = hotelCard.querySelector(".facilitysummary");
			const tripadvisorContainer = hotelCard.querySelector(".tripadvisor");
			const bonusContainer = hotelCard.querySelector(".coralBonus");
			const bonusPlace = bonusContainer.querySelector(".coralBonus__bonuses");
			const hoverContent = bonusContainer.querySelector(".coralBonus__hover");
			const bonusPlaceHover = bonusContainer.querySelector(".coralBonus__hover-bonuses");

			bonusContainer.addEventListener("mouseover", () => {
				hoverContent.classList.add("coralBonus__hover_visible");
			});
			bonusContainer.addEventListener("mouseout", () => {
				hoverContent.classList.remove("coralBonus__hover_visible");
			});

			bonusPlace.textContent = bonuses;
			bonusPlaceHover.textContent = bonuses;

			if (!iconsContainer.querySelector(".feature-item")) {
				iconsContainer.remove();
			}

			if (tripadvisorContainer.textContent === "") {
				tripadvisorContainer.remove();
			}
		} else {
			const infoWrapper = hotelCard.querySelector(".info");
			const hotelTitle = infoWrapper.firstElementChild;
			hotelTitle.classList.add("coralBonus__hotel-title");
			infoWrapper.insertAdjacentHTML("afterbegin", `<div class="coralBonus_mobile"></div>`);
			const coralBonusWrapper = infoWrapper.querySelector(".coralBonus_mobile");
			coralBonusWrapper.insertAdjacentElement("afterbegin", hotelTitle);
			coralBonusWrapper.insertAdjacentHTML("beforeend", initialData.layout);

			const bonusContainer = hotelCard.querySelector(".coralBonus");
			const hoverContent = bonusContainer.querySelector(".coralBonus__hover");
			const bonusPlace = hotelCard.querySelector(".coralBonus__bonuses");
			const bonusPlaceHover = hotelCard.querySelector(".coralBonus__hover-bonuses");

			bonusContainer.addEventListener("mouseover", () => {
				hoverContent.classList.add("coralBonus__hover_visible");
			});
			bonusContainer.addEventListener("mouseout", () => {
				hoverContent.classList.remove("coralBonus__hover_visible");
			});

			bonusPlace.textContent = bonuses;
			bonusPlaceHover.textContent = bonuses;
		}
	});
}

// Страница отеля
function hotelPageBonuses() {
	const newWrapperLayout = `<div class="bonus-wrapper"></div>`;
	const mainContainer = document.querySelector(".gallery-right");
	const promoIco = mainContainer.querySelector(".promo-price-ico");
	const priceContainer = mainContainer.querySelector(".price-big");
	const price = getCorrectPrice(priceContainer);
	const bonuses = Math.floor(price * 0.01).toLocaleString("ru");
	mainContainer.insertAdjacentHTML("afterbegin", newWrapperLayout);
	const newWrapper = mainContainer.querySelector(".bonus-wrapper");
	newWrapper.insertAdjacentHTML("afterbegin", initialData.layout);
	const rooms = document.querySelector(".rooms");
	const allRooms = rooms.querySelectorAll(".room");
	const bonusContainer = newWrapper.querySelector(".coralBonus");
	const bonusPlace = bonusContainer.querySelector(".coralBonus__bonuses");
	const hoverContent = bonusContainer.querySelector(".coralBonus__hover");
	const bonusPlaceHover = bonusContainer.querySelector(".coralBonus__hover-bonuses");
	const hoverCurrency = bonusContainer.querySelector(".coralBonus__title").querySelector("img");

	// Обработчик ховера на бонус для открытия всплывающего окна
	bonusContainer.addEventListener("mouseover", () => {
		hoverContent.classList.add("coralBonus__hover_visible");
	});
	bonusContainer.addEventListener("mouseout", () => {
		hoverContent.classList.remove("coralBonus__hover_visible");
	});

	bonusPlace.textContent = bonuses;
	bonusPlaceHover.textContent = bonuses;

	const bonusHeight = bonusPlaceHover.getBoundingClientRect().height;
	hoverCurrency.style.height = `${bonusHeight}px`;

	// Если у отеля есть иконка промо она переносится в новую обертку
	if (promoIco) {
		newWrapper.insertAdjacentElement("beforeend", promoIco);
	}

	// Стилизация всех номеров отеля
	allRooms.forEach((room) => {
		const variants = room.querySelectorAll(".variant");

		// И стилизация каждого типа питания в номерах отеля
		variants.forEach((variant) => {
			const variantPriceContainer = variant.querySelector(".price").firstElementChild;
			const variantPrice = getCorrectPrice(variantPriceContainer);
			const bonuses = Math.floor(variantPrice * 0.01).toLocaleString("ru");
			const promoIco = variant.querySelector(".promo-price-ico");
			const button = variant.querySelector(".roomAction");
			if (promoIco) {
				promoIco.insertAdjacentHTML("afterEnd", initialData.layout);
			} else {
				variant.querySelector(".m-action").insertAdjacentHTML("afterBegin", initialData.layout);
				variant.querySelector(".m-action").classList.add("promo-price-ico__wrapper");
			}

			const bonusContainer = variant.querySelector(".coralBonus");
			const bonusPlace = bonusContainer.querySelector(".coralBonus__bonuses");
			const hoverContent = bonusContainer.querySelector(".coralBonus__hover");
			const bonusPlaceHover = bonusContainer.querySelector(".coralBonus__hover-bonuses");

			bonusContainer.addEventListener("mouseover", () => {
				hoverContent.classList.add("coralBonus__hover_visible");
			});
			bonusContainer.addEventListener("mouseout", () => {
				hoverContent.classList.remove("coralBonus__hover_visible");
			});

			bonusPlace.textContent = bonuses;
			bonusPlaceHover.textContent = bonuses;

			// При клике на кнопку выбора номера - данные сохраняются в local storage (количество бонусов, ID отеля и название номера отеля)
			button.addEventListener("click", () => {
				const hotelId = JSON.parse(button.getAttribute("data-params")).Hotel;
				const roomName = JSON.parse(button.getAttribute("data-room-layer")).Name;
				const storajeKey = `Bonuses ${hotelId}_${roomName.toLowerCase()}`;
				const PromoData = {
					Bonuses: bonuses,
					HotelId: hotelId,
					RoomName: roomName.toLowerCase(),
				};
				localStorage.setItem(storajeKey, JSON.stringify(PromoData));
			});
		});
	});
}

// Страница выбора перелета
function flightsPageBonuses() {
	// Получение данных по выбранному отелю и выбранному номеру
	const hotelId = Number(document.querySelector(".selectedHotelPartial").getAttribute("data-layer-hotelid"));
	const roomName = document.querySelector(".selectedHotelPartial").getAttribute("data-layer-roomtype").toLowerCase();
	const storajeKey = `Bonuses ${hotelId}_${roomName}`;
	// Если в памяти нет данных с такими параметрами - скрипт завершается
	if (!localStorage.getItem(storajeKey)) {
		return;
	}
	const localObj = JSON.parse(localStorage.getItem(storajeKey));

	// Происходит 2 этапа проверки данных в памяти с данными по отелю на странице
	if (isEqual(hotelId, localObj.HotelId) && isEqual(roomName, localObj.RoomName)) {
		const priceWrappers = document.querySelectorAll(".flight-buttons");
		// каждая карточка перелетов стилизуется
		priceWrappers.forEach((block) => {
			let bonusPlace = block.querySelector(".btn-flight-detail");
			const bonuses = localObj.Bonuses;
			
			// если бонусы посчитаны ошибочно в отрицательном значении или в слишком большом значении - скрипт завершается
			if (bonuses < 0 || bonuses > 100000) {
				return;
			}

			// рендер самих бонусов дял десктопа и мобайла отдельно
			if (window.innerWidth < 1007) {
				if (block.querySelector(".benefit")) {
					bonusPlace.insertAdjacentHTML("beforebegin", `<div class="bonus-mobile_wrap"></div>`);
					const bonusMobile = block.querySelector(".bonus-mobile_wrap");
					bonusMobile.insertAdjacentHTML("beforeend", initialData.layout);
					bonusMobile.insertAdjacentElement("afterbegin", block.querySelector(".benefit"));
				} else {
					bonusPlace = block.querySelector(".btn-select-flight");
					bonusPlace.insertAdjacentHTML("afterend", `<div class="bonus-mobile_wrap"></div>`);
					const bonusMobile = block.querySelector(".bonus-mobile_wrap");
					bonusMobile.style.justifyContent = "flex-end";
					bonusMobile.style.marginTop = "5px";
					bonusMobile.insertAdjacentHTML("beforeend", initialData.layout);
				}
			} else {
				bonusPlace.insertAdjacentHTML("beforeBegin", initialData.layout);
			}

			const bonusContainer = block.querySelector(".coralBonus");
			const bonus = bonusContainer.querySelector(".coralBonus__bonuses");
			const hoverContent = bonusContainer.querySelector(".coralBonus__hover");
			const bonusPlaceHover = bonusContainer.querySelector(".coralBonus__hover-bonuses");

			bonusContainer.addEventListener("mouseover", () => {
				hoverContent.classList.add("coralBonus__hover_visible");
			});
			bonusContainer.addEventListener("mouseout", () => {
				hoverContent.classList.remove("coralBonus__hover_visible");
			});

			bonus.textContent = bonuses;
			bonusPlaceHover.textContent = bonuses;
		});
	}
}

// Страница выбора доп услуг
function additionalServicesPageBonuses() {
	const hotelContainer = document.querySelector(".selectedHotel");
	const roomName = hotelContainer.querySelector(".roomConcept").textContent.toLowerCase();
	const hotelId = Number(hotelContainer.querySelector(".hotelTitle").getAttribute("data-hotelid"));
	const storajeKey = `Bonuses ${hotelId}_${roomName}`;

	if (!localStorage.getItem(storajeKey)) {
		return;
	}

	const priceContainer = document.querySelector(".totalPriceContainer");
	const prices = priceContainer.querySelector(".totalPrice");
	const yePrice = priceContainer.querySelector(".bigtotalpricebysalecurrency");

	const localObj = JSON.parse(localStorage.getItem(storajeKey));
	if (localObj.Bonuses < 0 || localObj.Bonuses > 100000) {
		return;
	}

	const totalPriceContainer = document.querySelector("#btnSummaryFooterCollapse").lastElementChild;

	if (isEqual(hotelId, localObj.HotelId) && isEqual(roomName, localObj.RoomName)) {
		const priceWrapper = priceContainer.querySelector(".btnBookAndPayInAnotherWay").parentElement;
		if (!priceWrapper.classList.contains("price-wrapper-fix")) {
			priceWrapper.classList.add("price-container-fix");
		}
		prices.insertAdjacentHTML("afterbegin", initialData.layout);

		const leftbonusContainer = prices.querySelector(".coralBonus");
		const leftbonus = leftbonusContainer.querySelector(".coralBonus__bonuses");
		const lefthoverContent = leftbonusContainer.querySelector(".coralBonus__hover");
		const leftbonusPlaceHover = leftbonusContainer.querySelector(".coralBonus__hover-bonuses");

		leftbonusContainer.addEventListener("mouseover", () => {
			lefthoverContent.classList.add("coralBonus__hover_visible");
		});

		leftbonusContainer.addEventListener("mouseout", () => {
			lefthoverContent.classList.remove("coralBonus__hover_visible");
		});

		// Тут бонусы рендерятся через дата атрибут в ::after (для нормализации работы менеджерской программы qui-quo)
		leftbonus.dataset.bonuses = localObj.Bonuses;
		leftbonus.textContent = "";
		leftbonusPlaceHover.dataset.bonuses = localObj.Bonuses;
		leftbonusPlaceHover.textContent = "";

		yePrice.classList.add("ye-fix");
		prices.classList.add("price-fix");
		priceContainer.classList.add("price-wrapper-fix");
		priceContainer.classList.remove("flex-row-reverse");
		priceContainer.classList.remove("align-items-start");

		totalPriceContainer.firstElementChild.style.width = "100%";
		totalPriceContainer.querySelector("tr").classList.add("total-price-fix");

		// Для правой менюшки стилизация немного иная
		if (totalPriceContainer.querySelector(".benefit_right-menu")) {
			totalPriceContainer.querySelector(".total-price-fix").firstElementChild.insertAdjacentHTML("beforeend", `<div class="bonus-benefit-container"></div>`);
			const bonusBenefitContainer = totalPriceContainer.querySelector(".bonus-benefit-container");
			bonusBenefitContainer.insertAdjacentHTML("afterbegin", initialData.layout);
			bonusBenefitContainer.insertAdjacentElement("afterbegin", totalPriceContainer.querySelector(".benefit_right-menu"));

			const bonusContainer = bonusBenefitContainer.querySelector(".coralBonus");
			const bonus = bonusContainer.querySelector(".coralBonus__bonuses");
			const hoverContent = bonusContainer.querySelector(".coralBonus__hover");
			const bonusPlaceHover = bonusContainer.querySelector(".coralBonus__hover-bonuses");

			bonusContainer.addEventListener("mouseover", () => {
				hoverContent.classList.add("coralBonus__hover_visible");
			});

			bonusContainer.addEventListener("mouseout", () => {
				hoverContent.classList.remove("coralBonus__hover_visible");
			});

			bonus.dataset.bonuses = localObj.Bonuses;
			bonus.textContent = "";
			bonusPlaceHover.dataset.bonuses = localObj.Bonuses;
			bonusPlaceHover.textContent = "";
		} else {
			totalPriceContainer.querySelector("tr").querySelector(".align-top").insertAdjacentHTML("beforeend", initialData.layout);
			totalPriceContainer.querySelector("tr").querySelector(".align-top").classList.add("bonus-container-fix");
			const bonusContainer = totalPriceContainer.querySelector(".coralBonus");
			const bonus = bonusContainer.querySelector(".coralBonus__bonuses");
			const hoverContent = bonusContainer.querySelector(".coralBonus__hover");
			const bonusPlaceHover = bonusContainer.querySelector(".coralBonus__hover-bonuses");

			bonusContainer.addEventListener("mouseover", () => {
				hoverContent.classList.add("coralBonus__hover_visible");
			});

			bonusContainer.addEventListener("mouseout", () => {
				hoverContent.classList.remove("coralBonus__hover_visible");
			});

			bonus.dataset.bonuses = localObj.Bonuses;
			bonus.textContent = "";
			bonusPlaceHover.dataset.bonuses = localObj.Bonuses;
			bonusPlaceHover.textContent = "";
		}

		if (window.innerWidth < 1007) {
			const mobilePriceWrapper = document.querySelector(".mobileSummaryHeader");
			const mobilePrice = mobilePriceWrapper.querySelector(".mobileprice");
			const mobileYe = mobilePriceWrapper.querySelector(".mobilebigtotalpricebysalecurrency").parentNode;
			mobileYe.firstElementChild.style.marginBottom = "0";
			mobilePrice.classList.remove("flex-grow-1");
			let mobilePromoWrapper = mobilePriceWrapper.querySelector(".mobile-promo-wrapper");

			if (!mobilePromoWrapper) {
				mobilePriceWrapper.insertAdjacentHTML("afterbegin", `<div class="mobile-promo-wrapper"></div>`);
				mobilePromoWrapper = mobilePriceWrapper.querySelector(".mobile-promo-wrapper");
			}

			mobilePromoWrapper.insertAdjacentHTML("afterbegin", initialData.layout);
			mobilePromoWrapper.insertAdjacentHTML("beforeend", `<div class="mobile-prices-wrapper"></div>`);
			const newPricesPlace = mobilePromoWrapper.querySelector(".mobile-prices-wrapper");
			newPricesPlace.insertAdjacentElement("afterbegin", mobilePrice);
			newPricesPlace.insertAdjacentElement("beforeend", mobileYe);

			const bonusContainer = mobilePromoWrapper.querySelector(".coralBonus");
			const bonus = bonusContainer.querySelector(".coralBonus__bonuses");
			const hoverContent = bonusContainer.querySelector(".coralBonus__hover");
			const bonusPlaceHover = bonusContainer.querySelector(".coralBonus__hover-bonuses");

			bonusContainer.addEventListener("mouseover", () => {
				hoverContent.classList.add("coralBonus__hover_visible");
			});

			bonusContainer.addEventListener("mouseout", () => {
				hoverContent.classList.remove("coralBonus__hover_visible");
			});

			bonus.textContent = localObj.Bonuses;
			bonusPlaceHover.textContent = localObj.Bonuses;
		}
	}
}

// Страница ввода данных туристов работает аналогично странице допуслуг
function addPassengerPageBonuses() {
	const hotelContainer = document.querySelector(".selectedHotel");
	const roomName = hotelContainer.querySelector(".roomConcept").textContent.toLowerCase();
	const hotelId = Number(hotelContainer.querySelector(".hotelTitle").getAttribute("data-hotelid"));
	const storajeKey = `Bonuses ${hotelId}_${roomName}`;

	if (!localStorage.getItem(storajeKey)) {
		return;
	}

	const localObj = JSON.parse(localStorage.getItem(storajeKey));
	if (localObj.Bonuses < 0 || localObj.Bonuses > 100000) {
		return;
	}

	const totalPriceContainer = document.querySelector("#btnSummaryFooterCollapse").lastElementChild;

	totalPriceContainer.firstElementChild.style.width = "100%";
	totalPriceContainer.querySelector("tr").classList.add("total-price-fix");

	totalPriceContainer.querySelector("tr").querySelector(".align-top").insertAdjacentHTML("beforeend", initialData.layout);
	totalPriceContainer.querySelector("tr").querySelector(".align-top").classList.add("bonus-container-fix");
	const bonusContainer = totalPriceContainer.querySelector(".coralBonus");
	const bonus = bonusContainer.querySelector(".coralBonus__bonuses");
	const hoverContent = bonusContainer.querySelector(".coralBonus__hover");
	const bonusPlaceHover = bonusContainer.querySelector(".coralBonus__hover-bonuses");

	bonusContainer.addEventListener("mouseover", () => {
		hoverContent.classList.add("coralBonus__hover_visible");
	});

	bonusContainer.addEventListener("mouseout", () => {
		hoverContent.classList.remove("coralBonus__hover_visible");
	});

	bonus.dataset.bonuses = localObj.Bonuses;
	bonus.textContent = "";
	bonusPlaceHover.dataset.bonuses = localObj.Bonuses;
	bonusPlaceHover.textContent = "";

	if (window.innerWidth < 1007) {
		const mobilePriceWrapper = document.querySelector(".mobileSummaryHeader");
		const mobilePrice = mobilePriceWrapper.querySelector(".mobileprice");
		const mobileYe = mobilePriceWrapper.querySelector(".mobilebigtotalpricebysalecurrency").parentNode;
		mobileYe.firstElementChild.style.marginBottom = "0";
		mobilePrice.classList.remove("flex-grow-1");
		let mobilePromoWrapper = mobilePriceWrapper.querySelector(".mobile-promo-wrapper");

		if (!mobilePromoWrapper) {
			mobilePriceWrapper.insertAdjacentHTML("afterbegin", `<div class="mobile-promo-wrapper"></div>`);
			mobilePromoWrapper = mobilePriceWrapper.querySelector(".mobile-promo-wrapper");
		}

		mobilePromoWrapper.insertAdjacentHTML("afterbegin", initialData.layout);
		mobilePromoWrapper.insertAdjacentHTML("beforeend", `<div class="mobile-prices-wrapper"></div>`);
		const newPricesPlace = mobilePromoWrapper.querySelector(".mobile-prices-wrapper");
		newPricesPlace.insertAdjacentElement("afterbegin", mobilePrice);
		newPricesPlace.insertAdjacentElement("beforeend", mobileYe);

		const bonusContainer = mobilePromoWrapper.querySelector(".coralBonus");
		const bonus = bonusContainer.querySelector(".coralBonus__bonuses");
		const hoverContent = bonusContainer.querySelector(".coralBonus__hover");
		const bonusPlaceHover = bonusContainer.querySelector(".coralBonus__hover-bonuses");

		bonusContainer.addEventListener("mouseover", () => {
			hoverContent.classList.add("coralBonus__hover_visible");
		});

		bonusContainer.addEventListener("mouseout", () => {
			hoverContent.classList.remove("coralBonus__hover_visible");
		});

		bonus.textContent = localObj.Bonuses;
		bonusPlaceHover.textContent = localObj.Bonuses;
	}
}

// Составление верной цены из перепутанных цифр в верстке
function getCorrectPrice(priceContainer) {
	const pureArr = [];
	const priceArr = [];
	priceContainer.childNodes.forEach((symbol) => {
		if (symbol === null || symbol === undefined) {
			debugger;
		}
		const currency = symbol.querySelector(".currencyfont");
		if (!currency) {
			symbol.offsetWidth === 0 ? pureArr : pureArr.push(symbol);
		}
	});

	for (let i = 0; i <= pureArr.length; i++) {
		pureArr.forEach((item) => {
			if (Number(getComputedStyle(item).order) === i) {
				priceArr.push(item.textContent);
			}
		});
	}
	return Number(priceArr.join("")); // Возвращает готовое число
}

function isEqual(param1, param2) {
	return param1 === param2;
}
