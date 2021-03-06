(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Tweet = require("./tweet.js");

document.addEventListener("DOMContentLoaded", function(e){
  Tweet.init();
});

},{"./tweet.js":2}],2:[function(require,module,exports){
// Tweet

var tweet = this;

tweet.init = function(){
  tweet.replaceHTML();
  
  document.querySelector("[data-js='submit']").addEventListener("click", tweet.handleOnClickSubmit);
}

// Handle click function
tweet.handleOnClickSubmit = function(e){
  // Append newly rendered tweet to the list of tweets
  var tweetListElement = document.querySelector("[data-js='tweetList']");

  var tweetTextareaElement = document.querySelector("[data-js='tweetTextarea']")

  tweetListElement.innerHTML += tweet.renderTweetListItem(tweetTextareaElement.value);
}

// Render a new tweet for list
tweet.renderTweetListItem = function(tweetString){
  return `<li>${tweetString}</li>`;
}

tweet.renderTextArea = function(){
  return `<textarea placeholder="Write your Tweet Here" data-js="tweetTextarea"></textarea>`;
}

tweet.renderTweetButton = function(){
  return `<input type="submit" name="tweet" value="tweet" data-js="submit"/>`;
}

tweet.renderTweetList = function(){
  return `<ul class="tweetList" data-js="tweetList"></ul>`;
}

// Add to html...
// Waiting for spy()'s
tweet.replaceHTML = function(){
  document.write(tweet.renderTextArea() + tweet.renderTweetButton() + tweet.renderTweetList());
}

},{}]},{},[1]);
