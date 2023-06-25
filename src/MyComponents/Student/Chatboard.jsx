import React, { useState, useEffect } from 'react'
// import HomeHelper from '../Components/HomeHelper'
import { useSelector, useDispatch } from 'react-redux'
import { sendMessage, getPrivateConversation, getPrivateConversation2} from '../redux/action/studentAction'
import io from 'socket.io-client';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

//Swap HelperFunction
function swap(input, value_1, value_2) {
    var temp = input[value_1];
    input[value_1] = input[value_2];
    input[value_2] = temp;
}


let socket;


const Chatboard = (props) => {
    
    const store = useSelector((store) => store)
    // const history = useHistory()
    const dispatch = useDispatch()
    const [room1, setRoom1] = useState("")
    const [room2, setRoom2] = useState("")
    const [receiverRegistrationNumber, setReceiverRegistrationNumber] = useState("")
    const [message, setMessage] = useState("")
    const [messageArray, setMessageArray] = useState([])
    const [olderMessages, setOlderMessages] = useState([])
    const ENDPOINT = 'https://localhost:3000'
    const {id} = useParams()
    useEffect(() => {
        let temp =id
        socket = io(ENDPOINT)
        let tempArr = temp.split(".")
        setReceiverRegistrationNumber(tempArr[0])
        setRoom1(temp)
        swap(tempArr, 0, 1)
        let tempRoom2 = tempArr[0] + '.' + tempArr[1]
        setRoom2(tempRoom2)
    }, [ENDPOINT,id])
    

    useEffect(() => {
        dispatch(getPrivateConversation(room1))
        dispatch(getPrivateConversation2(room2))
        socket = io(ENDPOINT)
        socket.emit('join room', {
            room1,
            room2
        })
        socket.on("new Message", (data) => {
            setMessageArray([...messageArray, data])
        })
        // return () => {
        //     socket.emit('disconnect')
        //     socket.off()
        // }
    }, [room1, room2])


    
    const formHandler = (e) => {
        e.preventDefault()
        if (message.trim().length > 0) {
            socket.emit("private message", {
                sender: store.student.student.student.name,
                message,
                room: room1
            })
            setMessage("")
            let messageObj = {
                roomId: room1,
                senderName: store.student.student.student.name,
                senderId: store.student.student.student._id,
                message,
                senderRegistrationNumber: store.student.student.student.registrationNumber,
                receiverRegistrationNumber
            }
            dispatch(sendMessage(room1,messageObj))
        }
        else {
            alert("Can't send empty message")
        }
    }


    useEffect(() => {
        socket.on("new Message", (data) => {
            setOlderMessages(store.student.privateChat)
            setMessageArray([...messageArray, data])
        })
        
    },[messageArray,olderMessages])
   

    return (
        <div>
            <div class="h-96 flex flex-col flex-grow w-full max-w-xl bg-white shadow-xl rounded-lg overflow-hidden">
		<div class="flex flex-col flex-grow h-0 p-4 overflow-auto">
			<div class="flex w-full mt-2 space-x-3 max-w-xs">
				<div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
				<div>
                    {store.student.privateChat.map((obj,index) =>
					 <>
                    <div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
						<p class="text-sm">{obj.message}</p>
					</div>
					<span class="text-xs text-gray-500 leading-none">2 min ago</span>
                    </>
                    )}
				</div>
			</div>
			
		</div>
		
        <form onSubmit={formHandler}>
		<div class="bg-gray-300 p-4 from-group">
			<input class="flex items-center h-10 w-full rounded px-3 text-sm" value={message} onChange={(e) => setMessage(e.target.value)} type="text" placeholder="Type your message…" />
            <button type='submit'>Send</button>
		</div>
        </form>
	</div>          
        </div>
    )
}

export default Chatboard
