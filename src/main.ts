import './css/main.css';
import { navigateTo, router } from './router';

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (e) => {
    const target = e.target as HTMLLinkElement;

    if (target.matches('[data-link]')) {
      e.preventDefault();
      navigateTo(target.href);
    }
  });

  window.addEventListener('popstate', router);

  router();
});
