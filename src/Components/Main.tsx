import './styles.css'
const headerItems = ["Month", "Day", "Time", "DMV Staff"]
const Items = ["Nov", "17", "5:00PM", "Peter Smith", "Nov", "18", "9:00AM", "Lucas Potter"]
const callHeaderItems = headerItems.map((item) => (<div className='gridItem'key={item}>{item}</div>))
const callItems = Items.map((item) => (<div className='gridItem'key={item}>{item}</div>))

function Main(){
    return(
        <div className='gridContainer'>
            <img src='./images/car.jpg' height='100px' width='100px'/>
            <div className='grid'>
                {callHeaderItems}
                {callItems}
            </div>
        </div>
    )
}

export default Main