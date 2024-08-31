//   
//$("#pCity").ajaxChosen({
//    method: 'GET',
//    url: "/admin/common/getcitybyname",
//    dataType: 'json'
//}, function (data) {
//    var terms = {};
//
//    $.each(data, function (i, val) {
//        terms[i] = val;
//    });
//
//    return terms;
//  
//});

    $("#dCity").ajaxChosen({
    method: 'GET',
    url: "/admin/common/getdestinationcitybyname",
    dataType: 'json'
}, function (data) {
    var terms = {};

    $.each(data, function (i, val) {
        terms[i] = val;
    });

    return terms;
  
});

// FOr search Page
 
        function resetCity(idName, getValue) {

            var myData = {ctId: getValue};
            $.ajax({
                type: "POST",
                data: myData,
                url: "/admin/common/getcitybyid",
                dataType: 'json',
                success: function (data) {
                    $('#' + idName).empty();
                    var element = $('<option selected></option>');
                    element.val(data[0]['id']).html(data[0]['text']);
                    $('#' + idName).append(element);
                    $('#' + idName).trigger('chosen:updated');
                },
                failure: (function () {
                    alert("Failure!!");
                })
            });

        }
       
// FOr search Page


// Get city location By cityid and set responce to target "input id"

 function getcityloc(ctid,targetId){
      $('#'+targetId).empty();
      var myData = {ctid: ctid };
      $.ajax({
                method: 'POST',
                url: "/admin/common/getcityloc",
                dataType: 'json',
                data: myData,
                success:function(data){
                     $('#'+targetId).empty();
                       $('#'+targetId).append($('<option></option>').attr('value', '0').text('Select Location'));
                      $.each(data, function (k, v) {
                       
                        var element = $('<option></option>');

                        element.val(v.id).html(v.text);
                        $('#'+targetId).append(element);
                    });
                    $('#'+targetId).trigger('chosen:updated');
                 }
       });
  }
   
// Get city location By cityid and set responce to target "input id"
