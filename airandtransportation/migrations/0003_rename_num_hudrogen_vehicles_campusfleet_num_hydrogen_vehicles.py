# Generated by Django 4.0.3 on 2022-03-18 18:19

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('airandtransportation', '0002_rename_cum_hudrogen_vehicles_campusfleet_num_hudrogen_vehicles'),
    ]

    operations = [
        migrations.RenameField(
            model_name='campusfleet',
            old_name='num_hudrogen_vehicles',
            new_name='num_hydrogen_vehicles',
        ),
    ]