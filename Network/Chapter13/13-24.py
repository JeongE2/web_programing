#!/usr/bin/env python3

from datetime import datetime
import queue
import threading
import ipaddress
import socket
import os

ports = [22, 53, 80, 443, 3389]

def scanner(target):
	alive = os.system("ping -c 1 " + str(target) + " > /dev/null")
	if alive == 0:
		timelog = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
		print(timelog + " : target host " + str(target) + " is up")
		for port in ports:
			sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
			result = sock.connect_ex((str(target), port))
			if result == 0:
				print("-----> Port " + str(port) + " is opened")
			sock.close()

def worker():
	while True:
		target = q.get()
		if target is None:
			break
		scanner(target)
		q.task_done()

if __name__ == "__main__":
	start_time = datetime.now()
	q = queue.Queue()
	threads = []
	
	for i in range(30):
		t = threading.Thread(target = worker)
		t.setDaemon(True)
		t.start()
		threads.append(t)
	
	ip_range = list(ipaddress.ip_network("192.168.10.0/24"))
	
	for host in ip_range[1:-1]:
		q.put(host)
	
	q.join()

	for i in range(30):
		q.put(None)
	for t in threads:
		t.join()
	end_time = datetime.now()
	
	print("Scanning Completed in : " + str(end_time - start_time))
