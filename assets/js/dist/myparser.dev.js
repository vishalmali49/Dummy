"use strict";

var splitter = ":";
var valsplit = "=";
var firstload = true;
var ommitbuttons = ["", "c_mainpg", "sidebarToggle", "facrst", "zrfl", "strtrcv", "srac", "loginbtn", "downloadLogBtn", "downloadcomdata", "rebot", "downloadAndLogBtn", "mobile-menu-button"];

function placealldata(rdata) {
  rdata = convertstringtoobj(rdata);
  var id = rdata.bid;

  if (rdata.status.value != "00" || rdata.status.value != 0) {
    if (rdata.status.ispopmsg) {
      alert(rdata.status.popmsg);
      location.reload();
    }
  }

  if (rdata.feilds.length > 0) {
    var feilds = rdata.feilds;

    for (var i in feilds) {
      var id = feilds[i].id,
          value = feilds[i].value;
      var type = $("#" + id).prop("type");

      if (type == "select-one") {
        var tempvalue = value;

        if (value.split(".").length > 1) {
          tempvalue = parseInt(value);
        }

        if (id == "ard1" || id == "ard2") {
          $("select#" + id).val("" + tempvalue);
        } else {
          $("select#" + id).val("" + tempvalue).change();
        }
      } else if (type == "text" || type == "date" || type == "email" || type == "password") {
        $("input#" + id).val(value);
      } else if (type == "checkbox") {
        if (value == true || value == "true") {
          $("input#" + id).attr("checked", "checked");
        } else {
          $("input#" + id).attr("checked", false);
        }
      } else {
        // Function to update the progress bar percentage
        var updateProgressBar = function updateProgressBar(percentage) {
          var svg = document.querySelector('.radial-progress');
          var completeCircle = svg.querySelector('.complete');
          var text = svg.querySelector('.percentage'); // Update data-percentage attribute

          svg.dataset.percentage = percentage; // Calculate stroke dash offset

          var radius = parseInt(completeCircle.getAttribute('r'));
          var circumference = 2 * Math.PI * radius;
          var strokeDashOffset = circumference - percentage * circumference / 100; // Update stroke dash offset and text content

          completeCircle.style.strokeDashoffset = strokeDashOffset;
          text.textContent = percentage + '%';
        };

        if (id == "flmemper") {
          $("#" + id).val("" + value);
          $("#" + id).html(value + "%");
        } else {
          if (value >= 0 && value <= 100) {
            updateProgressBar(value);
          } // $("#" + id).html(value);

        }
      }

      if (id == "brks") {
        if (value == "1" || value == 1) {
          $("#brk").html('<button class=" btn btn-success btn-sm" id="c_mainpg" type="button">' + $("#brk").html() + "</button>");
        } else {
          $("#brk").html('<button class=" btn btn-danger btn-sm" id="c_mainpg" type="button">' + $("#brk").html() + "</button>");
        }
      } else if (id == "hbm") {
        if (value == "1" || value == 1) {
          $("#hbm").html('<button class=" btn btn-success btn-sm" id="c_mainpg1" type="button"> Communicating </button>');
        } else {
          $("#hbm").html('<button class=" btn btn-danger btn-sm" id="c_mainpg" type="button"> Not Communicating </button>');
        }
      } else if (id == "csm") {
        if (value == "1" || value == 1) {
          $("#csm").html('<button class=" btn btn-success btn-sm" id="c_mainpg2" type="button"> Communicating </button>');
        } else {
          $("#csm").html('<button class=" btn btn-danger btn-sm" id="c_mainpg3" type="button"> Not Communicating </button>');
        }
      } else if (id == "frstdt") {
        $("#facrst").attr("title", value);
      } else if (id == "datlg") {
        if (value == "false") {
          $("#downloadLogBtn").attr("disabled", "disabled");
        }
      } else if (id == "datnlg") {
        if (value == "false") {
          $("#downloadAndLogBtn").attr("disabled", "disabled");
        }
      } else if (id == "datcd") {
        if (value == "false") {
          $("#downloadcomdata").attr("disabled", "disabled");
        }
      } else if (id == "CDATE") {
        if (value == "rp1") {
          location.replace("enrep.html");
        } else if (value == "rp2") {
          location.replace("iecrep.html");
        } else if (value == "rp3") {
          location.replace("ieeerep.html");
        } else if (value == "rp4") {
          location.replace("iticrep.html");
        } else if (value == "rp5") {
          location.replace("ieeerep.html");
        } else {
          location.replace("settings.html");
        }
      } else if (id == "mq_client_auth") {
        if (value === "true") {
          $(".mqcauth").prop("checked", true);
          $(".mqcauth").attr("disabled", false);
          $("#serverkeypem").attr("disabled", false);
          $("#servercertpem").attr("disabled", false);
        } else {
          $(".mqcauth").attr("disabled", false);
          $("#serverkeypem").attr("disabled", true);
          $("#servercertpem").attr("disabled", true);
        }
      } else if (id == "datnlgt") {
        $("#datnlgt").attr("title", value);
      } else if (id == "datlgt") {
        $("#datlgt").attr("title", value);
      } else if (id == "sditdt") {
        $("#zrfl").attr("title", value);
      } else if (id == "sracdt") {
        $("#srac").attr("title", value);
      } else if (id == "strcst") {
        $("#strtrcv").attr("title", value);
      } else if (id == "gprs") {
        if (value == "" || typeof value == "undefined") {
          $("#bars div").removeClass("active");
          $("#bars").attr("title", "Ethernet");
        } else {
          $("#bars div").removeClass("active");
          var valueint = parseInt(value);

          if (valueint > 0 && valueint <= 5) {
            $("#bars div.bar").addClass("active");
            $("#bars").attr("title", "Not Connected");
          } else if (valueint > 5 && valueint <= 10) {
            $("#bars div.bar").addClass("active");
            $("#bars div.bar1").addClass("active");
            $("#bars").attr("title", "Poor");
          } else if (valueint > 10 && valueint <= 20) {
            $("#bars div.bar").addCass("active");
            $("#bars div.bar1").addClass("active");
            $("#bars").attr("title", "Good");
          } else if (valueint > 20 && valueint <= 25) {
            $("#bars div.bar").addClass("active");
            $("#bars div.bar1").addClass("active");
            $("#bars div.bar2").addClass("active");
            $("#bars div.bar3").addClass("active");
            $("#bars").attr("title", "Good");
          } else if (valueint > 25 && valueint <= 30) {
            $("#bars div.bar").addClass("active");
            $("#bars div.bar1").addClass("active");
            $("#bars div.bar2").addClass("active");
            $("#bars div.bar3").addClass("active");
            $("#bars div.bar4").addClass("active");
            $("#bars").attr("title", "Excellent");
          }
        }
      } else if (id == "hmp1") {
        $(".sdcardnow .progress-bar").css("width", value);
      }
    }
  }

  console.log("Successfully placed all data.");
  postplacement();
}

