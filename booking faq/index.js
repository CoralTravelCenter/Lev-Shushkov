const cms = "https://cdn.coral.ru/content/cms/russia/useful-information-pages/";
const file = ".png";
const layout = {
	styles: `
<style>
.info-popup {
	display: flex;
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	visibility: hidden;
	opacity: 0;
	pointer-events: none;
	transition: 0.5s;
	background: rgba(0, 0, 0, 0.2);
	z-index: 200;
}

.info-popup__window {
	max-width: 750px;
	height: 50vh;
	position: relative;
	margin: auto;
	background: #fff;
	overflow: hidden;
	padding: 40px 15px 40px 70px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	border-radius: 20px;
}
.info-popup__window::after {
	content: "";
	position: absolute;
	bottom: 0;
	left: 0;
	width: calc(100% - 20px);
	background: linear-gradient(360deg, #ffffff 60%, rgba(255, 255, 255, 0) 100%);
	height: 100px;
}
@media screen and (max-width: 768px) {
	.info-popup__window {
		padding: 40px 20px;
		max-width: calc(100% - 40px);
	}
	.info-popup__window .card__download-link {
		font-size: inherit !important;
	}
}

.info-popup_opened {
	visibility: visible;
	opacity: 1;
	pointer-events: auto;
	transition: 0.5s;
}

.info-popup__close-button {
	position: absolute;
	background: url(https://cdn.coral.ru/content/cms/russia/useful-information-pages/close-ico.png);
	background-repeat: no-repeat;
	background-size: contain;
	width: 20px;
	height: 20px;
	top: 20px;
	right: 20px;
	border: none;
	cursor: pointer;
}
.info-popup__close-button:focus-visible {
	outline: none;
}

.info-popup__text-wrapper {
	overflow: scroll;
	padding: 0 55px 0 0;
}
.info-popup__text-wrapper::-webkit-scrollbar {
	background: #dff0fd;
	width: 5px;
	height: 0;
}
.info-popup__text-wrapper::-webkit-scrollbar-thumb {
	width: 5px;
	border-radius: 5px;
	background: #0093d0;
}

.info-popup__text {
	display: flex;
	flex-direction: column;
}

.info-popup__text .text__title {
	margin: 0 0 25px 0 !important;
}
.info-popup__text li {
	margin: 0 0 5px 0;
}

.info-popup__image {
	max-width: 70%;
	margin: 0 auto 30px auto;
}

@media screen and (max-width: 768px) {
	.info-popup__image {
		max-width: 100%;
		margin: 0 0 30px 0;
	}
}

.text {
	font-style: normal;
	color: #000;
	font-weight: 400;
	margin: 0 0 60px 0;
}

.text__title {
	font-size: 20px;
	line-height: 23px;
	margin: 0 0 25px 0;
	font-weight: 700;
}
.text__title:first-of-type {
	margin: 0;
}

.slide_mobile .text__title {
	margin: 0 auto 60px auto !important;
	text-align: center;
	max-width: 90%;
}
@media screen and (max-width: 499px) {
	.slide_mobile .text__title {
		margin: 0 auto 30px auto !important;
	}
}

.text__main {
	font-size: 16px;
	line-height: 19px;
	margin: 0 0 20px 0;
}
.text__main span {
	font-weight: 800;
}
.text__main:last-of-type {
	margin: 0;
}

.card__download-link {
	font-style: normal;
	font-weight: 600;
	font-size: 16px;
	line-height: 19px !important;
	color: #0093d0;
}
@media screen and (max-width: 499px) {
	.card__download-link {
		font-size: 10px !important;
		white-space: nowrap;
	}
}

.insurance-faq {
	display: grid !important;
	grid-template-columns: 1fr 1fr 1fr;
	width: 100%;
	-moz-gap: 16px;
	gap: 16px;
	margin-bottom: 20px;
}

@media screen and (max-width: 1199px) {
	.insurance-faq {
		grid-template-columns: 1fr;
	}
}
.insurance-faq__btn {
	cursor: pointer;
	display: flex;
	background: #f5f5f5;
	padding: 13px 10px;
	height: 100%;
	width: 100%;
	align-items: center;
	justify-content: space-between;
	border-radius: 8px;
	-moz-column-gap: 10px;
	column-gap: 10px;
	position: relative;
}
.insurance-faq__btn span,
.insurance-faq__btn a {
	color: #000 !important;
	margin-right: unset;
	font-size: 12px !important;
	line-height: 14px !important;
	text-transform: none !important;
	width: 100%;
	padding: 0 30px;
}

@media screen and (max-width: 768px) {
	.insurance-faq__btn span,
	.insurance-faq__btn a {
		font-size: 10px !important;
		line-height: 12px !important;
	}
}
.insurance-faq__btn img {
	align-self: unset !important;
	width: 22px !important;
	height: 22px !important;
	-o-object-fit: contain;
	object-fit: contain;
	pointer-events: none;
	position: absolute;
	right: 10px;
}

.insurance-faq__ico {
	left: 10px;
}

</style>`,
	arrow: `<img class="insurance-faq__arrow">`,
	img: `<img>`,
	container: `<div class="insurance-faq"></div>`,
	button: `<div class="insurance-faq__btn"></div>`,
	span: `<span></span>`,
	a: `<a href="https://www.coral.ru/main/turagent/assurance/" target="_blank">Условия страхования</a>`,
	popupFirst: `<div class="info-popup" id="base-insurance">
	<div class="info-popup__window">
		<button class="info-popup__close-button" aria-label="Закрыть всплывающее окно">&nbsp;</button>
		<div class="info-popup__text-wrapper">
			<div class="info-popup__text text">
				<p class="text__title">Чем отличается базовая страховка от&nbsp;расширенной? Какие преимущества?</p>
				<p class="text__main"><span>Базовая страховка</span></p>
				<p class="text__main">
					Базовое медицинское страхование на&nbsp;случай внезапного заболевания в&nbsp;туре включает франшизу.
					<br />
					Это значит, что в&nbsp;договоре фиксируется сумма, которую туристу придется оплатить самостоятельно при каждом визите к&nbsp;врачу, независимо от&nbsp;того, на&nbsp;какую сумму будет произведено обслуживание.
					<br />
					Страховая компания берет на&nbsp;себя только оплату расходов сверх этой суммы.
					<br />
					<br />
					<span>Например,</span>
					вы&nbsp;приобретаете страховку с&nbsp;франшизой 20$, обращаетесь с&nbsp;визитом к&nbsp;врачу. Врачоказывает вам помощь на&nbsp;сумму 35$. Ваши расходы составят 20$, а&nbsp;расходы страховой компании&nbsp;&mdash; 15$.
					<br />
					В&nbsp;зависимости от&nbsp;страховой компании и&nbsp;направления меняются условия.
				</p>
				<br />
				<p class="text__main"><span>Расширенная страховка</span></p>
				<p class="text__main">
					При бронировании тура вы&nbsp;можете приобрести более удобную медицинскую страховку&nbsp;&mdash; без франшизы. В&nbsp;таком случае любой визит к&nbsp;врачу не&nbsp;потребует ваших затрат. Бонусом к&nbsp;данному виду страхования станет расширенный общий пакет услуг страховой компании.
					<br />
					<br />
					<span>К&nbsp;примеру,</span> на&nbsp;маршрутах Таиланд, Индия, Шри-Ланка, Танзания к&nbsp;таким бонусам относится страхование рисков активного отдыха, всегда требующих специальной страховки и&nbsp;дополнительных затрат&nbsp;&mdash; поездки (катание) на&nbsp;мопедах, мотороллерах, скутерах, мотоциклах, квадроциклах, снегоходах; поездки и&nbsp;путешествия на&nbsp;спортивных автомобилях, участие в&nbsp;сафари.
					<br />
					<br />
					Если при бронировании тура вы&nbsp;сначала выбрали базовое медицинское страхование, вы&nbsp;всегда можете поменять его на&nbsp;расширенное прямо на&nbsp;сайте или попросить об&nbsp;этом вашего турагента.
				</p>
			</div>
		</div>
	</div>
</div>
`,
	popupSecond: `<div class="info-popup" id="cancellation-insurance">
	<div class="info-popup__window">
		<button class="info-popup__close-button" aria-label="Закрыть всплывающее окно">&nbsp;</button>
		<div class="info-popup__text-wrapper">
			<div class="info-popup__text text">
				<p class="text__title">Для чего мне нужно страхование от&nbsp;невыезда?</p>
				<p class="text__main">В настоящее время страхование от невыезда актуально для всех категорий туристов:</p>
				<img src="https://cdn.coral.ru/content/cms/russia/insider-bookingfaq/popup-image.png" alt="Категории туристов" class="info-popup__image" />
				<p class="text__main">
					Мы&nbsp;рекомендуем застраховать себя, так как в&nbsp;связи с&nbsp;нестабильной ситуацией в&nbsp;миренет уверенности в&nbsp;том, что ничего не&nbsp;помешает вашей поездке. Страхование действует в&nbsp;случае,если поездка не&nbsp;состоится по&nbsp;объективным причинам.
					<br />
					<br />
					<span>Например,</span> если при сдаче теста на&nbsp;ковид у&nbsp;туриста положительный результат, то&nbsp;это является страховым случаем.
					<br />
					<br />
					Данная услуга не&nbsp;является обязательной, после бронирования тура вы&nbsp;можете удалить её&nbsp;черезспециалиста. С&nbsp;подробными условиями вы&nbsp;можете ознакомиться, перейдя <a class="card__download-link" href="https://www.coral.ru/main/turagent/assurance/insurance1/" target="_blank">по&nbsp;ссылке</a>.
				</p>
			</div>
		</div>
	</div>
</div>
`,
};

