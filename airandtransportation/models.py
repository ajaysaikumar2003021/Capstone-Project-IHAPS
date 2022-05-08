from django.db import models

# Create your models here.
class CampusFleet(models.Model):
    # reporting_period_start_date = models.CharField(max_length=100)
    reporting_period_start_date = models.DateField(null=True, blank=True)
    reporting_period_end_date = models.DateField(null=True, blank=True)
    # campus_fleet_title = models.CharField(max_length=100, unique=True)
    num_vechicles = models.IntegerField()
    num_gasoline_vehicles = models.IntegerField()
    num_diesel_vehicles = models.IntegerField()
    num_gasoline_hybrid_vehicles = models.IntegerField()
    num_diesel_hybrid_vehicles = models.IntegerField()
    num_plugin_hybrid_vehicles = models.IntegerField()
    num_electric_vehicles = models.IntegerField()
    num_cng_vehicles = models.IntegerField()
    num_hydrogen_vehicles = models.IntegerField()
    num_b20_vehicles = models.IntegerField()
    num_b5_vehicles = models.IntegerField() 
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return str(self.reporting_period_start_date)
