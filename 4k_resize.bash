#!/bin/bash
avconv -i 00_512_0_0.webm -threads 8 -b:v 2M -c:v libvpx -s 256x256 00_256_0_0.webm
avconv -i 00_512_1_0.webm -threads 8 -b:v 2M -c:v libvpx -s 256x256 00_256_1_0.webm
avconv -i 00_512_2_0.webm -threads 8 -b:v 2M -c:v libvpx -s 256x256 00_256_2_0.webm
avconv -i 00_512_3_0.webm -threads 8 -b:v 2M -c:v libvpx -s 256x256 00_256_3_0.webm

avconv -i 00_512_0_1.webm -threads 8 -b:v 2M -c:v libvpx -s 256x256 00_256_0_1.webm
avconv -i 00_512_1_1.webm -threads 8 -b:v 2M -c:v libvpx -s 256x256 00_256_1_1.webm
avconv -i 00_512_2_1.webm -threads 8 -b:v 2M -c:v libvpx -s 256x256 00_256_2_1.webm
avconv -i 00_512_3_1.webm -threads 8 -b:v 2M -c:v libvpx -s 256x256 00_256_3_1.webm

avconv -i 00_512_0_2.webm -threads 8 -b:v 2M -c:v libvpx -s 256x256 00_256_0_2.webm
avconv -i 00_512_1_2.webm -threads 8 -b:v 2M -c:v libvpx -s 256x256 00_256_1_2.webm
avconv -i 00_512_2_2.webm -threads 8 -b:v 2M -c:v libvpx -s 256x256 00_256_2_2.webm
avconv -i 00_512_3_2.webm -threads 8 -b:v 2M -c:v libvpx -s 256x256 00_256_3_2.webm
