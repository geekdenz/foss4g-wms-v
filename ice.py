#!/usr/bin/python
from subprocess import call

year_start = 1979
month_start = 1
year_end = 2013
month_end = 6
minz = 0
maxz = 2
execute = True

def mcs(year, month, minz, maxz):
    return 'mapcache_seed -c mapcache_ice_generated.xml -t ice_%d_%02d -g antarctic -z %d,%d' % (year, month, minz, maxz)

#finalString = ''
for y in range(year_start, year_end + 1):
    if y == year_start:
        for m in range(month_start, 13):
            cmd = mcs(y, m, minz, maxz)
            if execute:
                call(cmd.split(' '))
            else:
                print cmd
    elif y == year_end:
        for m in range(1, month_end + 1):
            cmd = mcs(y, m, minz, maxz)
            if execute:
                call(cmd.split(' '))
            else:
                print cmd
    else:
        for m in range(1, 13):
            cmd = mcs(y, m, minz, maxz)
            if execute:
                call(cmd.split(' '))
            else:
                print cmd

#print finalString
