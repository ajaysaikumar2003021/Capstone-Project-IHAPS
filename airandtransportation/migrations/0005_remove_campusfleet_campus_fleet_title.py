# Generated by Django 4.0.3 on 2022-03-21 18:58

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('airandtransportation', '0004_remove_campusfleet_reporting_period_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='campusfleet',
            name='campus_fleet_title',
        ),
    ]
