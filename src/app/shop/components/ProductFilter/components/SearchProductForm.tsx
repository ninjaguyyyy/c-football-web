'use client';
import TextInputField from 'app/components/Form/TextInputField';
import { SearchProductFormData } from 'app/shop/components/ProductFilter/components/SearchProductForm.type';
import { useForm } from 'react-hook-form';
import IconButton from '@mui/material/IconButton';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';

export default function SearchProductForm() {
  const {
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useForm<SearchProductFormData>({});

  return (
    <form className="flex">
      <TextInputField
        label="Search Products"
        name="keyword"
        control={control}
        className="w-[300px]"
      />
      <IconButton className={'w-[50px] h-[50px] rounded-[10px]'}>
        <HiOutlineMagnifyingGlass />
      </IconButton>
    </form>
  );
}
