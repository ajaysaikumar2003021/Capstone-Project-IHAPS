from django.db import models

# Create your models here.

class FoodBeveragePurchasing(models.Model):
    product_name = models.CharField(max_length=100)
    product_type = models.CharField(max_length=100)
    single_ingredient = models.BooleanField(default=False)
    product_description = models.CharField(max_length=255)
    recognized_standard_met = models.CharField(max_length=255)
    sfsc = models.BooleanField(default=False)
    reporting_period_start_date = models.DateField(null=True)
    reporting_period_end_date = models.DateField(null=True)
    expenditure = models.CharField(max_length=15)
    food_service_provider = models.CharField(max_length=150)

    def __str__(self):
        return self.product_name
        