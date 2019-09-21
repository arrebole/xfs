package handle

import "net/http"

func Download() http.Handler {
	return http.FileServer(http.Dir("./wwwroot"))
}