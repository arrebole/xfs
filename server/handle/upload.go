package handle

import(
	"encoding/json"
	"strings"
	"net/http"
	"io/ioutil"
	"../fs"
)

type Response struct{
	Code int	`json:"code"`
	Message string `json:"message"`
	Data *fs.Status 
}

// 用于错误响应数据的缓存
var badResCache []byte

func init(){
	badResCache, _ = json.Marshal(Response{
		Code: -1,
		Message: "错误",
		Data: &fs.Status{},
	})
}

func makeRes(data *fs.Status) []byte {
	if data == nil{
		return badResCache
	}
	r,_ := json.Marshal(Response{
		Code: 0,
		Message: "成功",
		Data: data,
	})
	return r
}

func getSuffix(s string)string{
	a := strings.Split(s, ".")
	return a[len(a)-1]
}

func Upload() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		
		// 如果不是post请求直接返回错误
		if r.Method != "POST" {
			w.Write(makeRes(nil))
			return
		}

		// 读取上传的文件
		file, header , err := r.FormFile("file")
		if err != nil {
			w.Write(makeRes(nil))
			return
		}
		defer file.Close()

		// 将文件读取到应用层
		fileByte, err := ioutil.ReadAll(file)
		if err != nil {
			w.Write(makeRes(nil))
			return
		}

		//重命名文件名称
		uploadFile := &fs.File{
			Host: "http://localhost:3000",
			Suffix: getSuffix(header.Filename),
			Data: fileByte,
		}

		status,err := uploadFile.Save()
		if err != nil{
			w.Write(makeRes(nil))
			return
		}
		w.Write(makeRes(status))
		return 
	}
}