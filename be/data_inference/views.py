from rest_framework import status
from rest_framework.parsers import FormParser, MultiPartParser
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import FileUploadSerializer
from .utils.data_utils import infer_and_convert_data_types

# import pandas as pd
from json import loads


class DataInferenceUploadAPIView(APIView):
    parser_classes = (MultiPartParser, FormParser)
    serializer_class = FileUploadSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            # you can access the file like this from serializer
            uploaded_file = serializer.validated_data["file"]
            print("type", uploaded_file.content_type)
            processed = infer_and_convert_data_types(
                uploaded_file, uploaded_file.content_type
            )
            # df = pd.read_csv(uploaded_file)
            # processed = self.infer_and_convert_data_types(df)
            # Check if an 'id' column exists, and if not, add it
            if "id" not in processed.columns:
                # Reset the index and use the new index as the 'id' column
                processed = processed.reset_index().rename(columns={"index": "id"})

            serializer.save()
            return Response(
                data={
                    "rows": loads(processed.to_json(orient="records")),
                    "columns": processed.dtypes.astype(str).to_dict(),
                },
                status=status.HTTP_201_CREATED,
            )

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # def infer_and_convert_data_types(self, df):
    #     for col in df.columns:
    #         # Attempt to convert to numeric first
    #         df_converted = pd.to_numeric(df[col], errors="coerce")
    #         if not df_converted.isna().all():  # If at least one value is numeric
    #             df[col] = df_converted
    #             continue

    #         # Attempt to convert to datetime
    #         try:
    #             df[col] = pd.to_datetime(df[col])
    #             continue
    #         except (ValueError, TypeError):
    #             pass

    #         # Check if the column should be categorical
    #         if (
    #             len(df[col].unique()) / len(df[col]) < 0.5
    #         ):  # Example threshold for categorization
    #             df[col] = pd.Categorical(df[col])

    #     return df
