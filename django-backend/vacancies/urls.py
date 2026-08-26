from django.urls import path
from .views import VacancyDetailAPIView, VacancyListAPIView

urlpatterns = [
    path("vacancies/", VacancyListAPIView.as_view(), name="vacancies-list"),
    path("vacancies/<int:pk>/", VacancyDetailAPIView.as_view(), name="vacancies-detail"),
]
