# Generated by Django 5.0.2 on 2024-02-17 14:46

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Work',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False, unique=True)),
                ('title', models.CharField(max_length=100)),
                ('slug', models.SlugField(unique=True)),
                ('category', models.CharField(choices=[('agriculture', 'Agriculture'), ('biodiversity', 'Biodiversity'), ('water', 'Water'), ('facility', 'Facility')], default='agriculture', max_length=20)),
                ('software', models.TextField()),
                ('release_date', models.DateField()),
                ('is_published', models.BooleanField(default=False, help_text='Publish Status', verbose_name='Publish Status')),
                ('image', models.ImageField(blank=True, default='default.png', upload_to='')),
            ],
            options={
                'verbose_name': 'Works',
                'verbose_name_plural': 'Works',
                'db_table': 'works',
                'ordering': ['title'],
            },
        ),
    ]
