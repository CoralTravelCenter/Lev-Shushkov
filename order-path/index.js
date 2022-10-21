const data = {
	arrows: {
		tag: `<img src="" class="crumb-arrow-ico">`,
		srcActive: "https://cdn.coral.ru/content/insider/russia/order-path/arrow_active.png",
		srcDeactive: "https://cdn.coral.ru/content/insider/russia/order-path/arrow_deactive.png",
	},
	stepsImgs: {
		tag: `<img src="" class="crumb-step-ico">`,
		first: "https://cdn.coral.ru/content/insider/russia/order-path/step_01.gif",
		second: "https://cdn.coral.ru/content/insider/russia/order-path/step_02.gif",
		secondEnd: `https://cdn.coral.ru/content/insider/russia/order-path/step_02_fin.gif`,
		third: "https://cdn.coral.ru/content/insider/russia/order-path/step_03.gif",
		fourth: "https://cdn.coral.ru/content/insider/russia/order-path/step_04.gif",
	},
	stepsIcons: {
		first: `<div class="breadcrumb-item__step">1</div>`,
		second: `<div class="breadcrumb-item__step">2</div>`,
		third: `<div class="breadcrumb-item__step">3</div>`,
		fourth: `<div class="breadcrumb-item__step">4</div>`,
	},
	styles: {
		common: `
		<style>
		.background {
			display: none !important;
		  }
		  
		  .container-tabItemWrap {
			background: #fff;
		  }
		  
		  .bcrumb .breadcrumb {
			gap: 10px;
		  }
		  .bcrumb .breadcrumb-item.active:after {
			content: none !important;
		  }
		  .bcrumb .breadcrumb-item:before {
			content: none !important;
		  }
		  
		  @media screen and (max-width: 575.98px) {
			.addPassenger-BaseContainer .pageTitle .title-row .title-col {
			  margin-bottom: 0 !important;
			}
		  }
		  
		  .breadcrumb-item_new-style {
			color: #000 !important;
			margin: 0 !important;
			display: flex !important;
			align-items: center;
			gap: 10px;
			line-height: 1.2 !important;
		  }
		  @media screen and (max-width: 768px) {
			.breadcrumb-item_new-style {
			  gap: 5px;
			  font-size: 10px !important;
			}
		  }
		  .breadcrumb-item_new-style a {
			color: #000 !important;
		  }
		  @media screen and (max-width: 768px) {
			.breadcrumb-item_new-style a {
			  font-size: 10px !important;
			}
		  }
		  .breadcrumb-item_new-style p {
			margin: 0 !important;
		  }
		  
		  .breadcrumb-item_new-style_active {
			color: #0193cf !important;
		  }
		  
		  .breadcrumb-item_new-style_next {
			color: #999 !important;
		  }
		  
		  .crumb-step-ico {
			border-radius: 50px;
			box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
			width: 28px;
		  }
		  @media screen and (max-width: 768px) {
			.crumb-step-ico {
			  width: 24px;
			}
		  }
		  
		  @media screen and (max-width: 768px) {
			.crumb-arrow-ico {
			  height: 24px;
			}
		  }
		  
		  .breadcrumb-item__step {
			background: #fff;
			width: 28px;
			height: 28px;
			border-radius: 50px;
			display: flex;
			justify-content: center;
			align-items: center;
			box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
		  }
		  @media screen and (max-width: 768px) {
			.breadcrumb-item__step {
			  width: 24px;
			  height: 24px;
			  letter-spacing: 0 !important;
			}
		  }
		  
		  .breadcrumb-item__step_prev {
			color: #000 !important;
		  }
		  </style>`,
	},
};


// Понимаем на какой странице находимся
const url = location.pathname;
const urlArr = url.split("/");
let step = urlArr[1];
const finalStep = urlArr[3];
const head = document.querySelector("head");
const mainWrapper = document.querySelector(".bcrumb");
const container = mainWrapper.querySelector(".breadcrumb");
const headerTabTour = document.querySelector(".tabTour");
const headerTabHotel = document.querySelector(".tabHotel");
let crumbs = container.querySelectorAll(".breadcrumb-item");
let currentHotelName = "";
let tours = true;

