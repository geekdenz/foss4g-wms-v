#!/usr/bin/python

###
### composite images on top of each other to 
### get more visually pleasing example
###
### convert -composite background.png foreground.png result.png
###

from subprocess import Popen, PIPE, call
from os import path, environ, walk, remove
import re

############# CONFIG #################
year_start = 1979
month_start = 1
year_end = 2013
month_end = 6
minz = 0
maxz = 1
execute = False
maxit = 999999999999999999
#maxit = 2
blank = '/media/work_ext4/cache/antarctic_ice/ice_1979_01/antarctic/blanks/5B5400FF.png'
towalk = '/media/work_ext4/cache/antarctic_ice/ice_{_year_}_{_month_}/antarctic'

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

def x(cmd):
    #print 'x(%s)' % cmd
    call(cmd.split(' '))
def avc(year, month, filename, i):
    global towalk, myyear, mymonth, ext
    asd = 'ice_%d_%02d' % (myyear, mymonth)
    qwe = 'ice_%d_%02d' % (year, month)
    f = filename.replace(asd, qwe)
    qwe = 'base_cache'
    base = filename.replace(asd, qwe)
    zxc = 'ice_%d_%02d_o' % (year, month)
    newname = filename.replace(asd, zxc)
    cmd = 'convert -composite %s %s /tmp/result1.png' % (blank, base)
    x(cmd)
    #create dir
    dirn = path.dirname(newname)
    x('mkdir -p %s' % dirn)
    cmd = 'convert -composite /tmp/result1.png %s %s' % (f, newname)
    x(cmd)

def process(filename):
    global year_start, year_end, month_start, month_end, towalk
    i = 1
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
