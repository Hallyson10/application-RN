import React,{ createContext, useContext, useState } from 'react';
interface Item{
    id : string,
    username : string,
    experienceTime : string,
    experience : string
}

const ApplicationContext = createContext({
    saveItem : (item:Item)=>{},
    update : (item:Item)=>{},
    remove : (id:string)=>{},
    setSaveSucess : (item:false)=>{},
    setUpdateSucess : (item:false)=>{},
    items : Array<Item>(),
    updateSucess : false,
    saveSucess : false,
})
interface Props{
    children : React.ReactNode
}

export const ApplicationProvider : React.FC<Props> = ({ children }) => {

    const [items,setItems] = useState([
        {id:"1",username : "Hallyson Miranda",experienceTime:"1",experience:"Desenvolvo a 3 anos e meio e gosto muitgfdsgfdsgsdfgdfsgdfgdfgdfgdf sgdfsgdfssdvdsvsdvdsvso!"},
        {id:"2",username : "Hallyson Miranda",experienceTime:"1",experience:"Desenvolvo a 3 anos e meio e gosto muito!"}
      ]);
      const [updateSucess,setUpdateSucess] = useState(false);
      const [saveSucess,setSaveSucess] = useState(false);

      const saveItem = (item : Item) => {
          try {
            setItems(items => [item,...items])
            setSaveSucess(true);
          } catch (error) {
              alert('ops! ocorreu um erro inesperado!');
              setSaveSucess(false);
          }
        
      }

      const update = (item:Item) => {
          try {
            const map = items.map((i)=> i.id === item.id ? item : i);
            setItems(map);
            setUpdateSucess(true);
          } catch (error) {
              alert("Ops! ocorreu um erro inesperado!");
              setUpdateSucess(false);
          }
      }

      const remove = (id : string) => {
            const itemRemove = items.filter((item)=>item.id !== id);
            setItems(itemRemove);
      }

    return(
        <ApplicationContext.Provider value={{
            items,
            updateSucess,
            saveSucess,
            setUpdateSucess,
            setSaveSucess,
            saveItem,
            update,
            remove
        }}>
                {children}
        </ApplicationContext.Provider>
    )
}

export const useApplication = () => {
    const context = useContext(ApplicationContext);
    if(!context)
        throw new Error(
            'Contexto Login não disponível'
        );
    return context;
}
