async function init()
{
    
    let mag0data = await fetchData(`https://api.rss2json.com/v1/api.json?rss_url=${magazines[0]}`);
    console.log(mag0data);
    let mag1data = await fetchData(`https://api.rss2json.com/v1/api.json?rss_url=${magazines[1]}`);
    console.log(mag1data);
    let mag2data = await fetchData(`https://api.rss2json.com/v1/api.json?rss_url=${magazines[2]}`);
    console.log(mag2data);

    let magData = [mag0data, mag1data, mag2data];
    console.log(magData);

    addCardsToAccordion(magData);
}
init();

async function fetchData(jsonURL)
{
    try {
        let res = await fetch(jsonURL);
        let data = await res.json();
        return data;
    }
    catch(err) {
        return null;
    }
}


function addCardsToAccordion(magData)
{
    console.log(magData);

    let accorEle = document.getElementById('accordion');
    accorEle.innerHTML = "";

    for(let i = 0;i < magData.length;i++)
    {
        let newsCategory = magData[i]["feed"]["title"];
        let newsList = magData[i]["items"];

        if(i == 0)
        {
            accorEle.innerHTML += `
            <div class="card">
                <div class="card-header" id="headingOne">
                    <h5 class="mb-0 d-flex justify-content-between">
                        <button class="btn w-100 text-left" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        ${newsCategory}
                        </button>
                        <i class="fa-solid fa-angle-down pt-2"></i>
                    </h5>
                </div>
                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne">
                    <div class="card-body">
                        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <a href="${newsList[0]["link"]}">
                                        <div class="card">
                                            <img class="card-img-top" src="${newsList[0]["enclosure"]["link"]}" alt="Card image cap">
                                            <div class="card-body">
                                                <h5 class="card-title">${newsList[0]["title"]}</h5>
                                                <h6 class="card-subtitle mb-2 text-muted">${newsList[0]["author"]} . ${newsList[0]["pubDate"]}</h6>
                                                <p class="card-text">${newsList[0]["description"]}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="carousel-item">
                                    <a href="${newsList[1]["link"]}">
                                        <div class="card">
                                            <img class="card-img-top" src="${newsList[1]["enclosure"]["link"]}" alt="Card image cap">
                                            <div class="card-body">
                                                <h5 class="card-title">${newsList[1]["title"]}</h5>
                                                <h6 class="card-subtitle mb-2 text-muted">${newsList[1]["author"]} . ${newsList[1]["pubDate"]}</h6>
                                                <p class="card-text">${newsList[1]["description"]}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="carousel-item">
                                    <a href="${newsList[2]["link"]}">
                                        <div class="card">
                                            <img class="card-img-top" src="${newsList[2]["enclosure"]["link"]}" alt="Card image cap">
                                            <div class="card-body">
                                                <h5 class="card-title">${newsList[2]["title"]}</h5>
                                                <h6 class="card-subtitle mb-2 text-muted">${newsList[2]["author"]} . ${newsList[2]["pubDate"]}</h6>
                                                <p class="card-text">${newsList[2]["description"]}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="carousel-item">
                                    <a href="${newsList[3]["link"]}">
                                        <div class="card">
                                            <img class="card-img-top" src="${newsList[3]["enclosure"]["link"]}" alt="Card image cap">
                                            <div class="card-body">
                                                <h5 class="card-title">${newsList[3]["title"]}</h5>
                                                <h6 class="card-subtitle mb-2 text-muted">${newsList[3]["author"]} . ${newsList[3]["pubDate"]}</h6>
                                                <p class="card-text">${newsList[3]["description"]}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="carousel-item">
                                    <a href="${newsList[4]["link"]}">
                                        <div class="card">
                                            <img class="card-img-top" src="${newsList[4]["enclosure"]["link"]}" alt="Card image cap">
                                            <div class="card-body">
                                                <h5 class="card-title">${newsList[4]["title"]}</h5>
                                                <h6 class="card-subtitle mb-2 text-muted">${newsList[4]["author"]} . ${newsList[4]["pubDate"]}</h6>
                                                <p class="card-text">${newsList[4]["description"]}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="carousel-item">
                                    <a href="${newsList[5]["link"]}">
                                        <div class="card">
                                            <img class="card-img-top" src="${newsList[5]["enclosure"]["link"]}" alt="Card image cap">
                                            <div class="card-body">
                                                <h5 class="card-title">${newsList[5]["title"]}</h5>
                                                <h6 class="card-subtitle mb-2 text-muted">${newsList[5]["author"]} . ${newsList[5]["pubDate"]}</h6>
                                                <p class="card-text">${newsList[5]["description"]}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="carousel-item">
                                    <a href="${newsList[6]["link"]}">
                                        <div class="card">
                                            <img class="card-img-top" src="${newsList[6]["enclosure"]["link"]}" alt="Card image cap">
                                            <div class="card-body">
                                                <h5 class="card-title">${newsList[6]["title"]}</h5>
                                                <h6 class="card-subtitle mb-2 text-muted">${newsList[6]["author"]} . ${newsList[6]["pubDate"]}</h6>
                                                <p class="card-text">${newsList[6]["description"]}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="carousel-item">
                                    <a href="${newsList[7]["link"]}">
                                        <div class="card">
                                            <img class="card-img-top" src="${newsList[7]["enclosure"]["link"]}" alt="Card image cap">
                                            <div class="card-body">
                                                <h5 class="card-title">${newsList[7]["title"]}</h5>
                                                <h6 class="card-subtitle mb-2 text-muted">${newsList[7]["author"]} . ${newsList[7]["pubDate"]}</h6>
                                                <p class="card-text">${newsList[7]["description"]}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="carousel-item">
                                    <a href="${newsList[8]["link"]}">
                                        <div class="card">
                                            <img class="card-img-top" src="${newsList[8]["enclosure"]["link"]}" alt="Card image cap">
                                            <div class="card-body">
                                                <h5 class="card-title">${newsList[8]["title"]}</h5>
                                                <h6 class="card-subtitle mb-2 text-muted">${newsList[8]["author"]} . ${newsList[8]["pubDate"]}</h6>
                                                <p class="card-text">${newsList[8]["description"]}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="carousel-item">
                                    <a href="${newsList[9]["link"]}">
                                        <div class="card">
                                            <img class="card-img-top" src="${newsList[9]["enclosure"]["link"]}" alt="Card image cap">
                                            <div class="card-body">
                                                <h5 class="card-title">${newsList[9]["title"]}</h5>
                                                <h6 class="card-subtitle mb-2 text-muted">${newsList[9]["author"]} . ${newsList[9]["pubDate"]}</h6>
                                                <p class="card-text">${newsList[9]["description"]}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>`;
        }
        else
        {
            let headNum;
            if(i == 1)
            {
                headNum = "Two";
            }
            else if(i == 2)
            {
                headNum = "Three";
            }

            accorEle.innerHTML += `
            <div class="card">
                <div class="card-header" id="heading${headNum}">
                    <h5 class="mb-0 d-flex justify-content-between">
                        <button class="btn collapsed w-100 text-left" data-toggle="collapse" data-target="#collapse${headNum}" aria-expanded="false" aria-controls="collapse${headNum}">
                        ${newsCategory}
                        </button>
                        <i class="fa-solid fa-angle-down pt-2"></i>
                    </h5>
                </div>
                <div id="collapse${headNum}" class="collapse" aria-labelledby="heading${headNum}">
                    <div class="card-body">
                        <div id="carouselExampleControls${headNum}" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <a href="${newsList[0]["link"]}">
                                        <div class="card">
                                            <img class="card-img-top" src="${newsList[0]["enclosure"]["link"]}" alt="Card image cap">
                                            <div class="card-body">
                                                <h5 class="card-title">${newsList[0]["title"]}</h5>
                                                <h6 class="card-subtitle mb-2 text-muted">${newsList[0]["author"]} . ${newsList[0]["pubDate"]}</h6>
                                                <p class="card-text">${newsList[0]["description"]}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="carousel-item">
                                    <a href="${newsList[1]["link"]}">
                                        <div class="card">
                                            <img class="card-img-top" src="${newsList[1]["enclosure"]["link"]}" alt="Card image cap">
                                            <div class="card-body">
                                                <h5 class="card-title">${newsList[1]["title"]}</h5>
                                                <h6 class="card-subtitle mb-2 text-muted">${newsList[1]["author"]} . ${newsList[1]["pubDate"]}</h6>
                                                <p class="card-text">${newsList[1]["description"]}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="carousel-item">
                                    <a href="${newsList[2]["link"]}">
                                        <div class="card">
                                            <img class="card-img-top" src="${newsList[2]["enclosure"]["link"]}" alt="Card image cap">
                                            <div class="card-body">
                                                <h5 class="card-title">${newsList[2]["title"]}</h5>
                                                <h6 class="card-subtitle mb-2 text-muted">${newsList[2]["author"]} . ${newsList[2]["pubDate"]}</h6>
                                                <p class="card-text">${newsList[2]["description"]}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="carousel-item">
                                    <a href="${newsList[3]["link"]}">
                                        <div class="card">
                                            <img class="card-img-top" src="${newsList[3]["enclosure"]["link"]}" alt="Card image cap">
                                            <div class="card-body">
                                                <h5 class="card-title">${newsList[3]["title"]}</h5>
                                                <h6 class="card-subtitle mb-2 text-muted">${newsList[3]["author"]} . ${newsList[3]["pubDate"]}</h6>
                                                <p class="card-text">${newsList[3]["description"]}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="carousel-item">
                                    <a href="${newsList[4]["link"]}">
                                        <div class="card">
                                            <img class="card-img-top" src="${newsList[4]["enclosure"]["link"]}" alt="Card image cap">
                                            <div class="card-body">
                                                <h5 class="card-title">${newsList[4]["title"]}</h5>
                                                <h6 class="card-subtitle mb-2 text-muted">${newsList[4]["author"]} . ${newsList[4]["pubDate"]}</h6>
                                                <p class="card-text">${newsList[4]["description"]}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="carousel-item">
                                    <a href="${newsList[5]["link"]}">
                                        <div class="card">
                                            <img class="card-img-top" src="${newsList[5]["enclosure"]["link"]}" alt="Card image cap">
                                            <div class="card-body">
                                                <h5 class="card-title">${newsList[5]["title"]}</h5>
                                                <h6 class="card-subtitle mb-2 text-muted">${newsList[5]["author"]} . ${newsList[5]["pubDate"]}</h6>
                                                <p class="card-text">${newsList[5]["description"]}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="carousel-item">
                                    <a href="${newsList[6]["link"]}">
                                        <div class="card">
                                            <img class="card-img-top" src="${newsList[6]["enclosure"]["link"]}" alt="Card image cap">
                                            <div class="card-body">
                                                <h5 class="card-title">${newsList[6]["title"]}</h5>
                                                <h6 class="card-subtitle mb-2 text-muted">${newsList[6]["author"]} . ${newsList[6]["pubDate"]}</h6>
                                                <p class="card-text">${newsList[6]["description"]}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="carousel-item">
                                    <a href="${newsList[7]["link"]}">
                                        <div class="card">
                                            <img class="card-img-top" src="${newsList[7]["enclosure"]["link"]}" alt="Card image cap">
                                            <div class="card-body">
                                                <h5 class="card-title">${newsList[7]["title"]}</h5>
                                                <h6 class="card-subtitle mb-2 text-muted">${newsList[7]["author"]} . ${newsList[7]["pubDate"]}</h6>
                                                <p class="card-text">${newsList[7]["description"]}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="carousel-item">
                                    <a href="${newsList[8]["link"]}">
                                        <div class="card">
                                            <img class="card-img-top" src="${newsList[8]["enclosure"]["link"]}" alt="Card image cap">
                                            <div class="card-body">
                                                <h5 class="card-title">${newsList[8]["title"]}</h5>
                                                <h6 class="card-subtitle mb-2 text-muted">${newsList[8]["author"]} . ${newsList[8]["pubDate"]}</h6>
                                                <p class="card-text">${newsList[8]["description"]}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="carousel-item">
                                    <a href="${newsList[9]["link"]}">
                                        <div class="card">
                                            <img class="card-img-top" src="${newsList[9]["enclosure"]["link"]}" alt="Card image cap">
                                            <div class="card-body">
                                                <h5 class="card-title">${newsList[9]["title"]}</h5>
                                                <h6 class="card-subtitle mb-2 text-muted">${newsList[9]["author"]} . ${newsList[9]["pubDate"]}</h6>
                                                <p class="card-text">${newsList[9]["description"]}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        <a class="carousel-control-prev" href="#carouselExampleControls${headNum}" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleControls${headNum}" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                    </div>
                </div>
            </div>
            `;
        }
    }
}