function btn_clicked(e) {
  var sdatastr = btnclick_actions(this, "table:first", true);
  sendtoserver(sdatastr);
}

function sendtoserver(sdatastr) {
  if (sdatastr != false) {
    $.ajax({
      url: "http://192.168.4.248/datamgmt.html",
      method: "POST",
      data: sdatastr
    }).done(function (rdata) {
      placealldata(rdata);
    }).fail(function (data) {}).always(function () {});
  }
}

function btnclick_actions(currelement, context, isconfirmationreq) {
  var currpage = window.location.href.split("/")[window.location.href.split("/").length - 1].split("#")[0];

  if ($(currelement).hasClass("navbar-toggle")) {
    return;
  }

  var id = $(currelement).attr("id");

  if (!(currpage == "diag.html" || currpage == "dashboard.html" || currpage == "login.html" || currpage == "trends.html" || currpage == "" || firstload == true || id == "loginbtn" || id == "ct_p" || id == "sidebarToggle" || isconfirmationreq != true)) {
    var r = confirm("Are You Sure.?");

    if (r == true) {
      if (id == "facrst") {
        var res = prompt("All Settings will changed to default...To proceed please press 'F' to reset the device", "");

        if (res != "F") {
          return false;
        }
      } else if (id == "rebot") {
        var res = prompt("Current operation will Restart Gateway...To proceed please press 'R' to Restart", "");

        if (res != "R") {
          return false;
        }
      } else if (id == "zrfl") {
        var res = prompt("All stored data will get Erased...To proceed please press 'Z' to zero fill the SD card", "");

        if (res != "Z") {
          return false;
        }
      } else if (id == "srac") {
        var res = prompt("All Acknowledged Data will send again...To proceed please press 'A' to reset the server acknowledge", "");

        if (res != "A") {
          return false;
        }
      } else if (id == "ipvf") {
        if (!$("#dhcp").prop("checked")) {
          var val1 = ValidateIPaddress($("#IPAddr").val());
          var val2 = ValidateIPaddress($("#netMask").val());
          var val3 = ValidateIPaddress($("#gateway").val());

          if ((val1 && val2 && val3) == false) {
            alert("You have entered an invalid format!");
            return false;
          }
        }
      } else if (id == "ipvf2") {
        if (true) {
          var val1 = ValidatePassword($("#password").val());

          if (val1 == false) {
            alert("you have entered an invalid password!");
            return false;
          }
        }
      } else if (id == "brkrsett") {
        if (!$("#edns").prop("checked")) {
          var val1 = ValidateIPaddress($("#broAddr").val());

          if (val1 == false) {
            alert("You have entered an invalid format!");
            return false;
          }
        } else {
          var val2 = ValidateIPaddress($("#dnssa").val());
          var val3 = ValidateIPaddress($("#dnssa2").val());

          if ((val2 && val3) == false) {
            alert("You have entered an invalid format!");
            return false;
          }
        }
      } else {}
    } else {
      location.reload();
      return;
    }
  }

  var id = $(currelement).attr("id");
  var sdata = {
    bid: id,
    feilds: []
  };

  if (id === "mqttcrt") {} else {
    var parenttable = $(currelement).parents(context)[0];
    var inputs = $(parenttable).find('input[type="text"],input[type="password"],input[type="email"]');
    var dates = $(parenttable).find('input[type="date"]');
    var checkboxes = $(parenttable).find('input[type="checkbox"]');
    var selectlists = $(parenttable).find("select");
    /*text*/

    for (var i in inputs) {
      if (i <= inputs.length) {
        sdata.feilds.push({
          id: $(inputs[i]).attr("id"),
          value: $(inputs[i]).val()
        });
      }
    }
    /*dates*/


    for (var i in dates) {
      if (i <= dates.length) {
        sdata.feilds.push({
          id: $(dates[i]).attr("id"),
          value: $(dates[i]).val()
        });
      }
    }
    /*checkboxes*/


    for (var i in checkboxes) {
      if (i <= checkboxes.length) {
        if ($(checkboxes[i]).is(":checked")) {
          sdata.feilds.push({
            id: $(checkboxes[i]).attr("id"),
            value: true
          });
        } else {
          sdata.feilds.push({
            id: $(checkboxes[i]).attr("id"),
            value: false
          });
        }
      }
    }
    /*selectlists*/


    for (var i in selectlists) {
      if (i <= selectlists.length) {
        sdata.feilds.push({
          id: $(selectlists[i]).attr("id"),
          value: $(selectlists[i]).find(":selected").val()
        });
      }
    }
  }

  var sdatastr = convertobjtostring(sdata);
  console.log(sdatastr);
  return sdatastr;
}

