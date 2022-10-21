document.querySelector("head").insertAdjacentHTML(
	"beforeend",
	`
<style>
.countdownTimer {
  margin: 0 !important;
  background-color: transparent !important;
  box-shadow: none !important;
  width: 100% !important;
  top: 0 !important;
}
@media screen and (max-width: 1006px) {
  .countdownTimer {
    justify-content: flex-end;
  }
}
.countdownTimer div {
  background: transparent !important;
  display: flex !important;
  flex-direction: column;
  padding: 0 !important;
  color: #000000 !important;
  min-width: unset !important;
}
.countdownTimer .lbl {
  font-weight: 400;
  font-size: 16px !important;
  text-transform: uppercase;
  line-height: 1.5 !important;
  color: #000000 !important;
  max-width: unset !important;
}
@media screen and (max-width: 1439px) {
  .countdownTimer .lbl {
    font-size: 12px !important;
  }
}
@media screen and (max-width: 1039px) {
  .countdownTimer .lbl {
    font-size: 11px !important;
  }
}
@media screen and (max-width: 1006px) {
  .countdownTimer .lbl {
    font-size: 16px !important;
    max-width: 280px !important;
  }
}
@media screen and (max-width: 768px) and (min-width: 576px) {
  .countdownTimer .lbl {
    font-size: 12px !important;
  }
}
@media screen and (max-width: 575px) {
  .countdownTimer .lbl {
    font-size: 16px !important;
  }
}
.countdownTimer .minutes,
.countdownTimer .seconds,
.countdownTimer .smalltext {
  padding: 0 !important;
}
.countdownTimer .minutes,
.countdownTimer .seconds,
.countdownTimer .seperator {
  font-weight: 600;
  font-size: 32px;
  color: #000000;
  line-height: 1.2;
}
.countdownTimer .seperator {
  padding: 0 5px !important;
}

.selectedHotelPartial .title-row {
  margin-bottom: 20px;
}
.selectedHotelPartial .lbl {
  font-size: 16px !important;
  width: 200px !important;
}
@media screen and (max-width: 1439px) {
  .selectedHotelPartial .lbl {
    font-size: 16px !important;
  }
}
@media screen and (max-width: 1039px) {
  .selectedHotelPartial .lbl {
    font-size: 16px !important;
  }
}
@media screen and (max-width: 1006px) {
  .selectedHotelPartial .lbl {
    font-size: 16px !important;
    max-width: 200px !important;
  }
}
@media screen and (max-width: 768px) and (min-width: 576px) {
  .selectedHotelPartial .lbl {
    font-size: 16px !important;
  }
}
@media screen and (max-width: 575px) {
  .selectedHotelPartial .lbl {
    font-size: 16px !important;
  }
}
</style>`
);

const timer = document.querySelector(".countdownTimer");
const timerText = timer.querySelector(".lbl");

timerText.textContent = "Цена на тур может измениться через";
