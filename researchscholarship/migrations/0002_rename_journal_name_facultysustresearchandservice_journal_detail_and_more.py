# Generated by Django 4.0.3 on 2022-03-21 22:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('researchscholarship', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='facultysustresearchandservice',
            old_name='journal_name',
            new_name='journal_detail',
        ),
        migrations.RenameField(
            model_name='facultysustresearchandservice',
            old_name='research_published',
            new_name='peer_reviewed_journal',
        ),
        migrations.RemoveField(
            model_name='facultysustresearchandservice',
            name='publication_date',
        ),
        migrations.RemoveField(
            model_name='facultysustresearchandservice',
            name='publication_title',
        ),
        migrations.AddField(
            model_name='facultysustresearchandservice',
            name='served_higher_edu',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='facultysustresearchandservice',
            name='supporting_document',
            field=models.FileField(blank=True, null=True, upload_to='media/'),
        ),
    ]
