from django.db import models

class Pekauto(models.Model):
    name = models.CharField(max_length=100)
    nums = models.IntegerField()

    def __str__(self):
        return self.name