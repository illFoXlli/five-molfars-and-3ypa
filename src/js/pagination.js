import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { key } from '../js/fetch-event';

export const pageMenu = function (total) {
  const container = document.getElementById('pagination');
  const options = {
    totalItems: total,
    itemsPerPage: 16,
    visiblePages: 5,
    page: key.page,
    centerAlign: true,
  };
  const pagination = new Pagination(container, options);
  console.log('1111111111111111111111111111111111');
  console.log(options.totalItems);
  return pagination;
};
