import { GridColDef } from '@mui/x-data-grid';

export type DataType =
  | 'object'
  | 'datetime64'
  | 'datetime64[ns]'
  | 'timedelta[ns]'
  | 'int64'
  | 'int32'
  | 'int16'
  | 'int8'
  | 'float64'
  | 'float32'
  | 'bool'
  | 'category'
  | 'complex';
type UserFriendlyName = 'Text' | 'Date' | 'Integer' | 'Float' | 'Boolean' | 'Category' | 'Time difference' | 'Complex';

type MUIName = GridColDef['type'];
export const DataTypeToUserFriendlyName: Record<DataType, UserFriendlyName> = {
  object: 'Text',
  datetime64: 'Date',
  'timedelta[ns]': 'Time difference',
  'datetime64[ns]': 'Date',
  int64: 'Integer',
  int32: 'Integer',
  int16: 'Integer',
  int8: 'Integer',
  float64: 'Float',
  float32: 'Float',
  bool: 'Boolean',
  category: 'Category',
  complex: 'Complex',
};

export const DataTypeToMUITypes: Record<DataType, MUIName> = {
  object: 'string',
  datetime64: 'string',
  'timedelta[ns]': 'string',
  'datetime64[ns]': 'string',
  int64: 'number',
  int32: 'number',
  int16: 'number',
  int8: 'number',
  float64: 'number',
  float32: 'number',
  bool: 'boolean',
  category: 'string',
  complex: 'string',
};
