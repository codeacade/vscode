from django.db import models

# Create your models here.

class Team(models.Model):
    name = models.CharField(max_length=64)

class Player(models.Model):
    name = models.CharField(max_length=64)
    height = models.FloatField()
    team = models.ForeignKey(Team, on_delete=models.CASCADE)

team_mm = Team.objects          ##  team_model_manager
player_mm = Player.objects      ##  player_model_manager