FROM golang

LABEL authorMail "concurrent.exec@gmail.com"

RUN mkdir -p /var/www/xfs

COPY ./ /var/www/xfs

WORKDIR /var/www/xfs

RUN go build -o service.out ./server/main.go

CMD [ "./service.out" ]

EXPOSE 3000 3000