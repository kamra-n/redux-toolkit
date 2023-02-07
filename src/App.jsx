import { useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addUser, filterUser } from './store/Features/UserSlice';

function App() {
  const dispatch = useDispatch();
  const { userSlice } = useSelector((state) => state);
  console.log("initialState", userSlice)
  // const [list, setList] = useState([])
  // const [filterData, setFilterDAta] = useState('')
  const inputRef = useRef(null);




  const dataHandler = (e) => {
    e.preventDefault();
    // setList([inputRef.current.value, ...list])
    dispatch(addUser(inputRef.current.value))
    inputRef.current.value = null

  }


  const filterState = (e) => {
    // const filter = list.filter((data) => {
    //   return data?.toLowerCase()?.includes(e)
    // })
    // setFilterDAta(filter)
    dispatch(filterUser(e))

  }


  return (
    <div className="App">
      <div>
        <input type='search' placeholder='search something' onChange={(e) => filterState(e.target.value)} />
        <br />
        <br />
        <br />

        <form onSubmit={dataHandler}>

          <input type='text' placeholder='add data' ref={inputRef} required />
          <br />
          <br />
          <button>Add data</button>
        </form>

        <div>

          <ul>
            {userSlice?.users?.length === 0 ? <div>No data</div> : userSlice?.filterUsers?.length > 0 ? userSlice?.filterUsers?.map((data, key) => <li key={key}>{data}</li>) : userSlice?.users?.map((data, key) => <li key={key}>{data}</li>)
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
