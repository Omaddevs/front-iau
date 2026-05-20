from django.db import models


class EkofaolNews(models.Model):
    title = models.CharField(max_length=255)
    slug = models.SlugField(unique=True)
    text = models.TextField(blank=True)
    body = models.TextField(blank=True)
    date = models.DateField()
    views = models.PositiveIntegerField(default=0)
    img = models.ImageField(upload_to="ekofaol/covers/", blank=True, null=True)
    is_published = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-date", "-id"]
        verbose_name = "Ekofaol news"
        verbose_name_plural = "Ekofaol news"

    def __str__(self):
        return self.title


class EkofaolNewsImage(models.Model):
    news = models.ForeignKey(EkofaolNews, related_name="gallery_images", on_delete=models.CASCADE)
    image = models.ImageField(upload_to="ekofaol/gallery/")
    caption = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return f"{self.news.title} image"
