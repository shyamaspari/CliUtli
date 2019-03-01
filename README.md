# CliUtli

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CliUtil is a nodejs package which is a command line interface. this utility provides user to running some basic task like retrieving weather forecasting as well as current information in a particular area and retrieving today's change in the nifty & senex for a different kind of stock index value.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The utility will fetch the information from various online restful services which are open access from internet and provide you with the output on your console by just typing the command on the shell from any location in the file system. This utility support both windows, Linux and Mac, Being it is written using nodejs framework.     

## Getting Started

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As of now, the utility was created by the developer personal interest. There is no guaranty that all the error handling case may be handled properly. 

### Prerequisites

```
* The user should be having latest or 8+ nodeJS version installed on his system. he/she can check the version by running the "node -v" command on the shell.
* if is not installed in the system please download and install the nodejs from the official [Node.Js website](https://nodejs.org/en/download/).
* Little basic knowledge in running commands on the shell. 
* Good to have nodeJS and NPM basic knowledge.
*  Make sure that the system is having internet connectivity.  
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The above instructions are the same for all the platform such as Windows, Linux and Mac. Before start using this Utility.


### Installing

The installation process includes running only one command on the shell for any location in the system. The installation process will take at most 5 minutes, depends upon the speed of your internet connection.

Try running the below command in the shell.

```
npm i  -g cliutil-cli
```
if everything goes well you can see the below information on your console output.

```
+ cliutil-cli@1.0.4
updated 1 package in 3.608s
```

That it, Now you are ready to use the utility on your system.

## Running the Utility 

Open a shell and try running the following command. 
```
cliutil --help
```
If the above install process ran fine, you can see the following output on the console. 

```
$ cliutil --help

    cliutil [command] <options>

    today .............. show weather for today
    version ............ show package version
    stocks ............. show current prise of the stock
    forecast ........... show the weather forecate

    note: add -h,--help to print the help for command

```
Next, we will try to get the current nifty stock exchanges index value change from previous closing session to up to now.

Try this now by running following command in the cli and hit enter. 

```
$ cliutil stocks
```
The above command will return you the output something like this as below

```
-          stock price change
NIFTY 50 : 71.00
S&P BSE SENSEX : 196.37
NIFTY SERV SECTOR : 123.20
NIFTY FMCG : 202.05
NIFTY METAL : 51.10
NIFTY MEDIA : 79.15
NIFTY BANK : 254.00
NIFTY REALTY : 0.10
NIFTY MNC : 117.85
NIFTY PHARMA : 87.80
NIFTY COMMODITIES : 43.85
NIFTY IT : 116.30
NIFTY ENERGY : 39.35
NIFTY Smallcap 100 : 160.25
NIFTY INFRA : 24.95
NIFTY AUTO : 58.50
Nifty Pvt Bank : 146.35
NIFTY PSU BANK : 71.20
```


---
**NOTE**
Regarding the other command, like today and forecast are stopped working being the yahoo had stopped this API services for free for Jan 3, 2019. 
Because of that, they are not working as of now. 
For more information click on the link [yahoo link]( https://developer.yahoo.com/weather/?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAJ3P3QkRE6idq9TQgU1bvOFDyqXThwQ5PFaRCYAUoQFjkeoHEm6WRCaBnfeL2KCAORz1EuGec5dFK2Q_WaW-oI7xoR5bNnmRB1mQ4KPB36HsQMlCdij5q4Q7dpw9d7zrNvuDcSxHmbaES_gOpgzSS-VWZptHwNRX805ZRvoRF3a-).

Sorry for that.

---

## Authors

* **Shaym kumar Pasupula** - *Initial work* - [Shyam kumar pasupula](https://github.com/shyamaspari)

## License

This project is licensed under the MIT License. 