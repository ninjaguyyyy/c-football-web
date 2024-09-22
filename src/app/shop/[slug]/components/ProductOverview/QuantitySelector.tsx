import IconButton from '@mui/material/IconButton';

export function QuantitySelector() {
  return (
    <div>
      <label className={'font-medium text-[0.875rem] mb-3 block mt-6'}>
        Quantity
      </label>
      <div
        className={
          'flex items-center justify-between h-[46px] w-full box-border sm:w-[360px] rounded-[200px] border border-solid border-[#dbdbdb] px-1'
        }
      >
        <IconButton className={'w-[40px]'}>-</IconButton>
        <p className={'font-semibold text-lg'}>2</p>
        <IconButton className={'w-[40px]'}>+</IconButton>
      </div>
    </div>
  );
}
