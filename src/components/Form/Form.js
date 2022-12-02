// import { useState } from "react"


// export const Form = ({ addNewTodoFunc }) => {


//     const [input, setInput] = useState('')

//     const submitHandler = (e) => {
//         e.preventDefault()
//         if (input) {
//             addNewTodoFunc(input)
//         }
//         console.log({ input })
//     }

//     return (
//         <form onSubmit={submitHandler} className='d-flex flex-column align-items-center'>
//             <div className="mb-3">

//                 <input type="text" placeholder='title' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setInput(e.target.value)} />
//             </div>

//             <button type="submit" className="btn btn-primary">Add</button>
//         </form>
//     )

// }



import { useState } from "react";

export const Form = ({ addNewTodoFunc }) => {
    const [input, setInput] = useState("");


    const submitHandler = (e) => {
        e.preventDefault()

        console.log({ input })

        if (input) {
            addNewTodoFunc(input)
            setInput('')
        }
    }

    return (
        <form onSubmit={submitHandler} className="d-flex flex-column align-items-center">
            <div className="mb-3">
                <input
                    type="text"
                    value={input}
                    placeholder="Title..."
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={(e) => setInput(e.target.value)}
                />
            </div>

            <button type="submit" className="btn btn-primary">
                Add
            </button>
        </form>
    );
};