# Generated by Django 4.0.3 on 2022-05-09 16:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('campusandcommunity', '0014_rename_college_or_unit_continuingeducationcourse_host_unit_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='staffprofessionaldevelopment',
            name='externally_funded',
            field=models.CharField(default='internally_funded', max_length=100),
            preserve_default=False,
        ),
    ]