const parent = document.querySelector(".form-group");

// Удаление уже инициализированного эксперимента (Для тестов)
if (parent.querySelector(".ins-FAQ-question-container-c60") || parent.querySelector(".ins-FAQ-question-container-c235")) {
	const removing = parent.querySelector(".ins-FAQ-question-container-c235") || parent.querySelector(".ins-FAQ-question-container-c60");
	removing.remove();
}
// Вставка новой верстки
parent.insertAdjacentHTML("afterbegin", layout.container);

const container = parent.querySelector(".insurance-faq");
container.insertAdjacentHTML("afterbegin", layout.button);
container.insertAdjacentHTML("afterbegin", layout.button);
container.insertAdjacentHTML("afterbegin", layout.button);

container.insertAdjacentHTML("afterbegin", layout.popupSecond);
container.insertAdjacentHTML("afterbegin", layout.popupFirst);
const popups = document.querySelectorAll(".info-popup");

// Стилизация кнопок
const buttons = container.querySelectorAll(".insurance-faq__btn");
buttons.forEach((btn) => {
	btn !== buttons[2] ? btn.insertAdjacentHTML("afterbegin", layout.span) : btn.insertAdjacentHTML("afterbegin", layout.a);
	btn.insertAdjacentHTML("beforeend", layout.img);
	btn.insertAdjacentHTML("afterbegin", layout.img);
	btn.firstElementChild.classList.add("insurance-faq__ico");
	btn.lastElementChild.classList.add("insurance-faq__img");
});

