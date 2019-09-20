package handle

import "net/http"

func Download() http.Handler {
	return http.StripPrefix("/static/", http.FileServer(http.Dir("./wwwroot/static")))
}