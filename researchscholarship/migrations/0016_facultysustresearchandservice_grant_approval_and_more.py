# Generated by Django 4.0.3 on 2022-06-22 14:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('researchscholarship', '0015_remove_facultysustresearchandservice_department_affiliation_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='facultysustresearchandservice',
            name='grant_approval',
            field=models.CharField(max_length=10, null=True),
        ),
        migrations.AddField(
            model_name='facultysustresearchandservice',
            name='key_words',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]