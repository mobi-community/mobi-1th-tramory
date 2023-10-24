'use client';

import { useAtom } from 'jotai';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from 'ui';

import { MapPageConfig } from '../../../../../../../../../constants';
import { MapAtom } from '../../../../../../../../../store';

export const SelectRange: React.FC = () => {
  const [searchRange] = useAtom(MapAtom.range);

  return (
    <div className='w-70'>
      <Select>
        <SelectTrigger className='w-[158px]'>
          <SelectValue placeholder={searchRange} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {MapPageConfig.rangeArray.map((range) => (
              <SelectItem value={range} key={Math.random() * 1000}>
                {range}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
