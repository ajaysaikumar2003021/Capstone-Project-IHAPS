from django.db import models

# Create your models here.
def upload_file(instance, filename):
    return '/media'.join([str(instance.faculty_name), filename])


class FacultySustResearchAndService(models.Model):
    reporting_date = models.DateField(null=True)
    faculty_name = models.CharField(max_length=100)
    faculty_email = models.EmailField(max_length=100)
    department_affiliation = models.CharField(max_length=100)
    sust_research_area = models.CharField(max_length=100)
    research_interests = models.CharField(max_length=255)
    peer_reviewed_journal = models.CharField(max_length=20) # yes, no, pending
    publication_title = models.CharField(max_length=30 , null=True, blank=True) # if research published yes or pending 
    journal_name = models.CharField(max_length=30 , null=True, blank=True)
    date_of_publication = models.DateField(null=True, blank=True)
    publication_deposited = models.BooleanField(default=False, null=True, blank=True) # if research published yes or pending
    presented_research_at_sust_conference = models.BooleanField(default=False, null=True, blank=True) # yes or no
    sust_research_conf_description = models.TextField(null=True, blank=True) # if research presented_research_at_sust_conference yes
    served_higher_edu = models.BooleanField(default=False)
    sust_research_service_dates = models.CharField(max_length=100, null=True, blank=True) # if research presented_research_at_sust_conference yes
    support_url = models.URLField(max_length=255, null=True, blank=True)
    # supporting_document = models.CharField(max_length=255, null=True, blank=True)
    supporting_document = models.FileField(null=True, blank=True, upload_to=upload_file)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.faculty_name