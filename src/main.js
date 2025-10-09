import { loadMore, onSearch } from './js/render-function';
import { ref } from './js/CONSTATNT';

// функція пошуку
console.log('start');
console.log(ref);
ref.searchButton.addEventListener('click', onSearch);
ref.loadMoreButton.addEventListener('click', loadMore);
