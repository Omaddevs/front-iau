from django.contrib import admin
from .models import Vacancy


@admin.register(Vacancy)
class VacancyAdmin(admin.ModelAdmin):
    list_display = ("title", "department", "employment_type", "deadline", "is_published")
    list_filter = ("is_published", "employment_type", "deadline")
    search_fields = ("title", "department", "summary", "description")
    prepopulated_fields = {"slug": ("title",)}
