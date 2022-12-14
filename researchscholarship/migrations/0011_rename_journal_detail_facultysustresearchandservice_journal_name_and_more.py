# Generated by Django 4.0.3 on 2022-04-15 18:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('researchscholarship', '0010_alter_facultysustresearchandservice_reporting_date'),
    ]

    operations = [
        migrations.RenameField(
            model_name='facultysustresearchandservice',
            old_name='journal_detail',
            new_name='journal_name',
        ),
        migrations.AddField(
            model_name='facultysustresearchandservice',
            name='date_of_publication',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='facultysustresearchandservice',
            name='publication_title',
            field=models.CharField(blank=True, max_length=30, null=True),
        ),
    ]
