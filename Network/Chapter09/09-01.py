#!/usr/bin/env python3

import socket
from struct import *

s = socket.socket(socket.AF_INET, socket.SOCK_RAW, socket.IPPROTO_TCP)
s.setsockopt(socket.IPPROTO_IP, socket.IP_HDRINCL, 1)
s.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)

data = s.recv(65565)
ip_header = data[0:20]
ip_header = unpack("!BBHHHBBH4s4s", ip_header)

version_ip_header_length = ip_header[0]
version = version_ip_header_length >> 4
ip_header_length = version_ip_header_length & 0xF
ip_header_length = ip_header_length * 4
ttl = ip_header[5]
protocol = ip_header[6]
ip_source_address = socket.inet_ntoa(ip_header[8])
ip_destination_address = socket.inet_ntoa(ip_header[9])

tcp_header = data[ip_header_length:ip_header_length+20]
tcp_header = unpack("!HHLLBBHHH", tcp_header)

source_port = tcp_header[0]
destination_port = tcp_header[1]
sequence_number = = tcp_header[2]
acknowledgment_number = tcp_header[3]
offset_reserved = tcp_header[4]
tcp_header_length = offset_reserved >> 4
window = tcp_header[5]
checksum = = tcp_header[6]
urgent_pointer = = tcp_header[7]

header_size = ip_header_length + (tcp_header_length*4)
payload_data_size = len(data) - header_size
tcp_payload_data = data[header_size:]

ucp_header = data[ip_header_length:ip_header_length + 8]
ucp_header = unpack("!HHHH", ucp_header)

source_port = udp_header[0]
destination_port = udp_header[1]
length = = udp_header[2]
checksum = udp_header[3]

udp_header_length = 8
header_size = ip_header_length + udp_header_length
payload_data_size = len(data) - header_size
udp_payload_data = data[header_size:]

###ICMP/IP
s = socket.socket(socket.AF_INET, socket.SOCK_RAW, socket.IPPROTO_ICMP)
s.setsockopt(socket.IPPROTO_IP, socket.IP_HDRINCL, 1)
s.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)

data = s.recv(65565)

icmp_header = data[ip_header_length:ip_header_length+8]
icmp_header = unpack("!BBHHH", icmp_header)

type = icmp_header[0]
code = icmp_header[1]
checksum = icmp_header[2]
id = icmp_header[3]
seq = icmp_header[4]

icmp_header_length = 8
header_size = ip_header_length + icmp_header_length
payload_data_size = len(data) - header_size
icmp_payload_data = data[header_size:]