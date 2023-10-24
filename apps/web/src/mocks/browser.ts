import { setupWorker } from 'msw';

import { handlers } from './apis';

export const worker = setupWorker(...handlers);
