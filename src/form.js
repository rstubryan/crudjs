function generateForm() {
   return `
       <div id="crud" class="text-white text-xl font-semibold py-2 px-4">
          <p class="text-center py-1">Data Mahasiswa</p>
 
          <div class="mx-auto block text-center py-4 container w-96">
             <form id="formInput">
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
                   <button type="button" class="bg-slate-800 hover:bg-slate-900 active:bg-slate-700 focus:outline-none focus:ring focus:ring-slate-300 border rounded-full px-4 py-2 mx-auto block" onClick="createData()">Save changes</button>
                </div>
             </form>
          </div>
       </div>
    `;
}
