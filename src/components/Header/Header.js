import { Form } from "../Form/Form"


const Header = ({ addNewTodoFunc }) => {


    return (
        <header>
            <Form addNewTodoFunc={addNewTodoFunc} />
        </header>
    )
}

export {
    Header
}