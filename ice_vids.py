#!/usr/bin/python
from subprocess import call

year_start = 1979
month_start = 1
year_end = 2013
month_end = 6
minz = 0
maxz = 1
execute = True
avconv = "avconv"                                           # ffmpeg or avconv application
avparams = "-r 6 -i"                                        # avconv parameters before input files and output video
videocodec = "libx264"                                      # codec to use when encoding the video
videobitrate = "10000k"                                     # bitrate of video
videoext = "mp4"                                            # video file extension


cmd = "%s %s %s -c:v %s -b:v %s %s\n" % (avconv,avparams,inputfile,videocodec,videobitrate,videofilename)
