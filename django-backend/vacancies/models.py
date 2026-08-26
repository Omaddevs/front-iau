from django.db import models


class Vacancy(models.Model):
    EMPLOYMENT_CHOICES = [
        ("fullTime", "Full-time"),
        ("partTime", "Part-time"),
        ("contract", "Contract"),
        ("academic", "Academic"),
    ]

    title = models.CharField(max_length=255)
    slug = models.SlugField(unique=True)
    department = models.CharField(max_length=255, blank=True)
    employment_type = models.CharField(max_length=32, choices=EMPLOYMENT_CHOICES, default="fullTime")
    location = models.CharField(max_length=255, default="Kibray, Tashkent region")
    deadline = models.DateField()
    date = models.DateField()
    summary = models.TextField()
    description = models.TextField()
    requirements = models.TextField(blank=True)
    apply_email = models.EmailField(default="info@iau.uz")
    views = models.PositiveIntegerField(default=0)
    is_published = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-date", "-id"]
        verbose_name = "Vacancy"
        verbose_name_plural = "Vacancies"

    def __str__(self):
        return self.title
