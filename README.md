# react-navigation examples

Examples to setup a project with react-navigation.



## Install Guide

##### Install Exponent CLI Client:
_(https://www.npmjs.com/package/exp)_

```sh
$ npm install -g exp
```

##### Login to exponent:

```sh
$ exp login
$ exp w  # who am I?
```

##### Clone this repo

```sh
$ git clone https://github.com/rmotr/react-navigation-seed.git
```

##### Init dependencies:

```sh
$ npm install -d
```

## Usage Guide

Exponent works based on the current directory of your project. Execute all the following commands by `cd`ing into your project dir.

##### Starting app with Tunnel

If you use this option, you'll be able to share your app with anyone in the world. You'll be given a URL that you can share with your users. Your user will need the Exponent Mobile app installed in his/her device (Android +4.4, iOS +8).

```sh
$ exp start --tunnel --exp --dev --qr
```

![image](https://cloud.githubusercontent.com/assets/872296/20674838/11733e7c-b569-11e6-88b6-1d6755efb35b.png)

##### Starting app in your Local Network (LAN)

This method will allow you to share your app just with people connected to the same network you're in. Just pass the `--lan` option instead of `--tunnel`.


```sh
$ exp start --lan --exp --dev --qr
```

##### Starting app with a local simulator

To use this method you'll need to have a Simulator installed (either iOS or Android). Refer to [Exponent's docs](https://docs.getexponent.com/versions/v11.0.0/guides/debugging.html#using-a-simulator-emulator) for more about simulators.

```sh
$ exp start --lan --exp --dev --qr
```


##### Watching Logs

```sh
$ exp logs
```

![image](https://cloud.githubusercontent.com/assets/872296/20674915/557d92d4-b569-11e6-8f58-4652bddc9bdb.png)

##### Status of your app

```sh
$ exp status -a
```

![image](https://cloud.githubusercontent.com/assets/872296/20675345/b8bf3234-b56a-11e6-8f57-832a09528e15.png)

##### Stop your app

```sh
$ exp stop
```
