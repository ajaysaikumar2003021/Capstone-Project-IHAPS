# Generated by Django 4.0.3 on 2022-03-21 23:39

from django.db import migrations, models
import researchscholarship.models


class Migration(migrations.Migration):

    dependencies = [
        ('researchscholarship', '0003_alter_facultysustresearchandservice_supporting_document'),
    ]

    operations = [
        migrations.AlterField(
            model_name='facultysustresearchandservice',
            name='supporting_document',
            field=models.FileField(blank=True, null=True, upload_to=researchscholarship.models.upload_file),
        ),
    ]
