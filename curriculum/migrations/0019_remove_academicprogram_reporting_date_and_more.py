# Generated by Django 4.0.3 on 2022-05-09 07:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('curriculum', '0018_rename_year_offered_academiccourse_reporting_academic_year_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='academicprogram',
            name='reporting_date',
        ),
        migrations.RemoveField(
            model_name='academicprogram',
            name='semester_offered',
        ),
        migrations.AddField(
            model_name='academicprogram',
            name='reporting_academic_year',
            field=models.CharField(default='FY22', max_length=20),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='campusaslivinglab',
            name='academic_year',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
