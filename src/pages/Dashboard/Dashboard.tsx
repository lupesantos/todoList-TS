import UserContext               from '../../contexts/UserContext';
import styled                    from 'styled-components';
import NewItemBox                from './NewItemBox';
import Swal                      from 'sweetalert2';
import Item                      from './Item';
import axios                     from "axios";
import { useContext, useEffect } from 'react';
import { useState }              from "react";


export default function Dashboard(){
    
    const User = useContext(UserContext);
    const [itemList, setItemList] =useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [itemInput, setItemInput] = useState(false);
    const [refresh, setRefresh] = useState(false);
    
    useEffect(() => {
        const items = axios.get("http://localhost:4000/get-item")
            items.then(result => {
                setItemList(result.data)
                setTimeout(()=>{setLoading(false)},600)
            }).catch((result) => 
            {                
              Swal.fire({
                title: "Error: " + result,
                text: "Status: " + result.response.status,
                footer: "Motivo: " + result.response.data
              })
            });
      }, [refresh]);

    return(
    <>
         {loading ? (<>teteeeeee</>)
            :
         (
            <Container>
                <ItemsContainer>
                    {itemList.map((item, index) => (
							<Item
                            key={index}
                            description={item.description}
                            status={item.status}
                            itemId={item.id}
                            setRefresh={setRefresh}
                            refresh={refresh}
                            index={1}/>
						))}
                    {itemInput ? <NewItemBox 
                                    setItemInput={setItemInput}
                                    itemInput={itemInput}
                                    setRefresh={setRefresh}
                                    refresh={refresh}
                                    />:<></>}
                    <NewItem onClick={()=> setItemInput(!itemInput)}>
                        New Item
                    </NewItem>
                </ItemsContainer>
            </Container>
        )}
    </>
    )
}
const Container = styled.div`
    height: 100vh;
    background-color: grey;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
`;
const NewItem = styled.div`
    position: absolute;
    bottom: 10px;
    right: 8px;
    padding: 6px 8px;
    line-height: 25px;
    border-radius: 6px;
    color:black;
    background-color: #ffffff;
    cursor: pointer;
`;
const ItemsContainer = styled.div`
    position:relative;
    width:380px;
    height: 550px;
    background-color: rgba(0, 0, 0, 0.3);
    padding: 8px;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content:flex-start;
    align-items:flex-start;
`;




