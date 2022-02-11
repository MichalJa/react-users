import './Display.css';

function Display(props) {


    let list = props.usersList.map(
        ({ id, userName }) => (
            <li key={id} id={id}>{userName}<span onClick={() => props.removeUserFunction(id)}>X</span></li>
        )
    );

    return (
        <ul>
            {list}
        </ul>
    )

}


export default Display;