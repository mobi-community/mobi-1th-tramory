import { Label, RadioGroup, RadioGroupItem } from 'ui';

import { LABELS, PERIODS } from '@/constants';
import { getPastDateRange } from '@/utils/getPastDateRange';

export const DateRangeRadioGroup = ({
  setDateRange,
  selectedRadio,
  setSelectedRadio,
}) => {
  const handlePeriodChange = (value: string) => {
    const period = PERIODS[value];
    const dateRange = getPastDateRange(period);

    setDateRange(dateRange);
  };

  const dateRangeArray = ['month', 'sixMonth', 'year'];

  return (
    <RadioGroup className='mt-3 flex justify-center'>
      <div className='flex items-center space-x-2'>
        {dateRangeArray.map((value: string, index: number) => (
          <div className='flex' key={index}>
            <RadioGroupItem
              className='mr-2'
              value={value}
              id={value}
              checked={selectedRadio === value}
              onClick={() => {
                handlePeriodChange(value);
                setSelectedRadio(value);
              }}
            />
            <Label htmlFor={value}>{getLabelValue(value)}</Label>
          </div>
        ))}
      </div>
    </RadioGroup>
  );
};

const getLabelValue = (value: string): string => {
  return LABELS[value];
};
