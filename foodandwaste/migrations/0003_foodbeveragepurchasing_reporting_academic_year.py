# Generated by Django 4.0.3 on 2022-05-09 14:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('foodandwaste', '0002_remove_foodbeveragepurchasing_reporting_period_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='foodbeveragepurchasing',
            name='reporting_academic_year',
            field=models.CharField(default='FY22', max_length=20),
            preserve_default=False,
        ),
    ]
