// ini buat ambil daftar member sekalian bikin tabel

	var id = prompt("Enter Club ID without hashtag (#)");
fetch("https://cr.is-a.dev/clubs/"+id).then(
  res => {
    res.json().then(
      data => {
        console.log(data.members);
        if (data.members.length > 0) {

          var temp = "";
          data.members.forEach((memberData) => {
            temp += "<tr>";            
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

// di bawah ini json buat get nama geng sama deskripsinya

$.getJSON('https://cr.is-a.dev/clubs/'+id, function(data){
    var display = `
    <h1>${data.name}</h1>
<p>
${data.description}</p>
`
    $(".display").html(display);
  });
  
// fungsi search

function myFunction() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("form1");
  filter = input.value.toUpperCase();
  table = document.getElementById("members");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
