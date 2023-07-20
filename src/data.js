function createData() {
    const xhttp = new XMLHttpRequest();
}

function loadData() {
   const xhttp = new XMLHttpRequest();
   xhttp.onload = function () {
      const response = JSON.parse(this.responseText);
      console.log(response);

      let tableData = "";
      response.forEach((item) => {
         tableData += `<tr class="border border-slate-700 bg-slate-500"><td class="border border-slate-700">${item.id}</td> <td class="border border-slate-700">${item.nama}</td> <td class="border border-slate-700">${item.nim}</td> <td class="border border-slate-700">${item.jurusan}</td><td><a href="#">Update</a> | <a href="#">Delete</a></td></tr>`;
      });

      document.getElementById("table_data").innerHTML += tableData;
   };
   xhttp.open(
      "GET",
      "https://iuvo.serveo.net/belajar-php/mahasiswa/mahasiswa.php"
   ); // data server perlu diganti koneksinya setiap generate
   xhttp.send();
}

function updateData() {
    const xhttp = new XMLHttpRequest();
}

function deleteData() {
    const xhttp = new XMLHttpRequest();
}