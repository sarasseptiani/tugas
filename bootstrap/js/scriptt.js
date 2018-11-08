$(function() {

 				$("#npm_error").hide();
 				$("#nama_error").hide();
 				$("#tglLahir_error").hide();

 				var npm_error = false;
 				var nama_error = false;
 				var tglLahir_error = false;

 				$("#text_NPM").focusout(function(){
 					cek_npm();
 				});

 				$("#text_Name").focusout(function(){
 					cek_nama();
 				});

 				$("#text_Tgl").focusout(function(){
 					cek_tglLahir();
 				});

 				$("#form_input").submit(function(){

 					npm_error = false;
 					nama_error = false;
 					tglLahir_error = false;

 					cek_npm();
 					cek_nama();
 					cek_tglLahir();

 					if (npm_error == false && nama_error == false && tglLahir_error == false) {
 						alert("Berhasil");
 						return true;
 					} else {
 						return false;
 					}
 				
 				});

 				function cek_npm() {
 					var npm = $("#text_NPM").val();

 					if (npm !=='') {
 						$("#npm_error").hide();
 					} else {
 						$("#npm_error").html("NPM tidak boleh kosong");
 						$("#npm_error").show();
 						npm_error = true;
 					}
 				}

 				function cek_nama() {
 					var nama = $("#text_Name").val();

 					if (nama !=='') {
 						$("#nama_error").hide();
 					} else {
 						$("#nama_error").html("Nama tidak boleh kosong");
 						$("#nama_error").show();
 						nama_error = true;
 					}
 				}

 				function cek_tglLahir() {
 					var tglLahir = $("#text_Tgl").val();

 					if (tglLahir !=='') {
 						$("#tglLahir_error").hide();
 					} else {
 						$("#tglLahir_error").html("Tanggal lahir tidak boleh kosong");
 						$("#tglLahir_error").show();
 						tglLahir_error = true;
 					}
 				}
 			});