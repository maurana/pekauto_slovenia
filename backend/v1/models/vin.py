from django.db import models

class Vin(models.Model):
    vin_number = models.CharField(max_length=17, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return self.vin_number

    class Meta:
        ordering = ['-id']