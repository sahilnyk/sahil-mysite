# Generated by Django 3.2 on 2024-12-30 18:47

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('link', models.URLField()),
                ('image', models.ImageField(blank=True, null=True, upload_to='project_image/')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('upvotes', models.PositiveIntegerField(default=0)),
                ('downvotes', models.PositiveIntegerField(default=0)),
                ('author', models.CharField(max_length=100)),
                ('category', models.CharField(choices=[('website-apis', 'website-apis'), ('ml/ai/dl', 'ml/ai/dl'), ('EDA', 'EDA'), ('computer vision', 'computer vision'), ('quant', 'quant'), ('Other', 'Other')], default='Other', max_length=100)),
            ],
        ),
    ]