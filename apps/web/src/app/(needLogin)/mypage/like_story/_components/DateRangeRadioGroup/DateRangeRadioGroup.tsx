import { Label, RadioGroup, RadioGroupItem } from 'ui';

import { LABELS, PERIODS } from '@/constants';

export const DateRangeRadioGroup = ({
  setDateRange,
  selectedRadio,
  setSelectedRadio,
}) => {
  const handlePeriodChange = (value: string) => {
    const period = PERIODS[value];

    const endDate = new Date();
    const startDate = new Date();

    startDate.setMonth(startDate.getMonth() - period);

    setDateRange([startDate, endDate]);
  };

  const dateRangeArray = ['month', 'sixMonth', 'year'];

  return (
    <RadioGroup className='mt-3 flex justify-center'>
      <div className='flex items-center space-x-2'>
        {dateRangeArray.map((value: string) => (
          <>
            <RadioGroupItem
              value={value}
              id={value}
              checked={selectedRadio === value}
              onClick={() => {
                handlePeriodChange(value);
                setSelectedRadio(value);
              }}
            />
            <Label htmlFor={value}>{getLabelValue(value)}</Label>
          </>
        ))}
      </div>
    </RadioGroup>
  );
};

const getLabelValue = (value: string): string => {
  return LABELS[value];
};
