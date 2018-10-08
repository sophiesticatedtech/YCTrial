function getRDWData()() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "https://opendata.rdw.nl/resource/m9d7-ebf2.json?kenteken=GJ223G", true);
    xhttp.send();
  }
