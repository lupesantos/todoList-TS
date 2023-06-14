import {itemPost}   from '../../services/todo';
import styled       from 'styled-components';
import {IoMdAdd}    from 'react-icons/io';
import { useState } from "react";

export default function NewItemBox ({setItemInput, itemInput, setRefresh, refresh}:any){
    const [itemDescripton, setItemDescription] = useState('');

   async function postItem(event: React.FormEvent){
        event.preventDefault();
        await itemPost(itemDescripton);
        setItemInput(!itemInput)
        setRefresh(!refresh)
    }
    return(
        <form onSubmit={postItem}>
            <NewToDoItemBox>
                <input type='text'placeholder='Digite sua nova tarefa!' value={itemDescripton} onChange={(e) => setItemDescription(e.target.value as any)}/> 
                <IoMdAdd cursor="pointer" onClick={postItem} size="22px" color='blue'/>
            </NewToDoItemBox>
        </form>
    );
}

const NewToDoItemBox = styled.div`
    position: absolute;
    bottom: 57px;
    width:364px;
    height: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #ffffff;
    border-radius: 6px;
    
    & > input{
        width: 80%;
        border: none;
        border-radius: 6px;
    }
    & > input:focus {
        outline: none;
        border-color: var(--input-border-focus);
    }
`;