const body = document.querySelector("body");
const styles = `<style>

.calendar__title {
	margin-top: 16px !important;
	margin-bottom: 22px !important;
	font-weight: 700;
	font-size: 15px;
	line-height: 1;
  }
  
  .pricecalendarwrapper {
	max-height: 100%;
	visibility: visible;
	opacity: 1;
	pointer-events: auto;
	transition: 0.3s;
  }
  .pricecalendarwrapper .container {
	overflow: visible !important;
  }
  
  .calendar__styling {
	max-height: 0;
	visibility: hidden;
	opacity: 0;
	pointer-events: none;
	transition: 0.3s;
  }
  
  .roompanel {
	border-top: 4px solid #e8e9ec !important;
	position: relative !important;
	transition: 0.3s;
  }
  .roompanel::before {
	content: "";
	width: 0;
	height: 0;
	border-style: solid;
	border-width: 14px 12.5px 0 12.5px;
	border-color: #e8e9ec transparent transparent transparent;
	top: 0;
	z-index: 3;
	left: calc(50% - 12.5px);
	position: absolute;
  }
  
  .datescontainer {
	flex-grow: unset !important;
	overflow: hidden !important;
	width: calc(100% - 114px);
	margin: 0 auto;
  }
  @media screen and (max-width: 1006px) {
	.datescontainer {
	  width: calc(100% - 60px) !important;
	  overflow-x: scroll !important;
	  margin: 0 0 0 auto;
	  padding-bottom: 5px;
	}
  }
  
  .calendar-loader {
	display: flex;
	justify-content: center;
	align-items: center;
  }
  
  .calendar-loader__img-wrapper {
	position: relative;
  }
  
  .calendar-loader__loader {
	max-width: 23px;
	-webkit-animation: rotation infinite;
			animation: rotation infinite;
	-webkit-animation-duration: 3s;
			animation-duration: 3s;
	-webkit-animation-fill-mode: both;
			animation-fill-mode: both;
  }
  
  @-webkit-keyframes rotation {
	0% {
	  transform: rotate(0);
	}
	100% {
	  transform: rotate(365deg);
	}
  }
  
  @keyframes rotation {
	0% {
	  transform: rotate(0);
	}
	100% {
	  transform: rotate(365deg);
	}
  }
  .calendar-loader__logo {
	width: 17px;
	position: absolute;
	top: calc(50% - 8.5px);
	left: calc(50% - 8.5px);
  }
  
  .calendar-loader__title {
	font-weight: 500;
	font-size: 12px;
	line-height: 100%;
	color: #000000;
	margin-left: 5px;
  }
  
  .datesinner {
	flex-grow: unset !important;
	padding: 0 !important;
	margin: 0;
	transition: 0.5s;
  }
  
  @-webkit-keyframes growing {
	0% {
	  transform: translateY(100%);
	}
	100% {
	  transform: translateY(0);
	}
  }
  
  @keyframes growing {
	0% {
	  transform: translateY(100%);
	}
	100% {
	  transform: translateY(0);
	}
  }
  .day__background {
	transform: translateY(100%);
	background: #ebebeb !important;
	width: 20px !important;
	margin: 0 auto;
	transition: 0.3s;
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
	-webkit-animation: growing;
			animation: growing;
	-webkit-animation-duration: 1.5s;
			animation-duration: 1.5s;
	-webkit-animation-fill-mode: both;
			animation-fill-mode: both;
	-webkit-animation-iteration-count: 1;
			animation-iteration-count: 1;
  }
  .day__background:hover {
	transition: 0.3s;
	background: #cbcbcb !important;
  }
  
  .day__background_first {
	background: #fbb200 !important;
  }
  
  .day__background_max {
	border-top: 3px solid #e2320f;
  }
  
  .day__background_min {
	border-top: 3px solid #a7ad00;
  }
  
  .day__link {
	width: inherit;
	display: inherit;
	height: inherit;
	justify-content: inherit;
	align-items: inherit;
  }
  
  .day__wrapper {
	width: 28px !important;
	background: #ffffff !important;
	margin-bottom: 0 !important;
	margin-top: 0 !important;
	flex-grow: unset !important;
	border-bottom: 1px solid #ebebeb;
  }
  
  .day {
	top: unset !important;
	width: 28px !important;
	flex-grow: unset !important;
	align-items: center !important;
	padding-bottom: 15px;
  }
  .day::after {
	content: unset !important;
  }
  
  .day__title {
	width: auto !important;
	height: auto !important;
	font-weight: 500;
	font-size: 15px !important;
	line-height: 1;
	text-align: center;
	color: #4a4a4a;
	padding: 2px 0 2px 0;
  }
  .day__title::before {
	content: unset !important;
  }
  
  .day__week-day {
	font-weight: 500;
	font-size: 10px;
	line-height: 100%;
	text-align: center;
	color: #9b9b9b;
	margin-top: -2px;
  }
  
  .month-separator {
	width: 0 !important;
	margin: 0 !important;
	min-width: 0 !important;
  }
  
  .month-separator__title {
	bottom: 3px;
	top: unset !important;
	z-index: 2;
	left: 10px !important;
	font-weight: 700;
	font-size: 10px !important;
	line-height: 1;
	text-align: right;
	color: #4a4a4a;
  }
  
  .day__week-day_weekend {
	color: #e2320f !important;
  }
  
  .day__border {
	width: 100%;
	height: 30px;
	position: absolute;
	border-bottom: 1px solid #ebebeb;
	bottom: 0px;
	left: 0;
  }
  
  .day__border-first {
	border-left: 1px solid #ebebeb;
	margin-left: 2px;
  }
  
  .day__border-last {
	border-right: 1px solid #ebebeb;
	margin-right: 2px;
  }
  
  .calendar-price {
	width: 100%;
	height: 160px;
	position: absolute;
	bottom: 20%;
	-webkit-animation: growing;
			animation: growing;
	-webkit-animation-duration: 1.5s;
			animation-duration: 1.5s;
	-webkit-animation-fill-mode: both;
			animation-fill-mode: both;
	-webkit-animation-iteration-count: 1;
			animation-iteration-count: 1;
	z-index: 3;
	pointer-events: none;
  }
  @media screen and (max-width: 1006px) {
	.calendar-price {
	  margin-bottom: 5px;
	}
  }
  
  .calendar-price__min {
	width: 100%;
	height: 0;
	border-top: 1px dashed #a7ad00;
	position: absolute;
	z-index: 3;
	font-weight: 700;
	font-size: 10px;
	line-height: 100%;
	text-align: left;
	color: #a7ad00;
	padding: 0 0 5px 5px;
  }
  
  .calendar-price__average {
	width: 100%;
	height: 0;
	border-bottom: 1px solid #ebebeb;
	position: absolute;
	z-index: 3;
	font-weight: 700;
	font-size: 10px;
	line-height: 100%;
	text-align: left;
	color: #9b9b9b;
	padding: 0 0 10px 5px;
  }
  
  .calendar-price__max {
	width: 100%;
	height: 0;
	border-bottom: 1px dashed #e2320f;
	position: absolute;
	z-index: 3;
	font-weight: 700;
	font-size: 10px;
	line-height: 100%;
	text-align: left;
	color: #e2320f;
	padding: 0 0 10px 5px;
  }
  
  .arrow {
	align-self: flex-end;
	cursor: pointer;
  }
  
  .arrow_disabled {
	cursor: auto;
	opacity: 0;
  }
  
  .arrow__left {
	width: 0;
	height: 0;
	border-style: solid;
	border-width: 20px 22px 20px 0;
	border-color: transparent #e8e9ec transparent transparent;
	margin-right: 27px;
	transition: 0.3s;
  }
  .arrow__left:hover {
	transition: 0.3s;
	border-color: transparent #cbcbcb transparent transparent;
  }
  
  .arrow__right {
	width: 0;
	height: 0;
	border-style: solid;
	border-width: 20px 0 20px 22px;
	border-color: transparent transparent transparent #e8e9ec;
	margin-left: 27px;
	transition: 0.3s;
  }
  .arrow__right:hover {
	transition: 0.3s;
	border-color: transparent transparent transparent #cbcbcb;
  }
  
  .calendar-button_hidden {
	display: none !important;
  }
  
  .calendar-button_visible {
	display: flex !important;
	align-self: flex-end;
	margin-top: 3px;
	cursor: pointer;
	justify-content: center;
	align-items: center;
	font-weight: 700;
	font-size: 10px;
	line-height: 100%;
	text-align: right;
	-webkit-text-decoration-line: underline;
			text-decoration-line: underline;
	color: #4a4a4a;
	background: none;
	border: none;
	padding: 0;
  }
  
  .calendar-ico {
	max-width: 22px;
  }
  
  .calendar-buttons {
	flex-direction: column !important;
	align-items: flex-end !important;
	margin-top: 5px;
  }

<style/>`;
body.insertAdjacentHTML("afterbegin", styles);

