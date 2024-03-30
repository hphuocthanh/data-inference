import pandas as pd
import numpy as np


def infer_and_convert_data_types(file_path, file_type, chunk_size=None):
    # Determine if the file is CSV or Excel to use the appropriate Pandas function
    if file_type == "text/csv":
        read_func = pd.read_csv
    elif (
        file_type == "application/vnd.ms-excel"
        or file_type
        == "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ):
        read_func = pd.read_excel
    else:
        raise ValueError("Unsupported file format. Please provide a CSV or Excel file.")

    if chunk_size:
        reader = read_func(file_path, chunksize=chunk_size)
    else:
        reader = [read_func(file_path)]

    processed_chunks = []
    for df in reader:
        df = df.infer_objects()

        for col in df.columns:
            # Check and convert integer and float types
            if df[col].dtype in ["int64", "float64"]:
                converted_col = pd.to_numeric(
                    df[col], downcast="integer" if df[col].dtype == "int64" else "float"
                )
                # Only replace if downcasting was successful and changed the type
                if converted_col.dtype != df[col].dtype:
                    df[col] = converted_col

            # Handle object type columns for datetime, numeric, or categorical conversion
            elif df[col].dtype == "object":
                # Attempt to convert to datetime
                converted_col = pd.to_datetime(df[col], errors="coerce")
                if not converted_col.isna().all():  # Successful datetime conversion
                    df[col] = converted_col
                else:
                    # Attempt to convert to numeric
                    converted_col = pd.to_numeric(df[col], errors="coerce")
                    if not converted_col.isna().all():  # Successful numeric conversion
                        df[col] = converted_col
                    else:
                        # Consider conversion to categorical if a significant portion of values are unique
                        unique_ratio = df[col].nunique() / len(df[col])
                        if unique_ratio < 0.5:  # Arbitrary threshold for categorization
                            df[col] = pd.Categorical(df[col])

        processed_chunks.append(df)

    final_df = pd.concat(processed_chunks) if chunk_size else processed_chunks[0]
    return final_df
