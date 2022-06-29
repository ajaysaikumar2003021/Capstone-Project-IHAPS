# Generated by Django 4.0.3 on 2022-06-24 13:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('curriculum', '0020_rename_academic_year_campusaslivinglab_reporting_academic_year'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='academiccourse',
            name='reporting_academic_year',
        ),
        migrations.RemoveField(
            model_name='academicprogram',
            name='reporting_academic_year',
        ),
        migrations.RemoveField(
            model_name='campusaslivinglab',
            name='reporting_academic_year',
        ),
        migrations.AddField(
            model_name='academiccourse',
            name='reporting_end_date',
            field=models.DateField(null=True),
        ),
        migrations.AddField(
            model_name='academiccourse',
            name='reporting_start_date',
            field=models.DateField(null=True),
        ),
        migrations.AddField(
            model_name='academicprogram',
            name='reporting_end_date',
            field=models.DateField(null=True),
        ),
        migrations.AddField(
            model_name='academicprogram',
            name='reporting_start_date',
            field=models.DateField(null=True),
        ),
        migrations.AddField(
            model_name='campusaslivinglab',
            name='reporting_end_date',
            field=models.DateField(null=True),
        ),
        migrations.AddField(
            model_name='campusaslivinglab',
            name='reporting_start_date',
            field=models.DateField(null=True),
        ),
    ]
