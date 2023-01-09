// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from './functions.js';
// Подключение списка активных модулей
import { flsModules } from './modules.js';

/*==================================================================================================*/

const catalog = document.querySelector('.catalog');
const buttonCatalog = document.querySelector('.button-catalog');
const menuCatalogItems = document.querySelectorAll('.menu-catalog__link');
const subMenuCatalogBlocks = document.querySelectorAll('.sub-menu-catalog__block');
const links = document.querySelectorAll('._no-link');
let showed;

/*==================================================================================================*/

if (buttonCatalog) {
	buttonCatalog.addEventListener('click', () => {
		buttonCatalog.classList.toggle('button-catalog-active');
		catalog.classList.toggle('hidden');
	});
}
/*==================================================================================================*/

if (menuCatalogItems.length === subMenuCatalogBlocks.length) {
	menuCatalogItems.forEach((menuCatalogItem, index) => {
		menuCatalogItem.addEventListener('mouseover', e => {
			const currentBlock = subMenuCatalogBlocks[index];

			if (showed) {
				showed.classList.remove('show');
			}

			showed = currentBlock;
			currentBlock.classList.add('show');

			e.preventDefault;
		});
	});
}

/*==================================================================================================*/

if (links) {
	links.forEach(link => {
		link.addEventListener('click', e => {
			e.preventDefault();
		});
	});
}

/*==================================================================================================*/

window.addEventListener('click', e => {
	const target = e.target;
	if (!catalog.classList.contains('hidden') && !target.closest('.catalog') && !target.closest('.button-catalog')) {
		catalog.classList.add('hidden');
		buttonCatalog.classList.remove('button-catalog-active');
	}
});

/*==================================================================================================*/

const tipTrigger = document.querySelector('.tip__trigger');
const tipContent = document.querySelector('.tip__content');

if (tipTrigger && tipContent) {
	tipTrigger.addEventListener('mouseover', () => {
		tipContent.classList.toggle('showed');

		setTimeout(() => {
			tipTrigger.classList.toggle('_anim');
		}, 1000);
	});
}

/*==================================================================================================*/
