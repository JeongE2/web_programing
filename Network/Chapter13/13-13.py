#!/usr/bin/env python3

import socket

sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
result = sock.connect_ex(("127.0.0.1", 2222))

if result == 0:
    print("2222 Port is opened")
elif result == 111:
    print("2222 Port is closed")

sock.close()
