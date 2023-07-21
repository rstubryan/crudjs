function createData() {
   const formData = new FormData(document.getElementById("formInput"));

   // Kirim data menggunakan AJAX
   fetch("https://mhs.serveo.net/belajar-php/mahasiswa/mahasiswa.php", {
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
   fetch("https://mhs.serveo.net/belajar-php/mahasiswa/mahasiswa.php")
      .then((response) => response.json())
      .then((data) => {
         console.log(data);

         let tableData = "";

         data.forEach((item) => {
            tableData += `<tr class="border border-slate-700 bg-slate-500">
            <td class="border border-slate-700">${item.id}</td> 
            <td class="border border-slate-700">${item.nama}</td> 
            <td class="border border-slate-700">${item.nim}</td> 
            <td class="border border-slate-700">${item.jurusan}</td>
            <td>
            <a href="../formedit.html?id=${item.id}" onClick="prepareUpdateData(${item.id})">Update</a> 
            | 
            <a href="#" onClick="deleteData(${item.id})">Delete</a></td></tr>`;
         });

         document.getElementById("table_data").innerHTML += tableData;
         document.getElementById("load").remove();
      })
      .catch((error) => {
         console.error("Error:", error);
      });
}

function deleteData(id) {
   if (confirm("Apakah Anda yakin ingin menghapus data ini?")) {
      fetch(`https://mhs.serveo.net/belajar-php/mahasiswa/mahasiswa.php`, {
         method: "DELETE",
         body: `id=${id}`,
         headers: {
            "Content-Type": "application/x-www-form-urlencoded",
         },
      })
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            alert(data.message);
            //delete all td inside table_data
            document.querySelectorAll("#table_data td").forEach((item) => {
               item.remove();
            });
            loadData(); // Muat data kembali setelah penghapusan
         })
         .catch((error) => {
            console.error("Error:", error);
         });
   }
}
