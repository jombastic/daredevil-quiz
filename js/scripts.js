//back-end logic
var character = function(motivation, dreams, person, flaws) {
  if((motivation === "respect" || dreams === "memories") && (person === "not" || flaws === "arrogant")) {
    return "fisk";
  } else if ((motivation === "empathy" || dreams === "surreal") && (person === "yes" || flaws === "stubborn")) {
    return "murdock";
  } else if ((motivation === "guilt" || dreams === "paranoid") && (person === "good" || flaws === "self-righteous")) {
    return "page";
  } else if ((motivation === "pursuit" || dreams === "flying") && (person === "best" || flaws === "insecure")) {
    return "nelson";
  }
};



//front-end logic
$(document).ready(function() {
  $("form").submit(function(event) {
    var motivation = $("input:radio[name=motivation]:checked").val();
    var dreams = $("input:radio[name=dreams]:checked").val();
    var person = $("input:radio[name=person]:checked").val();
    var flaws = $("input:radio[name=flaws]:checked").val();
    var characters = character(motivation, dreams, person, flaws);
   	$("#" + characters).show();

    $("input").prop('disabled', true);
    event.preventDefault();
  });
});
