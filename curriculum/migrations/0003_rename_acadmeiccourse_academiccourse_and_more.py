# Generated by Django 4.0.3 on 2022-03-17 21:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('curriculum', '0002_studentsustgrpproginitiative'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='AcadmeicCourse',
            new_name='AcademicCourse',
        ),
        migrations.RenameModel(
            old_name='AcadmeicProgram',
            new_name='AcademicProgram',
        ),
    ]
