#!/usr/bin/python
from subprocess import Popen, PIPE, call
from os import path, environ, walk, remove
import re
from shutil import copy

# avconv -i 4k.mp4 -vf crop=256:256:0:0 4k_0_1_0.webm

# avconv -i 4k.mp4 -threads 8 -b:v 2M -c:v libvpx 4.webm

# avconv -i 4k.mp4 -s 896x512 512.mp4

# avconv -i 4.webm -threads 8 -t 10 -b:v 2M -c:v libvpx 10.webm


"""
avconv -i 4_10.webm -threads 8 -b:v 2M -c:v libvpx -vf crop=512:512:0:0 512_0_0.webm
avconv -i 4_10.webm -threads 8 -b:v 2M -c:v libvpx -vf crop=512:512:512:0 512_1_0.webm
avconv -i 4_10.webm -threads 8 -b:v 2M -c:v libvpx -vf crop=512:512:1024:0 512_2_0.webm
avconv -i 4_10.webm -threads 8 -b:v 2M -c:v libvpx -vf 'crop=384:512:1536:0, pad=512:512' 512_3_0.webm

avconv -i 4_10.webm -threads 8 -b:v 2M -c:v libvpx -vf crop=512:512:0:512 512_0_1.webm
avconv -i 4_10.webm -threads 8 -b:v 2M -c:v libvpx -vf crop=512:512:512:512 512_1_1.webm
avconv -i 4_10.webm -threads 8 -b:v 2M -c:v libvpx -vf crop=512:512:1024:512 512_2_1.webm
avconv -i 4_10.webm -threads 8 -b:v 2M -c:v libvpx -vf 'crop=384:512:1536:512, pad=512:512' 512_3_1.webm

avconv -i 4_10.webm -threads 8 -b:v 2M -c:v libvpx -vf 'crop=512:54:0:1024, pad=512:512' 512_0_2.webm
avconv -i 4_10.webm -threads 8 -b:v 2M -c:v libvpx -vf 'crop=512:54:512:1024, pad=512:512' 512_1_2.webm
avconv -i 4_10.webm -threads 8 -b:v 2M -c:v libvpx -vf 'crop=512:54:1024:1024, pad=512:512' 512_2_2.webm
avconv -i 4_10.webm -threads 8 -b:v 2M -c:v libvpx -vf 'crop=384:54:1536:1024, pad=512:512' 512_3_2.webm


avconv -i 512_0_0.webm -threads 8 -b:v 2M -c:v libvpx -vf crop=256:256:0:0     256_0_0.webm
avconv -i 512_0_0.webm -threads 8 -b:v 2M -c:v libvpx -vf crop=256:256:256:0   256_1_0.webm
avconv -i 512_0_0.webm -threads 8 -b:v 2M -c:v libvpx -vf crop=256:256:0:256   256_0_1.webm
avconv -i 512_0_0.webm -threads 8 -b:v 2M -c:v libvpx -vf crop=256:256:256:256 256_1_1.webm

avconv -i 512_1_0.webm -threads 8 -b:v 2M -c:v libvpx -vf crop=256:256:0:0     256_2_0.webm
avconv -i 512_1_0.webm -threads 8 -b:v 2M -c:v libvpx -vf crop=256:256:256:0   256_3_0.webm
avconv -i 512_1_0.webm -threads 8 -b:v 2M -c:v libvpx -vf crop=256:256:0:256   256_2_1.webm
avconv -i 512_1_0.webm -threads 8 -b:v 2M -c:v libvpx -vf crop=256:256:256:256 256_3_1.webm


avconv -i 512_0_0.webm -threads 8 -b:v 2M -c:v libvpx -vf crop=256:256:256:256 256_0_0.webm
avconv -i 512_0_0.webm -threads 8 -b:v 2M -c:v libvpx -vf crop=256:256:256:256 256_0_1.webm
avconv -i 512_0_1.webm -threads 8 -b:v 2M -c:v libvpx -vf crop=256:256:256:256 256_0_2.webm
avconv -i 512_0_0.webm -threads 8 -b:v 2M -c:v libvpx -vf crop=256:256:256:256 256_1_0.webm
avconv -i 512_0_0.webm -threads 8 -b:v 2M -c:v libvpx -vf crop=256:256:256:256 256_1_1.webm
avconv -i 512_0_1.webm -threads 8 -b:v 2M -c:v libvpx -vf crop=256:256:256:256 256_1_2.webm
avconv -i 512_1_0.webm -threads 8 -b:v 2M -c:v libvpx -vf crop=256:256:256:256 256_2_0.webm
avconv -i 512_1_0.webm -threads 8 -b:v 2M -c:v libvpx -vf crop=256:256:256:256 256_2_1.webm
avconv -i 512_1_1.webm -threads 8 -b:v 2M -c:v libvpx -vf crop=256:256:256:256 256_2_2.webm
avconv -i 512_1_0.webm -threads 8 -b:v 2M -c:v libvpx -vf crop=256:256:256:256 256_3_0.webm
avconv -i 512_1_0.webm -threads 8 -b:v 2M -c:v libvpx -vf crop=256:256:256:256 256_3_1.webm
avconv -i 512_1_1.webm -threads 8 -b:v 2M -c:v libvpx -vf crop=256:256:256:256 256_3_2.webm

"""


xn = 4
yn = 3
tilesize = 256

def ex(cmd):
    #print cmd
    call(cmd.split(' '))

for y in range(yn):
    for x in range(xn):
        for i in range(2):
            for j in range(2):
                ex("avconv -i 00_512_%d_%d.webm -threads 8 -b:v 2M -c:v libvpx -vf crop=%d:%d:%d:%d 01_256_%d_%d.webm" % (x,y,tilesize,tilesize,tilesize*j,tilesize*i,x*2+j,y*2+i))
