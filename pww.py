#!/usr/bin/env python3
"""
Peters Wedding Website Builder

This website is static, so I can't do normal html include methods e.g. php.
Instead, I use #include statements which are pre-processed by this script to generate static html.
"""

import sys
import os
import glob

# Globals
indir = ""
key = "#include "

# Read from input file named inname, write to file handle outf, include other files recursively
def parse(outf, inname, depth):
    if depth > 20:
        print("Exceeded maximum include levels!")
        sys.exit(1)

    if not os.path.exists(inname):
        print("File does not exist: %s" % inname)
        sys.exit(1)

    with open(inname, "r") as inf:
        for line in inf:
            sline = line.strip()
            if sline.startswith(key):
                newpath = os.path.join(indir, sline[len(key):].strip())
                print(" including %s" % newpath)
                parse(outf, newpath, depth+1)
            else:
                outf.write(line)


if __name__=="__main__":
    if len(sys.argv)!=3:
        print("Expected 2 args: input directory and output directory\n")
        sys.exit(1)

    indir = sys.argv[1]
    outdir = sys.argv[2]

    for inname in os.listdir(indir):
        outname = os.path.join(outdir, os.path.basename(inname))
        print("Writing %s" % outname)

        with open(outname, "w") as outf:
            parse(outf, os.path.join(indir, inname), 0)


