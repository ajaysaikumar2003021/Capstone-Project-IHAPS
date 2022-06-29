# Generated by Django 4.0.3 on 2022-04-16 03:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('curriculum', '0015_academiccourse_created_at_academiccourse_updated_at_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='academiccourse',
            name='created_at',
        ),
        migrations.RemoveField(
            model_name='academicprogram',
            name='created_at',
        ),
        migrations.RemoveField(
            model_name='campusaslivinglab',
            name='created_at',
        ),
        migrations.AlterField(
            model_name='academiccourse',
            name='updated_at',
            field=models.DateTimeField(auto_now=True, default=None),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='academicprogram',
            name='updated_at',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AlterField(
            model_name='campusaslivinglab',
            name='updated_at',
            field=models.DateTimeField(auto_now=True),
        ),
    ]