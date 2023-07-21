function createData() {
   const formData = new FormData(document.getElementById("formInput"));

   // Kirim data menggunakan AJAX
   fetch("https://iussi.serveo.net/belajar-php/mahasiswa/mahasiswa.php", {
      method: "POST",
      body: formData,
   })
      .then((response) => response.json())
      .then((data) => {
         // Tangani respon dari server (tambah.php) jika diperlukan
         console.log(data);
         alert(data.message);
         document.getElementById("formInput").reset();
      })
      .catch((error) => {
         console.error("Error:", error);
      });
}

function loadData() {
   const xhttp = new XMLHttpRequest();
   document.getElementById("load").innerHTML;
   xhttp.onload = function () {
      const response = JSON.parse(this.responseText);
      console.log(response);

      let tableData = "";

      response.forEach((item) => {
         tableData += `<tr class="border border-slate-700 bg-slate-500">
         <td class="border border-slate-700">${item.id}</td> 
         <td class="border border-slate-700">${item.nama}</td> 
         <td class="border border-slate-700">${item.nim}</td> 
         <td class="border border-slate-700">${item.jurusan}</td>
         <td><a href="#">Update</a> | 
         <a href="#">Delete</a></td></tr>`;
      });
      document.getElementById("table_data").innerHTML += tableData;
      document.getElementById("load").remove();
   };
   xhttp.open(
      "GET",
      "https://iussi.serveo.net/belajar-php/mahasiswa/mahasiswa.php"
   ); // data server perlu diganti koneksinya setiap generate
   xhttp.send();
}

function updateData() {
   const xhttp = new XMLHttpRequest();
}

function deleteData() {
   const xhttp = new XMLHttpRequest();
}
