#!/usr/bin/python

head = 'mapcache_ice_head.xml'
middle = 'mapcache_ice_middle.xml'
tail = 'mapcache_ice_tail.xml'
output = 'mapcache_ice_generated.xml'
year_start = 1979
month_start = 1
year_end = 2013
month_end = 6

def xe(cmd): # execute a command and return output
    p = popen(cmd)
    output = p.read()
    p.close()
    return output

def writeMiddle(middle, year, month):
    #time = "%d-%02d" % (year, month)
    #myTime = "%d_%02d" % (year, month)
    return middle.replace('{_year_}', '%d' % year).replace('{_month_}', '%02d' % month)

head = open(head).read()
middle = open(middle).read()
tail = open(tail).read()

finalString = head

for y in range(year_start, year_end + 1):
    if y == year_start:
        for m in range(month_start, 13):
            finalString += writeMiddle(middle, y, m)
    elif y == year_end:
        for m in range(1, month_end + 1):
            finalString += writeMiddle(middle, y, m)
    else:
        for m in range(1, 13):
            finalString += writeMiddle(middle, y, m)
finalString += tail

open(output, 'w').write(finalString)
