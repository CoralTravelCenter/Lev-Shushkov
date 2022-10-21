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
	background: #3d80b2 !important;
  }
  
  .day__background_max {
	border-top: 3px solid #be0027;
  }
  
  .day__background_min {
	border-top: 3px solid #00aa6f;
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
	color: #be0027 !important;
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
	border-top: 1px dashed #00aa6f;
	position: absolute;
	z-index: 3;
	font-weight: 700;
	font-size: 10px;
	line-height: 100%;
	text-align: left;
	color: #00aa6f;
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
	border-bottom: 1px dashed #be0027;
	position: absolute;
	z-index: 3;
	font-weight: 700;
	font-size: 10px;
	line-height: 100%;
	text-align: left;
	color: #be0027;
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

const observerConfig = {
	childList: true,
};

const observer = new MutationObserver(callback);

function callback(mutationsList, observer) {
	for (let mutation of mutationsList) {
		if (mutation.type === "childList") {
			if (!roomList.querySelector(".calendar-buttons")) {
				calendar();
			}
		}
	}
}

function calendar() {
	const searchParams = new URLSearchParams(window.location.search);
	const q = JSON.parse(searchParams.get("q"));
	const rooms = roomList.querySelectorAll(".room");
	const buttons = `<div class="calendar-buttons"><img class="calendar-ico" src="https://cdn.coral.ru/content/cms/russia/insider-calendar/calendar-ico-sunmar.png"><button class="calendar-button_visible" data-action="calendar">Календарь цен</button><button class="calendar-button_hidden">Закрыть</button></div>`;
	const calendarWrapper = `<div class="roompanel w-100"></div>`;
	const preloaderLayout = `<div class="calendar-loader"><div class="calendar-loader__img-wrapper"><img class="calendar-loader__loader" src="https://cdn.coral.ru/content/cms/russia/insider-calendar/loader.png"></div><span class="calendar-loader__title">...загружаем цены</span></div>`;
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

	rooms.forEach((room) => {
		const variant = room.querySelectorAll(".variant");
		variant.forEach((meal) => {
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

	const openCalendar = (url, room, currentRoomButton, currentCloseButton, mealName) => {
		room.classList.add("calenderappended");
		room.insertAdjacentHTML("beforeEnd", calendarWrapper);
		currentCloseButton.classList.add("active");
		currentRoomButton.classList.add("active");
		currentRoomButton.classList.add("calendar-button_hidden");
		currentRoomButton.classList.remove("calendar-button_visible");
		currentCloseButton.classList.add("calendar-button_visible");
		currentCloseButton.classList.remove("calendar-button_hidden");

		preloader(true, room);
		initialData(url, room, mealName);
	};

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

	const initialData = (url, room, mealName) => {
		fetch(url, {
			method: "GET",
		})
			.then(checkResponse)
			.then((res) => {
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

	function preloader(active, room) {
		const roompanel = room.querySelector(".roompanel");
		if (active) {
			roompanel.insertAdjacentHTML("beforeend", preloaderLayout);
		} else {
			removeNode(roompanel.querySelector(".calendar-loader"));
		}
	}

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
		if (!allDays[0].classList.contains("monthbegins")) {
			allDaysContainer.insertAdjacentHTML("afterbegin", monthSeparatorLayout);
		}

		calendarTitle.classList.add("calendar__title");
		calendarTitle.textContent = `Календарь цен \u2014 ${mealName.textContent}`;

		calendarWrapper.insertAdjacentHTML("afterbegin", leftArrowLayout);
		calendarWrapper.insertAdjacentHTML("beforeend", rightArrowLayout);
		calendarWrapper.insertAdjacentHTML("afterbegin", minMaxAverageLayout);

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

		for (let i = 0; i < allDays.length; i++) {
			day = allDays[i];
			const divs = day.querySelectorAll("div");
			day.classList.add("day");

			if (divs.length > 0) {
				day.firstElementChild.classList.add("day__wrapper");
				divs[2].classList.add("day__title");
			}

			if (day.classList.contains("monthbegins")) {
				day.classList.add("month-separator");
				day.querySelector("abbr").classList.add("month-separator__title");
				if (i === 0) {
					day.nextElementSibling.insertAdjacentHTML("beforeend", dayBorderLayout);
					day.nextElementSibling.querySelector(".day__border").classList.add("day__border-first");
				} else {
					day.previousElementSibling.querySelector(".day__border").classList.add("day__border-last");
					day.nextElementSibling.insertAdjacentHTML("beforeend", dayBorderLayout);
					day.nextElementSibling.querySelector(".day__border").classList.add("day__border-first");
				}
			} else {
				if (!day.querySelector(".day__border")) {
					day.insertAdjacentHTML("beforeend", dayBorderLayout);
				}
			}
			if (day === allDays[1]) {
				day.querySelector(".day__border").classList.add("day__border-first");
			}
			if (day === allDays[allDays.length - 1]) {
				day.querySelector(".day__border").classList.add("day__border-last");
			}
		}

		const dayWrappers = allDaysContainer.querySelectorAll(".day__wrapper");

		dayWrappers.forEach((wrapper) => {
			let span = wrapper.querySelector("span");
			span.insertAdjacentHTML("beforeBegin", dayLinkLayout);
			const dayLink = wrapper.querySelector(".day__link");
			removeNode(span);
			dayLink.insertAdjacentElement("beforeEnd", span);
			span = wrapper.querySelector("span");
			if (span.style.height !== "0%") {
				dayLink.href = createLink(span);
				dayLink.target = "_blank";
			}
			const prevTitle = span.getAttribute("title").split(" ");
			const newTitle = `${prevTitle[1].substring(0, prevTitle[1].length - 1)} ${prevTitle[0]}, от ${Math.round(parseFloat(prevTitle[3]))} ₽`;
			span.title = newTitle;
		});

		const allColumns = allDaysContainer.querySelectorAll("span");
		const allSeparators = allDaysContainer.querySelectorAll(".month-separator");
		const firstMonthTitle = allSeparators[0].querySelector(".month-separator__title");
		const secondMonthTitle = allSeparators[1].querySelector(".month-separator__title");

		for (let i = 0; i < months.length; i++) {
			if (months[0] === secondMonthTitle.textContent) {
				firstMonthTitle.textContent = months[months.length - 1];
			}
			if (months[i] === secondMonthTitle.textContent) {
				firstMonthTitle.textContent = months[i - 1];
			}
		}

		flightsAvailable.forEach((item) => {
			removeNode(item);
		});
		allColumns[0].classList.add("day__background_first");

		allColumns.forEach((column) => {
			column.classList.add("day__background");
			if (column.classList.contains("d-none") && column.style.height !== "0%") {
				column.classList.remove("d-none");
			}
		});

		removeNode(calendarFooter);
		removeNode(leftSide);
		getPrices(allColumns);
		getPercents(allColumns);
		setWeekDays(allDaysContainer);
		setDaysLights(allColumns);

		if (getMax(percents) - getAvarage(percents) < 6) {
			averagePriceLine.style.display = "none";
		}
		minimalPriceLine.textContent = `${getMin(prices).toLocaleString("ru")} ₽`;
		minimalPriceLine.style.bottom = `calc(${getMin(percents)}% - 6px)`;
		averagePriceLine.textContent = `${getAvarage(prices).toLocaleString("ru")} ₽`;
		averagePriceLine.style.bottom = `${getAvarage(percents)}%`;
		maxPriceLine.textContent = `${getMax(prices).toLocaleString("ru")} ₽`;
		maxPriceLine.style.bottom = `${getMax(percents)}%`;

		secondWrapper.classList.remove("calendar__styling");
		preloader(false, room);

		function createLink(date) {
			const dateInfo = date.getAttribute("title").split(" ");
			const neededMonth = dateInfo[0];
			let neededDay = dateInfo[1].substring(0, dateInfo[1].length - 1);
			let neededMonthIndex = "";

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
			if (currentYear === datePieces[2]) {
				if (prevMonthIndex === 12) {
					currentYear = `${parseFloat(currentYear) + 1}`;
				}
			}
			if (neededDay.length < 2) {
				neededDay = `0${neededDay}`;
			}
			if (neededMonthIndex.length < 2) {
				neededMonthIndex = `0${neededMonthIndex}`;
			}

			const newUrl = new URLSearchParams();
			q.Bgn = `${neededDay}.${neededMonthIndex}.${currentYear}`;
			q.End = `${neededDay}.${neededMonthIndex}.${currentYear}`;
			newUrl.set("q", JSON.stringify(q));

			return `${window.location.origin}${window.location.pathname}?${newUrl.toString()}`;
		}

		function setWeekDays(allDaysContainer) {
			let prevMonth = "";
			let currentMonth = "";
			let currentDay = 0;
			let currentYear = datePieces[2];
			let weekDay;

			const allDays = allDaysContainer.querySelectorAll(".day");
			allDays.forEach((item) => {
				if (item.classList.contains("monthbegins")) {
					currentMonth = item.querySelector("abbr").textContent;
					if (currentMonth === "Январь") {
						prevMonth = "Декабрь";
					}
				} else {
					currentDay = item.querySelector(".day__title").textContent;
					item.insertAdjacentHTML("beforeend", weekDayLayout);
					weekDay = getWeekDay(currentYear, currentMonth, currentDay);
					item.querySelector(".day__week-day").textContent = weekDay;
					if (item.querySelector(".day__week-day").textContent === "сб" || item.querySelector(".day__week-day").textContent === "вс") {
						item.querySelector(".day__week-day").classList.add("day__week-day_weekend");
					}
				}
			});
		}

		function getWeekDay(currentYear, currentMonth, currentDay) {
			let currentMonthIndex = 0;
			let date;
			if (currentMonth === "") {
				date = new Date(`${currentYear}`, `${datePieces[1] - 1}`, `${currentDay}`);
			} else {
				while (currentMonthIndex < months.length) {
					if (months[currentMonthIndex] === `${currentMonth}`) {
						break;
					}
					currentMonthIndex++;
				}
				date = new Date(`${currentYear}`, `${currentMonthIndex}`, `${currentDay}`);
			}

			const weekDay = weekDays[date.getDay()];
			return weekDay;
		}

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
