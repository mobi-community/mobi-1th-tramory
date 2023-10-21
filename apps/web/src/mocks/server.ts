// 추후 api 테스트 코드 작성때 사용 => 미리 만들어 놓음
import { setupServer } from 'msw/node';

import { handlers } from './handlers';

export const server = setupServer(...handlers);
