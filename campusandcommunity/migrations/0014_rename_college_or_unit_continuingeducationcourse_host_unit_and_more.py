# Generated by Django 4.0.3 on 2022-05-09 16:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('campusandcommunity', '0013_remove_communityeducationprogram_reporting_date_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='continuingeducationcourse',
            old_name='college_or_unit',
            new_name='host_unit',
        ),
        migrations.RenameField(
            model_name='continuingeducationcourse',
            old_name='semester_offered',
            new_name='num_of_times_course_offered',
        ),
        migrations.RemoveField(
            model_name='communityeducationprogram',
            name='program_status',
        ),
        migrations.RemoveField(
            model_name='communityeducationprogram',
            name='semester_program_started',
        ),
        migrations.RemoveField(
            model_name='continuingeducationcourse',
            name='academic_year',
        ),
        migrations.RemoveField(
            model_name='continuingeducationcourse',
            name='department',
        ),
        migrations.AddField(
            model_name='communityeducationprogram',
            name='dates_offered',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='communityeducationprogram',
            name='year_program_started',
            field=models.CharField(max_length=255),
        ),
    ]
