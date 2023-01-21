from django.db import models

class UserModel(models.Model):
    name = models.CharField(max_length = 20)
    status = models.CharField(max_length = 8)

    def __str__(self):
        return self.name

