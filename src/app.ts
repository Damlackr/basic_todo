import express from 'express'; //expressi kullanmak için 
import { json, urlencoded } from "body-parser"; // bu da json formatını kullanmak için kütüphane
import todoRoutes from './routers/todoRoutes';

const app = express(); //express'in tüm fonksiyonlarını app isimli bir değişkene atıyor

app.use(urlencoded({ extended: false })); //middleware : Bu kod url yani link kısmındaki verileri alır
app.use(json()); //middleware: request-response arasında çalışan fonksiyonlara middleware // json formatındaki verileri alır.
app.use('/api/todos', todoRoutes); //Route'ta yapıtığımız get işlemni uygulamaya tanıtıyoruz
//'/api/todos' linkinde uygulama çalışacak.

export default app; // diğer dosyaların kullanması için dışarı aktarma

