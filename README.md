# Grip

> Clone repo and install deps with single command

## Usage

Grip detects the repo type and install dependencies accordingly, for example for a go repo, running:

```sh
$ grip pgv
```

outputs:

```sh
Cloning into 'pgv'...
remote: Enumerating objects: 7, done.
remote: Counting objects: 100% (7/7), done.
remote: Compressing objects: 100% (7/7), done.
remote: Total 7 (delta 0), reused 7 (delta 0), pack-reused 0 (from 0)
Receiving objects: 100% (7/7), done.
go: downloading github.com/lib/pq v1.10.9
go: downloading github.com/ardanlabs/conf/v3 v3.1.6
go: downloading github.com/google/go-cmp v0.3.1
```
