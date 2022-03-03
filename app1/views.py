
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render, HttpResponse
from .models import Movies_data
# Create your views here.
def index(request):
    return render(request,'index.html')

def all(request):
    obj = Movies_data.objects.all()
    return render(request,'searched.html',{'data':obj})
# @csrf_exempt
def saving(request):
    if request.method=='GET':
        title = request.GET['title']
        year = request.GET['year']
        rated = request.GET['rated']
        released = request.GET['released']
        actor = request.GET['actor']
        runtime = request.GET['runtime']
        genre = request.GET['genre']
        director = request.GET['director']
        writer = request.GET['writer']
        poster= request.GET['poster']
        irating= request.GET['irating']
        plot= request.GET['plot']
        ivote= request.GET['ivote']

        try:
            queryset=Movies_data.objects.filter(title=title).exists()
            if(not queryset):
                obj = Movies_data(title=title,year=year, rated=rated,released=released, runtime=runtime,genre=genre,director=director,writer=writer,actor=actor,iratings=irating,ivotes=ivote,plot=plot,poster=poster)
                obj.save()

                return HttpResponse("True")
        except:
            return HttpResponse("False")
    return HttpResponse("ok")