buttons[0].querySelector("span").textContent = "Чем отличается базовая страховка от расширенной? Какие преимущества?";
buttons[0].querySelector(".insurance-faq__img").src = `${cms}arrow-down${file}`;
buttons[0].querySelector(".insurance-faq__ico").src = `${cms}ico1${file}`;
buttons[1].querySelector("span").textContent = "Для чего мне нужно страхование от\u00A0невыезда?";
buttons[1].querySelector(".insurance-faq__img").src = `${cms}arrow-down${file}`;
buttons[1].querySelector(".insurance-faq__ico").src = `${cms}ico2${file}`;
buttons[2].querySelector("a").textContent = "Условия страхования";
buttons[2].querySelector(".insurance-faq__img").src = `${cms}arrow-right${file}`;
buttons[2].querySelector(".insurance-faq__ico").src = `${cms}ico3${file}`;

// Управление работой попапов
for (let i = 0; i < popups.length; i++) {
	const currentPopup = popups.item(i);
	const currentCloseButton = currentPopup.querySelector(".info-popup__close-button");

	buttons[i].addEventListener("click", (evt) => {
		evt.preventDefault();
		openModal(currentPopup);
	});

	currentCloseButton.addEventListener("click", (evt) => {
		evt.preventDefault();
		closeModal(currentPopup);
	});

	currentPopup.addEventListener("click", (evt) => {
		if (evt.type === "click") {
			if (evt.target === evt.currentTarget) {
				closeModal(currentPopup);
			}
		}
	});
}

window.addEventListener("keyup", (evt) => {
	if (evt.key === "Escape") {
		closeModal(document.querySelector(".info-popup_opened"));
	}
});

function closeModal(popup) {
	popup.classList.remove("info-popup_opened");
}

function openModal(popup) {
	popup.classList.add("info-popup_opened");
}

// Вставка стилей
container.insertAdjacentHTML("afterbegin", layout.styles);
