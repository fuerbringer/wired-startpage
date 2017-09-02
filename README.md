# wired-startpage

A simple, stupid startpage inspired by [SEL](https://en.wikipedia.org/wiki/Serial_Experiments_Lain). Design ~~blatantly stolen from~~ heavily inspired by [Lainchan](https://lainchan.org).

## Installation

### Step 1

Pull and install.

```
git clone https://github.com/fuerbringer/wired-startpage.git
npm install
```

### Step 2

Edit config and data files.

```
cp data/config.json.example data/config.json
cp data/columns.json.example data/columns.json
```

### Step 3

Run

```
npm start
```

Or you could use pm2. (Run `grunt` first)

```
grunt
pm2 start ./bin/www
```