function convertobjtostring(obj) {
  var id = obj.bid;
  var datastring = "";
  datastring = datastring + "bid" + valsplit + id + splitter;

  if (obj.feilds.length > 0) {
    var feilds = obj.feilds;

    for (var i in feilds) {
      var id = feilds[i].id,
          value = feilds[i].value;
      datastring = datastring + id + valsplit + value + splitter;
    }
  }

  return datastring;
}

function convertstringtoobj(datastring) {
  if (datastring != "" && datastring != null && datastring.indexOf("bid=") != -1 && datastring.indexOf("popmsg=") != -1) {
    var dataarray = datastring.split(splitter);

    if (datastring.indexOf(":lr=") != -1) {
      var lr = dataarray[searchStringInArray("lr=", dataarray)].split(valsplit)[1];

      if (lr == 1 || lr == "1") {
        window.location = "login.html";
      }
    }

    var bid = dataarray[searchStringInArray("bid=", dataarray)].split(valsplit)[1];
    var popmsg = dataarray[searchStringInArray("popmsg=", dataarray)].split(valsplit)[1];

    if (dataarray.length > 0) {
      var obj = {
        bid: bid,
        status: {
          value: "01",
          ispopmsg: true,
          popmsg: popmsg,
          isfields: true
        },
        feilds: []
      };

      if (popmsg == "" || popmsg == " " || popmsg == null) {
        obj.status.ispopmsg = false;
      }

      if (obj.feilds.length <= 0) {
        obj.status.isfields = false;
      }

      if (bid == "loginbtn" && (lr == 0 || lr == "0") && !obj.status.ispopmsg) {
        window.location = "dashboard.html";
      }

      for (var i in dataarray) {
        if (i <= dataarray.length) {
          if (dataarray[i].split(valsplit)[0] == "bid" || dataarray[i].split(valsplit)[0] == "popmsg" || dataarray[i].split(valsplit)[0] == "lr") {} else {
            var value = dataarray[i].split(valsplit)[1];

            if (value != null && value.indexOf(";") != -1) {
              value = value.replace(/;/gi, ":");
            }

            obj.feilds.push({
              id: dataarray[i].split(valsplit)[0],
              type: $("#" + dataarray[i].split(valsplit)[0]).prop("type"),
              value: value
            });
          }
        }
      }
    }

    return obj;
  }
}

