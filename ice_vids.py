#!/usr/bin/python
from subprocess import Popen, PIPE, call
from os import path, environ, walk, remove
import re
from shutil import copy

############# CONFIG #################
year_start = 1979
month_start = 1
year_end = 2013
month_end = 6
minz = 0
maxz = 1
execute = False
maxit = 999999999999999999
#maxit = 10

towalk = '/opt/cache/antarctic_ice/ice_{_year_}_{_month_}/antarctic'

avconv = "avconv"                                           # ffmpeg or avconv application
avparams = "-r 12 -i"                                        # avconv parameters before input files and output video
#videocodec = "libx264"                                      # codec to use when encoding the video
videocodec = "libvpx"                                      # codec to use when encoding the video
videobitrate = "10000k"                                     # bitrate of video
videoext = "webm"                                            # video file extension
ext = 'png'

tmp = '/tmp/ice-pngs'
############# /CONFIG #################


myyear = 1979
mymonth = 1

call(['mkdir','-p',tmp])

def avc(year, month, filename, i):
    #global ext,avconv,avparams,videocodec,videobitrate,videoext,towalk,execute
    global towalk, myyear, mymonth, ext
    #mytowalk = towalk.replace('{_year_}', '%d' % year).replace('{_month_}', '%02d' % month)
    #cmd = mytowalk
    asd = 'ice_%d_%02d' % (myyear, mymonth)
    qwe = 'ice_%d_%02d' % (year, month)
    f = filename.replace(asd, qwe)
    newname = '%s/%d.%s' % (tmp, i, ext)
    cmd = 'cp -f %s %s' % (f, newname)
    print cmd
    call(cmd.split(' '))

def process(filename):
    global year_start, year_end, month_start, month_end, towalk
    i = 1
    call(['rm','-f','%s/*' % tmp])
    for y in range(year_start, year_end + 1):                   
        if y == year_start:
            for m in range(month_start, 13):
                avc(y, m, filename, i)
                i = i + 1
        elif y == year_end:
            for m in range(1, month_end + 1):
                avc(y, m, filename, i)
                i = i + 1
        else:
            for m in range(1, 13):
                avc(y, m, filename, i)
                i = i + 1
    asd = 'ice_%d_%02d' % (myyear, mymonth)
    qwe = 'ice_videos'
    f = filename.replace(asd, qwe)
    output = f.replace(ext, videoext)
    call(['mkdir','-p',path.dirname(output)])
    cmd = '%s %s %s/%%d.%s -b:v %s %s' % (avconv, avparams, tmp, ext, videobitrate, output)
    print '     #### NEW AVCONV ####'
    print cmd
    call(cmd.split(' '))

mytowalk = towalk.replace('{_year_}', '%d' % myyear).replace('{_month_}', '%02d' % mymonth)
print mytowalk

count = 0
for rootdir, dir, files in walk(mytowalk):
    for filename in files:
        filename = path.join(rootdir, filename)
        if not path.isfile(filename) or 'blank' in filename:
            continue
        if maxit <= 0:
            break
        maxit = maxit - 1
        count += 1
        process(filename)
#print count
