from rest_framework import serializers
from .models import EkofaolNews, EkofaolNewsImage


class EkofaolNewsImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = EkofaolNewsImage
        fields = ("id", "image", "caption")


class EkofaolNewsSerializer(serializers.ModelSerializer):
    gallery_images = EkofaolNewsImageSerializer(many=True, read_only=True)
    date = serializers.DateField(format="%Y-%m-%d")

    class Meta:
        model = EkofaolNews
        fields = (
            "id",
            "title",
            "slug",
            "text",
            "body",
            "date",
            "views",
            "img",
            "gallery_images",
            "is_published",
        )
