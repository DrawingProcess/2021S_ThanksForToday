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

@csrf_exempt
def create(request):
    if request.method == "POST":
        try:
            date = request.POST.get("date")
            title = request.POST.get("title")
            weather = request.POST.get("weather")
            body = request.POST.get("body")

            keywords = '' # NLP 키워드 추출 부분 적용해야하는 부분


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
        qs_json = serializers.serialize('json', qs)
        return HttpResponse(qs_json, content_type='application/json')

        # a = list(Today.objects.all())
        # print(type(a))
        # return JsonResponse({
        #         'message' : 'success',
        #         'list' : a,
        #     }, json_dumps_params = {'ensure_ascii': True})
    
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





 
 
# 문자열의 인코딩 정보추출 후, 문자열, 인코딩 얻기
def findEncodingInfo(txt):    
    info = email.header.decode_header(txt)
    s, encoding = info[0]
    return s, encoding
 
# Create your views here.
def checkmail(request):
    # 메일서버 로그인
    imap = imaplib.IMAP4_SSL('imap.gmail.com')
    id = 'thanksfortoday2021@gmail.com'
    pw = 'dhvmsgor123'
    imap.login(id, pw)
    
    # 받은 편지함
    imap.select('inbox')
    
    # 받은 편지함 모든 메일 검색
    resp, data = imap.uid('search', None, 'All')
    
    # 여러 메일 읽기 (반복)
    all_email = data[0].split()
    
    for mail in all_email:
    
        #fetch 명령을 통해서 메일 가져오기 (RFC822 Protocol)
        result, data = imap.uid('fetch', mail, '(RFC822)')
    
        #사람이 읽기 힘든 Raw 메세지 (byte)
        raw_email = data[0][1]
    
        #메시지 처리(email 모듈 활용)    
        email_message = email.message_from_bytes(raw_email)
    
        # downloading attachments
        for part in email_message.walk():
            # this part comes from the snipped I don't understand yet... 
            if part.get_content_maintype() == 'multipart':
                continue
            if part.get('Content-Disposition') is None:
                continue
            fileName = part.get_filename()
            if bool(fileName):
                filePath = os.path.join(os.getcwd() + '\\downloads\\', fileName)
                if not os.path.isfile(filePath) :
                    fp = open(filePath, 'wb')
                    fp.write(part.get_payload(decode=True))
                    fp.close()
                subject = str(email_message).split("Subject: ", 1)[1].split("\nTo:", 1)[0]
                # print('Downloaded "{file}" from email titled "{subject}" with UID {uid}.'.format(file=fileName, subject=subject, uid=latest_email_uid.decode('utf-8')))
        #이메일 정보 keys
        #print(email_message.keys())
        print('FROM:', email_message['From'])
        print('SENDER:', email_message['Sender'])
        print('TO:', email_message['To'])
        print('DATE:', email_message['Date'])
    
        b, encode = findEncodingInfo(email_message['Subject'])
        print('SUBJECT:', str(b, encode))
    
        #이메일 본문 내용 확인
        # print('[CONTENT]')
        # print('='*80)
        # if email_message.is_multipart():
        #     for part in email_message.get_payload():        
        #         bytes = part.get_payload(decode = True)    
        #         encode = part.get_content_charset()        
        #         print(str(bytes, encode))
        # print('='*80)
    
    imap.close()
    imap.logout()
    unzip()
    return JsonResponse({
        'message' : 'success'
    }, json_dumps_params = {'ensure_ascii': True})



def unzip():
    files = os.listdir(os.getcwd() + '\\downloads\\')
    print(files)
    this_file = os.getcwd() + '\\downloads\\' + files[0]
    with ZipFile(this_file) as zf:
        zf.extractall(pwd=b'0000')
    os.remove(this_file)
    parse()

def parse():
    # files = os.listdir(os.getcwd() + '\\downloads\\')
    # print(files)
    # this_file = os.getcwd() + '\\downloads\\' + files[0]

    #data_only=Ture로 해줘야 수식이 아닌 값으로 받아온다.
    load_wb = load_workbook(os.getcwd() + '/2020-02-05~2021-02-05.xlsx', data_only=True)
    #시트 이름으로 불러오기
    load_ws = load_wb['가계부 내역']
    
    # #셀 주소로 값 출력
    # print(load_ws['A1'].value)
    
    #셀 좌표로 값 출력
    print(load_ws.cell(2,1).value)

    i = 2
    while True:
        try:
            date = load_ws.cell(i,1).value
            category = load_ws.cell(i,4).value
            title = load_ws.cell(i,6).value
            price = load_ws.cell(i,7).value

            Transaction(date=date, title=title, category=category, price=price).save()
            print(f"transaction processing {i} {date} {title}")

            i += 1
            if i == 100:
                break
        except:
            break