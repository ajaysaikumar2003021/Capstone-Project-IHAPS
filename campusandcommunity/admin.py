from django.contrib import admin
# from .models import POC, AcadmeicCourse, AcadmeicProgram, CampusAsLivingLab, FacultySustResearchAndService, PeerToPeerOutreach, StudentSustGrpProgInitiative, ContinuingEducationCourse, StaffProfessionalDevelopment, CommunityEducationProgram, CommunityPartnership
from . import models

# Register your models here.


admin.site.register(models.PeerToPeerOutreach)
admin.site.register(models.StudentSustGrpProgInitiative)
admin.site.register(models.ContinuingEducationCourse)
admin.site.register(models.StaffProfessionalDevelopment)
admin.site.register(models.CommunityEducationProgram)
admin.site.register(models.CommunityPartnership)









