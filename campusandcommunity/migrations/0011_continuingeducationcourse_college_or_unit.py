# Generated by Django 4.0.3 on 2022-04-18 05:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('campusandcommunity', '0010_communityeducationprogram_updated_at_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='continuingeducationcourse',
            name='college_or_unit',
            field=models.CharField(max_length=255, null=True),
        ),
    ]
