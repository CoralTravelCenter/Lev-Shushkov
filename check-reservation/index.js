const popupContainer = document.querySelector(".commonModal");
const openPopupButton = document.querySelector(".tabCheckReservation");
let popupLayout;

// Вызов попапа с проверкой заявки ну тур
const getPopupLayout = () => {
	fetch("https://www.coral.ru/v1/modal/reservationcheck", {
		method: "GET",
	})
		.then(checkResponse)
		.then((res) => {
			popupLayout = `${res}`;
		})
		.catch((err) => {
			console.error(err);
		});
};

const checkResponse = (res) => {
	if (res.ok) {
		return res.text();
	}
	return Promise.reject(`Ошибка: ${res.status}`);
};
getPopupLayout();
