# Generated by Django 4.0.3 on 2022-05-09 14:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('airandtransportation', '0006_campusfleet_updated_at'),
    ]

    operations = [
        migrations.AddField(
            model_name='campusfleet',
            name='reporting_academic_year',
            field=models.CharField(default='FY22', max_length=20),
            preserve_default=False,
        ),
    ]
