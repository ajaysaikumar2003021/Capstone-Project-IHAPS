from django.db import models

# Create your models here.

app_name = 'curriculum'

def upload_file(instance, filename):
    return '/media'.join([str(instance.project_name), filename])

# curriculum models
# class POC(models.Model):
#     name = models.CharField(max_length=100, unique=True)
#     email = models.EmailField(max_length=100, unique=True)
#     phone = models.CharField(max_length=100, unique=True)
#     created_at = models.DateTimeField(auto_now_add=True)
#     updated_at = models.DateTimeField(auto_now=True)

#     def __str__(self):
#         return self.name

class AcademicCourse(models.Model):
    id = models.AutoField(primary_key=True)
    sust_course_title = models.CharField(max_length=255, unique=True)
    college_or_unit = models.CharField(max_length=50, null=True)
    department = models.CharField(max_length=100, null=True)
    level_of_course = models.CharField(max_length=30)
    description = models.CharField(max_length=255)
    course_type = models.CharField(max_length=50)
    semester_offered = models.CharField(max_length=50)
    year_offered = models.CharField(max_length=10)
    updated_at = models.DateTimeField(auto_now=True)
    def __str__(self):
        return self.sust_course_title

class AcademicProgram(models.Model):
    id = models.AutoField(primary_key=True)
    sust_focused_academic_program = models.CharField(max_length=255, unique=True)
    college_or_unit = models.CharField(max_length=50, null=True)
    department = models.CharField(max_length=100, null=True)
    level_of_program = models.CharField(max_length=30)
    program_type = models.CharField(max_length=50)
    description = models.CharField(max_length=255)
    website_url = models.URLField(max_length=255, null=True, blank=True)
    # program_poc = models.CharField(max_length=255)
    # poc = models.ForeignKey(POC, on_delete=models.CASCADE)
    poc_name = models.CharField(max_length=255, blank=True, null=True)
    poc_email = models.EmailField(max_length=255, blank=True, null=True)
    poc_phone = models.CharField(max_length=255, blank=True, null=True)
    adopted_sust_focused_learning_outcome = models.BooleanField(default=False)
    requires_successful_completion_of_sust_focused_course = models.BooleanField(default=False)
    semester_offered = models.CharField(max_length=50)
    year_program_started = models.CharField(max_length=10)
    program_active = models.BooleanField(default=False)
    reporting_date = models.DateField(null=True)
    # academic_year = models.DateField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.sust_focused_academic_program

class CampusAsLivingLab(models.Model):
    project_name = models.CharField(max_length=100, unique=True)
    poc_name = models.CharField(max_length=255, blank=True, null=True)
    poc_email = models.EmailField(max_length=255, blank=True, null=True)
    poc_phone = models.CharField(max_length=255, blank=True, null=True)
    project_type = models.CharField(max_length=50) # e.g. class projects, thesis projects, term papers, published papers.
    contribution_to_impact_area = models.CharField(max_length=200) # multiple select
    description = models.CharField(max_length=255)
    project_date = models.DateField()
    academic_year = models.CharField(max_length=10, null=True)
    project_url = models.URLField(max_length=255, null=True, blank=True)
    supporting_document = models.FileField(null=True, blank=True, upload_to=upload_file)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.project_name
