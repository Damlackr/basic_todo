import { Router, Request, Response } from 'express';
import { todos, Todo } from '../data/todos';

const router = Router(); // get post isteklerini iletiyor

router.get('/', (req: Request, res: Response) => { //biz bu router'ı ilk parametresine ilk parametresine yazarız
    res.status(200).json(todos); // / yazmışız ana sayfa bizi nereye yönlendirmişse orda işlemleri get yapıcak - linke bir şey yazmadık yani
  }); // , sonrası bir anonim fonksiyon, parametrelerir req ve res.

//!KENDİME NOTLAR:
// eğer ki biz req yani istekten gelen bir şeyi kullancaksak req ile işlem yapıcaz
//ama response yani cevaptan dönen şey bize lazımsa res kullancaz
// res.status diyerek servere istek yollıcaz
//.json diyip server'a datayı veriiyorum
// es.status diyerek server'in durumuna 200 kodlu duruma getir. 200 Ok demek 404 Hata

router.post('/', (req: Request, res: Response) => {
    const { id, title } = req.body; //id ve title isimli değişkenlere (bunlar istediğimiz şeyler olabilirdi) = req.body'i at
    //req.body dediğmiizde server'a göndereceğimiz json
    const newTodo: Todo = { // yeni bir todo pushlıcaz 
      id: id,
      title: title,
      completed: false
    };
    todos.push(newTodo); //burada da bu nesneyi server'a pushluyoruz
    res.status(201).json(newTodo);
  });


  router.delete('/:id', (req: Request, res: Response) => { //silme: işlemi ide ye göre o yüzden /:id 
    const id = req.params.id; //params.id dediğimiz bizim linkimizde belirtiğimiz id olacak
    const index = todos.findIndex(todo => todo.id === id); // burada yaptığımız şey de todos'un yani datamızın içinde o id'ye sahip todo'yu bulup index isimli değişkenee atmak
    if (index !== -1) {
      todos.splice(index, 1);
      res.status(200).json({ message: 'Todo deleted successfully' });
    } else {
      res.status(404).json({ error: 'Todo not found' });
    }
  });
  
  router.put('/:id', (req: Request, res: Response) => { //güncelleme
    const id = req.params.id;
    const { title, completed } = req.body;
    const index = todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
      todos[index] = { id, title, completed };
      res.status(200).json(todos[index]);
    } else {
      res.status(404).json({ error: 'Todo not found' });
    }
  });


export default router; // routerı app.js de belirtmemiz gerek 