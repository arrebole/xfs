package config

import(
	"os"
)

var(
	Host string = GetHost()
)

// 获取环境变量中的默认密码
func GetHost() string {
	if os.Getenv("Host") != ""{
		return  os.Getenv("Host")
	}
	return "http://localhost:3000"
}