if (finalStep === "add-passenger") {
	step = finalStep;
}

if (window.innerWidth < 1007) {
	mainWrapper.classList.remove("d-none");
	mainWrapper.classList.remove("d-sm-none");
}

head.insertAdjacentHTML("beforeend", data.styles.common);

if (headerTabHotel.classList.contains("active")) {
	tours = false;
}

// Для каждоый страницы свой скрипт
switch (step) {
	case "packagetours":
		searchPageCrumbs(tours); // tours search page
		break;
	case "onlyhotel":
		searchPageCrumbs(tours); // only-hotels search page
		break;
	case "hotels":
		hotelPageCrumbs(tours); // on hotel page
		break;
	case "flight-list":
		flightsPageCrumbs(tours); // on flights page
		break;
	case "package":
		additionalServicesPageCrumbs(tours); // additional services page
		break;
	case "add-passenger":
		addPassengerPageCrumbs(tours); // add-passenger page
		break;
}

// Страница поиска туров
function searchPageCrumbs(tours) {
	// Перебор хлебных крошек и рендер новой верстки
	for (let i = 1; i < 5; i++) {
		if (tours) {
			if (i === 2) {
				container.insertAdjacentHTML("beforeend", `<li class="breadcrumb-item"><p>Выбор</br>рейса</p><span></span></li>`);
			}
			if (i === 3) {
				container.insertAdjacentHTML("beforeend", `<li class="breadcrumb-item"><p>Выбор</br>доп.услуг</p><span></span></li>`);
			}
		}
		if (i === 4) {
			container.insertAdjacentHTML("beforeend", `<li class="breadcrumb-item"><p>Последний шаг</br>до путешествия!</p></li>`);
		}
	}

	crumbs = container.querySelectorAll(".breadcrumb-item");

	let crumbStep = 0;
	let activeCrumb = null;

	// Перебор крошек и стилизация
	crumbs.forEach((crumb) => {
		debugger
		let crumbArrow = null;
		crumb.classList.add("breadcrumb-item_new-style");

		// Спан есть у всех крошек кроме последней и в него вставляется верстка стрелки, пока без самой стрелки
		if (crumb.querySelector("span")) {
			crumb.querySelector("span").insertAdjacentHTML("afterbegin", data.arrows.tag);
			crumbArrow = crumb.querySelector(".crumb-arrow-ico");
		}


		// Активная крошка инициализируется
		if (crumb.classList.contains("active")) {
			crumb.classList.add("breadcrumb-item_new-style_active");
			activeCrumb = crumb;
		} else {
			// У неактивных удаляется лишний элемент p на мобилках
			if (window.innerWidth < 769 && crumb.querySelector("p")) {
				crumb.querySelector("p").remove();
			}
		}

		// установка стрелок для активной и неактивных крошек
		if (!activeCrumb) {
			if (crumbArrow) {
				crumbArrow.src = data.arrows.srcActive;
			}
		} else {
			if (crumbArrow) {
				crumbArrow.src = data.arrows.srcDeactive;
			}
			if (crumb !== activeCrumb) {
				crumb.classList.add("breadcrumb-item_new-style_next");
			}
		}

		// Крошки устанавливаются по шагам (для каждого шага своя картинка)
		if (crumbStep > 0) {
			switch (crumbStep) {
				case 1:
					crumb.insertAdjacentHTML("afterbegin", data.stepsImgs.tag);
					crumb.querySelector(".crumb-step-ico").src = data.stepsImgs.first;
					break;
				case 2:
					crumb.insertAdjacentHTML("afterbegin", data.stepsIcons.second);
					break;
				case 3:
					crumb.insertAdjacentHTML("afterbegin", data.stepsIcons.third);
					break;
				case 4:
					if (tours) {
						crumb.insertAdjacentHTML("afterbegin", data.stepsIcons.fourth);
					} else {
						crumb.insertAdjacentHTML("afterbegin", data.stepsIcons.second);
					}
					break;
			}
		}
		if (tours) {
			crumbStep++;
		} else {
			if (crumbStep > 0) {
				crumbStep += 3;
			} else {
				crumbStep++;
			}
		}
	});
}

