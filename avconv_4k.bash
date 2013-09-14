#!/bin/bash
avconv -i 512_0_0.webm -threads 8 -b:v 2M -c:v libvpx -vf crop=256:256:0:0     256_0_0.webm
avconv -i 512_0_0.webm -threads 8 -b:v 2M -c:v libvpx -vf crop=256:256:256:0   256_1_0.webm
avconv -i 512_0_0.webm -threads 8 -b:v 2M -c:v libvpx -vf crop=256:256:0:256   256_0_1.webm
avconv -i 512_0_0.webm -threads 8 -b:v 2M -c:v libvpx -vf crop=256:256:256:256 256_1_1.webm
  
avconv -i 512_1_0.webm -threads 8 -b:v 2M -c:v libvpx -vf crop=256:256:0:0     256_2_0.webm
avconv -i 512_1_0.webm -threads 8 -b:v 2M -c:v libvpx -vf crop=256:256:256:0   256_3_0.webm
avconv -i 512_1_0.webm -threads 8 -b:v 2M -c:v libvpx -vf crop=256:256:0:256   256_2_1.webm
avconv -i 512_1_0.webm -threads 8 -b:v 2M -c:v libvpx -vf crop=256:256:256:256 256_3_1.webm

