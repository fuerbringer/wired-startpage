# wired-startpage

A ~~simple~~, stupid startpage inspired by [SEL](https://en.wikipedia.org/wiki/Serial_Experiments_Lain). Design ~~blatantly stolen from~~ heavily inspired by [Lainchan](https://lainchan.org).

Columns and entries are easily added or customized via the `columns.json` file.

## Screenshot

![Screenshot](https://raw.githubusercontent.com/fuerbringer/wired-startpage/master/screenshot.png)

## Installation

### Docker

Run this if you've got Docker set up.

#### Step 1

```
docker build -t fuerbringer/wired-startpage .
```

#### Step 2

Then run the container.

```
docker run -d --name wired-startpage -v $PWD/data:/usr/src/app/data fuerbringer/wired-startpage
```


### Manual

#### Step 1

Pull and install.

```
git clone https://github.com/fuerbringer/wired-startpage.git
npm install
```

#### Step 2

Edit config and data files.

```
cp data/config.json.example data/config.json
cp data/columns.json.example data/columns.json
```

#### Step 3

Run

```
npm start
```

Or you could use pm2. (Run `grunt` first)

```
grunt
pm2 start ./bin/www
```
