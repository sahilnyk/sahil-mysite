from django.http import HttpResponse

def about_view(request):
    return HttpResponse("This is the About page.")