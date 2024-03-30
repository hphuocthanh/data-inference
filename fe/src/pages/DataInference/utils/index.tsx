import { ReactNode } from 'react';
import { DataType, DataTypeToMUITypes, DataTypeToUserFriendlyName } from './constants';
import { GridValueGetter } from '@mui/x-data-grid';
import dayjs from 'dayjs';

export const getColumnsFromResponse = (response: any) => {
  const columns = response.columns;

  return Object.entries(columns).map(([columnName, type]) => ({
    field: columnName,
    label: columnName,
    type: mapDTypesToMUIType(type as DataType),
    valueGetter: (value: any) => {
      if (mapDTypesToLabel(type as DataType) == 'Date' || mapDTypesToLabel(type as DataType) == 'Date') {
        // console.log('params',params);
        return dayjs(value).format('DD/MM/YYYY');
      }
      return value;
    },
    renderHeader: () => (
      <div>
        <div>{columnName}</div>
        <div style={{ fontSize: 'smaller', color: 'gray' }}>{mapDTypesToLabel(type as DataType)}</div>
      </div>
    ),
  }));
};

export const getDTypesFromResponse = (response: any): string[] => {
  const columns = response.columns;
  return Object.values(columns);
};

export const mapDTypesToLabel = (dtype: DataType) => {
  return DataTypeToUserFriendlyName[dtype] || 'Unknown';
};
export const mapDTypesToMUIType = (dtype: DataType) => {
  return DataTypeToMUITypes[dtype] || 'string';
};
export const getRowsFromResponse = (response: any) => response.rows;
