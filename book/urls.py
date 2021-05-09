from django.urls import path
from django.http import HttpResponse
import book.views
from django.shortcuts import render



urlpatterns = [
	path('', lambda request:HttpResponse('<a href="content">LINK</a>')),
	path('content', book.views.MainPageView.as_view()),
	path('chapter/<str:pk>', lambda request, pk:render(request, 'chapter.html', {'minutes':pk}))
]