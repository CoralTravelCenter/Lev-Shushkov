// Рендер карты Коралбонус на фотографию отеля (на страницах отеля)

const galleryContainer = document.querySelector(".gallery-left");
const galleryLayoutBonus = galleryContainer.firstElementChild;

galleryLayoutBonus.style.height = "auto";

const coralBonusIcon = `
            <div class="plate-bonus">
                <div class="plate-bonus__text">
                    <p class="plate-bonus__title">Cкидка 5%</p>
                    <p class="plate-bonus__description">для держателей карт CoralBonus</p>
                </div>
                <img src="https://image.useinsider.com/coraltravel/defaultImageLibrary/card-1655901657.png" alt="CoralBonus" class="plate-bonus_image" />
            </div>`;

galleryLayoutBonus.insertAdjacentHTML("beforeEnd", coralBonusIcon);



$('.gallery-layout').append(`<div class="plate-bonus"><div class="plate-bonus__text"><p class="plate-bonus__title">Cкидка 5%</p><p class="plate-bonus__description">для держателей карт CoralBonus</p></div><img src="https://image.useinsider.com/coraltravel/defaultImageLibrary/card-1655901657.png" alt="CoralBonus" class="plate-bonus_image" /></div>`)
