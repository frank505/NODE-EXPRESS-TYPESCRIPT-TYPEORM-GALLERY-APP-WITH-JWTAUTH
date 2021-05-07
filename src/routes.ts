import { GalleryController } from './controllers/GalleryController'; 
import express ,{Request,Response} from 'express';


export default class Routes
{

    private gallery:GalleryController;

  constructor(app:express.Application)
  { 
    this.gallery = new GalleryController();
    this.routeList(app);
  }

 

  routeList(app:express.Application)
  {
    app.get('/api/gallery/get',this.gallery.index);
    app.post('/api/gallery/create',this.gallery.create);
    app.put('/api/update/:id',this.gallery.update);
    app.delete('/api/delete/:id',this.gallery.delete);
  }


}