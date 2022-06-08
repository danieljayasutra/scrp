import axios from "axios";
import * as cheerio from "cheerio";
import jsdom from "jsdom";

const { JSDOM } = jsdom;
// const url =
//   "https://www.verywellfit.com/eat-before-or-after-working-out-5225455";
const url = "https://www.lipsum.com/";
const { data } = await axios.get(url);

async function jbs() {
  const $ = cheerio.load(data);

  console.log($("p").text());
}

async function dom() {
  const { document } = new JSDOM(data).window;
  const result = document.querySelector("#Panes");
  Array.from(result.children).forEach((el) => {
    console.log(el.textContent);
  });
  //   result.parentElement.childNodes.forEach((el) => {
  //     console.log(el, el.textContent);
  //   });
}

dom();
