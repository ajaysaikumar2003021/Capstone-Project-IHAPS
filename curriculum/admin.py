from django.contrib import admin
# from .models import POC, AcadmeicCourse, AcadmeicProgram, CampusAsLivingLab, FacultySustResearchAndService, PeerToPeerOutreach, StudentSustGrpProgInitiative, ContinuingEducationCourse, StaffProfessionalDevelopment, CommunityEducationProgram, CommunityPartnership
from . import models

# Register your models here.

# admin.site.register(models.POC)
admin.site.register(models.AcademicCourse)
admin.site.register(models.AcademicProgram)
admin.site.register(models.CampusAsLivingLab)








