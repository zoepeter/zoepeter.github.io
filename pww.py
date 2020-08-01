#!/usr/bin/env python3
"""
Peters Wedding Website Builder

This website is static, so I can't do normal html include methods e.g. php.
Instead, I use #include statements which are pre-processed by this script to generate static html.
"""

import os
import sys

# Globals
INDIR = ""
KEY = "<!-- include "


def parse(outf, inname, depth):
    """
    Read from input file named inname, write to file handle outf, include other files recursively
    """
    if depth > 20:
        sys.stderr.write("Exceeded maximum include levels!")
        sys.exit(1)

    if not os.path.exists(inname):
        sys.stderr.write("File does not exist: %s" % inname)
        sys.exit(1)

    with open(inname, "r") as inf:
        for line in inf:
            sline = line.strip()
            if sline.startswith(KEY):
                new_in_file = sline[len(KEY):-3].strip()
                new_in_file = os.path.join(INDIR, new_in_file)
                print(" including %s" % new_in_file)
                parse(outf, new_in_file, depth+1)
            else:
                outf.write(line)


if __name__ == "__main__":
    if len(sys.argv) != 3:
        sys.stderr.write("Expected 2 args: input directory and output directory\n")
        sys.exit(1)

    INDIR = sys.argv[1]
    OUTDIR = sys.argv[2]

    for name in os.listdir(INDIR):
        outname = os.path.join(OUTDIR, os.path.basename(name))
        print("Writing %s" % outname)

        with open(outname, "w") as f:
            parse(f, os.path.join(INDIR, name), 0)
