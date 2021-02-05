"""thanks_for_today URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf.urls.static import static
from django.conf import settings
import diary.views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('create', diary.views.create),
    path('read', diary.views.read),
    path('update/<int:pk>', diary.views.update),
    path('delete/<int:pk>', diary.views.delete),
    path('words', diary.views.words),
    path('wordcloud', diary.views.wordcloud),
]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)