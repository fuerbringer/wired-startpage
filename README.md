# wired-startpage

A ~~simple~~, stupid startpage inspired by [SEL](https://en.wikipedia.org/wiki/Serial_Experiments_Lain). Design ~~blatantly stolen from~~ heavily inspired by [Lainchan](https://lainchan.org).

Columns and entries are easily added or customized via the `columns.json` file.

## Screenshot

![Screenshot](https://raw.githubusercontent.com/fuerbringer/wired-startpage/master/screenshot.png)

## Installation

### Configuration file `.env`

These are the default environment variables. They can be overridden by redefining them in the `.env` file in root.

```
EXPRESS_HOST=0.0.0.0
EXPRESS_PORT=3000
DATA_MONGO_NAME=gonano
```

#### Notes

- For `DATA_MONGO_NAME`, the default value as defined by nanobox.io is `gonano`.
- `DATA_MONGO_HOST` is automatically set by nanobox. Override if needed.
- `DATA_MONGO_USER` and `DATA_MONGO_PASS` not used by default. Override if needed.

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