// Страница отеля
function hotelPageCrumbs(tours) {
	for (let i = 1; i < 5; i++) {
		if (i === 2) {
			currentHotelName = crumbs[i].textContent;
		}
		if (crumbs[i] !== undefined) {
			crumbs[i].remove();
		}
	}

	// Рендер новой верстки
	for (let i = 1; i < 5; i++) {
		switch (i) {
			case 1:
				if (window.innerWidth < 1007) {
					if (tours) {
						container.insertAdjacentHTML("beforeend", `<li class="breadcrumb-item active"><p>Поиск тура</p><span></span></li>`);
					} else {
						container.insertAdjacentHTML("beforeend", `<li class="breadcrumb-item active"><p>Поиск проживания</p><span></span></li>`);
					}
				} else {
					if (tours) {
						container.insertAdjacentHTML("beforeend", `<li class="breadcrumb-item active"><p>Поиск тура</br>${currentHotelName}</p><span></span></li>`);
					} else {
						container.insertAdjacentHTML("beforeend", `<li class="breadcrumb-item active"><p>Поиск проживания</br>${currentHotelName}</p><span></span></li>`);
					}
				}
				continue;
			case 2:
				if (tours) {
					container.insertAdjacentHTML("beforeend", `<li class="breadcrumb-item"><p>Выбор</br>рейса</p><span></span></li>`);
				}
				continue;
			case 3:
				if (tours) {
					container.insertAdjacentHTML("beforeend", `<li class="breadcrumb-item"><p>Выбор</br>доп.услуг</p><span></span></li>`);
				}
				continue;
			case 4:
				container.insertAdjacentHTML("beforeend", `<li class="breadcrumb-item"><p>Последний шаг</br>до путешествия!</p></li>`);
				continue;
		}
	}
	crumbs = container.querySelectorAll(".breadcrumb-item");


	// Так же как и на прошлой странице тут инициализация шагов, стрелок и изображений
	let crumbStep = 0;
	let activeCrumb = null;
	crumbs.forEach((crumb) => {
		let crumbArrow = null;
		crumb.classList.add("breadcrumb-item_new-style");
		if (crumb.querySelector("span")) {
			crumb.querySelector("span").insertAdjacentHTML("afterbegin", data.arrows.tag);
			crumbArrow = crumb.querySelector(".crumb-arrow-ico");
		}

		if (crumb.classList.contains("active")) {
			crumb.classList.add("breadcrumb-item_new-style_active");
			activeCrumb = crumb;
		} else {
			if (window.innerWidth < 769 && crumb.querySelector("p")) {
				crumb.querySelector("p").remove();
			}
		}

		if (!activeCrumb) {
			if (crumbArrow) {
				crumbArrow.src = data.arrows.srcActive;
			}
		} else {
			if (crumbArrow) {
				crumbArrow.src = data.arrows.srcDeactive;
			}
			if (crumb !== activeCrumb) {
				crumb.classList.add("breadcrumb-item_new-style_next");
			}
		}

		if (crumbStep > 0) {
			switch (crumbStep) {
				case 1:
					crumb.insertAdjacentHTML("afterbegin", data.stepsImgs.tag);
					crumb.querySelector(".crumb-step-ico").src = data.stepsImgs.first;
					break;
				case 2:
					crumb.insertAdjacentHTML("afterbegin", data.stepsIcons.second);
					break;
				case 3:
					crumb.insertAdjacentHTML("afterbegin", data.stepsIcons.third);
					break;
				case 4:
					if (tours) {
						crumb.insertAdjacentHTML("afterbegin", data.stepsIcons.fourth);
					} else {
						crumb.insertAdjacentHTML("afterbegin", data.stepsIcons.second);
					}
					break;
			}
		}

		if (tours) {
			crumbStep++;
		} else {
			if (crumbStep > 0) {
				crumbStep += 3;
			} else {
				crumbStep++;
			}
		}
	});
}

