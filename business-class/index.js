const html = {
	layout: `<div class="business-class-banner">
	<img class="desktop" src="https://cdn.coral.ru/content/cms/russia/insider-bclass-banner/banner.png" alt="Бизнес-класс доступен, как никогда" />
	<img class="mobile" src="https://cdn.coral.ru/content/cms/russia/insider-bclass-banner/banner_mobile.png" alt="Бизнес-класс доступен, как никогда" />
</div>`,
	styles: `
    <style>
	@charset "UTF-8";
	@media screen and (max-width: 768px) {
		.desktop {
			display: none !important;
		}
	}

	.mobile {
		width: 100%;
	}
	@media screen and (min-width: 769px) {
		.mobile {
			display: none !important;
		}
	}

	.business-class-banner {
		margin-bottom: 2rem;
	}

	.business-class-color {
		color: #f0ab00;
	}

	.business-class-mobile::before {
		content: "Бизнес-класс ";
		color: #f0ab00;
	}

	.economy-class-mobile::before {
		content: "Эконом класс ";
	}
</style>`,
};
const head = document.querySelector("head");
head.insertAdjacentHTML("beforeend", html.styles);
const flightsWrapper = document.querySelector(".flight-list-wrapper");
const allFlights = flightsWrapper.querySelectorAll(".ticket");
const startDate = new Date("09.03.2022");

// Начальные дефолтные данные
const flightDateData = document.querySelector(".hotel-info").firstElementChild.lastElementChild.innerText.split(" ")[2].split(".");
const currentFlightDate = new Date(`${flightDateData[1]}.${flightDateData[0]}.${flightDateData[2]}`);

// Необходимые данные ждут инициализации
let egypt, egyptAir, flightDate, businessClass;

// Перебор всех "перелетов"
allFlights.forEach((flight) => {
	// Класс перелета
	const flightClassData = flight.dataset.class;
	// В какую страну летит
	const flightToCountry = JSON.parse(flight.querySelector(".btn-select-flight").dataset.layerItem).DirectFlight[0].ToCountryLName;
	// Авиакомпания
	const airCompany = flight.querySelector(".airline").querySelector(".flight-title").textContent;

	// Инициализация необходимых данных
	flightClassData === "Business" ? (businessClass = true) : (businessClass = false);
	flightToCountry === "Египет" ? (egypt = true) : (egypt = false);
	airCompany === "Egyptair" ? (egyptAir = true) : (egyptAir = false);
	startDate <= currentFlightDate ? (flightDate = true) : (flightDate = false);

	// Если все совпадает - идет стилизация и добавление баннера (Десктоп отдельно, мобайл отдельно)
	if (businessClass && egypt && flightToCountry && airCompany && startDate) {
		if (window.innerWidth > 1006) {
			const dataWrapper = flight.querySelector(".ticket-inner").firstElementChild;
			const firstFlight = dataWrapper.querySelector(".outbound");
			const secondFlight = dataWrapper.querySelector(".return");
			const businessSpanFirst = firstFlight.querySelector(".flight-info").firstElementChild;
			const businessSpanSecond = secondFlight.querySelector(".flight-info").firstElementChild;
			businessSpanFirst.classList.add("business-class-color");
			businessSpanSecond.classList.add("business-class-color");
			if (!document.querySelector(".business-class-banner")) {
				allFlights[0].insertAdjacentHTML("afterend", html.layout);
			}
		} else {
			const dataWrapper = flight.querySelector(".ticket-inner").lastElementChild;
			const flightFrom = dataWrapper.querySelector(".flight-title");
			flightFrom.classList.add("business-class-mobile");
			if (!document.querySelector(".business-class-banner")) {
				allFlights[0].insertAdjacentHTML("afterend", html.layout);
			}
		}
	} else {
		if (window.innerWidth > 1006) {
			if (businessClass) {
				const dataWrapper = flight.querySelector(".ticket-inner").firstElementChild;
				const firstFlight = dataWrapper.querySelector(".outbound");
				const secondFlight = dataWrapper.querySelector(".return");
				const businessSpanFirst = firstFlight.querySelector(".flight-info").firstElementChild;
				const businessSpanSecond = secondFlight.querySelector(".flight-info").firstElementChild;
				businessSpanFirst.classList.add("business-class-color");
				businessSpanSecond.classList.add("business-class-color");
			}
		} else {
			if (!businessClass) {
				const dataWrapper = flight.querySelector(".ticket-inner").lastElementChild;
				const flightFrom = dataWrapper.querySelector(".flight-title");
				flightFrom.classList.add("economy-class-mobile");
			} else {
				const dataWrapper = flight.querySelector(".ticket-inner").lastElementChild;
				const flightFrom = dataWrapper.querySelector(".flight-title");
				flightFrom.classList.add("business-class-mobile");
			}
		}
	}
});
