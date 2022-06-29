# Generated by Django 4.0.3 on 2022-03-17 23:02

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CampusFleet',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('reporting_period', models.CharField(max_length=100)),
                ('num_vechicles', models.IntegerField()),
                ('num_gasoline_vehicles', models.IntegerField()),
                ('num_diesel_vehicles', models.IntegerField()),
                ('num_gasoline_hybrid_vehicles', models.IntegerField()),
                ('num_diesel_hybrid_vehicles', models.IntegerField()),
                ('num_plugin_hybrid_vehicles', models.IntegerField()),
                ('num_electric_vehicles', models.IntegerField()),
                ('num_cng_vehicles', models.IntegerField()),
                ('cum_hudrogen_vehicles', models.IntegerField()),
                ('num_b20_vehicles', models.IntegerField()),
                ('num_b5_vehicles', models.IntegerField()),
                ('campus_fleet_title', models.CharField(max_length=100, unique=True)),
            ],
        ),
    ]