// Страница выбора перелетов (аналогично предыдущим шагам)
function flightsPageCrumbs(tours) {
	if (!tours) {
		return;
	}
	let searchPageUrl = "";
	for (let i = 1; i < crumbs.length; i++) {
		if (crumbs[i].textContent === "Выбор рейса") {
			searchPageUrl = crumbs[i - 1].querySelector("a").href;
		}
		if (i === 2) {
			currentHotelName = crumbs[i].textContent;
		}
		if (crumbs[i] !== undefined) {
			crumbs[i].remove();
		} else {
			break;
		}
	}

	for (let i = 1; i < 5; i++) {
		switch (i) {
			case 1:
				if (window.innerWidth < 1007) {
					container.insertAdjacentHTML("beforeend", `<a class="breadcrumb-item" href="${searchPageUrl}"><p>Поиск тура</p><span></span></a>`);
				} else {
					container.insertAdjacentHTML("beforeend", `<a class="breadcrumb-item" href="${searchPageUrl}"><p>Поиск тура</br>${currentHotelName}</p><span></span></a>`);
				}
				continue;
			case 2:
				container.insertAdjacentHTML("beforeend", `<li class="breadcrumb-item active"><p>Выбор</br>рейса</p><span></span></li>`);
				continue;
			case 3:
				container.insertAdjacentHTML("beforeend", `<li class="breadcrumb-item"><p>Выбор</br>доп.услуг</p><span></span></li>`);
				continue;
			case 4:
				container.insertAdjacentHTML("beforeend", `<li class="breadcrumb-item"><p>Последний шаг</br>до путешествия!</p></li>`);
				continue;
		}
	}

	crumbs = container.querySelectorAll(".breadcrumb-item");

	let crumbStep = 0;
	let activeCrumb = null;
	head.insertAdjacentHTML("beforeend", data.styles.searchPage);

	crumbs.forEach((crumb) => {
		let crumbArrow = null;
		crumb.classList.add("breadcrumb-item_new-style");
		if (crumb.querySelector("span")) {
			crumb.querySelector("span").insertAdjacentHTML("afterbegin", data.arrows.tag);
			crumbArrow = crumb.querySelector(".crumb-arrow-ico");
		}

		if (crumb.classList.contains("active")) {
			crumb.classList.add("breadcrumb-item_new-style_active");
			activeCrumb = crumb;
		} else {
			if (window.innerWidth < 769 && crumb.querySelector("p")) {
				crumb.querySelector("p").remove();
			}
		}

		if (!activeCrumb) {
			if (crumbArrow) {
				crumbArrow.src = data.arrows.srcActive;
			}
		} else {
			if (crumbArrow) {
				crumbArrow.src = data.arrows.srcDeactive;
			}
			if (crumb !== activeCrumb) {
				crumb.classList.add("breadcrumb-item_new-style_next");
			}
		}

		if (crumbStep > 0) {
			switch (crumbStep) {
				case 1:
					crumb.insertAdjacentHTML("afterbegin", data.stepsIcons.first);
					break;
				case 2:
					crumb.insertAdjacentHTML("afterbegin", data.stepsImgs.tag);
					crumb.querySelector(".crumb-step-ico").src = data.stepsImgs.second;
					break;
				case 3:
					crumb.insertAdjacentHTML("afterbegin", data.stepsIcons.third);
					break;
				case 4:
					crumb.insertAdjacentHTML("afterbegin", data.stepsIcons.fourth);
					break;
			}
		}
		crumbStep++;
	});
}

