/* Javascript */
/* looping dan cetak nilai */

/* Cetak program dari 1 - 100 */
for (let i = 0; i <= 100; i++) {
   /*  Jika nilai bisa dibagi tiga, cetak tiga */
  if (i % 3 == 0) {
  	console.log("Tiga")
  } 
  /*  Jika nilai bisa dibagi lima, cetak lima */
  else if (i % 5 == 0) {
    console.log("Lima")
  } 
  /* Jika nilai bisa dibagi tiga dan lima, cetak TigaLima */
 	else if (i % 3 == 0 && i % 5 == 0 ) {
    console.log("TigaLima") 
  }
    /* Jika nilai tidak bisa dibagi tiga dan lima, maka cetak angka saja */
  else console.log(i);
}
