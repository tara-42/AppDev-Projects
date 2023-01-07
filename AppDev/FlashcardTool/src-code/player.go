package main

import (
	"encoding/json"
	"net/http"
	"os"
	"path/filepath"
)

//fileInfo struct will be used in our directoryServer method:
type musicProperties struct {
	IsDir bool
	Name  string
}

const (
	musicDirectory = "/music/"
	root           = "./music"
)

func audioPlayer(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "./player.html")
}

func directoryServer(w http.ResponseWriter, r *http.Request, playlistLoc string) {
	defer func() {
		if err, ok := recover().(error); ok {
			http.Error(w, err.Error(), http.StatusInternalServerError)
		}
	}()
	file, err := os.Open(playlistLoc)
	defer file.Close()
	if err != nil {
		panic(err)
	}

	//read Directory we've set up and returns list of files
	files, err := file.Readdir(-1)
	if err != nil {
		panic(err)
	}

	//sets up the array and passes in info for json file
	fileProperties := make([]musicProperties, len(files))
	for i := range files {
		fileProperties[i].IsDir = files[i].IsDir()
		fileProperties[i].Name = files[i].Name()
	}

	jsonFile := json.NewEncoder(w)

	if err := jsonFile.Encode(&fileProperties); err != nil {
		panic(err)
	}
}

func MakePlaylist(w http.ResponseWriter, r *http.Request) {
	//set and combine path of music, putting together files to make playlist
	playlist := filepath.Join(root, r.URL.Path[len(musicDirectory):])
	//error will inform us if no files are there
	stat, err := os.Stat(playlist)
	if err != nil {
		http.Error(w, err.Error(), http.StatusNotFound)
		return
	}
	//IsDir returns true if the directory is set up properly
	if stat.IsDir() {
		directoryServer(w, r, playlist)
		return
	}
	http.ServeFile(w, r, playlist)
}

func main() {
	http.HandleFunc("/", audioPlayer)
	http.HandleFunc(musicDirectory, MakePlaylist)
	http.ListenAndServe(":8080", nil)
}
