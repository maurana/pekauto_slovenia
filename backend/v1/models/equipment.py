from django.db import models

class Equipment(models.Model):
    code = models.CharField(max_length=3)
    desc = models.CharField(max_length=50)

    def __str__(self):
        return self.code

    class Meta:
        ordering = ['-id']