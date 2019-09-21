package main

import (
	"net/http"
	"./handle"
)

func main(){
	http.Handle("/api/upload", handle.Upload())
	http.Handle("/", handle.Download())
	http.ListenAndServe("127.0.0.1:3000", nil)	
}