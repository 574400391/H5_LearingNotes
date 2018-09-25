/* tslint:disable:no-console */

import { register } from 'register-service-worker';

if (process.env.NODE_ENV !== 'production') {
  register(`${process.env.BASE_URL}sw.js`, {
    ready() {},
    cached() {
      console.log('Content has been cached for offline use.');
    },
    updated() {
      console.log('New content is available; please refresh.');
    },
    offline() {
      console.log(
        'No internet connection found. App is running in offline mode.',
      );
    },
    error(error) {
      console.error('Error during service worker registration:', error);
    },
  });
}