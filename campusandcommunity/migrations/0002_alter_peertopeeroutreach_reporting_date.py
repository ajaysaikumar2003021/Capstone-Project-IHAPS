# Generated by Django 4.0.3 on 2022-03-28 15:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('campusandcommunity', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='peertopeeroutreach',
            name='reporting_date',
            field=models.DateField(null=True),
        ),
    ]
