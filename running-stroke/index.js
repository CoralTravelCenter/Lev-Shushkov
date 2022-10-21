const layout = {
	stroke: `<div class="stroke">
	<a href="https://www.coral.ru/opened-countries/?banner_on_site=opened-countries" class="stroke__link">
		<div class="stroke__content">
			<img src="https://cdn.coral.ru/content/cms/russia/insider-bookingfaq/ico.png" alt="Туры в Египет Coral Travel" class="stroke__ico" />
			<p class="stroke__text"><span>С&nbsp;03.09.22</span> ежедневные вылеты из&nbsp;Москвы в&nbsp;<span>Хургаду и&nbsp;Шарм-Эль-Шейх</span>.</p>
		</div>
		<div class="stroke__content">
			<img src="https://cdn.coral.ru/content/cms/russia/insider-bookingfaq/ico.png" alt="Туры в Египет Coral Travel" class="stroke__ico" />
			<p class="stroke__text"><span>С&nbsp;03.09.22</span> ежедневные вылеты из&nbsp;Москвы в&nbsp;<span>Хургаду и&nbsp;Шарм-Эль-Шейх</span>.</p>
		</div>
		<div class="stroke__content">
			<img src="https://cdn.coral.ru/content/cms/russia/insider-bookingfaq/ico.png" alt="Туры в Египет Coral Travel" class="stroke__ico" />
			<p class="stroke__text"><span>С&nbsp;03.09.22</span> ежедневные вылеты из&nbsp;Москвы в&nbsp;<span>Хургаду и&nbsp;Шарм-Эль-Шейх</span>.</p>
		</div>
		<div class="stroke__content">
			<img src="https://cdn.coral.ru/content/cms/russia/insider-bookingfaq/ico.png" alt="Туры в Египет Coral Travel" class="stroke__ico" />
			<p class="stroke__text"><span>С&nbsp;03.09.22</span> ежедневные вылеты из&nbsp;Москвы в&nbsp;<span>Хургаду и&nbsp;Шарм-Эль-Шейх</span>.</p>
		</div>
		<div class="stroke__content">
			<img src="https://cdn.coral.ru/content/cms/russia/insider-bookingfaq/ico.png" alt="Туры в Египет Coral Travel" class="stroke__ico" />
			<p class="stroke__text"><span>С&nbsp;03.09.22</span> ежедневные вылеты из&nbsp;Москвы в&nbsp;<span>Хургаду и&nbsp;Шарм-Эль-Шейх</span>.</p>
		</div>
	</a>
</div>`,
	styles: `
	<style>
	* {
		margin: 0;
		padding: 0;
	  }
	  
	  .stroke {
		display: flex;
		flex-wrap: nowrap;
		align-content: center;
		overflow: hidden;
		background: #0093d0;
		padding: 12px 0;
	  }
	  
	  .stroke__link {
		display: flex;
		flex-wrap: nowrap;
		align-items: center;
		text-decoration: none;
		color: #fff;
	  }
	  
	  .stroke_animate {
		-webkit-animation: strokeRun infinite both linear 20s;
				animation: strokeRun infinite both linear 20s;
	  }
	  
	  .stroke__content {
		width: -webkit-max-content;
		width: -moz-max-content;
		width: max-content;
		display: flex;
		align-items: center;
		flex-wrap: nowrap;
		flex-direction: row;
		padding-right: 20px;
	  }
	  
	  .stroke__ico {
		margin-right: 10px;
	  }
	  
	  .stroke__text {
		margin: 0;
		font-style: normal;
		font-weight: 700;
		font-size: 18px;
		line-height: 22px;
		display: flex;
		align-items: center;
		text-transform: uppercase;
		color: #ffffff;
		width: -webkit-max-content;
		width: -moz-max-content;
		width: max-content;
	  }
	  .stroke__text span {
		font-weight: 700;
		margin-right: 5px;
	  }
	  </style>`,
};
const head = document.querySelector("head");
const header = document.querySelector("header");
const banner = document.querySelector(".banner-module");

head.insertAdjacentHTML("beforeend", layout.styles);
// header.insertAdjacentHTML("afterbegin", layout.stroke);
banner.insertAdjacentHTML("afterend", layout.stroke);

const stroke = document.querySelector(".stroke__link");
const strokeContent = stroke.querySelectorAll(".stroke__content")[0];

setTimeout(() => {
	const strokeWidth = stroke.firstElementChild.getBoundingClientRect().width;
	const animation = `
	<style>
		@-webkit-keyframes strokeRun {
  			0% {
				-webkit-transform: translate3d(0, 0, 0);
    					transform: translate3d(0, 0, 0);
  				}
  			100% {
				-webkit-transform: translate3d(-${strokeWidth}px, 0, 0);
    					transform: translate3d(-${strokeWidth}px, 0, 0);
  				}
		}

		@keyframes strokeRun {
  			0% {
				-webkit-transform: translate3d(0, 0, 0);
    					transform: translate3d(0, 0, 0);
  			}
  			100% {
				-webkit-transform: translate3d(-${strokeWidth}px, 0, 0);
    					transform: translate3d(-${strokeWidth}px, 0, 0);
  			}
		}
	</style>`;

	head.insertAdjacentHTML("beforeend", animation);
	stroke.classList.add("stroke_animate");
}, 100);

stroke.addEventListener("click", () => {
	ym(553380, "reachGoal", "ticker");
});
