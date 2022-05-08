from django.db import models
# from curriculum.models import POC
# Create your models here.

def upload_file(instance, filename):
    return '/media'.join([str("CampusandCommunity"), filename])


#  PTPO
class PeerToPeerOutreach(models.Model):
    reporting_date = models.CharField(max_length=10, null=True)
    peer_to_peer_outreach_type = models.TextField(max_length=100)
    peer_to_peer_outreach_title = models.CharField(max_length=100, unique=True)
    poc_name = models.CharField(max_length=255, blank=True, null=True)
    poc_email = models.EmailField(max_length=255, blank=True, null=True)
    poc_phone = models.CharField(max_length=255, blank=True, null=True)
    description = models.CharField(max_length=255)
    educators_training = models.CharField(max_length=255)
    target_audience = models.CharField(max_length=255)
    program_starting_date = models.DateField()
    program_status = models.CharField(max_length=10)
    num_actively_trained_educators = models.IntegerField()
    num_weeks_program_is_active_annually = models.IntegerField()
    num_hours_worked_weekly_per_trained_educators = models.IntegerField()
    num_hours_worked_annualy_by_trained_educators = models.IntegerField()
    program_url = models.URLField(max_length=255, null=True, blank=True)
    supporting_document = models.FileField(null=True, blank=True, upload_to=upload_file)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.peer_to_peer_outreach_title

# SSGPI
class StudentSustGrpProgInitiative(models.Model):
    reporting_date = models.DateField()
    student_sust_grp_prog_initiative_type = models.CharField(max_length=500) # length needs to be verified
    student_sust_grp_prog_initiative_title = models.CharField(max_length=100, unique=True)
    description = models.CharField(max_length=255)
    poc_name = models.CharField(max_length=255, blank=True, null=True)
    poc_email = models.EmailField(max_length=255, blank=True, null=True)
    poc_phone = models.CharField(max_length=255, blank=True, null=True)
    target_audience = models.CharField(max_length=255)
    description_of_measureable_impacts = models.CharField(max_length=255)
    supporting_outreach_materials = models.BooleanField(default=False)
    supporting_outreach_materials_description = models.CharField(max_length=255, null=True, blank=True)
    student_sust_grp_prog_initiative_url = models.URLField(max_length=255, null=True, blank=True)
    supporting_document = models.FileField(null=True, blank=True, upload_to=upload_file)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.student_sust_grp_prog_initiative_title

# CEC
class ContinuingEducationCourse(models.Model):
    reporting_date = models.DateField()
    continuing_education_course_title = models.CharField(max_length=100, unique=True)
    college_or_unit = models.CharField(max_length=255, null=True)
    department = models.CharField(max_length=100)
    course_description = models.CharField(max_length=255)
    course_type = models.CharField(max_length=100)
    semester_offered = models.CharField(max_length=15)
    academic_year = models.CharField(max_length=10)

    def __str__(self):
        return self.continuing_education_course_title

# SPD
class StaffProfessionalDevelopment(models.Model):
    reporting_date = models.DateField()
    staff_professional_development_title = models.CharField(max_length=100, unique=True)
    description = models.CharField(max_length=255)
    dates_offered = models.CharField(max_length=100)
    num_of_staff_participants = models.IntegerField()
    internally_or_externally_funded = models.CharField(max_length=100)
    poc_name = models.CharField(max_length=255, blank=True, null=True)
    poc_email = models.EmailField(max_length=255, blank=True, null=True)
    poc_phone = models.CharField(max_length=255, blank=True, null=True)
    staff_professional_development_url = models.URLField(max_length=255, null=True, blank=True)
    supporting_document = models.FileField(null=True, blank=True, upload_to=upload_file)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.staff_professional_development_title

# CEP
class CommunityEducationProgram(models.Model):
    reporting_date = models.DateField()
    ce_program_title = models.CharField(max_length=100, unique=True)
    description = models.CharField(max_length=255)
    poc_name = models.CharField(max_length=255, blank=True, null=True)
    poc_email = models.EmailField(max_length=255, blank=True, null=True)
    poc_phone = models.CharField(max_length=255, blank=True, null=True)
    semester_program_started = models.CharField(max_length=100)
    year_program_started = models.CharField(max_length=10)
    program_status = models.CharField(max_length=10)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.ce_program_title

# CP
class CommunityPartnership(models.Model):
    reporting_date = models.DateField()
    community_partnership_title = models.CharField(max_length=100, unique=True)
    description = models.CharField(max_length=255)
    supported = models.BooleanField(default=False)
    timeframe = models.CharField(max_length=50)
    type_of_partnership = models.CharField(max_length=100)
    vulnerable_population_engagement = models.BooleanField(default=True)
    poc_name = models.CharField(max_length=255, blank=True, null=True)
    poc_email = models.EmailField(max_length=255, blank=True, null=True)
    poc_phone = models.CharField(max_length=255, blank=True, null=True)    
    community_partnership_url = models.URLField(max_length=255, null=True, blank=True)
    # supporting_doc = models.CharField(max_length=255, null=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.community_partnership_title
