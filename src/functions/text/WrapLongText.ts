

export const WrapLongText = (item : string, length : number = 10) =>{

    if(!item){
        return "";
    }
    
    if(item.length > length){
        return item.slice(0, length) + '...';
    }
    else{
        return item;
    }
}