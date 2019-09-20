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

func (p *File)makeStatus(){
	hash := p.checkHash()

	p.Status = &Status{
		Hash: hash,
		URL: p.checkURL(hash),
	}
}

// SaveFile 将图片存储
func (p *File) Save() (*Status, error) {
	
	// 创建文件的信息
	p.makeStatus()

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

//CheckHash 计算hash值
func (p *File) checkHash() string {
	h := md5.New()
	h.Write(p.Data)
	return hex.EncodeToString(h.Sum(nil))
}

// CheckURL 文件的链接
func (p *File) checkURL(hash string) string {
	var url = fmt.Sprintf("%s/static/%s/%s.%s", p.Host , dateNow(), hash, p.Suffix)
	return url
}

// FullFileName 返回带有文件名的储存路径
func (p *File) fullName(hash string) string {
	var file = fmt.Sprintf("static/%s/%s.%s", dateNow(), hash, p.Suffix)
	var root,_ = filepath.Abs("./wwwroot")
	return filepath.Join(root, file)
}

func (p *File)savePath()string{
	var root,_ = filepath.Abs("./wwwroot/static")
	return filepath.Join(root, dateNow())
}

//dateNow 计算时间
func dateNow() string {
	return time.Now().Format("2006-01-02")
}


