# wired-startpage

A ~~simple~~, stupid startpage inspired by [SEL](https://en.wikipedia.org/wiki/Serial_Experiments_Lain). Design ~~blatantly stolen from~~ heavily inspired by [Lainchan](https://lainchan.org).

## Usage

### Adding new bookmarks

Data is stored in flat files to keep things simple. The tiles you see in the screenshot below are each one `.yaml` file inside of `/data/tiles/`. You can use `/data/tile.example.yaml` as a template:

```cp data/tile.example.yaml data/tiles/mysites.yaml```

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
