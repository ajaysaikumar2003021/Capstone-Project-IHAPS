# Generated by Django 4.0.3 on 2022-03-27 23:34

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('curriculum', '0005_alter_academicprogram_adopted_sust_focused_learning_outcome'),
    ]

    operations = [
        migrations.RenameField(
            model_name='academicprogram',
            old_name='reporting_date',
            new_name='academic_year',
        ),
    ]
