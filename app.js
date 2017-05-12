`use strict`
const API_KEY = "zqSwzbdKdAfnR491Nvo80MQZgZW2";
const API_BASE_URL = "https://cricapi.com/api/";
const API_END_POINTS = {
  COMING_MATCHES: 'matches',
  OLD_MATCHES: 'cricket',
  SCORE: 'cricketScore',
  CALENDAR: 'matchCalendar'
}

fetch(`${API_BASE_URL}${API_END_POINTS.COMING_MATCHES}?apikey=${API_KEY}`).then(response => {
  if (response.status === 200) {
    response.json().then(function (matches) {
      let matches_div = '';
      for (let index in matches.matches) {
        matches_div += `<div class=" demo-card">
              <div>
                <h2>
                  ${matches.matches[index]['team-1']} <br>
                  vs <br>
                  ${matches.matches[index]['team-2']}
                </h2>
              </div>
              <div>
                On ${matches.matches[index].date.substring(0, 10)}
              </div>
              <div class="actions">
                <a>
                  Add to Calendar
                </a>
              </div>
            </div>
          </div>`;
      }
      document.getElementById('upcoming_matches').innerHTML = matches_div;
    });
  }
})