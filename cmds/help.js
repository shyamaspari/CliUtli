const menus = {
  main: `
    cliutil [command] <options>

    today .............. show weather for today
    version ............ show package version
    help ............... show help menu for a command
    stocks ............... show  current prise of the stock
    `,

  today: `
    cliutil today <options>

    --location, -l ..... the location to use
    `,

    stocks: `
      cliutil today <options>

      --stocks, -s ..... the stock name
      `,
    forecast: `
    outside forecast <options>

    --location, -l ..... the location to use`,
}

module.exports = (args) => {
  const subCmd = args._[0] === 'help'
    ? args._[1]
    : args._[0]

  console.log(menus[subCmd] || menus.main)
}
