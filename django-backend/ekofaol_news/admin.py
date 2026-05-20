from django.contrib import admin
from .models import EkofaolNews, EkofaolNewsImage


class EkofaolNewsImageInline(admin.TabularInline):
    model = EkofaolNewsImage
    extra = 1


@admin.register(EkofaolNews)
class EkofaolNewsAdmin(admin.ModelAdmin):
    list_display = ("title", "date", "is_published", "views")
    list_filter = ("is_published", "date")
    search_fields = ("title", "text", "body")
    prepopulated_fields = {"slug": ("title",)}
    inlines = [EkofaolNewsImageInline]
