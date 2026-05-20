from rest_framework import generics
from rest_framework.pagination import PageNumberPagination
from .models import EkofaolNews
from .serializers import EkofaolNewsSerializer


class EkofaolPagination(PageNumberPagination):
    page_size = 8
    page_size_query_param = "page_size"
    max_page_size = 50


class EkofaolNewsListAPIView(generics.ListAPIView):
    serializer_class = EkofaolNewsSerializer
    pagination_class = EkofaolPagination

    def get_queryset(self):
        queryset = EkofaolNews.objects.filter(is_published=True)
        search = self.request.query_params.get("search")
        if search:
            queryset = queryset.filter(title__icontains=search)
        return queryset


class EkofaolNewsDetailAPIView(generics.RetrieveAPIView):
    queryset = EkofaolNews.objects.filter(is_published=True)
    serializer_class = EkofaolNewsSerializer

    def get_object(self):
        obj = super().get_object()
        obj.views = obj.views + 1
        obj.save(update_fields=["views"])
        return obj
