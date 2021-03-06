function getTitle(text) {
  var list = eval('(' + text+ ')');
  return list;
}

String.prototype.replaceAll = function(str1, str2, ignore) 
{
  return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
} 
function isInArray(value, array) {
  return array.indexOf(value);
}
function scan() {
  var text = $("#edit").val();
  var word = text.match(/[\w-']+|[^\w\s]+/g);
  var bad_words = ["all", "another", "own", "and", "any", "anybody", "anyone", "anything", "a", "both", "but", "each", "can't", "either", "everybody", "everyone", "everything", "few", "for", "he", "her", "herself", "hers", "him", "himself", "his","how", "I", "it", "itself", "its", "it’s", "many", "me", "mine", "more", "most", "much", "myself", "neither", "no one", "nobody", "none", "nothing","nor", "one", "one another","or", "other", "others", "ours", "ourselves", "several", "she", "so", "some", "somebody", "someone", "something", "that", "their",  "theirs", "them", "themselves", "these", "this", "they", "those", "to", "us", "we", "what", "whatever", "when", "which", "whichever", "who", "whoever", "whom", "whomever", "whose", "you", "your", "yours", "yourself", "yourselves", "yet", "back", "in", "the", "of", "our", "ours", "just", "on", "as","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety","hundred","thousand","million","billion","trillion","million",",",'"',"!","?"];
  $.each(word, function(index, value){
    if(value) {
      if(isInArray(word[index], bad_words) > -1) {
        word.splice(index,1);
      } else if (word[index] == "") {
        word.splice(index,1);
      } else if (value.length <= 2) {
        word.splice(index,1);
      }
    }

  });
  var wordarray = text.match(/[\w-']+|[^\w\s]+/g);
  $.each(wordarray, function(index, value){
    if(isInArray(value, word) > -1) {
      wordarray[index] = "<a href='#"+value+"' class='ui yellow label'>"+value+"</a>";
      word.splice(isInArray(value, word),1);

    } 

    
  });
  $("#wrapper").html(wordarray.join(" "));
}
$("#start").click(function(){
  $("#form").slideUp();
  scan();
  $("#container").slideDown();
});