const roomList = document.querySelector(".roomlist_new");

// Обзервер следит за изменениями в списке номеров конкретного отеля (с которым идет взаимодействие)
const observerConfig = {
	childList: true,
};

const observer = new MutationObserver(mutationObserver);

function mutationObserver(mutationsList, observer) {
	for (let mutation of mutationsList) {
		if (mutation.type === "childList") {
			if (!roomList.querySelector(".calendar-buttons")) {
				calendar();
			}
		}
	}
}

function calendar() {
	// Изначально необходимые данные и верстка
	const searchParams = new URLSearchParams(window.location.search);
	const q = JSON.parse(searchParams.get("q"));
	const rooms = roomList.querySelectorAll(".room");
	const buttons = `<div class="calendar-buttons"><img class="calendar-ico" src="https://cdn.coral.ru/content/cms/russia/insider-calendar/calendar-ico.png"><button class="calendar-button_visible" data-action="calendar">Календарь цен</button><button class="calendar-button_hidden">Закрыть</button></div>`;
	const calendarWrapper = `<div class="roompanel w-100"></div>`;
	const preloaderLayout = `<div class="calendar-loader"><div class="calendar-loader__img-wrapper"><img class="calendar-loader__loader" src="https://cdn.coral.ru/content/cms/russia/insider-calendar/loader.png"><img class="calendar-loader__logo" src="https://cdn.coral.ru/content/cms/russia/insider-calendar/logo.png"></div><span class="calendar-loader__title">...загружаем цены</span></div>`;
	const dayBorderLayout = `<div class="day__border"></div>`;
	const leftArrowLayout = `<div class="arrow arrow__left arrow_disabled"><div/>`;
	const rightArrowLayout = `<div class="arrow arrow__right"><div/>`;
	const weekDayLayout = `<span class="day__week-day"></span>`;
	const dayLinkLayout = `<a class="day__link"></a>`;
	const minMaxAverageLayout = `<div class="calendar-price"><span class="calendar-price__min"></span><span class="calendar-price__average"></span><span class="calendar-price__max"></span></div>`;
	const monthSeparatorLayout = `<div class="monthbegins"><abbr class="month-separator__title"></abbr></div>`;
	const weekDays = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
	const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
	let resLayout;

	// Обход всех номеров(комнат) в отеле
	rooms.forEach((room) => {
		const variant = room.querySelectorAll(".variant");
		// В каждой комнате нужно обойти все типы питания
		variant.forEach((meal) => {
			// Инициализация первичных данных по комнате и вставка кнопки календаря
			const mealName = meal.querySelector(".m-meal-name");
			const buttonsContainer = meal.firstElementChild;
			buttonsContainer.insertAdjacentHTML("beforeEnd", buttons);
			const buttonsWrapper = meal.querySelector(".calendar-buttons");
			const roomId = room.getAttribute("data-roomid");
			const mealId = meal.getAttribute("data-mealid");
			const nights = roomList.lastElementChild.getAttribute("data-night");
			const currentRoomButton = buttonsWrapper.querySelector(".calendar-button_visible");
			const currentCloseButton = buttonsWrapper.querySelector(".calendar-button_hidden");
			const url = `${window.location.origin}/v1/hoteldetail/getpricecalendar?RoomId=${roomId}&MealId=${mealId}&night=${nights}`;

			// Обработчик событий для кнопки календаря
			currentRoomButton.addEventListener("click", function () {
				if (room.classList.contains("calenderappended")) {
					removeNode(room.querySelector(".roompanel"));
					room.classList.remove("calendarappended");
					const activeButtons = room.querySelectorAll(".active");
					activeButtons.forEach((btn) => {
						btn.classList.remove("active");
						btn.classList.toggle("calendar-button_hidden");
						btn.classList.toggle("calendar-button_visible");
					});
				}
				openCalendar(url, room, currentRoomButton, currentCloseButton, mealName);
			});
			currentCloseButton.addEventListener("click", function () {
				closeCalendar(room, currentRoomButton, currentCloseButton);
			});
		});
		// observer.observe(room.querySelector(".content"), observerConfig);
	});

	// Открытие календаря
	const openCalendar = (url, room, currentRoomButton, currentCloseButton, mealName) => {
		room.classList.add("calenderappended");
		room.insertAdjacentHTML("beforeEnd", calendarWrapper);
		currentCloseButton.classList.add("active");
		currentRoomButton.classList.add("active");
		currentRoomButton.classList.add("calendar-button_hidden");
		currentRoomButton.classList.remove("calendar-button_visible");
		currentCloseButton.classList.add("calendar-button_visible");
		currentCloseButton.classList.remove("calendar-button_hidden");

		// preloader(true, room);
		initialData(url, room, mealName);
	};

	// Закрытие календаря и очистка верстки от него
	const closeCalendar = (room, currentRoomButton, currentCloseButton) => {
		currentRoomButton.classList.remove("active");
		currentCloseButton.classList.remove("active");
		currentRoomButton.classList.remove("calendar-button_hidden");
		currentCloseButton.classList.add("calendar-button_hidden");
		currentRoomButton.classList.add("calendar-button_visible");
		currentCloseButton.classList.remove("calendar-button_visible");
		room.classList.remove("calenderappended");
		const calendar = room.querySelector(".roompanel");
		if (calendar) {
			removeNode(calendar);
		}
	};

	// Получние верстки календаря и запуск стилизации
	const initialData = (url, room, mealName) => {
		fetch(url, {
			method: "GET",
		})
			.then(checkResponse)
			.then((res) => {
				// Если календарь открыт или место под него занято - очистка верстки
				if (room.querySelector(".roompanel").querySelector(".pricecalendarwrapper")) {
					room.querySelector(".roompanel").remove(room.querySelector(".roompanel").querySelector(".pricecalendarwrapper"));
					resLayout = res;
					setNewStyles(room, mealName);
				} else {
					resLayout = res;
					setNewStyles(room, mealName);
				}
			})

			.catch((err) => {
				console.error(err);
			});
	};

	const checkResponse = (res) => {
		if (res.status === 200) {
			return res.text();
		}
		return Promise.reject(`Ошибка: ${res.status}`);
	};

	// Запуск и остановка прелоадера для "комнат"
	function preloader(active, room) {
		const roompanel = room.querySelector(".roompanel");
		if (active) {
			roompanel.insertAdjacentHTML("beforeend", preloaderLayout);
		} else {
			removeNode(roompanel.querySelector(".calendar-loader"));
		}
	}

	// Стилизация календаря
	function setNewStyles(room, mealName) {
		const departureDate = document.querySelector("#departureDateRangePickerInput");
		datePieces = departureDate.value.split(".");
		const prices = [];
		const percents = [];
		let day = "";
		let currentTransform = 0;
		let prevMonthIndex = 0;
		let currentYear = `${parseFloat(datePieces[2])}`;

		const calendar = room.querySelector(".roompanel");
		calendar.insertAdjacentHTML("beforeEnd", resLayout);

		const secondWrapper = calendar.querySelector(".pricecalendarwrapper");
		secondWrapper.classList.add("calendar__styling");

		const calendarTitle = calendar.querySelector("h4");
		const calendarWrapper = room.querySelector(".container");
		const calendarFooter = room.querySelector(".calendarfooter");
		const leftSide = calendarWrapper.querySelector(".y-axis");
		const allDaysContainer = room.querySelector(".datesinner");

		const flightsAvailable = allDaysContainer.querySelectorAll(".flight-available");
		const allDays = allDaysContainer.children;
		// Между месяцами вставляется сепаратор для дальнейшего разделения месяцев
		if (!allDays[0].classList.contains("monthbegins")) {
			allDaysContainer.insertAdjacentHTML("afterbegin", monthSeparatorLayout);
		}

		// Формирования тайтла календаря в зависимости от питания
		calendarTitle.classList.add("calendar__title");
		calendarTitle.textContent = `Календарь цен \u2014 ${mealName.textContent}`;

		// Вставка новой верстки
		calendarWrapper.insertAdjacentHTML("afterbegin", leftArrowLayout);
		calendarWrapper.insertAdjacentHTML("beforeend", rightArrowLayout);
		calendarWrapper.insertAdjacentHTML("afterbegin", minMaxAverageLayout);

		// Обработчик кликов для стрелок
		const arrows = calendarWrapper.querySelectorAll(".arrow");
		if (window.innerWidth > 1006) {
			arrows.forEach((arrow) => {
				arrow.addEventListener("click", function (evt) {
					slider(evt, allDaysContainer, calendarWrapper);
				});
			});
		} else {
			arrows.forEach((arrow) => {
				arrow.style.display = "none";
			});
		}

		const minimalPriceLine = calendarWrapper.querySelector(".calendar-price__min");
		const averagePriceLine = calendarWrapper.querySelector(".calendar-price__average");
		const maxPriceLine = calendarWrapper.querySelector(".calendar-price__max");

		// Проход по всем дням календаря
		for (let i = 0; i < allDays.length; i++) {
			day = allDays[i];
			const divs = day.querySelectorAll("div"); // все внутренности дня
			day.classList.add("day");

			// Определение внутренностей дня добавлением классов
			if (divs.length > 0) {
				day.firstElementChild.classList.add("day__wrapper");
				divs[2].classList.add("day__title");
			}

			// Если это разделитель то у него собственные параметры тайтла
			if (day.classList.contains("monthbegins")) {
				day.classList.add("month-separator");
				day.querySelector("abbr").classList.add("month-separator__title");

				// первый элемент - всегда сепаратор, поэтому рендерим его и добавляем левый бордер элементу справа от него
				if (i === 0) {
					day.nextElementSibling.insertAdjacentHTML("beforeend", dayBorderLayout);
					day.nextElementSibling.querySelector(".day__border").classList.add("day__border-first");
				} else {
					day.previousElementSibling.querySelector(".day__border").classList.add("day__border-last");
					day.nextElementSibling.insertAdjacentHTML("beforeend", dayBorderLayout);
					day.nextElementSibling.querySelector(".day__border").classList.add("day__border-first");
				}
			} else {
				// Для любого другого дня календаря - устанавливается бордер всегда снизу, если его все еще нет
				if (!day.querySelector(".day__border")) {
					day.insertAdjacentHTML("beforeend", dayBorderLayout);
				}
			}
			// Для первого дня календаря всегда ставится бордер слева
			if (day === allDays[1]) {
				day.querySelector(".day__border").classList.add("day__border-first");
			}
			// Для последнего дня календаря всегда ставится бордер справа
			if (day === allDays[allDays.length - 1]) {
				day.querySelector(".day__border").classList.add("day__border-last");
			}
		}

		// Все дни
		const dayWrappers = allDaysContainer.querySelectorAll(".day__wrapper");
		// Стилизация каждого дня
		dayWrappers.forEach((wrapper) => {
			// Спан - по факту и есть сам столбик и к нему добалвяем верстку линка
			let span = wrapper.querySelector("span");
			span.insertAdjacentHTML("beforeBegin", dayLinkLayout);
			const dayLink = wrapper.querySelector(".day__link");
			// Убираю спан из первоначального места разметки и рендерю в новое место
			removeNode(span);
			dayLink.insertAdjacentElement("beforeEnd", span);

			span = wrapper.querySelector("span");

			// Если высота спана не нулевая - то добалвяем ему ссылку. Нулевым ссылка не нужна
			if (span.style.height !== "0%") {
				debugger;
				dayLink.href = createLink(span);
				dayLink.target = "_blank";
			}

			const prevTitle = span.getAttribute("title").split(" "); // Изначальный атрибут title
			const newTitle = `${prevTitle[1].substring(0, prevTitle[1].length - 1)} ${prevTitle[0]}, от ${Math.round(parseFloat(prevTitle[3]))} ₽`; // Новые данные в атрибуте title
			span.title = newTitle;
		});

		const allColumns = allDaysContainer.querySelectorAll("span"); // Все дни
		const allSeparators = allDaysContainer.querySelectorAll(".month-separator"); // Все сепараторы
		const firstMonthTitle = allSeparators[0].querySelector(".month-separator__title");  // Первый месяц
		const secondMonthTitle = allSeparators[1].querySelector(".month-separator__title"); // Второй месяц

		// Установка названий месяцев
		for (let i = 0; i < months.length; i++) {
			if (months[0] === secondMonthTitle.textContent) {
				firstMonthTitle.textContent = months[months.length - 1];
			}
			if (months[i] === secondMonthTitle.textContent) {
				firstMonthTitle.textContent = months[i - 1];
			}
		}
		
		// Удаление дефолтным иконок с перелетами
		flightsAvailable.forEach((item) => {
			removeNode(item);
		});
		allColumns[0].classList.add("day__background_first");

		allColumns.forEach((column) => {
			// У всех колонок меняется бекграунд
			column.classList.add("day__background");
			// Скрытые колонки - делаем видимыми
			if (column.classList.contains("d-none") && column.style.height !== "0%") {
				column.classList.remove("d-none");
			}
		});

		// Вспомогательные стилизующие функции
		removeNode(calendarFooter);
		removeNode(leftSide);
		getPrices(allColumns);
		getPercents(allColumns);
		setWeekDays(allDaysContainer);
		setDaysLights(allColumns);

		// Полоса со средним значением скрывается если разница с максимальным значением менее 6
		if (getMax(percents) - getAvarage(percents) < 6) {
			averagePriceLine.style.display = "none";
		}

		minimalPriceLine.textContent = `${getMin(prices).toLocaleString("ru")} ₽`; // линия мин цены надпись
		minimalPriceLine.style.bottom = `calc(${getMin(percents)}% - 6px)`; // линия мин цены - высота
		averagePriceLine.textContent = `${getAvarage(prices).toLocaleString("ru")} ₽`; // линия средней цены надпись
		averagePriceLine.style.bottom = `${getAvarage(percents)}%`; // линия средней цены высота
		maxPriceLine.textContent = `${getMax(prices).toLocaleString("ru")} ₽`; // линия макс цены надпись
		maxPriceLine.style.bottom = `${getMax(percents)}%`; // линия макс цены высота

		secondWrapper.classList.remove("calendar__styling");
		preloader(false, room);

		// Генерация урла для столбца
		function createLink(date) {
			// указанный месяц в этом дне
			const dateInfo = date.getAttribute("title").split(" "); 
			// Необходимый месяц
			const neededMonth = dateInfo[0];
			// Необходимый день
			let neededDay = dateInfo[1].substring(0, dateInfo[1].length - 1);
			// Индекс месяца ожидется
			let neededMonthIndex = "";

			// Получаем предыдущий месяц
			for (let i = 1; i <= months.length; i++) {
				if (months[i - 1] === neededMonth) {
					neededMonthIndex = `${i}`;
					prevMonthIndex = i - 1;
					if (prevMonthIndex < 1) {
						prevMonthIndex = 12;
					}
					break;
				}
			}

			// Если предыдущий месяц имеет индекс 12, т.е. декабрь, то год меняется на следующий
			if (currentYear === datePieces[2]) {
				if (prevMonthIndex === 12) {
					currentYear = `${parseFloat(currentYear) + 1}`;
				}
			}
			// Фикс нумерации дней, чтобы было 2 цифры всегда
			if (neededDay.length < 2) {
				neededDay = `0${neededDay}`;
			}
			// Фикс нумерации месяцев чтобы всегда было 2 цифры
			if (neededMonthIndex.length < 2) {
				neededMonthIndex = `0${neededMonthIndex}`;
			}

			// Генерация нового урла с параметрами даты текущего дня
			const newUrl = new URLSearchParams();
			q.Bgn = `${neededDay}.${neededMonthIndex}.${currentYear}`;
			q.End = `${neededDay}.${neededMonthIndex}.${currentYear}`;
			newUrl.set("q", JSON.stringify(q));

			return `${window.location.origin}${window.location.pathname}?${newUrl.toString()}`;
		}

		// Установка дней недели
		function setWeekDays(allDaysContainer) {
			let prevMonth = "";
			let currentMonth = "";
			let currentDay = 0;
			let currentYear = datePieces[2];
			let weekDay;

			// Перебираем все дни календаря
			const allDays = allDaysContainer.querySelectorAll(".day");
			allDays.forEach((item) => {
				// Если это разделитель то инициализируем текущий месяц
				if (item.classList.contains("monthbegins")) {
					currentMonth = item.querySelector("abbr").textContent;
					// Если текущий месяц январь, то предыдущий определяем декабрем
					if (currentMonth === "Январь") {
						prevMonth = "Декабрь";
					}
				} else {
					// Если обычный день то инициализируем число месяца и день недели
					currentDay = item.querySelector(".day__title").textContent;
					item.insertAdjacentHTML("beforeend", weekDayLayout);
					weekDay = getWeekDay(currentYear, currentMonth, currentDay);
					item.querySelector(".day__week-day").textContent = weekDay;
					// сб и вс выделяется красным цветом 
					if (item.querySelector(".day__week-day").textContent === "сб" || item.querySelector(".day__week-day").textContent === "вс") {
						item.querySelector(".day__week-day").classList.add("day__week-day_weekend");
					}
				}
			});
		}

		// Получение конкретного дня недели
		function getWeekDay(currentYear, currentMonth, currentDay) {
			// Индекс текущего месяца и полная дата ожидают инициализации
			let currentMonthIndex = 0;
			let date;

			// Если текущий месяц не передан (в этом случае передается пустая строка), то дата собирается из переданного дня, года и изначального месяца указанного в текущем дне
			if (currentMonth === "") {
				date = new Date(`${currentYear}`, `${datePieces[1] - 1}`, `${currentDay}`);
			} else {
				// Если месяц передан, то подбирается индекс этого месяца из массива месяцев months
				while (currentMonthIndex < months.length) {
					if (months[currentMonthIndex] === `${currentMonth}`) {
						break;
					}
					currentMonthIndex++;
				}
				// Далее собирается полная дата
				date = new Date(`${currentYear}`, `${currentMonthIndex}`, `${currentDay}`);
			}
			// Инициализируется день недели из собранной даты 
			const weekDay = weekDays[date.getDay()];
			return weekDay;
		}

		// Собираются данные по высоте столбиков (style.height в процентах)
		function getPercents(arr) {
			arr.forEach((dayData) => {
				const percentData = dayData.style.height;
				const percent = percentData.substring(0, percentData.length - 1);
				dayData.classList.remove("bg-danger");
				dayData.classList.remove("bg-info");
				dayData.classList.remove("bg-warning");
				if (percent !== "0") {
					percents.push(parseFloat(percent));
				}
			});
		}

		// Подставляются "шапки" столбикам с минимальной ценой и макс ценой
		function setDaysLights(days) {
			const minPercent = getMin(percents);
			const maxPercent = getMax(percents);
			days.forEach((day) => {
				const percentData = day.style.height;
				const percent = percentData.substring(0, percentData.length - 1);
				if (percent - minPercent < 5 && percent - minPercent >= 0) {
					day.classList.add("day__background_min");
				}
				if (maxPercent - percent < 5 && maxPercent - percent >= 0) {
					day.classList.add("day__background_max");
				}
			});
		}

		// Из дефолтного атрибута title в каждом дне вделяется стоимость этого дня
		function getPrices(arr) {
			arr.forEach((dayData) => {
				const priceData = dayData.getAttribute("title").split(" ");
				const price = priceData[3];
				if (price !== "0") {
					prices.push(parseFloat(price));
				}
			});
		}

		function getMax(arr) {
			return Math.max.apply(null, arr);
		}

		function getAvarage(arr) {
			let sum = 0;
			for (let i = 0; i < arr.length; i++) {
				sum = sum + arr[i];
			}
			return Math.floor(sum / arr.length);
		}

		function getMin(arr) {
			return Math.min.apply(null, arr);
		}

		// Управление прокруткой календаря влево-вправо (трансформы прописаны по брейкпоинтам)
		function slider(evt, container, wrapper) {
			const leftArrow = wrapper.querySelector(".arrow__left");
			const rightArrow = wrapper.querySelector(".arrow__right");

			if (evt.target.classList.contains("arrow__right")) {
				currentTransform = currentTransform - 200;
			}

			if (evt.target.classList.contains("arrow__left")) {
				currentTransform = currentTransform + 200;
			}

			if (currentTransform > 0) {
				currentTransform = 0;
			}
			if (window.innerWidth > 1439) {
				if (currentTransform < -815) {
					currentTransform = -815;
				}
				if (currentTransform <= -814) {
					rightArrow.classList.add("arrow_disabled");
				} else {
					rightArrow.classList.remove("arrow_disabled");
				}
			}
			if (window.innerWidth < 1440) {
				if (currentTransform < -996) {
					currentTransform = -996;
				}
				if (currentTransform <= -995) {
					rightArrow.classList.add("arrow_disabled");
				} else {
					rightArrow.classList.remove("arrow_disabled");
				}
			}
			if (window.innerWidth < 1350) {
				if (currentTransform < -995) {
					currentTransform = -995;
				}
				if (currentTransform <= -994) {
					rightArrow.classList.add("arrow_disabled");
				} else {
					rightArrow.classList.remove("arrow_disabled");
				}
			}
			if (window.innerWidth < 1200) {
				if (currentTransform < -974) {
					currentTransform = -974;
				}
				if (currentTransform <= -973) {
					rightArrow.classList.add("arrow_disabled");
				} else {
					rightArrow.classList.remove("arrow_disabled");
				}
			}
			if (window.innerWidth < 1007) {
				if (currentTransform < -1111) {
					currentTransform = -1111;
				}
				if (currentTransform <= -1110) {
					rightArrow.classList.add("arrow_disabled");
				} else {
					rightArrow.classList.remove("arrow_disabled");
				}
			}
			if (currentTransform >= 0) {
				leftArrow.classList.add("arrow_disabled");
			} else {
				leftArrow.classList.remove("arrow_disabled");
			}

			container.style.transform = `translateX(${currentTransform}px)`;
		}
	}

	function removeNode(element) {
		element.remove();
	}
}
calendar();
observer.observe(roomList, observerConfig);
