import { RootState } from '@/app/store';

export const selectFile = (state: RootState) => state.data.file;
