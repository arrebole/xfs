package fs

import "testing"

func TestFs(t *testing.T){
	f := &File{
		Host: "https://test.com",
		Data:       []byte("hello world"),
		Suffix:     "txt",
	}
	if _, err := f.Save(); err != nil{
		t.Fatal(err.Error())
	}
}

func BenchmarkFs(b *testing.B){
	for i := 0; i < b.N; i++ {
        f := &File{
			Host: "https://test.com",
			Data:       []byte("hello world" + string(i)),
			Suffix:     "txt",
		}
		if _, err := f.Save(); err != nil{
			b.Fatal(err.Error())
		}
    }
}