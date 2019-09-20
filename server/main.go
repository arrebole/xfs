package main

import (
	"net/http"
	"./handle"
)

func main(){
	http.Handle("/static/", handle.Download())
	http.Handle("/api/upload", handle.Upload())
	http.ListenAndServe(":3000", nil)	
}