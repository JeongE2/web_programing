import socket

s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM, socket.IPPROTO_UDP) #일반 소켓 : 일반 사용자 가능
#상위계층 원시소켓 방법  / 이더넷 프레임
s = socket.socket(socket.AF_INET, socket.SOCK_RAW, socket.IPPROTO_UDP) #프로토콜 생략 불가능, 원시 소켓 : 관리자만 가능
sudo su - 에서 실행
s = socket.socket(socket.AF_INET, socket.SOCK_RAW, socket.IPPROTO_UDP) 
s.setsocketopt(socket.IPPROTO_IP, socket.IP_HDRINCL, 1)

#하위계층 원시소켓 방법
s = socket.socket(socket.AF_PAACKET, socket.SOCK_RAW, socket.htons(0x0800))
#udp header를 직접 만들어 줘야함
udp_header = struct.pack('!HHHH', source_port, dest_port, length, checksum) #HHHH -> format
tcp_header = pack('', s_port, d_port)
#모든 데이터는 8비트 단위어야하는데 안되는 경우 shift 사용
#tcp는 checksum을 한다.
#헤드정보로만 checksum을 하면 
ip도 포함
pseudo header - ip를 가짜로 포함

source
dest_port
protocol
placeholder
length
pseudo_header = pack('!4s4sBB',source,dest,placeholder,protocol)
pseudo_header = pseudo_header + tcp_header

s.sendto(ip_packet, (ip_dest,port_num))

ip_packet = payload + tcp_header + 
pack unpack