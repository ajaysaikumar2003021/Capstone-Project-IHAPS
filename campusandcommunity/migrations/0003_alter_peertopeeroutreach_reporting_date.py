# Generated by Django 4.0.3 on 2022-03-28 16:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('campusandcommunity', '0002_alter_peertopeeroutreach_reporting_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='peertopeeroutreach',
            name='reporting_date',
            field=models.CharField(max_length=10, null=True),
        ),
    ]