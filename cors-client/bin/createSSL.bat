openssl genrsa -out key.pem 2048
openssl req -batch -new -key key.pem -out csr.pem -subj "/C=JP/ST=Tokyo/L=Minato-ku/O=FLM/OU=Dev/CN=foo.me"
openssl x509 -in csr.pem -out crt.pem -req -signkey key.pem -days 73000 -sha256