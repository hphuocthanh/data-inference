from django.urls import path
from .views import DataInferenceUploadAPIView

app_name = "data-inference"

urlpatterns = [
    path("upload", DataInferenceUploadAPIView.as_view(), name="upload-file"),
    path("upload/", DataInferenceUploadAPIView.as_view(), name="upload-file"),
]
