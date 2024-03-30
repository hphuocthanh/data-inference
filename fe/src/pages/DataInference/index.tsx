import FileUpload from '@/components/FileUpload';
import { useUploadMutation } from '@/features/data/dataApiSlice';
import { Container, Input, Stack, Typography } from '@mui/material';
import { useEffect } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

const DataInference = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    watch,
    trigger,
  } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  useEffect(() => {
    const subscription = watch((value, { name, type }) => console.log(value, name, type));
    return () => subscription.unsubscribe();
  }, [watch]);
  const dataRegister = register('data');

  const [uploadFile, { data: processedData }] = useUploadMutation();

  const handleUploadFile = async (data: FieldValues) => {
    const formData = new FormData();
    formData.append('file', data.data[0]);
    console.log('formData', data.data[0], formData);
    const processed = await uploadFile(formData).unwrap();
    console.log('processedData', processed);
  };

  return (
    <Container sx={{ height: '100vh' }}>
      <Stack direction={'column'} width={'100%'} height={'100%'} alignItems={'center'} py={4}>
        <Typography variant="h1" gutterBottom>
          Data Processor
        </Typography>

        <Stack justifyContent={'center'} height={'100%'}>
          <form onSubmit={handleSubmit(handleUploadFile)}>
            <Stack justifyContent={'center'}>
              <Input
                {...dataRegister}
                type="file"
                onChange={(e) => {
                  dataRegister.onChange(e);
                }}
              />
              <Input type="submit" />
            </Stack>
          </form>
        </Stack>
      </Stack>
    </Container>
  );
};
export default DataInference;
