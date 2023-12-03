/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronouns = ["the", "our", "some"];
  let adjs = ["great", "big", "cool"];
  let nouns = ["jogger", "racoon", "blog"];
  let tlds = [".com", ".org", ".es"];

  let domainNames = [];

  for (let pronoun of pronouns) {
    for (let adj of adjs) {
      for (let noun of nouns) {
        for (let tld of tlds) {
          domainNames.push(`${pronoun}${adj}${noun}${tld}`);
        }
      }
    }
  }
  document.body.innerHTML = `<ul>${domainNames
    .map(domainNames => `<li>${domainNames}</li>`)
    .join(" ")}</ul>`;
};
