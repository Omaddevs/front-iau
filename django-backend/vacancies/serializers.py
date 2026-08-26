from rest_framework import serializers
from .models import Vacancy


class VacancySerializer(serializers.ModelSerializer):
    employmentType = serializers.CharField(source="employment_type")
    applyEmail = serializers.EmailField(source="apply_email")
    isPublished = serializers.BooleanField(source="is_published")
    date = serializers.DateField(format="%Y-%m-%d")
    deadline = serializers.DateField(format="%Y-%m-%d")

    class Meta:
        model = Vacancy
        fields = (
            "id",
            "title",
            "slug",
            "department",
            "employmentType",
            "location",
            "deadline",
            "date",
            "summary",
            "description",
            "requirements",
            "applyEmail",
            "views",
            "isPublished",
        )
