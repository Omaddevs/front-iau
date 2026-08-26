from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Vacancy",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("title", models.CharField(max_length=255)),
                ("slug", models.SlugField(unique=True)),
                ("department", models.CharField(blank=True, max_length=255)),
                (
                    "employment_type",
                    models.CharField(
                        choices=[
                            ("fullTime", "Full-time"),
                            ("partTime", "Part-time"),
                            ("contract", "Contract"),
                            ("academic", "Academic"),
                        ],
                        default="fullTime",
                        max_length=32,
                    ),
                ),
                ("location", models.CharField(default="Kibray, Tashkent region", max_length=255)),
                ("deadline", models.DateField()),
                ("date", models.DateField()),
                ("summary", models.TextField()),
                ("description", models.TextField()),
                ("requirements", models.TextField(blank=True)),
                ("apply_email", models.EmailField(default="info@iau.uz", max_length=254)),
                ("views", models.PositiveIntegerField(default=0)),
                ("is_published", models.BooleanField(default=True)),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now=True)),
            ],
            options={
                "verbose_name": "Vacancy",
                "verbose_name_plural": "Vacancies",
                "ordering": ["-date", "-id"],
            },
        ),
    ]
