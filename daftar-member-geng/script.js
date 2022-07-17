fetch("https://cr.is-a.dev/clubs/GQ8QRCPP").then(
  res => {
    res.json().then(
      data => {
        console.log(data.members);
        if (data.members.length > 0) {

          var temp = "";
          data.members.forEach((memberData) => {
            temp += "<tr>";
            temp += "<td><img src='https://media.brawltime.ninja/avatars/" + memberData.icon.id + ".webp?size=400'></td>";
            temp += "<td>" + memberData.name + "</td>";
            temp += "<td>" + memberData.role + "</td>";
            temp += "<td>" + memberData.trophies + "</td></tr>";
          });
          document.getElementById('data').innerHTML = temp;
        }
      }
    )
  }
)
