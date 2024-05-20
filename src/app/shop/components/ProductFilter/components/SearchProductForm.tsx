'use client';
import { Button } from '@mui/material';
import TextInputField from 'app/components/Form/TextInputField';
import { SearchProductFormData } from 'app/shop/components/ProductFilter/components/SearchProductForm.type';
import { useForm } from 'react-hook-form';

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
      <TextInputField name="keyword" control={control} className="w-[300px]" />
      <Button>Search</Button>
    </form>
  );
}
