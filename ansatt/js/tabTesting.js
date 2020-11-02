function openTab(evt, nameTab) {

    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(nameTab).style.display = "block";
    evt.currentTarget.className += " active";
  }
  document.getElementById("defaultOpen").click();

// Brukes f.eks slik:


    <div class="tab">
        <button class="tablinks" onclick="openTab(event, 'newOrder')" id="defaultOpen">Ny bestilling</button>
        <button class="tablinks" onclick="openTab(event, 'orderHistory')">Tidligere bestillinger</button>
    </div>