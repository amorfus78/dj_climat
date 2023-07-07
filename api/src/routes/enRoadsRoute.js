import puppeteer from "puppeteer"

const passStartScreen = async (page) => {
  const closeButtonSelector =
    "#app-shell-container > div.bg.svelte-1w5e8j8 > div > div > div > div > button"

  await page.click(closeButtonSelector)
  await page.waitForSelector(closeButtonSelector, { hidden: true })
}

const getTempIncrease = async (page) => {
  const selector =
    "#app-shell-container > div > div.top-content.svelte-1n3u6lp > div > div.col.temp.svelte-1x09fwv > div > div.temps.svelte-139b6l4 > div.primary-temp.svelte-139b6l4 > span.primary-temp-value.svelte-139b6l4"

  let spanText = await page.$(selector)

  let value = await page.evaluate((el) => el.textContent, spanText)

  return value
}

const getEnRoadsData = async (url, graphToDisplay) => {
  const browser = await puppeteer.launch({ headless: "new" })
  const page = await browser.newPage()

  await page.goto(url, { waitUntil: "networkidle0" })

  await passStartScreen(page)

  if (graphToDisplay) {
    //await getGraphInFocus(page, graphToDisplay)
  }

  await page.waitForTimeout(4000)

  const image = await getScreenshot(page, "final")

  const base64data = new Buffer.from(image, "base64").toString("base64")

  const imageData = "data:image/png;base64," + base64data

  const tempIncrease = await getTempIncrease(page)

  browser.close()

  return {
    image: imageData,
    tempIncrease: tempIncrease,
  }
}

const getScreenshot = async (page, path) => {
  let myPath = null
  if (path) {
    myPath = `/Users/etiennedubois/Dev/school/Hackthon/dj_climat/api/src/images/${path}.png`
  }
  const selector =
    "#app-shell-container > div > div.top-content.svelte-1n3u6lp > div"

  const graphAndLegend = await page.waitForSelector(selector)

  return await graphAndLegend.screenshot()
}

// const getGraphInFocus = async (page, graphToDisplay) => {
//   const graphs = {
//     "greenhouse-gas-net-emmision": {
//       levelOne: 4,
//       graphId: 62,
//     },
//   }

//   const myGraph = graphs[graphToDisplay]

//   const baseSelector =
//     "#app-shell-container > div > div.top-bar.svelte-1n3u6lp > div > div.menu-container.svelte-1jwrnpf > ul"

//   const graphSelector = baseSelector + " > li:nth-child(3)"

//   await page.evaluate((selector) => {
//     var button = document.querySelector(selector)
//     button.click()
//   }, graphSelector)

//   const firstLevelSelector = `#app-shell-container > div > div.top-bar.svelte-1n3u6lp > div > div.menu-container.svelte-1jwrnpf > ul > li.top-menu.svelte-1jwrnpf.opened > ul > li:nth-child(${myGraph.levelOne})`

//   await page.hover(firstLevelSelector)

//   const graphContent = `#menu-cmd-graph-${myGraph.graphId}`

//   await page.click(graphContent)

// }

const enRoadsRoute = ({ app }) => {
  app.get("/en-roads", async (req, res) => {
    const { url, graph } = req.query

    console.log(url)
    console.log(graph)
    try {
      const data = await getEnRoadsData(url, graph)
      //console.log(data.image)
      res.send(data)
    } catch (err) {
      console.log(err)
      res.status(500).send()
    }
  })
}

export default enRoadsRoute
