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
| index name          last updated time   current value  change from open
------------------  ------------------  -------------  ----------------
S&P BSE SENSEX      21 Aug, 2019 16:10  37,060.37      -267.64
NIFTY 50            21 Aug, 2019 16:10  10,918.70      -98.30
NIFTY IT            21 Aug, 2019 16:10  15,578.15      -19.60
NIFTY BANK          21 Aug, 2019 16:10  27,719.05      -263.40
NIFTY REALTY        21 Aug, 2019 16:10  258.55         -5.25
NIFTY INFRA         21 Aug, 2019 16:10  2,963.15       -49.50
NIFTY ENERGY        21 Aug, 2019 16:10  14,221.45      -218.15
NIFTY FMCG          21 Aug, 2019 16:10  28,399.10      -270.75
NIFTY MNC           21 Aug, 2019 16:10  12,013.85      -65.35
NIFTY PHARMA        21 Aug, 2019 16:10  7,677.25       -72.45
NIFTY PSU BANK      21 Aug, 2019 16:10  2,446.95       -74.30
NIFTY SERV SECTOR   21 Aug, 2019 16:10  15,671.70      -106.30
NIFTY COMMODITIES   21 Aug, 2019 16:10  3,034.30       -68.00
NIFTY MEDIA         21 Aug, 2019 16:10  1,839.05       -27.00
NIFTY METAL         21 Aug, 2019 16:10  2,283.20       -67.95
NIFTY AUTO          21 Aug, 2019 16:10  7,001.85       -38.65
NIFTY Smallcap 100  21 Aug, 2019 16:10  5,352.15       -104.55
Nifty Pvt Bank      21 Aug, 2019 16:10  15,475.40      -163.05
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