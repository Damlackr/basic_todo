import app from './app'; // app'i import et

function startServer() { //server başlatıyoruz
    const PORT = 3005; //listen'ın ilk parametresi- istek atarken bu portu kullanacağız
  
    app.listen(PORT, () => {
      console.log(`The application is running on ${PORT}`); // serverın çalıştığını anlamak için
    });
  }

  startServer(); // yukarıdaki fonksiyonu çağırmak için 