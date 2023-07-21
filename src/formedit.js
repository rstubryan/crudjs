let selectedData = null;
let isUpdating = false;

function generateFormEdit() {
   return `
        <div id="crud" class="text-white text-xl font-semibold py-2 px-4">
           <p class="text-center py-1">Edit Data Mahasiswa</p>
  
           <div class="mx-auto block text-center py-4 container w-96">
              <form id="formInput">
              <input type="hidden" id="id" name="id" />
                 <div>
                    <label for="nama" class="block mb-2 text-sm font-bold text-gray-900 py-2">Nama</label>
                    <input type="text" id="nama" name="nama" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500" />
                    </div>
  
                 <div>
                    <label for="nim" class="block mb-2 text-sm font-bold text-gray-900 py-2">NIM</label>
                    <input type="text" id="nim" name="nim" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500" />
                 </div>
  
                 <div>
                    <label for="jurusan" class="block mb-2 text-sm font-bold text-gray-900 py-2">Jurusan</label>
                    <input type="text" id="jurusan" name="jurusan" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500" />
                 </div>
  
                 <div class="py-4">
                 <button type="button" class="bg-slate-800 hover:bg-slate-900 active:bg-slate-700 focus:outline-none focus:ring focus:ring-slate-300 border rounded-full px-4 py-2 mx-auto block" onClick="updateData()">Update Changes</button>
                 </div>
              </form>
           </div>
        </div>
     `;
}

function getMhsDetail() {
   const mhsId = new URLSearchParams(window.location.search).get("id");
   console.log(mhsId);
   //get data from https://mhs.serveo.net/belajar-php/mahasiswa/mahasiswa.php?id=13
   fetch(
      `https://mhs.serveo.net/belajar-php/mahasiswa/mahasiswa.php?id=${mhsId}`
   )
      .then((response) => response.json())
      .then((data) => {
         data = data[0];
         console.log(data);
         document.getElementById("id").value = data.id;
         document.getElementById("nama").value = data.nama;
         document.getElementById("nim").value = data.nim;
         document.getElementById("jurusan").value = data.jurusan;
      })
      .catch((error) => {
         console.error("Error:", error);
      });
}

function updateData() {
   //send put request to https://mhs.serveo.net/belajar-php/mahasiswa/mahasiswa.php using fetch

   const formData = new FormData(document.getElementById("formInput"));
   const encodedData = new URLSearchParams(formData);
   fetch("https://mhs.serveo.net/belajar-php/mahasiswa/mahasiswa.php", {
      method: "PUT",
      body: encodedData,
      headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        
   })
      .then((response) => response.json())
      .then((data) => {
         // Tangani respon dari server (tambah.php) jika diperlukan
         console.log(data);
         alert(data.message);
      })
      .catch((error) => {
         console.error("Error:", error);
      });
}

function prepareUpdateData(id) {
   isUpdating = true;
   selectedData = id;
   const formContainer = document.getElementById("crud");
   formContainer.innerHTML = generateFormEdit();
   fetchDataToUpdate(id);
}