function searchStringInArray(str, strArray) {
  for (var j = 0; j < strArray.length; j++) {
    if (strArray[j].match("^" + str)) return j;
  }

  return -1;
}

var currpage = window.location.href.split("/")[window.location.href.split("/").length - 1];

function setrecursivecalls() {
  if (currpage == "diag.html" || currpage == "dashboard.html" || currpage == "allparams.html" || currpage == "trends.html") {
    if (currpage == "allparams.html") {
      for (var i = 0; i < 56; i++) {
        setInterval(reqfordata, 1000, i);
      }
    } else {
      setInterval(reqfordata, 1000, "ors");
    }
  }
}

function ValidateIPaddress(inputText) {
  var ipformat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

  if (inputText.match(ipformat)) {
    return true;
  } else {
    return false;
  }
}

function ValidatePassword(inputPass) {
  var Passformat = /^[ A-Za-z0-9_@.#-%$!*-]*$/;

  if (inputPass.match(Passformat)) {
    return true;
  } else {
    return false;
  }
}

$(document).ready(function () {
  firstloadvalues();
  setrecursivecalls();
});
$(document).ready(function () {
  function done() {
    var t;
    document.onload = resetTimer;
    document.onmousemove = resetTimer;
    document.onmousedown = resetTimer;
    document.ontouchstart = resetTimer;
    document.onclick = resetTimer;
    document.onscroll = resetTimer;
    document.onkeypress = resetTimer;

    function logout() {
      $("a[href='logout.html']")[0].click();
    }

    function resetTimer() {
      clearTimeout(t);
      t = setTimeout(logout, 300000);
    }
  }
});

function firstloadvalues() {
  var all_buttons = $("table button");

  for (var i = 0; i < all_buttons.length; i++) {
    var button = all_buttons[i];
    var id = $(button).prop("id");
    var sdatastr = "bid=" + id + ":read=1";

    if (ommitbuttons.indexOf(id) > -1) {
      /*ommit*/
    } else {
      $.ajax({
        url: "http://192.168.4.248/datamgmt.html",
        method: "POST",
        data: sdatastr
      }).done(function (rdata) {
        placealldata(rdata);
        firstload = false;
      }).fail(function (data) {}).always(function () {});
    }
  }
}

function postplacement() {
  var currpage = window.location.href.split("/")[window.location.href.split("/").length - 1].split("#")[0];
  var Weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var days = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28"];

  if (currpage == "cloudcfg.html") {
    /*for Demand Control Settings*/
    var val = $("#dct").find(":selected").val();

    if (val == 0) {
      $("#fci").prop("readonly", false);
      $("#fci").parent().prev().html("Fore cast interval");
      $("#hl").parent().prev().html("High Limit 1");
      $("#hl1").parent().prev().html("High Limit 2");
      $("#ll").parent().prev().html("Low Limit ");
      $("#hl").attr("data-original-title", "1% to 100% of full scale");
      $("#hl1").attr("data-original-title", "1% to 99% of High limit 1");
      $("#ll").attr("data-original-title", "1% to 99% of High limit 2");
      $("#fci").attr("data-original-title", "20% t0 50% of Demand period");
    } else if (val == 1) {
      $("#fci").prop("readonly", false);
      $("#fci").parent().prev().html("Fore cast interval");
      $("#hl").parent().prev().html("Step 2");
      $("#hl1").parent().prev().html("Step 3");
      $("#ll").parent().prev().html("Step 4");
      $("#hl").attr("data-original-title", "1% to 100% of full scale");
      $("#hl1").attr("data-original-title", "1% to 100% of full scale");
      $("#ll").attr("data-original-title", "1% to 100% of full scale");
      $("#fci").attr("data-original-title", "20% t0 50% of Demand period");
    } else {}
    /*reset all*/


    for (var i = 1; i < 9; i++) {
      $("#dtd" + i).prop("readonly", false);
      $("#t" + i + "hl").prop("readonly", false);
      $("#t" + i + "hl1").prop("readonly", false);
      $("#t" + i + "ll").prop("readonly", false);
    }
    /*set all*/


    for (var i = 1; i < 9; i++) {
      if (i > val) {
        $("#dtd" + i).prop("readonly", true);
        $("#t" + i + "hl").prop("readonly", true);
        $("#t" + i + "hl1").prop("readonly", true);
        $("#t" + i + "ll").prop("readonly", true);
      } else {}
    }
    /*for TOD Settings Demand Slots*/


    var val = $("#ndtd").find(":selected").val();
    /*reset all*/

    var val111 = $("#dct").find(":selected").val();

    for (var i = 1; i < 9; i++) {
      $("#dtd" + i).prop("readonly", false);
      $("#t" + i + "hl").prop("readonly", false);
      $("#t" + i + "hl1").prop("readonly", false);
      $("#t" + i + "ll").prop("readonly", false);

      if (val > 1 && val111 == 1) {
        $("#dtd" + i).parent().prev().html("Demand TOD slot" + i);
        $("#t" + i + "hl").parent().prev().html("TOD slot " + i + " Step 2");
        $("#t" + i + "hl1").parent().prev().html("TOD slot " + i + " Step 3");
        $("#t" + i + "ll").parent().prev().html("TOD slot " + i + " Step 4");
        $("#t" + i + "hl1").attr("data-original-title", "1% to 100% of full scale");
        $("#t" + i + "ll").attr("data-original-title", "1% to 100% of full scale");
      } else {
        $("#dtd" + i).parent().prev().html("Demand TOD slot " + i);
        $("#t" + i + "hl").parent().prev().html("TOD slot " + i + " High Limit 1");
        $("#t" + i + "hl1").parent().prev().html("TOD slot " + i + " High Limit 2");
        $("#t" + i + "ll").parent().prev().html("TOD slot " + i + " Low Limit");
        $("#t" + i + "hl1").attr("data-original-title", "1% to 99% of High limit 1");
        $("#t" + i + "ll").attr("data-original-title", "50% to 99% of High limit 2");
      }
    }
    /*set all*/


    for (var i = 1; i < 9; i++) {
      if (i > val) {
        $("#dtd" + i).prop("readonly", true);
        $("#t" + i + "hl").prop("readonly", true);
        $("#t" + i + "hl1").prop("readonly", true);
        $("#t" + i + "ll").prop("readonly", true);
      } else {}
    }
    /*for Energy TOD Settings Slots*/


    var val = $("#e_dtod").find(":selected").val();

    if (val == 0) {
      var temp = $("#ndtd").find(":selected").val();
      $("#ntod").val(temp);
      var val1 = $("#ntod").find(":selected").val();
      $("#ntod").prop("disabled", true);
      /*set copy all*/

      for (var i = 1; i < 9; i++) {
        $("#tod" + i).val($("#dtd" + i).val());
      }
      /*disable all*/


      for (var i = 1; i < 9; i++) {
        $("#tod" + i).prop("readonly", true);
      }
    } else {
      $("#ntod").prop("disabled", false);
      var val1 = $("#ntod").find(":selected").val();

      if (typeof val1 == "undefined") {
        val1 = 0;
      }
      /*reset all*/


      for (var i = 1; i < 9; i++) {
        $("#tod" + i).prop("readonly", false);
      }
      /*set all*/


      for (var i = 1; i < 9; i++) {
        if (i > val1) {
          $("#tod" + i).prop("readonly", true);
        } else {}
      }
    }
    /*for Digital Outputs and Analog Inputs and AutoReset and Override Controls */


    var val1 = $("#do1p").find(":selected").val();
    var val2 = $("#d2ps").find(":selected").val();
    var val3 = $("#d3ps").find(":selected").val();
    var val4 = $("#d4ps").find(":selected").val();
    var val5 = $("#ai1s").find(":selected").val();
    var val6 = $("#ai2s").find(":selected").val();
    var val7 = $("#ar").find(":selected").val();
    var val8 = $("#ao1p").find(":selected").val();
    var val9 = $("#ao2p").find(":selected").val();

    if (val1 == 0) {
      $("#d1hl").prop("readonly", true);
      $("#d1ll").prop("readonly", true);

      if ($("#rl1").parent(".material-switch").find("label").length > 0) {} else {
        $("#rl1").parent(".material-switch").find("label").remove();
        $("#rl1").parent(".material-switch").find("span").remove();
        $("#rl1").parent(".material-switch").append('<label for="rl1" class="label-success"></label>');
      }
    } else {
      $("#d1hl").prop("readonly", false);
      $("#d1ll").prop("readonly", false);

      if ($("#rl1").parent(".material-switch").find("label").length > 0) {
        $("#rl1").parent(".material-switch").find("label").remove();
        $("#rl1").parent(".material-switch").append('<span class="btn btn-default btn-xs" >Disabled</label>');
      } else {}
    }

    if (val2 == 0) {
      $("#d2hl").prop("readonly", true);
      $("#d2ll").prop("readonly", true);

      if ($("#rl2").parent(".material-switch").find("label").length > 0) {} else {
        $("#rl2").parent(".material-switch").find("label").remove();
        $("#rl2").parent(".material-switch").find("span").remove();
        $("#rl2").parent(".material-switch").append('<label for="rl2" class="label-success"></label>');
      }
    } else {
      $("#d2hl").prop("readonly", false);
      $("#d2ll").prop("readonly", false);

      if ($("#rl2").parent(".material-switch").find("label").length > 0) {
        $("#rl2").parent(".material-switch").find("label").remove();
        $("#rl2").parent(".material-switch").append('<span class="btn btn-default btn-xs" >Disabled</span>');
      } else {}
    }

    if (val3 == 0) {
      $("#d3hl").prop("readonly", true);
      $("#d3ll").prop("readonly", true);

      if ($("#rl3").parent(".material-switch").find("label").length > 0) {} else {
        $("#rl3").parent(".material-switch").find("label").remove();
        $("#rl3").parent(".material-switch").find("span").remove();
        $("#rl3").parent(".material-switch").append('<label for="rl3" class="label-success"></label>');
      }
    } else {
      $("#d3hl").prop("readonly", false);
      $("#d3ll").prop("readonly", false);

      if ($("#rl3").parent(".material-switch").find("label").length > 0) {
        $("#rl3").parent(".material-switch").find("label").remove();
        $("#rl3").parent(".material-switch").append('<span class="btn btn-default btn-xs" >Disabled</span>');
      } else {}
    }

    if (val4 == 0) {
      $("#d4hl").prop("readonly", true);
      $("#d4ll").prop("readonly", true);

      if ($("#rl4").parent(".material-switch").find("label").length > 0) {} else {
        $("#rl4").parent(".material-switch").find("label").remove();
        $("#rl4").parent(".material-switch").find("span").remove();
        $("#rl4").parent(".material-switch").append('<label for="rl4" class="label-success"></label>');
      }
    } else {
      $("#d4hl").prop("readonly", false);
      $("#d4ll").prop("readonly", false);

      if ($("#rl4").parent(".material-switch").find("label").length > 0) {
        $("#rl4").parent(".material-switch").find("label").remove();
        $("#rl4").parent(".material-switch").append('<span class="btn btn-default btn-xs" >Disabled</span>');
      } else {}
    }

    if (val5 != 0 && val6 != 0) {
      $("#ana1 option[value=1]").prop("disabled", true);
      $("#ana1 option[value=2]").prop("disabled", true);
      $("#ana1").val("xyz");
      $("#ai1f").prop("readonly", false);
      $("#ai2f").prop("readonly", false);
    } else {
      if (val5 == 0) {
        $("#ai1f").prop("readonly", true);

        if ($("#ana1 option[value=1]").length <= 0) {
          $("#ana1").append('<option value="1">Analog Output 1</option>');
        } else {
          $("#ana1 option[value=1]").prop("disabled", false);
        }
      } else {
        $("#ai1f").prop("readonly", false);
        $("#ana1 option[value=1]").prop("disabled", true);
      }

      if (val6 == 0) {
        $("#ai2f").prop("readonly", true);

        if ($("#ana1 option[value=2]").length <= 0) {
          $("#ana1").append('<option value="2">Analog Output 2</option>');
        } else {
          $("#ana1 option[value=2]").prop("disabled", false);
        }
      } else {
        $("#ai2f").prop("readonly", false);
        $("#ana1 option[value=2]").prop("disabled", true);
      }
    }

    if (val7 == 0) {
      $("#art").prop("readonly", true);
      $("#ard1").prop("readonly", true);
      $("#ard2").prop("readonly", true);
      $("#ard1").prop("disabled", true);
      $("#ard2").prop("disabled", true);
    } else if (val7 == 1) {
      /*Monthly*/
      $("#art").prop("readonly", false);
      $("#ard1").prop("readonly", false);
      $("#ard2").prop("readonly", true);
      $("#ard1").prop("disabled", false);
      $("#ard2").prop("disabled", true);
    } else if (val7 == 2) {
      /*Daily*/
      $("#art").prop("readonly", false);
      $("#ard1").prop("readonly", true);
      $("#ard2").prop("readonly", true);
      $("#ard1").prop("disabled", true);
      $("#ard2").prop("disabled", true);
    } else if (val7 == 3) {
      /*Weekly*/
      $("#art").prop("readonly", false);
      $("#ard1").prop("readonly", true);
      $("#ard2").prop("readonly", false);
      $("#ard1").prop("disabled", true);
      $("#ard2").prop("disabled", false);
    }
    /*}*/


    if (val8 == 0) {
      $("#ao1o").prop("disabled", true);
    } else {
      $("#ao1o").prop("disabled", false);
    }

    if (val9 == 0) {
      $("#ao2o").prop("disabled", true);
    } else {
      $("#ao2o").prop("disabled", false);
    }
  } else if (currpage = "settings.html") {
    var val = $("#CNSW").find(":selected").val();

    if (val == 1) {
      $("#timingseg1mi").html("1");
      $("#timingseg2mi").html("10");
      $("#timingseg3mi").html("60");
      $("#timingseg4mi").html("60");
      $("#timingseg5mi").html("1");
    } else if (val == 2) {
      $("#timingseg1mi").html("60");
      $("#timingseg2mi").html("300");
      $("#timingseg3mi").html("300");
      $("#timingseg4mi").html("300");
      $("#timingseg5mi").html("60");
    }
  }
}

$(document).on("change", "select", function () {
  if ($(this).attr("id") == "ard1" || $(this).attr("id") == "ard2") {} else {
    postplacement();
  }
});
$(document).on("click", "button", btn_clicked);

function reqfordata(str) {
  var id = "";
  console.log(str);

  if (currpage == "diag.html") {
    id = "dipg";
  } else if (currpage == "dashboard.html") {
    id = "hmpg";
  } else if (currpage == "allparams.html") {
    id = "params" + str;
  }

  if (currpage == "trends.html") {
    id = "snsd:max=" + $("input[type=radio][name=snsp]:checked").attr("data-value");
  }

  var sdatastr = "bid=" + id + ":read=1:";

  if (reqfordata != false) {
    console.log(sdatastr);
    $.ajax({
      url: "http://192.168.4.248/datamgmt.html",
      method: "POST",
      data: sdatastr
    }).done(function (rdata) {
      placealldata(rdata);
    }).fail(function (data) {}).always(function () {});
  }
}

var myTimeout = setTimeout(myGreeting, 600000);

function myGreeting() {
  window.location.replace("dashboard.html");
}