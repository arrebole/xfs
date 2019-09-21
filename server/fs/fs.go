// 2019-9-20 BenchmarkFs-4 663 1929383 ns/op
package fs

import (
	"crypto/md5"
	"encoding/hex"
	"errors"
	"fmt"
	"os"
	"path/filepath"
	"time"
)

var (
	RootPath,_ = filepath.Abs("./wwwroot/archives")
)
// Status ...
type Status struct {
	Hash string `json:"hash"`
	URL  string `json:"url"`
}

// File ...
type File struct {
	Host 	   string
	Data       []byte
	Suffix     string
	Status 	   *Status
}

func (p *File)make(){
	hash := HashMd5(p.Data)

	p.Status = &Status{
		Hash: hash,
		URL: p.checkURL(hash),
	}
}

// Save 将图片存储
func (p *File) Save() (*Status, error) {
	
	// 创建文件的信息
	p.make()

	// 创建存放的文件夹
	os.MkdirAll(p.savePath(), os.ModePerm)

	// 将文件写入硬盘
	file, err := os.Create(p.fullName(p.Status.Hash))
	if err != nil {
		return nil, errors.New("create file fail")
	}
	defer file.Close()

	_, err = file.Write(p.Data)
	if err != nil {
		return nil, errors.New("write file fail")
	}

	return p.Status, nil
}

// checkURL 文件的链接
func (p *File) checkURL(hash string) string {
	var url = fmt.Sprintf("%s/archives/%s/%s.%s", p.Host , dateNow(), hash, p.Suffix)
	return url
}

// FullName 返回带有储存路径的文件名
func (p *File) fullName(hash string) string {
	var file = fmt.Sprintf("%s/%s.%s", dateNow(), hash, p.Suffix)
	return filepath.Join(RootPath, file)
}

// savePath 文件存储路径
func (p *File)savePath()string{
	return filepath.Join(RootPath, dateNow())
}

//dateNow 当前时间 2019-1-1
func dateNow() string {
	return time.Now().Format("2006-01-02")
}

// HashMd5 计算hash值
func HashMd5(data []byte) string {
	h := md5.New()
	h.Write(data)
	return hex.EncodeToString(h.Sum(nil))
}
