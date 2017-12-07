// Phantom
import twemoji from 'twemoji';

require("./vendor/phantom.js");

// Roboto Fonts
require("typeface-roboto");
require("typeface-roboto-mono");

// Font Awesome
require("font-awesome-webpack");

// Isotope
function getHashFilter() {
  // get filter=filterName
  var matches = location.hash.match(/filter=([^&]+)/i);
  var hashFilter = matches && matches[1];
  return hashFilter && decodeURIComponent(hashFilter);
}

// init Isotope
var $grid = $(".isotope-grid");

// bind filter button click
var $filterButtonGroup = $(".button-group");
$filterButtonGroup.on("click", "button", function() {
  var filterAttr = $(this).attr("data-filter");
  // set filter in hash
  location.hash = "filter=" + encodeURIComponent(filterAttr);
});

$("#loading").show();

// Isotope
var $grid = $(".isotope-grid").imagesLoaded(function() {
  $(".isotope-grid").show();
  $("#loading").hide();
  // init Isotope after all images have loaded
  $grid.isotope({
    itemSelector: ".isotope-item",
    layoutMode: "fitRows"
  });
});

var isIsotopeInit = false;

function onHashchange() {
  var hashFilter = getHashFilter();
  if (!hashFilter && isIsotopeInit) {
    return;
  }
  isIsotopeInit = true;
  // filter isotope
  var $grid = $(".isotope-grid").imagesLoaded(function() {
    $(".isotope-grid").show();
    $("#loading").hide();
    // init Isotope after all images have loaded
    $grid.isotope({
      itemSelector: ".isotope-item",
      layoutMode: "fitRows",
      filter: hashFilter
    });
  });
  // set selected class on button
  if (hashFilter) {
    $filterButtonGroup.find(".is-checked").removeClass("is-checked");
    $filterButtonGroup
      .find("[data-filter='' + hashFilter + '']")
      .addClass("is-checked");
  }
}

$(window).on("hashchange", onHashchange);

// trigger event handler to init Isotope
onHashchange();

// Changing title of tab
var title = document.title;
var altTitles = [
  "Whatcha up to? 👀",
  "'Ello Gov'nor! 🎩",
  "Top o' the mornin' to ya! ☘",
  "Wubba, lubba dub-dub! 🔬",
  "E.T. phone home. 👽",
  "There's no place like home. 🏠",
  "Live long and prosper. 🖖",
  "Here's Johnny! 🔪",
  "My precious. 💍",
  "Do you read me, HAL? 🔴",
  "Expecto patronum! ⚡"
];
var altTitle = altTitles[Math.floor(Math.random() * altTitles.length)];

$(window).blur(() => {
  document.title = altTitle;
});

$(window).focus(() => {
  document.title = title;
});

// Twemoji
twemoji.parse(document.body, {
  folder: "svg",
  ext: ".svg"
});

// One Signal
var OneSignal = window.OneSignal || [];

OneSignal.push([
  "init",
  {
    appId: "7bc782bf-6ee1-4373-8d1d-1346aba3b9ff",
    autoRegister: false,
    persistNotification: false,
    notifyButton: {
      enable: true, // Required to use the notify button
      size: "medium", // One of "small", "medium", or "large"
      theme: "default", // One of "default" (red-white) or "inverse" (white-red)
      colors: {
        // Customize the colors of the main button and dialog popup button
        "circle.background": "rgb(96, 125, 139)",
        "circle.foreground": "white",
        "badge.background": "rgb(96, 125, 139)",
        "badge.foreground": "white",
        "badge.bordercolor": "white",
        "pulse.color": "white",
        "dialog.button.background.hovering": "rgb(37, 49, 55)",
        "dialog.button.background.active": "rgb(37, 49, 55)",
        "dialog.button.background": "rgb(96, 125, 139)",
        "dialog.button.foreground": "white"
      },
      position: "bottom-left", // Either "bottom-left" or "bottom-right"
      offset: {
        bottom: "20px",
        left: "20px",
        /* Only applied if bottom-left */
        right: "0px" /* Only applied if bottom-right */
      },
      prenotify: true,
      /* Show an icon with 1 unread message for first-time site visitors */
      showCredit: false,
      /* Hide the OneSignal logo */
      text: {
        "tip.state.unsubscribed": "Subscribe to notifications 🍓️",
        "tip.state.subscribed": "You're subscribed to notifications 🎉",
        "tip.state.blocked": "You've blocked notifications 😢️",
        "message.prenotify": "Click to subscribe to notifications 🍓️",
        "message.action.subscribed": "Thanks for subscribing! 😊",
        "message.action.resubscribed": "You're subscribed to notifications 🎉",
        "message.action.unsubscribed":
          "You won't receive notifications again 😳",
        "dialog.main.title": "Manage Site Notifications ⚙️",
        "dialog.main.button.subscribe": "SUBSCRIBE",
        "dialog.main.button.unsubscribe": "UNSUBSCRIBE",
        "dialog.blocked.title": "Unblock Notifications",
        "dialog.blocked.message":
          "Follow these instructions to allow notifications:"
      }
    }
  }
]);
