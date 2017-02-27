/**
 * Created by Dima on 24.02.2017.
 */
var request=require('request'),
    cheerio=require('cheerio'),
    express=require('express'),
    path=require('path'),
    fs=require('fs'),
    app=express();
    port=8000;
    url='https://www.nb.by/kvartiry-prodazha-nedvizhimosti';
request(url, function (err,resp, body) {
  var $=cheerio.load(body);
  var price = $('.price');
  var priceText=price.text();
  var list_items=$('.overflow');
  var list_itemsText=list_items.text();


console.log( list_itemsText);})