// Страница выбора допуслуг (аналогично предыдущим шагам)
function additionalServicesPageCrumbs(tours) {
	if (!tours) {
		return;
	}
	let searchPageUrl = "";
	let flightsPageUrl = "";

	for (let i = 1; i < crumbs.length; i++) {
		if (crumbs[i].textContent === "Выбор рейса") {
			searchPageUrl = crumbs[i - 1].querySelector("a").href;
			flightsPageUrl = crumbs[i].querySelector("a").href;
		}
		if (i === 2) {
			currentHotelName = crumbs[i].textContent;
		}
		if (crumbs[i] !== undefined) {
			crumbs[i].remove();
		}
	}

	for (let i = 1; i < 5; i++) {
		switch (i) {
			case 1:
				if (window.innerWidth < 1007) {
					container.insertAdjacentHTML("beforeend", `<a class="breadcrumb-item" href="${searchPageUrl}"><p>Поиск тура</p><span></span></a>`);
				} else {
					container.insertAdjacentHTML("beforeend", `<a class="breadcrumb-item" href="${searchPageUrl}"><p>Поиск тура</br>${currentHotelName}</p><span></span></a>`);
				}

				continue;
			case 2:
				container.insertAdjacentHTML("beforeend", `<a class="breadcrumb-item" href="${flightsPageUrl}"><p>Выбор</br>рейса</p><span></span></a>`);
				continue;
			case 3:
				container.insertAdjacentHTML("beforeend", `<li class="breadcrumb-item active">Выбор</br>доп.услуг<span></span></li>`);
				continue;
			case 4:
				container.insertAdjacentHTML("beforeend", `<li class="breadcrumb-item"><p>Последний шаг</br>до путешествия!</p></li>`);
				continue;
		}
	}

	crumbs = container.querySelectorAll(".breadcrumb-item");

	let crumbStep = 0;
	let activeCrumb = null;

	crumbs.forEach((crumb) => {
		let crumbArrow = null;
		crumb.classList.add("breadcrumb-item_new-style");
		if (crumb.querySelector("span")) {
			crumb.querySelector("span").insertAdjacentHTML("afterbegin", data.arrows.tag);
			crumbArrow = crumb.querySelector(".crumb-arrow-ico");
		}

		if (crumb.classList.contains("active")) {
			crumb.classList.add("breadcrumb-item_new-style_active");
			activeCrumb = crumb;
		} else {
			if (window.innerWidth < 769 && crumb.querySelector("p")) {
				crumb.querySelector("p").remove();
			}
		}

		if (!activeCrumb) {
			if (crumbArrow) {
				crumbArrow.src = data.arrows.srcActive;
			}
		} else {
			if (crumbArrow) {
				crumbArrow.src = data.arrows.srcDeactive;
			}
			if (crumb !== activeCrumb) {
				crumb.classList.add("breadcrumb-item_new-style_next");
			}
		}

		if (crumbStep > 0) {
			switch (crumbStep) {
				case 1:
					crumb.insertAdjacentHTML("afterbegin", data.stepsIcons.first);
					break;
				case 2:
					crumb.insertAdjacentHTML("afterbegin", data.stepsIcons.second);
					break;
				case 3:
					crumb.insertAdjacentHTML("afterbegin", data.stepsImgs.tag);
					crumb.querySelector(".crumb-step-ico").src = data.stepsImgs.third;
					break;
				case 4:
					crumb.insertAdjacentHTML("afterbegin", data.stepsIcons.fourth);
					break;
			}
		}
		crumbStep++;
	});
}

