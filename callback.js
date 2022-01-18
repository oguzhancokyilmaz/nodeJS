/* let x = 5 

console.log("birinci gelen veri : ", x);


setTimeout(()=>{
    x = x + 5 
    console.log('ikinci gelen veri : ', x);
},5000)


x = x + 5 
console.log('üçüncü gelen veri : ', x); */

const books = [
    { name: "Kitap 1", author: "Yazar 1" },
    { name: "Kitap 2", author: "Yazar 2" },
    { name: "Kitap 3", author: "Yazar 3" },
  ];
  
  const listBooks = () => {
    books.map((book) => {
      console.log(book.name);
    });
  };
  
  const addBook = (newBook,callback) => {
    books.push(newBook)
    callback(); // Burada add book fonksiyonu çağırılırken kitap bilgileri alınıp listeye pushlanıp daha sonra callback fonksiyon olarak listbooks fonksiyonu çalıştırılır ve kitaplar listelenir
}
addBook({ name: "Kitap 4", author: "Yazar 4" },listBooks) 
