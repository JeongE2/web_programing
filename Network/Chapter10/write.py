#!/usr/bin/env python3

import socket
import struct
import binascii

s = socket.socket(socket.AF_PACKET, socket.SOCK_RAW, socket.ntohs(0x0800))

data = s.recv(65565)

#Ether Header
ethernet_header = data[0:14]
ethernet_header = struct.unpack("!6s6s2s", ethernet_header)

destination_MAC_address = (binascii.hexlify(ethernet_header[0])).decode()
source_MAC_address = (binascii.hexlify(ethernet_header[1])).decode()
type = (binascii.hexlify(ethernet_header[2])).decode()

#IP Header
ip_header = data[14:34]
ip_header = struct.unpack("!BBHHHBBH4s4s", ip_header)

version_ip_header_length = ip_header[0]
version = version_ip_header_length >> 4
ip_header_length = version_ip_header_length & 0xF
ip_header_length = ip_header_length*4
ttl = ip_header[5]
protocol = ip_header[6]
ip_source_address = socket.inet_ntoa(ip_header[8])
ip_destination_address = socket.inet_ntoa(ip_header[9])

#TCP Header
tcp_header = data[34:54]
tcp_header = unpack("!HHLLBBHHH", tcp_header)

source_port = tcp_header[0]
destination_port = tcp_header[1]
sequence_number = tcp_header[2]
acknowledgment_number = tcp_header[3]
offset_reserved = tcp_header[4]
tcp_header_length = offset_reserved >> 4
window = tcp_header[5]
checksum = tcp_header[6]
urgent_pointer = tcp_header[7]

##ARP Header 복원
s = socket.socket(socket.AF_PACKET, socket.SOCK_RAW, socket.ntohs(0x0806)) ##0800과 다르다

data = s.recv(65565)

    #Ether Header 떼고
#ARP Header
arp_header = data[14:42]
arp_header = struct.unpack("!2s2s1s1s2s6s4s6s4s", arp_header)


hardware_type = (binascii.hexlify(arp_header[0])).decode()
protocol_type = (binascii.hexlify(arp_header[1])).decode()
hardware_size = (binascii.hexlify(arp_header[2])).decode()
protocol_size = (binascii.hexlify(arp_header[3])).decode()
op_code = (binascii.hexlify(arp_header[4])).decode()
source_MAC_address = (binascii.hexlify(ethernet_header[5])).decode()
source_ip_address = (binascii.hexlify(ethernet_header[6])).decode()
destination_MAC_address = (binascii.hexlify(ethernet_header[7])).decode()
destination_ip_address = (binascii.hexlify(ethernet_header[8])).decode()
