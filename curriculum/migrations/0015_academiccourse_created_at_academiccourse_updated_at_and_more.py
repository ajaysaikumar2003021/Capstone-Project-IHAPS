# Generated by Django 4.0.3 on 2022-04-16 03:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('curriculum', '0014_remove_academicprogram_poc_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='academiccourse',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
        migrations.AddField(
            model_name='academiccourse',
            name='updated_at',
            field=models.DateTimeField(auto_now=True, null=True),
        ),
        migrations.AddField(
            model_name='academicprogram',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
        migrations.AddField(
            model_name='academicprogram',
            name='updated_at',
            field=models.DateTimeField(auto_now=True, null=True),
        ),
        migrations.AddField(
            model_name='campusaslivinglab',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
        migrations.AddField(
            model_name='campusaslivinglab',
            name='updated_at',
            field=models.DateTimeField(auto_now=True, null=True),
        ),
    ]