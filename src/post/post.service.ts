import { Injectable } from '@nestjs/common';

@Injectable()
export class PostService {
    getMany(){
        return {"message":"ok"};
    }

    createOne(){
        return {"message":"ok"};
    }

    getOne(id:number){
        return {"message":"ok"};
    }

    editOne(id:number){
        return {"message":"ok"};
    }

    deleteOne(id:number){
        return {"message":"ok"};
    }

}
