from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import *


from django.core import serializers
from django.http import HttpResponse

from django.views.decorators.csrf import csrf_exempt

import imaplib
import base64
import os
import email
from zipfile import ZipFile
from openpyxl import load_workbook


from keyword import *

@csrf_exempt
def create(request):
    if request.method == "POST":
        try:
            date = request.POST.get("date")
            title = request.POST.get("title")
            weather = request.POST.get("weather")
            body = request.POST.get("body")

            key_sentence, keywords = get_key(sentence)
            # keywords = '' # NLP 키워드 추출 부분 적용해야하는 부분


            Today(date=date, title=title, weather=weather, body=body, keywords=keywords).save()
            return JsonResponse({
                'message' : 'success'
            }, json_dumps_params = {'ensure_ascii': True})
        except Exception as e:
            return JsonResponse({
                    'message' : 'error',
                    'error' : str(e),
                }, json_dumps_params = {'ensure_ascii': True})
    else:
        return JsonResponse({
            'message' : 'error',
            'error' : 'request.method != "POST"',
        }, json_dumps_params = {'ensure_ascii': True})



def read(request):
    try:
        qs = Today.objects.all()
        res = []
        for i in qs:
            res.append({
                    "id" : 1,
                    "title": i.title,
                    "allDay": True,
                    "start": "new Date(" + str(i.date.year) + ',' + str(i.date.month) + ',' + str(i.date.day) + ")",
                    "end": "new Date(" + str(i.date.year) + ',' + str(i.date.month) + ',' + str(i.date.day) + ")",
                })
        return JsonResponse(res, json_dumps_params = {'ensure_ascii': True}, safe=False)

    except Exception as e:
        return JsonResponse({
                'message' : 'error',
                'error' : str(e),
            }, json_dumps_params = {'ensure_ascii': True})



@csrf_exempt
def update(request, pk):
    if request.method == "POST":
        try:
            # pk = request.POST.get("pk")
            date = request.POST.get("date")
            title = request.POST.get("title")
            weather = request.POST.get("weather")
            body = request.POST.get("body")

            keywords = '' # NLP 키워드 추출 부분 적용해야하는 부분

            this = Today.objects.get(pk=pk)
            this.date = date
            this.title = title
            this.weather = weather
            this.body = body
            this.save()

            return JsonResponse({
                'message' : 'success'
            }, json_dumps_params = {'ensure_ascii': True})
        except Exception as e:
            return JsonResponse({
                    'message' : 'error',
                    'error' : str(e),
                }, json_dumps_params = {'ensure_ascii': True})
    else:
        return JsonResponse({
            'message' : 'error',
            'error' : 'request.method != "POST"',
        }, json_dumps_params = {'ensure_ascii': True})


@csrf_exempt
def delete(request, pk):
    try:
        # pk = request.POST.get("pk")
        this = Today.objects.get(pk=pk)
        this.delete()

        return JsonResponse({
            'message' : 'success'
        }, json_dumps_params = {'ensure_ascii': True})
    except Exception as e:
        return JsonResponse({
                'message' : 'error',
                'error' : str(e),
            }, json_dumps_params = {'ensure_ascii': True})



def words(request):
    try:
        qs = Today.objects.all()
        res = ""

        for i in qs:
            res += i.title
            res += ' '
            res += i.body
            res += ' '
        
        return JsonResponse({
                'words' : res
            }, json_dumps_params = {'ensure_ascii': True}, safe=False)

    except Exception as e:
        return JsonResponse({
                'message' : 'error',
                'error' : str(e),
            }, json_dumps_params = {'ensure_ascii': True})