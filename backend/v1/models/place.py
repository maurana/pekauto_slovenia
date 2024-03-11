from django.db import models

class Place(models.Model):
    code = models.CharField(max_length=2)
    state = models.CharField(max_length=50)

    def __str__(self):
        return self.code

    class Meta:
        ordering = ['-id']