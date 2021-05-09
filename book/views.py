from django.shortcuts import render
from django.views import View
from book.models import Team, Player

count = 0
book = {
    'Chapter 1': 'All work and no play makes Jack a dull boy...',
    'Chapter 2': 'All work and no play makes Jack a dull boy...',
    'Chapter 3': 'All work and no play makes Jack a dull boy...',
    'Chapter 4': 'All work and no play makes Jack a dull boy...',
}
tt1 = Team.objects.create(name = "Team1")
tt2 = Team.objects.create(name = "Team2")
Player.objects.create(name = "Player1", height = 123, team = tt2)

# Create your views here.

class MainPageView(View):
	def get(self, request):
		global count
		count += 1
		print("=======================", count)
		print(Team.objects.all())
		print("=======================", count)
		print(Team.objects.all().delete())


		return render(request, 'contents.html', {'minutes': count, 'book': book})