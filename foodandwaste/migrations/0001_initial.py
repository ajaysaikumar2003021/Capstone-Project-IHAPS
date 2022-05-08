# Generated by Django 4.0.3 on 2022-03-17 23:02

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='FoodBeveragePurchasing',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('product_name', models.CharField(max_length=100)),
                ('product_type', models.CharField(max_length=100)),
                ('single_ingredient', models.BooleanField(default=False)),
                ('product_description', models.CharField(max_length=255)),
                ('recognized_standard_met', models.CharField(max_length=255)),
                ('sfsc', models.BooleanField(default=False)),
                ('reporting_period', models.CharField(max_length=255)),
                ('expenditure', models.CharField(max_length=15)),
                ('food_service_provider', models.CharField(max_length=150)),
            ],
        ),
    ]
