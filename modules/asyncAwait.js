// await (fonksiyondan sonuç dönmeden diğer işleme geçmez ) fonksiyon kullanabilmek için fonksiyonumuzun async fonksiyon olması gerekiyor.
const posts = [
    { desc: "POST1", author: "User" },
    { desc: "POST2", author: "User1" },
    { desc: "POST3", author: "User2" },
  ];
  
  const listPosts = () => {
    posts.map((post) => {
      console.log(post.desc);
    });
  };
  
  const addPost = (newPost) => {
        const promise1 = new Promise((resolve,reject)=>{
        posts.push(newPost)
        resolve("Post başarı ile eklendi.")
      })
      return promise1;
}
addPost({ desc: "POST4", author: "User4" })
.then(() => {
console.log("YENI POST LİSTESİ");
listPosts();
})
.catch((error) => {
console.log(error);
});




/* function addPost(post) {
    return new Promise((resolve, reject) => { // promise dönüyoruz.
      console.log("Post ekleniyor ..");
  
      if (post) {
        resolve("Post eklendi ..."); 
      } else {
        reject("Post eklenemedi");
      }
    });
  }
  
  function listPosts(posts) { // promise dönüyoruz.
    return new Promise((resolve, reject) => {
      console.log("Postlar Listeleniyor..");
  
      if (posts) {
        resolve("Postlar Listelendi..."); 
      } else {
        reject("Postlar Listelenemedi");
      }
    });
  }
  
  async function createPost() {
    try {// Hata yakalamak için try - bloğu kullanılıyor.catch 
      const post = await addPost(true); // await verilerin tamamıyla alındığından emin oluyor
      console.log(post);
      const list = await listPosts(true);
      console.log(list); // await verilerin temizlendiğinden emin oluyor
    } catch (error) {
      console.log(error);
    }
  }
  
  createPost(); */