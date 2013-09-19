#!/usr/bin/python
from subprocess import Popen, PIPE, call
from os import path, environ, walk, remove
import re
from shutil import copy

# avconv -i 512_0_0.webm -threads 8 -b:v 2M -c:v libvpx -s 256x256 0_0_0.webm
xn = 4
yn = 3
tilesize = 256

def ex(cmd):
    #print cmd
    call(cmd.split(' '))

for y in range(yn):
    for x in range(xn):
        ex('avconv -i 512_%d_%d.webm -threads 8 -b:v 2M -c:v libvpx -s %dx%d 0_%d_%d.webm' % (x,y,tilesize,tilesize,x,y))