// Страница ввода данных туристов (аналогично предыдущим шагам)
function addPassengerPageCrumbs() {
	let searchPageUrl = "";
	let flightsPageUrl = "";
	let extraServicesPage = "";

	for (let i = 1; i < crumbs.length; i++) {
		if (crumbs[i].textContent === "Выбор рейса") {
			flightsPageUrl = crumbs[i].querySelector("a").href;
			searchPageUrl = crumbs[i - 1].querySelector("a").href;
		}
		if (crumbs[i].textContent === "Поиск проживания") {
			searchPageUrl = crumbs[i].querySelector("a").href;
		}
		if (crumbs[i].textContent === "Выбор дополнительных услуг" && tours) {
			extraServicesPage = crumbs[i].querySelector("a").href;
		}
		if (i === 2) {
			currentHotelName = crumbs[i].textContent;
		}
		if (crumbs[i] !== undefined) {
			crumbs[i].remove();
		}
	}

	for (let i = 1; i < 5; i++) {
		switch (i) {
			case 1:
				if (window.innerWidth < 1007) {
					if (tours) {
						container.insertAdjacentHTML("beforeend", `<a class="breadcrumb-item" href="${searchPageUrl}"><p>Поиск тура</p><span></span></a>`);
					} else {
						container.insertAdjacentHTML("beforeend", `<a class="breadcrumb-item" href="${searchPageUrl}"><p>Поиск проживания</p><span></span></a>`);
					}
				} else {
					if (tours) {
						container.insertAdjacentHTML("beforeend", `<a class="breadcrumb-item" href="${searchPageUrl}"><p>Поиск тура</br>${currentHotelName}</p><span></span></a>`);
					} else {
						container.insertAdjacentHTML("beforeend", `<a class="breadcrumb-item" href="${searchPageUrl}"><p>Поиск проживания</br>${currentHotelName}</p><span></span></a>`);
					}
				}
				continue;
			case 2:
				if (tours) {
					container.insertAdjacentHTML("beforeend", `<a class="breadcrumb-item" href="${flightsPageUrl}"><p>Выбор</br>рейса</p><span></span></a>`);
				}
				continue;
			case 3:
				if (tours) {
					container.insertAdjacentHTML("beforeend", `<a class="breadcrumb-item" href="${extraServicesPage}"><p>Выбор</br>доп.услуг</p><span></span></a>`);
				}
				continue;
			case 4:
				container.insertAdjacentHTML("beforeend", `<li class="breadcrumb-item active"><p>Последний шаг</br>до путешествия!</p></li>`);
				continue;
		}
	}

	crumbs = container.querySelectorAll(".breadcrumb-item");

	let crumbStep = 0;
	let activeCrumb = null;
	head.insertAdjacentHTML("beforeend", data.styles.searchPage);
	crumbs.forEach((crumb) => {
		let crumbArrow = null;
		crumb.classList.add("breadcrumb-item_new-style");
		if (crumb.querySelector("span")) {
			crumb.querySelector("span").insertAdjacentHTML("afterbegin", data.arrows.tag);
			crumbArrow = crumb.querySelector(".crumb-arrow-ico");
		}

		if (crumb.classList.contains("active")) {
			crumb.classList.add("breadcrumb-item_new-style_active");
			activeCrumb = crumb;
		} else {
			if (window.innerWidth < 769 && crumb.querySelector("p")) {
				crumb.querySelector("p").remove();
			}
		}

		if (!activeCrumb) {
			if (crumbArrow) {
				crumbArrow.src = data.arrows.srcActive;
			}
		} else {
			if (crumbArrow) {
				crumbArrow.src = data.arrows.srcDeactive;
			}
			if (crumb !== activeCrumb) {
				crumb.classList.add("breadcrumb-item_new-style_next");
			}
		}

		if (crumbStep > 0) {
			switch (crumbStep) {
				case 1:
					crumb.insertAdjacentHTML("afterbegin", data.stepsIcons.first);
					break;
				case 2:
					crumb.insertAdjacentHTML("afterbegin", data.stepsIcons.second);
					break;
				case 3:
					crumb.insertAdjacentHTML("afterbegin", data.stepsIcons.third);
					break;
				case 4:
					crumb.insertAdjacentHTML("afterbegin", data.stepsImgs.tag);
					if (tours) {
						crumb.querySelector(".crumb-step-ico").src = data.stepsImgs.fourth;
					} else {
						crumb.querySelector(".crumb-step-ico").src = data.stepsImgs.secondEnd;
					}
					break;
			}
		}
		if (tours) {
			crumbStep++;
		} else {
			if (crumbStep > 0) {
				crumbStep += 3;
			} else {
				crumbStep++;
			}
		}
	});
}
