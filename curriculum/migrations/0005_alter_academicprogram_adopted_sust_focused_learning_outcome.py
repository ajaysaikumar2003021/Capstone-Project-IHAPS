# Generated by Django 4.0.3 on 2022-03-24 21:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('curriculum', '0004_delete_campusfleet_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='academicprogram',
            name='adopted_sust_focused_learning_outcome',
            field=models.BooleanField(default=False),
        ),
    ]
