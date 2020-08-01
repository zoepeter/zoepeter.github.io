"""
Convert wedding website firebase json export to csvs
"""

import sys
import json
import csv

if __name__=="__main__":
    if len(sys.argv)!=2:
        print("Expected json file")
        sys.exit(1)
    
    fn = sys.argv[1]
    
    with open(fn) as f:
        j = json.load(f)
    
    j_rsvps = j["rsvps"]

    # get heading in sorted order from first entry
    first_key = next(iter(j_rsvps))
    headings = sorted([h for h in j_rsvps[first_key]])
    
    
    with open("rsvps.csv", "w", newline='') as f:
        w = csv.writer(f)
        
        #print(headings)
        w.writerow(headings)
        
        # output rows
        for k in j_rsvps:
            obj = j_rsvps[k]
            row = [obj[h] for h in headings]
            #print(row)
            w.writerow(row)
    
    
    