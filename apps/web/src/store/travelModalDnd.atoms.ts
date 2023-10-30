import { atom } from 'jotai';

export interface Item {
  editingMemoIndex: number;
  id: number;
  name: string;
  memos: string[];
}

export const travelModalDndList = atom<Item[]>([
  {
    id: 1,
    name: 'New York ABC Hotel',
    memos: [],
  },
  {
    id: 2,
    name: 'TimeSquare',
    memos: [],
  },
  {
    id: 3,
    name: 'Wolfgang Steakhouse',
    memos: [],
  },
  {
    id: 4,
    name: 'JAZZ Bar in NY',
    memos: [],
  },
  {
    id: 5,
    name: 'Lego shop',
    memos: [],
  },
] as Item[]);
