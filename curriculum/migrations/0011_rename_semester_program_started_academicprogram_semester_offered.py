# Generated by Django 4.0.3 on 2022-03-29 23:45

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('curriculum', '0010_remove_academicprogram_academic_year_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='academicprogram',
            old_name='semester_program_started',
            new_name='semester_offered',
        ),
    ]