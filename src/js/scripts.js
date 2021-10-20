// document.addEventListener("click", clickHandlers);

var API =
  "https://api.nytimes.com/svc/topstories/v2/nyregion.json?api-key=uQG4jhIEHKHKm0qMKGcTHqUgAolr1GM0";

function getStories() {
  fetch(API)
    .then((response) => response.json())
    .then((data) => showData(data.results));
}

function showData(stories) {
  console.log(" sample ", stories[0]);
  var looped = stories
    .map(
      (story) => `
      <div class="item">

      <img src="${story.multimedia ? story.multimedia[2].url :"http://placekitten.com/200/200"}" alt="" />

        <h3><a href="${story.url}">${story.title}</a></h3>
        <p>${story.abstract}</p>
      </div>
    `
    )
    .join("");

  document.querySelector(".stories").innerHTML = looped;
}

getStories();