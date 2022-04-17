import React, { Component } from "react";
import NewsItems from "./NewsItems";

export class News extends Component {
  articles = [
    {
      "source": {
          "id": "cnn",
          "name": "CNN"
      },
      "author": "Aya Elamroussi, CNN",
      "title": "'We will not boost our way out of this pandemic,' CDC director says as 70 million Americans remain unvaccinated - CNN",
      "description": "Three-quarters of eligible Americans have received at least one dose of a Covid-19 vaccine and some are now able to receive an additional booster shot. But the virus still poses a great threat to more than 70 million people who remain unvaccinated.",
      "url": "https://www.cnn.com/2021/09/25/health/us-coronavirus-saturday/index.html",
      "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210925001919-restricted-pfizer-covid-19-vaccine-california-09-16-2021-super-tease.jpg",
      "publishedAt": "2021-09-25T06:43:00Z",
      "content": "(CNN)Three-quarters of eligible Americans have received at least one dose of a Covid-19 vaccine and some are now able to receive an additional booster shot. But the virus still poses a great threat t… [+5686 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Hawaii News Now"
      },
      "author": "HNN Staff",
      "title": "Hawaiian Airlines flight from South Korea makes emergency landing at Midway Atoll - Hawaii News Now",
      "description": "Officials said approximately 5 hours and 45 minutes into the flight, the captain received a low oil pressure notification.",
      "url": "https://www.hawaiinewsnow.com/2021/09/25/hawaiian-airlines-flight-south-korea-makes-emergency-landing-midway-atoll/",
      "urlToImage": "https://gray-khnl-prod.cdn.arcpublishing.com/resizer/ybKjXp-Dk9IlASs0hH71fcgMMFE=/980x0/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/Q7K4BFFWBNBHHLAWAOSS7OQISM.jpg",
      "publishedAt": "2021-09-25T04:49:00Z",
      "content": "HONOLULU (HawaiiNewsNow) - A Hawaii Airlines flight from South Korea made an emergency landing at Midway Atoll on Friday due to a low oil pressure notification.\r\nOfficials said approximately 5 hours … [+1166 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Gizmodo.com"
      },
      "author": "Jody Serrano",
      "title": "Delta Wants Airlines to Share No-Fly Lists to Keep Crap Passengers Out of the Skies - Gizmodo",
      "description": "The company said that a list of banned customers doesn't work well if those individuals can then turn around and fly on another airline.",
      "url": "https://gizmodo.com/delta-wants-airlines-to-share-no-fly-lists-to-keep-crap-1847744588",
      "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/4ef0a6f4581a71a26280b4181c7be4a0.jpg",
      "publishedAt": "2021-09-25T04:05:00Z",
      "content": "As if we needed any more problems, passengers from hell are a thing now (or more a thing than before, anyway). They assault flight attendants, toss food and alcohol around, and throw their masks on t… [+2486 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Investor's Business Daily"
      },
      "author": "Investor's Business Daily",
      "title": "Dow Jones Futures: Market Rally Takes Bullish Ride; Tesla Leads 5 Stocks In Buy Zones Before FSD Beta Launch - Investor's Business Daily",
      "description": "Bulls seized control in a pivotal market week. Tesla broke out ahead of a big FSD Beta release.",
      "url": "https://www.investors.com/market-trend/stock-market-today/dow-jones-futures-stock-market-rally-takes-bullish-ride-tesla-in-buy-zone-before-fsd-beta-launch/",
      "urlToImage": "https://www.investors.com/wp-content/uploads/2021/01/Stock-Tesla-modelY-01-adobe.jpg",
      "publishedAt": "2021-09-25T02:41:00Z",
      "content": "Dow Jones futures will open on Sunday evening, along with S&amp;P 500 futures and Nasdaq futures. The stock market rally last week went nowhere fast. The major indexes tumbled on Monday, but then roa… [+10028 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Fox Business"
      },
      "author": "Reuters",
      "title": "Google CEO sought to keep Incognito mode issues out of spotlight, lawsuit alleges - Fox Business",
      "description": "Google Chief Executive Sundar Pichai in 2019 was warned that describing the company's Incognito browsing mode as \"private\" was problematic, yet it stayed the course because he did not want the feature \"under the spotlight,\" according to a new court filing.",
      "url": "https://www.foxbusiness.com/technology/google-ceo-incognito-mode-issues-lawsuit",
      "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2021/09/0/0/sundar-pichai-google-incognito.jpg?ve=1&tl=1",
      "publishedAt": "2021-09-25T01:50:01Z",
      "content": "Google Chief Executive Sundar Pichai in 2019 was warned that describing the company's Incognito browsing mode as \"private\" was problematic, yet it stayed the course because he did not want the featur… [+2365 chars]"
  },
  {
      "source": {
          "id": "the-verge",
          "name": "The Verge"
      },
      "author": "Elizabeth Lopatto",
      "title": "How Elizabeth Holmes sidelined the real scientists at Theranos - The Verge",
      "description": "A former Theranos lab director testified that he tried, unsuccessfully, to delay Theranos’ commercial launch. He told Holmes some tests were bad. She ignored him.",
      "url": "https://www.theverge.com/2021/9/24/22692600/elizabeth-holmes-theranos-bad-tests-complaints",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/XmknKJh3j5gnJUmXJc573XAYwF0=/0x0:4781x2503/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22876554/1341968229.jpg",
      "publishedAt": "2021-09-25T01:49:25Z",
      "content": "Former Theranos lab director Adam Rosendorff was the second employee who testified in Elizabeth Holmes trial who kept his work emails. Forwarding work emails to a personal account can violate a non-d… [+10469 chars]"
  },
  {
      "source": {
          "id": "google-news",
          "name": "Google News"
      },
      "author": null,
      "title": "SF Chain Store Ban Halts Mission District Taqueria Expansion to North Beach - KPIX CBS SF Bay Area",
      "description": null,
      "url": "https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9dVcxRTV6UUk3Q0XSAQA?oc=5",
      "urlToImage": null,
      "publishedAt": "2021-09-25T01:18:44Z",
      "content": null
  },
  {
      "source": {
          "id": null,
          "name": "Fox Business"
      },
      "author": "Breck Dumas",
      "title": "Texas' state fair opens with major labor shortage - Fox Business",
      "description": "The State Fair of Texas opened Friday, but food vendors warned the lines will be longer because they are severely short on staff.",
      "url": "https://www.foxbusiness.com/economy/texas-state-fair-opens-today-major-labor-shortage",
      "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2021/09/0/0/Texas-State-Fair.jpg?ve=1&tl=1",
      "publishedAt": "2021-09-25T00:51:24Z",
      "content": "The State Fair of Texas opened Friday but vendors warned the event has a Texas-sized problem: a lack of help.\r\nSeveral food vendors at the fair told FOX 4 Thursday evening that they were feeling the … [+1628 chars]"
  },
  {
      "source": {
          "id": "bloomberg",
          "name": "Bloomberg"
      },
      "author": null,
      "title": "China Funds Counting On Beijing to Contain Evergrande Contagion - Bloomberg",
      "description": null,
      "url": "https://www.bloomberg.com/tosv2.html?vid=&uuid=b012ae74-1dbc-11ec-bb85-6c6d57427941&url=L25ld3MvYXJ0aWNsZXMvMjAyMS0wOS0yNS9jaGluYS1mdW5kcy1jb3VudGluZy1vbi1iZWlqaW5nLXRvLWNvbnRhaW4tZXZlcmdyYW5kZS1jb250YWdpb24=",
      "urlToImage": null,
      "publishedAt": "2021-09-25T00:00:00Z",
      "content": "To continue, please click the box below to let us know you're not a robot."
  },
  {
      "source": {
          "id": "reuters",
          "name": "Reuters"
      },
      "author": null,
      "title": "Wall St Week Ahead Fed's coming taper fans talk of renewed 'reflation' trade - Reuters",
      "description": "The Federal Reserve’s signal that it will soon unwind its bond buying program is bolstering the case in financial markets for the so-called reflation trade, which lifted Treasury yields and boosted shares of banks, energy firms and other economically sensitiv…",
      "url": "https://www.reuters.com/business/wall-st-week-ahead-feds-coming-taper-fans-talk-renewed-reflation-trade-2021-09-24/",
      "urlToImage": "https://www.reuters.com/resizer/1nf4BzknJp838vFc-pjLLbPJqRM=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/YXTNFRRHEBK4FO2NC5CR2KLQZI.jpg",
      "publishedAt": "2021-09-24T23:38:00Z",
      "content": "People are seen on Wall Street outside the New York Stock Exchange (NYSE) in New York City, U.S., March 19, 2021. REUTERS/Brendan McDermid/File PhotoNEW YORK, Sept 24 (Reuters) - The Federal Reserves… [+4235 chars]"
  },
  {
      "source": {
          "id": "google-news",
          "name": "Google News"
      },
      "author": null,
      "title": "Jim Cramer's game plan for the trading week of September 27 - CNBC Television",
      "description": null,
      "url": "https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9VEZ3TVgxeUFxaFHSAQA?oc=5",
      "urlToImage": null,
      "publishedAt": "2021-09-24T23:35:42Z",
      "content": null
  },
  {
      "source": {
          "id": null,
          "name": "CNBC"
      },
      "author": "Kevin Stankiewicz",
      "title": "GoodRx's subscription programs now have over 1 million subscribers, co-CEO says - CNBC",
      "description": "\"We're really proud of the momentum there. It continues to be one of the fastest growing parts of our business,\" GoodRx co-CEO Doug Hirsch told CNBC.",
      "url": "https://www.cnbc.com/2021/09/24/goodrxs-subscription-programs-now-have-over-1-million-subscribers-co-ceo-says.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/106714574-1600888309269-goodrx.jpg?v=1600888386",
      "publishedAt": "2021-09-24T23:01:35Z",
      "content": "GoodRx co-CEO Doug Hirsch on Friday told CNBC's Jim Cramer the company has amassed more than a million subscribers across its subscription offerings, while expressing confidence about future growth f… [+1561 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Slate Magazine"
      },
      "author": "Aaron Mak",
      "title": "Why China Finally Decided to Ban Bitcoin - Slate",
      "description": "Beijing concluded it was an energy sucking money laundering tool, among other things.",
      "url": "https://slate.com/business/2021/09/china-bans-crypto-sec-regulations.html",
      "urlToImage": "https://compote.slate.com/images/f661cabb-7476-45e0-b898-8d9b79a7fc8d.jpeg?width=780&height=520&rect=4032x2688&offset=0x0",
      "publishedAt": "2021-09-24T22:59:00Z",
      "content": "After a strong start to the year, bitcoin and its fellow cryptocurrencies hit hard times yet again this week. The biggest news, and most wounding setback, was Chinas announcement of new regulations b… [+4736 chars]"
  },
  {
      "source": {
          "id": "the-hill",
          "name": "The Hill"
      },
      "author": "Jordan Williams",
      "title": "United Airlines employees sue to block vaccine mandate | TheHill - The Hill",
      "description": "Six United Airlines employees filed a federal lawsuit against the company this week seeking to block a COVID-19 vaccine mandate from going into effect.",
      "url": "https://thehill.com/policy/transportation/573893-united-airlines-employees-sue-to-block-vaccine-mandate",
      "urlToImage": "https://thehill.com/sites/default/files/ca_united_040621getty.jpg",
      "publishedAt": "2021-09-24T22:58:14Z",
      "content": "Six United Airlines employees filed a federal lawsuit against the company this week seeking to block a COVID-19 vaccine mandate from going into effect. \r\nThe complaint, filed Tuesday in a Texas feder… [+2000 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Airforcemag.com"
      },
      "author": null,
      "title": "Rolls-Royce Wins B-52 Re-Engining Program Worth $2.6 Billion - Air Force Magazine",
      "description": "Rolls-Royce North America received a contract worth up to $2.6 billion for the B-52 Commercial Engine Replacement Program.",
      "url": "https://www.airforcemag.com/rolls-royce-wins-b-52-re-engining-program-worth-2-6-billion/",
      "urlToImage": "https://www.airforcemag.com/app/uploads/2021/09/Screen-Shot-2021-09-24-at-6.51.58-PM.png",
      "publishedAt": "2021-09-24T22:57:50Z",
      "content": "The Air Force has selected Rolls-Royce North America as its contractor for the B-52 Commercial Engine Replacement Program, or CERP, which will supply new F130 powerplants for all 76 of Air Force Glob… [+3851 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Daily Beast"
      },
      "author": "Corbin Bolies",
      "title": "William Shatner, 90, Set to Fly Into Space With Jeff Bezos' Blue Origin - The Daily Beast",
      "description": "Shatner’s flight will turn him into a real-life Captain Kirk.",
      "url": "https://www.thedailybeast.com/william-shatner-90-set-to-fly-into-space-with-jeff-bezos-blue-origin",
      "urlToImage": "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_2734,w_4861,x_0,y_255/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1632511000/GettyImages-1051924568_qp1r33",
      "publishedAt": "2021-09-24T22:55:51Z",
      "content": "Captain Kirk is truly headed to space... at 90. \r\nWilliam Shatner is set to board Jeff Bezos Blue Origin New Shepard rocket next month, according to TMZ, becoming the oldest man to ever fly into spac… [+1326 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Barron's"
      },
      "author": "Nicholas Jasinski",
      "title": "5G Is Here. AT&T, Verizon, and T-Mobile Need to Prove Its Value to Investors - Barron's",
      "description": "Wireless company CEOs came together this past week and offered a common refrain: Their companies are all in a period of transition.",
      "url": "https://www.barrons.com/articles/verizon-att-t-mobile-5g-stocks-51632522597",
      "urlToImage": "https://images.barrons.com/im-406740/social",
      "publishedAt": "2021-09-24T22:32:00Z",
      "content": "A whos who of the media and telecommunications world gathered this past week at Goldman Sachs annual Communacopia conference, held virtually for the second-straight year. \r\nMost executives described … [+332 chars]"
  },
  {
      "source": {
          "id": "the-jerusalem-post",
          "name": "The Jerusalem Post"
      },
      "author": "By  JERUSALEM POST STAFF",
      "title": "Jewish man fired by Unilever for taking time off during Rosh Hashanah - The Jerusalem Post",
      "description": "Rosenbaum emphasized that his religion prevents him from working on those days, and took the time off anyway, notifying his superiors at Unilever via email about the situation.",
      "url": "https://www.jpost.com/diaspora/antisemitism/jewish-man-fired-by-unilever-for-taking-time-off-during-rosh-hashanah-in-2019-report-680233",
      "urlToImage": "https://images.jpost.com/image/upload/f_auto,fl_lossy/t_JD_ArticleMainImageFaceDetect/480342",
      "publishedAt": "2021-09-24T22:23:00Z",
      "content": null
  },
  {
      "source": {
          "id": null,
          "name": "Los Angeles Times"
      },
      "author": "Craig Trudell and Dana Hull",
      "title": "Tesla expands self-driving test -- to those it deems worthy - Los Angeles Times",
      "description": "Tesla is rolling out a new version of its so-called Full Self-Driving system, but to be eligible, car owners who've already paid $10,000 for the software must pass a seven-day driving evaluation.",
      "url": "https://www.latimes.com/business/technology/story/2021-09-24/tesla-expands-self-driving-software-test-but-only-to-drivers-it-deems-worthy",
      "urlToImage": "https://ca-times.brightspotcdn.com/dims4/default/523dd99/2147483647/strip/true/crop/3000x1575+0+57/resize/1200x630!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F08%2F0d%2F0f1f5de2473ea00d6abe63f6121a%2Ftns-biz-auto-tesladeath-tb.JPG",
      "publishedAt": "2021-09-24T22:20:52Z",
      "content": "The wait is almost over for some Tesla Inc. customers to get access to driver-assistance technology the company has marketed in controversial ways as long as theyre on their best behavior.\r\nChief Exe… [+4265 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Yahoo Entertainment"
      },
      "author": "Alexandra Canal",
      "title": "In battle of pumpkin spice vs. apple, one fall flavor has the edge - Yahoo Finance",
      "description": "New data reveals how Starbucks' Pumpkin Spice Latte is boosting social media conversations about the classic fall flavor.",
      "url": "https://finance.yahoo.com/news/pumpkin-vs-apple-new-data-shows-which-fall-flavor-is-gaining-popularity-214122342.html",
      "urlToImage": "https://s.yimg.com/ny/api/res/1.2/k_pCS8KMDgPE44gZVw0WVQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD01ODM-/https://s.yimg.com/os/creatr-uploaded-images/2021-09/32cf52d0-1195-11ec-bf7a-0e640f470899",
      "publishedAt": "2021-09-24T21:41:22Z",
      "content": "Starbucks' (SBUX) famous Pumpkin Spice Latte has not only helped boost the coffee chain's foot traffic, but also social media conversations about the classic fall flavor. \r\nSocial media analytics com… [+1975 chars]"
  }
  ]
  
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      page: 1,
    };
  }
  async componentDidMount() {
    let url =
      " https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=943e9e521a8940b186f1f8f7854211bf&page=1";
    let data = await fetch(url);
    console.log(data);
    let paresdData = await data.json();
   this.setState = { articles: paresdData.articles };
  }
  handleNextClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=943e9e521a8940b186f1f8f7854211bf&page=${this.state.page + 1 }`;
    let data = await fetch(url);
    console.log("next");
    let paresdData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: paresdData.articles
    })
  }
  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=943e9e521a8940b186f1f8f7854211bf&page=${this.state.page - 1 }`;
    let data = await fetch(url);
    console.log("prev");
    let paresdData = await data.json();
    this.setState={
      page: this.state.page - 1,
      articles: paresdData.articles
    }
  }

  render() {
    return (
      <div className="container my-5">
        <h1>NewSmind | Top-Headlines</h1>
        <div className="row my-4">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4 my-3" key={element.url}>
                <NewsItems
                  title={element.title ? element.title.slice(0, 45) : ""}
                  desc={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  iurl={element.urlToImage}
                  newsurl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
          className="btn btn-danger" disabled = {this.state.page<1}
            onClick={this.handlePrevClick}
          >
            {" "}
            &larr; Previes
          </button>
          <button
            type="button"
          className="btn btn-danger"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
