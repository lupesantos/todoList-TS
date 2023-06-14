import { itemDelete,
         itemCheck }    from '../../services/todo';
import styled           from 'styled-components';
import {MdRemoveDone}   from 'react-icons/md';
import {AiOutlineCheck} from 'react-icons/ai';
import {MdDoneAll}      from 'react-icons/md';
import {FiDelete}       from 'react-icons/fi';
import {CiEdit}         from 'react-icons/ci';
import EditBox          from './EditBox';
import { useState }     from "react";

export default function Item({index, description, status, itemId,setRefresh, refresh}:{index:number; description:string; status:string,itemId: number, setRefresh: any, refresh: any}){
    const [edit, setEdit] = useState(false);
   
function deleteItem(){
        itemDelete(itemId)
        setTimeout(()=>{setRefresh(!refresh)}, 100)
    }
function checkItem(){
        itemCheck(itemId);
        setTimeout(()=>{setRefresh(!refresh)}, 100)
    }

    return(
      <>
        <TodoItem>
            <p>{description}</p>
            {status == 'check' ? 
            (<span><MdDoneAll size="22px" color='green'/></span>)
                :
            (<span><MdRemoveDone size="22px" color='red'/></span>)}
            <EditItem>
                <AiOutlineCheck onClick={checkItem} size="22px" 
                color='white'/>
                <CiEdit onClick={()=>{setEdit(!edit)}} size="22px" color='white'/>
                <FiDelete onClick={deleteItem} size="22px" 
                color='white'/>
            </EditItem>
           
        </TodoItem>
        {edit ? <EditBox 
                    edit={edit}
                    setEdit={setEdit}
                    refresh={refresh}
                    setRefresh={setRefresh}
                    itemId={itemId}/>:<></>}
      </>  
    )
}

const EditItem = styled.div`
    position: absolute;
    right: -70px;
    width: 90px;
    height:30px;
    background-color:#4d9ada;
    border-radius: 6px 0 0 6px;
    display: flex;
    justify-content:space-around;
    align-items: center;
    visibility: hidden;
    opacity: 0;
    transition: all .3s linear;
`;


const TodoItem = styled.div`

    //div
    position: relative;
    width:100%;
    height: 40px;
    line-height: 25px;
    background-color: #ffffff;
    border-radius: 6px;
    margin-bottom: 15px;
    
    //text
    display: flex;
    justify-content:flex-start;
    align-items: center;
    color: #464646;
    padding-left:10px;
    &:hover ${EditItem} {
        right: 0;
        visibility: visible;
        opacity: 1;
        cursor: pointer;
    }
    &>span {
        position: absolute;
        right: 10px;
        display: flex;
    }
`;