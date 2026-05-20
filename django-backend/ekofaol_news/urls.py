from django.urls import path
from .views import EkofaolNewsDetailAPIView, EkofaolNewsListAPIView

urlpatterns = [
    path("ekofaol-news/", EkofaolNewsListAPIView.as_view(), name="ekofaol-news-list"),
    path("ekofaol-news/<int:pk>/", EkofaolNewsDetailAPIView.as_view(), name="ekofaol-news-detail"),
]
