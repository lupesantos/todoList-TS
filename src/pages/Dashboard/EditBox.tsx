import { itemEdit } from '../../services/todo';
import styled       from 'styled-components';
import {IoMdAdd}    from 'react-icons/io';
import { useState } from "react";

export default function EditBox ({edit, setEdit, setRefresh, refresh, itemId}:any){
    const [editDescripton, setEditDescription] = useState('');

    async function putEdit(event: React.FormEvent){
        event.preventDefault();
        await itemEdit(itemId, editDescripton);
        setEdit(!edit)
        setTimeout(()=>{setRefresh(!refresh)}, 100)
    }

    return(
        <form onSubmit={putEdit}>
            <NewToDoItemBox>
                <input type='text'placeholder='Edite sua tarefa!' value={editDescripton} onChange={(e) => setEditDescription(e.target.value as any)}/> 
                <IoMdAdd cursor="pointer" onClick={putEdit} size="22px" color='blue'/>
            </NewToDoItemBox>
        </form>
    );
}

const NewToDoItemBox = styled.div`
    bottom: 57px;
    width:364px;
    height: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #ffffff;
    border-radius: 6px;
    margin-bottom: 15px;
    
    & > input{
        width: 80%;
        border: none;
        border-radius: 6px;
        padding-left: 10px;
    }
    & > input:focus {
        outline: none;
        border-color: var(--input-border-focus);
    }
`;