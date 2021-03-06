#!/usr/bin/env python3

from datetime import datetime
import ipaddress
import socket
import os

ports = [22, 53, 80, 443, 3389]

ip_range = list(ipaddress.ip_network("192.168.10.0/24")) #각자 주어진 IP 주소 대역 설정
start_time = datetime.now()

for host in ip_range[1:-1]:
	timelog = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
	print(timelog + " : Attempting to scan to " + str(host))
	alive = os.system("ping -c 1 " + str(host) + " > /dev/null")
	if alive == 0:
		print(str(host) + " is up")
		for port in ports:
			sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
			result = sock.connect_ex((str(host), port))
		if result == 0:
			print("-----> Port " + str(port) + " is opened")
		sock.close()
	else:
		print(str(host) + " is down")

end_time = datetime.now()

print("Scanning Completed in : " + str(end_time - start_time))
