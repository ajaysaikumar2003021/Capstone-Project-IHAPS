# Generated by Django 4.0.3 on 2022-03-28 04:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('researchscholarship', '0008_facultysustresearchandservice_supporting_document'),
    ]

    operations = [
        migrations.AlterField(
            model_name='facultysustresearchandservice',
            name='reporting_date',
            field=models.DateField(auto_now_add=True, null=True),
        ),
    ]
