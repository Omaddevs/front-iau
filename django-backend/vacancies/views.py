from rest_framework import generics
from rest_framework.pagination import PageNumberPagination
from .models import Vacancy
from .serializers import VacancySerializer


class VacancyPagination(PageNumberPagination):
    page_size = 12
    page_size_query_param = "page_size"
    max_page_size = 50


class VacancyListAPIView(generics.ListAPIView):
    serializer_class = VacancySerializer
    pagination_class = VacancyPagination

    def get_queryset(self):
        queryset = Vacancy.objects.filter(is_published=True)
        search = self.request.query_params.get("search")
        if search:
            queryset = queryset.filter(title__icontains=search)
        return queryset


class VacancyDetailAPIView(generics.RetrieveAPIView):
    queryset = Vacancy.objects.filter(is_published=True)
    serializer_class = VacancySerializer

    def get_object(self):
        obj = super().get_object()
        obj.views = obj.views + 1
        obj.save(update_fields=["views"])
        return obj
