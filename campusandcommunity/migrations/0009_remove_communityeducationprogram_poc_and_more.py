# Generated by Django 4.0.3 on 2022-04-15 18:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('campusandcommunity', '0008_remove_peertopeeroutreach_supporting_doc_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='communityeducationprogram',
            name='poc',
        ),
        migrations.RemoveField(
            model_name='communitypartnership',
            name='poc',
        ),
        migrations.RemoveField(
            model_name='peertopeeroutreach',
            name='poc',
        ),
        migrations.RemoveField(
            model_name='staffprofessionaldevelopment',
            name='poc',
        ),
        migrations.RemoveField(
            model_name='studentsustgrpproginitiative',
            name='poc',
        ),
        migrations.AddField(
            model_name='communityeducationprogram',
            name='poc_email',
            field=models.EmailField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='communityeducationprogram',
            name='poc_name',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='communityeducationprogram',
            name='poc_phone',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='communitypartnership',
            name='poc_email',
            field=models.EmailField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='communitypartnership',
            name='poc_name',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='communitypartnership',
            name='poc_phone',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='peertopeeroutreach',
            name='poc_email',
            field=models.EmailField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='peertopeeroutreach',
            name='poc_name',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='peertopeeroutreach',
            name='poc_phone',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='staffprofessionaldevelopment',
            name='poc_email',
            field=models.EmailField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='staffprofessionaldevelopment',
            name='poc_name',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='staffprofessionaldevelopment',
            name='poc_phone',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='studentsustgrpproginitiative',
            name='poc_email',
            field=models.EmailField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='studentsustgrpproginitiative',
            name='poc_name',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='studentsustgrpproginitiative',
            name='poc_phone',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
