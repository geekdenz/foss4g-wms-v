#!/bin/bash
avconv -i 4.webm -threads 8 -b:v 2M -c:v libvpx -vf crop=512:512:0:0 00_512_0_0.webm
avconv -i 4.webm -threads 8 -b:v 2M -c:v libvpx -vf crop=512:512:512:0 00_512_1_0.webm
avconv -i 4.webm -threads 8 -b:v 2M -c:v libvpx -vf crop=512:512:1024:0 00_512_2_0.webm
avconv -i 4.webm -threads 8 -b:v 2M -c:v libvpx -vf 'crop=384:512:1536:0, pad=512:512' 00_512_3_0.webm

avconv -i 4.webm -threads 8 -b:v 2M -c:v libvpx -vf crop=512:512:0:512 00_512_0_1.webm
avconv -i 4.webm -threads 8 -b:v 2M -c:v libvpx -vf crop=512:512:512:512 00_512_1_1.webm
avconv -i 4.webm -threads 8 -b:v 2M -c:v libvpx -vf crop=512:512:1024:512 00_512_2_1.webm
avconv -i 4.webm -threads 8 -b:v 2M -c:v libvpx -vf 'crop=384:512:1536:512, pad=512:512' 00_512_3_1.webm

avconv -i 4.webm -threads 8 -b:v 2M -c:v libvpx -vf 'crop=512:54:0:1024, pad=512:512' 00_512_0_2.webm
avconv -i 4.webm -threads 8 -b:v 2M -c:v libvpx -vf 'crop=512:54:512:1024, pad=512:512' 00_512_1_2.webm
avconv -i 4.webm -threads 8 -b:v 2M -c:v libvpx -vf 'crop=512:54:1024:1024, pad=512:512' 00_512_2_2.webm
avconv -i 4.webm -threads 8 -b:v 2M -c:v libvpx -vf 'crop=384:54:1536:1024, pad=512:512' 00_512_3_2.webm
