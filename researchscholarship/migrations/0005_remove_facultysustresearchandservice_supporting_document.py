# Generated by Django 4.0.3 on 2022-03-21 23:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('researchscholarship', '0004_alter_facultysustresearchandservice_supporting_document'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='facultysustresearchandservice',
            name='supporting_document',
        ),
    ]
