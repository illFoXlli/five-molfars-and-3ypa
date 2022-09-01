import Pagination from 'tui-pagination';
import { key } from '../js/fetch-event';

export const pageMenu = function (total) {
  const container = document.getElementById('pagination');
  const options = {
    totalItems: total - 16,
    itemsPerPage: key.numberCardByPage,
    visiblePages: 5,
    page: key.page,
    centerAlign: true,
  };
  // console.log(`total-${options.itemsPerPage}`);
  // console.log(`totalPage-${options.totalItems}`);
  // console.log(`pagination-${options.totalItems / options.itemsPerPage}`);
  // console.log(`page-${options.page}`);
  const pagination = new Pagination(container, options);

  return pagination;
};
