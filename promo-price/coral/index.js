// Работа скрипта полностью идентична со скриптом CoralBonus

const url = location.pathname;
const urlArr = url.split("/");
const step = urlArr[1];

switch (step) {
	case "packagetours":
		console.log("0 step initialized");
		zeroStep(); // hotels search page
		break;
	case "hotels":
		console.log("1st step initialized");
		firstStep(); // on hotel page
		break;
	case "flight-list":
		console.log("2nd step initialized");
		// secondStep(); // on flights page
		break;
	case "package":
		console.log("3rd step initialized");
		thirdStep(); // additional services page
		break;
}

function zeroStep() {
	const styles = `
	<style>
	.benefit {
		position: relative;
		white-space: nowrap;
		max-width: fit-content;
		margin: 8px 10px 17px 15px;
    }
	.benefit::after {
		content: "";
	    background: url(https://cdn.coral.ru/content/cms/russia/promoprices/promo-price-border.png);
		width: calc(100% + 20px);
		height: calc(100% + 20px);
		background-repeat: no-repeat;
		background-size: contain;
		position: absolute;
		z-index: 1;
		top: calc(0% - 8px);
		left: calc(0% - 10px);
		pointer-events: none;
	}
	.benefit__value {
        color: #F0AB00;
        margin-left: 5px;
    }
	@media screen and (max-width: 1006px){
		.benefit {
			margin: 10px;
		}
		.action-price_fix {
			position: relative !important;
    		left: 0 !important;
    		top: 0 !important;
    		max-width: fit-content;
		}
		.price-block_fix {
			display: flex;
			flex-direction: column;
			align-items: flex-end;
			top: 0 !important;
			justify-content: flex-end;
		}
		.price-wrapper-fix {
			display: flex;
    		align-items: center;
    		justify-content: flex-end;
    		column-gap: 10px;
			width: 100%;
		}
		.price-container-fix {
			margin: 10px 0 0 0 !important;
		}
		.infoblock-fix {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			margin-bottom: 10px;
		}
		.searchresult .searchDetailText {
			padding: 0 20px !important;
			width: 100% !important;
		}
	}
	@media screen and (max-width: 399px) {
		.benefit {
			margin: 5px 8px 5px 8px;
    		font-size: 10px;
    		position: absolute;
    		top: 0;
    		right: 10px;
		}
		.benefit::after {
			width: calc(100% + 20px);
    		height: calc(100% + 10px);
    		top: calc(0% - 4px);
    		left: calc(0% - 8px);
		}
		.price-wrapper-fix {
			margin-top: 10px;
			align-items: flex-end;
			flex-direction: column;
		}
		.hotellist .item .info {
			padding-left: 10px !important;
		}

		.hotellist .item .info .informations {
			padding-left: 20px !important;
		}
	}
	</style>`;
	document.querySelector("body").insertAdjacentHTML("afterbegin", styles);

	const hotelsContainer = document.querySelector(".hotellist");
	const priceContainers = hotelsContainer.querySelectorAll(".actions");
	priceContainers.forEach((container) => {
		if (container.querySelector(".action-price")) {
			const benefitContainer = container.firstElementChild;
			const oldPrice = benefitContainer.querySelector(".action-price");
			const oldPriceText = oldPrice.textContent;
			const oldPriceValue = removeSpaces(oldPriceText.substring(0, oldPriceText.length - 5));
			const currentPriceContainer = benefitContainer.querySelector(".action-discount-price").firstElementChild;
			const currentPrice = getCorrectPrice(currentPriceContainer);
			const benefit = oldPriceValue - currentPrice;
			if (benefit < 0 || benefit > 100000) {
				return console.error("Benefit is incorrect!");
			}
			const benefitLayoutDesktop = `<div class="benefit">Ваша выгода <span class="benefit__value">${benefit.toLocaleString("ru")} ₽</span></div>`;
			if (window.innerWidth > 1006) {
				// desktop  1006px to Max
				benefitContainer.insertAdjacentHTML("afterbegin", benefitLayoutDesktop);
				return console.log("0 step desktop styled");
			}
			if (window.innerWidth < 1007) {
				// tablet 1006px to min
				const infoblock = container.querySelector(".infoblock");
				const benefitLayoutMobile = `<div class="benefit">Выгода <span class="benefit__value">${benefit.toLocaleString("ru")} ₽</span></div>`;
				const priceBlock = benefitContainer.querySelector(".priceblock");
				const currentPriceWrapper = priceBlock.querySelector(".action-discount-price");
				const oldPriceTitle = priceBlock.querySelector(".action-discount-price-info-text");
				priceBlock.insertAdjacentHTML("afterbegin", `<div class="price-wrapper-fix"></div>`);
				const newPriceBox = priceBlock.querySelector(".price-wrapper-fix");

				infoblock.insertAdjacentHTML("afterbegin", `<div class="infoblock-fix"></div>`);
				const infoblockFix = infoblock.querySelector(".infoblock-fix");
				const nights = infoblock.querySelector(".action-nights");
				const room = infoblock.querySelector(".action-room");
				const meal = infoblock.querySelector(".action-meal ");

				infoblockFix.insertAdjacentElement("afterbegin", meal);
				infoblockFix.insertAdjacentElement("afterbegin", room);
				infoblockFix.insertAdjacentElement("afterbegin", nights);

				infoblock.classList.add("infoblock-fix");
				priceBlock.classList.add("price-block_fix");
				currentPriceWrapper.classList.add("price-container-fix");
				oldPrice.classList.add("action-price_fix");
				oldPriceTitle.classList.add("action-price_fix");
				newPriceBox.insertAdjacentElement("afterbegin", oldPrice);
				newPriceBox.insertAdjacentElement("afterbegin", oldPriceTitle);
				priceBlock.insertAdjacentHTML("afterbegin", benefitLayoutMobile);
				setTimeout(function () {
					const credit = container.querySelector(".dm-credit__wrap");
					infoblock.insertAdjacentElement("beforeend", credit);
				}, 1000);

				return console.log("0 step tablet-mobile styled");
			}
		} else {
			if (window.innerWidth < 1007) {
				const infoblock = container.querySelector(".infoblock");
				const nights = infoblock.querySelector(".action-nights");
				const room = infoblock.querySelector(".action-room");
				const meal = infoblock.querySelector(".action-meal ");
				const priceBlock = container.querySelector(".priceblock");
				const currentPriceWrapper = priceBlock.querySelector(".action-discount-price");
				const oldPriceTitle = priceBlock.querySelector(".action-discount-price-info-text");
				infoblock.insertAdjacentHTML("afterbegin", `<div class="infoblock-fix"></div>`);
				const infoblockFix = infoblock.querySelector(".infoblock-fix");

				infoblockFix.insertAdjacentElement("afterbegin", meal);
				infoblockFix.insertAdjacentElement("afterbegin", room);
				infoblockFix.insertAdjacentElement("afterbegin", nights);
				priceBlock.classList.add("price-block_fix");
				oldPriceTitle.classList.add("action-price_fix");
				currentPriceWrapper.classList.add("price-container-fix");
				infoblock.classList.add("infoblock-fix");
				setTimeout(function () {
					const credit = container.querySelector(".dm-credit__wrap");
					infoblock.insertAdjacentElement("beforeend", credit);
				}, 1000);
			}
		}
	});
}
function firstStep() {
	const mainWrapper = document.querySelector(".price-wrap");
	const priceWrapper = mainWrapper.querySelector(".priceInnerWrap");
	if (priceWrapper.querySelector("img")) {
		priceWrapper.querySelector("img").remove();
	} else {
		return console.log("1st step script stopped (not promo)");
	}
	const styles = `
<style>
    .btnSelectRoom {
        display: flex;
        flex-direction: column;
        align-content: flex-end;
        row-gap: 20px;
        justify-content: flex-start;
    }
    .promo-price-ico {
        max-width: 50%;
        margin-left: auto;
    }
    .benefit {
        position: absolute;
        top: 0;
        left: 110%;
        white-space: nowrap;
    }
    .benefit_room {
        top: unset;
        left: unset;
        position: relative;
        white-space: nowrap;
        font-size: 0.8rem;
        margin-bottom: -10px;
    }
    .benefit__value {
        color: #F0AB00;
        margin-left: 5px;
    }
    .promo-price-ico__wrapper {
        row-gap: 20px;
        height: 100%;
        justify-content: flex-start;
    }
</style>`;
	document.querySelector("body").insertAdjacentHTML("afterbegin", styles);

	const icoLayout = `<img class="promo-price-ico" src="https://cdn.coral.ru/content/cms/russia/promoprices/promo-price-ico.png">`;
	const allButtons = document.querySelectorAll(".m-action");
	const oldPriceMainWrapper = priceWrapper.querySelector(".oldpricewrap");
	const priceValueContainerMain = priceWrapper.querySelector(".price").firstElementChild.querySelector(".price-big");
	const newIcoPlace = mainWrapper.querySelector(".btnSelectRoom");
	const oldPriceMain = priceWrapper.querySelector(".oldprice").textContent;
	const oldPriceMainValue = Number(removeSpaces(oldPriceMain.substring(0, oldPriceMain.length - 5)));
	const currentPriceMain = getCorrectPrice(priceValueContainerMain);
	const benefitMain = oldPriceMainValue - currentPriceMain;
	if (benefitMain < 0 || benefitMain > 100000) {
		return console.error("Benefit is incorrect!");
	}
	const benefitLayoutMain = `<div class="benefit">| Выгода <span class="benefit__value">${benefitMain.toLocaleString("ru")} ₽</span></div>`;

	oldPriceMainWrapper.style.maxWidth = "fit-content";
	oldPriceMainWrapper.style.position = "relative";
	oldPriceMainWrapper.insertAdjacentHTML("beforeend", benefitLayoutMain);
	newIcoPlace.insertAdjacentHTML("afterbegin", icoLayout);

	allButtons.forEach((btn) => {
		const wrapperRoom = btn.parentNode;
		const button = btn.querySelector(".roomAction");
		const discPrice = wrapperRoom.querySelector(".discountedprice").textContent;
		const oldPriceRoom = removeSpaces(discPrice.substring(0, discPrice.length - 5));
		const benefitPlaceRoom = wrapperRoom.querySelector(".flightinc");
		const priceValueContainerRoom = wrapperRoom.querySelector(".price").firstElementChild;
		const currentPriceRoom = getCorrectPrice(priceValueContainerRoom);
		const benefitRoom = oldPriceRoom - currentPriceRoom;
		const benefitLayoutRoom = `<div class="benefit benefit_room">Выгода <span class="benefit__value">${benefitRoom.toLocaleString("ru")}\u00a0₽</span></div>`;

		btn.classList.add("promo-price-ico__wrapper");
		btn.insertAdjacentHTML("afterbegin", icoLayout);
		benefitPlaceRoom.insertAdjacentHTML("afterbegin", benefitLayoutRoom);
		benefitPlaceRoom.querySelector("img").remove();

		button.addEventListener("click", () => {
			const hotelId = JSON.parse(button.getAttribute("data-params")).Hotel;
			const roomName = JSON.parse(button.getAttribute("data-room-layer")).Name;
			const storajeKey = `${hotelId}_${roomName.toLowerCase()}`;
			const PromoData = {
				Benefit: benefitRoom,
				HotelId: hotelId,
				RoomName: roomName.toLowerCase(),
			};
			localStorage.setItem(storajeKey, JSON.stringify(PromoData));
		});
	});
}
function secondStep() {
	const styles = `
<style>
    .benefit {
        max-width: fit-content;
    	margin-top: 10px;
    	margin-bottom: 0;
    	display: flex;
    	position: relative;
    }
    .benefit__value {
        color: #F0AB00;
        margin-left: 5px;
    }
	@media screen and (max-width: 1006px) {
		.benefit {
			margin: 10px;
		}
		.benefit::after {
			content: "";
			background: url(https://cdn.coral.ru/content/cms/russia/promoprices/promo-price-border.png);
			width: 115%;
    		height: 140%;
			background-repeat: no-repeat;
			background-size: contain;
			position: absolute;
			z-index: 1;
			top: -20%;
    		left: -8%;
			pointer-events: none;
		}
		.flight-buttons {
			align-items: flex-end;
		}
	}
</style>`;
	document.querySelector("body").insertAdjacentHTML("afterbegin", styles);

	const hotelId = Number(document.querySelector(".selectedHotelPartial").getAttribute("data-layer-hotelid"));
	const roomName = document.querySelector(".selectedHotelPartial").getAttribute("data-layer-roomtype").toLowerCase();
	const storajeKey = `${hotelId}_${roomName}`;
	if (!localStorage.getItem(storajeKey)) {
		return console.log("No data for 2nd step");
	}
	const localObj = JSON.parse(localStorage.getItem(storajeKey));

	if (isEqual(hotelId, localObj.HotelId)) {
		console.info("1st check passed.");
		if (isEqual(roomName, localObj.RoomName)) {
			console.info("2nd check passed. Script started.");
			const priceWrappers = document.querySelectorAll(".flight-buttons");
			priceWrappers.forEach((block) => {
				const benefitPlace = block.querySelector(".btn-flight-detail");
				const benefit = localObj.Benefit;
				if (benefit < 0 || benefit > 100000) {
					return console.error("Benefit is incorrect!");
				}
				const benefitLayout = `<p class="benefit">Выгода<span class="benefit__value">${benefit.toLocaleString("ru")} ₽</span></p>`;
				benefitPlace.insertAdjacentHTML("beforebegin", benefitLayout);
			});
		} else {
			console.warn("2nd check failed.");
		}
	} else {
		console.warn("1st check failed.");
	}

	function isEqual(param1, param2) {
		return param1 === param2;
	}
}
function thirdStep() {
	const styles = `
<style>
.price-fix {
    max-width: 100%;
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    column-gap: 5px;
}
.price-wrapper-fix {
    flex-direction: column-reverse;
    align-items: flex-end;
}
.ye-fix {
    margin-bottom: 0;
}
.benefit {
    color: #4a4a4a !important;
	font-size: 20px;
	margin: 10px 10px 10px 20px;
	position: relative;
	width: fit-content;
	display: flex;
}
.benefit::after {
	content: attr(data-benefit);
	color: #f0ab00;
	margin-left: 5px;
}
.benefit::before {
	content: "";
	background: url(https://cdn.coral.ru/content/cms/russia/promoprices/promo-price-border.png);
	width: 115%;
    height: 130%;
	background-repeat: no-repeat;
	background-size: contain;
	position: absolute;
	z-index: 1;
	top: -15%;
	left: -7%;
	pointer-events: none;
}
.benefit_right-menu {
    font-size: inherit;
}
.benefit__value {
	color: #f0ab00;
	margin: 0 0 0 5px;
}
.total-price-fix {
    display: flex;
    flex-direction: column;
    width: 100%;
    row-gap: 10px;
}
.total-price-fix_child {
    padding: 0 !important;
    display: flex;
    justify-content: flex-end;
    column-gap: 10px;
}
.beenfit-wrapper-fix {
    display: flex;
    padding: 0px !important;
    justify-content: space-between;
    align-items: center;
}

@media screen and (max-width: 1006px) {
	.price-fix {
		flex-direction: column-reverse;
    	align-items: flex-end;
    	row-gap: 0;
	}
	.benefit_right-menu {
		margin: 0;
	}
	.ye-fix {
		margin-bottom: -20px;
	}
	.price-wrapper-fix {
		row-gap: 20px;
	}
}

@media screen and (max-width: 730px) {
	.benefit {
		margin: 10px auto 10px auto;
	}
	.price-fix {
		text-align: inherit;
	}
}

@media screen and (max-width: 575px){
	.benefit {
		margin: 10px;
		font-size: inherit;
	}
	.mobile-promo-wrapper {
		width: 100%;
	}
	.mobile-prices-wrapper {
		display: flex;
		align-items: flex-end;
	}
}

</style>`;
	document.querySelector("body").insertAdjacentHTML("afterbegin", styles);

	const hotelContainer = document.querySelector(".selectedHotel");
	const roomName = hotelContainer.querySelector(".roomConcept").textContent.toLowerCase();
	const hotelId = Number(hotelContainer.querySelector(".hotelTitle").getAttribute("data-hotelid"));
	const storajeKey = `${hotelId}_${roomName}`;
	let benefitLayout, benefitLayoutRight;

	if (!localStorage.getItem(storajeKey)) {
		return console.log("No data for 3rd step");
	}

	const priceContainer = document.querySelector("body > div.extraServices-BaseContainer > div.container.my-3 > div > div.col-12.col-sm-7.col-md-9.partial__InsuranceAndTransfer > section > form > div.totalPriceContainer > div > div");
	const prices = priceContainer.querySelector(".totalPrice");
	const yePrice = priceContainer.querySelector(".bigtotalpricebysalecurrency");

	const localObj = JSON.parse(localStorage.getItem(storajeKey));
	if (localObj.Benefit < 0 || localObj.Benefit > 100000) {
		return console.error("Benefit is incorrect!");
	}
	if (window.innerWidth > 1006) { // JS vs Qui-Quo! JS win's!
		benefitLayout = `<div data-benefit='${localObj.Benefit.toLocaleString("ru")} ₽' class="benefit">Выгода </div>`;
		benefitLayoutRight = `<div data-benefit='${localObj.Benefit.toLocaleString("ru")} ₽' class="benefit benefit_right-menu">Выгода </div>`;
	} else {
		benefitLayout = `<div class="benefit">Выгода<p class="benefit__value">${localObj.Benefit.toLocaleString("ru")} ₽</p></div>`;
		benefitLayoutRight = `<div class="benefit benefit_right-menu">Выгода<p class="benefit__value">${localObj.Benefit.toLocaleString("ru")} ₽</p></div>`;
	}

	const totalPriceContainer = document.querySelector("#btnSummaryFooterCollapse").lastElementChild;

	if (isEqual(hotelId, localObj.HotelId)) {
		console.info("1st check passed.");
		if (isEqual(roomName, localObj.RoomName)) {
			console.info("2nd check passed. Script started.");
			yePrice.classList.add("ye-fix");
			prices.classList.add("price-fix");
			priceContainer.classList.add("price-wrapper-fix");
			priceContainer.classList.remove("flex-row-reverse");
			priceContainer.classList.remove("align-items-start");
			prices.insertAdjacentHTML("afterbegin", benefitLayout);
			totalPriceContainer.firstElementChild.style.width = "100%";
			totalPriceContainer.querySelector("tr").classList.add("total-price-fix");
			totalPriceContainer.querySelector("tr").querySelector(".align-top").classList.add("beenfit-wrapper-fix");
			totalPriceContainer.querySelector("tr").querySelector(".totalprice").classList.add("total-price-fix_child");
			totalPriceContainer.querySelector("tr").querySelector(".align-top").insertAdjacentHTML("beforeend", benefitLayoutRight);

			// mobile
			const mobilePriceWrapper = document.querySelector(".mobileSummaryHeader");
			const mobilePrice = mobilePriceWrapper.querySelector(".mobileprice");
			const mobileYe = mobilePriceWrapper.querySelector(".mobilebigtotalpricebysalecurrency").parentNode;
			mobileYe.firstElementChild.style.marginBottom = "0";
			mobilePrice.classList.remove("flex-grow-1");
			mobilePriceWrapper.insertAdjacentHTML("afterbegin", `<div class="mobile-promo-wrapper"></div>`);
			const mobilePromoWrapper = mobilePriceWrapper.querySelector(".mobile-promo-wrapper");
			mobilePromoWrapper.insertAdjacentHTML("afterbegin", benefitLayout);
			mobilePromoWrapper.insertAdjacentHTML("beforeend", `<div class="mobile-prices-wrapper"></div>`);
			const newPricesPlace = mobilePromoWrapper.querySelector(".mobile-prices-wrapper");
			newPricesPlace.insertAdjacentElement("afterbegin", mobilePrice);
			newPricesPlace.insertAdjacentElement("beforeend", mobileYe);
		} else {
			console.warn("2nd check failed.");
		}
	} else {
		console.warn("1st check failed.");
	}

	function isEqual(param1, param2) {
		return param1 === param2;
	}
}

function getCorrectPrice(priceContainer) {
	const pureArr = [];
	const priceArr = [];
	priceContainer.childNodes.forEach((l) => {
		if (!l.querySelector(".currencyfont")) {
			l.offsetWidth === 0 ? pureArr : pureArr.push(l);
		}
	});

	for (let i = 0; i <= pureArr.length; i++) {
		pureArr.forEach((item) => {
			if (Number(getComputedStyle(item).order) === i) {
				priceArr.push(item.textContent);
			}
		});
	}
	return Number(priceArr.join(""));
}

function removeSpaces(str) {
	const arr = str.split("");
	const pureArr = [];
	arr.forEach((i) => {
		i === " " ? pureArr : pureArr.push(i);
	});
	const newStr = pureArr.join("");
	return Number(newStr);
}
