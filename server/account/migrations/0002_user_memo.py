# Generated by Django 3.2.11 on 2022-01-15 12:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='memo',
            field=models.CharField(default='', max_length=200),
        ),
    ]
