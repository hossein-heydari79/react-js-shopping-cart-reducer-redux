import './App.css';
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Navbar } from './components/Navbar/Navbar'
import { Card } from './components/Card/Card'
import { Menubar } from './components/Menubar/Menubar'
import { Cardlist } from './components/Cardlist/Cardlist'
import { Pay } from './components/Pay/Pay'
import { Form } from './components/Form/Form'
import { Modals } from './components/Modals/Modals'
import data from './data/data.js'
import { useState, useEffect, useReducer, useSelector, useDispatch } from 'react'



function App() {


  const cardlist = useSelector(state => state.cardlist)
  const dispatch = useDispatch()


  const [json, setJson] = useState(data.sort((a, b) => a.price - b.price));



  let showModal = () => {

    dispatch({
      type: "TRUE_SHOW", payload: {
        show: true
      }
    })
  }

  let hideModal = () => {
    dispatch({
      type: "FALSE_SHOW", payload: {
        show: false
      }
    })
  }

  useEffect(() => {

    let arr = [];

    label: for (let i = 0; i < data.length; i++) {
      for (let h = 0; h < data[i].size.length; h++) {
        if (data[i].size[h] === filter.size) {
          arr.push(data[i]);
          continue label;
        }
      }
    }


    if (filter.price === "lowest") {
      setJson(arr.sort((a, b) => a.price - b.price));
    }
    else {
      setJson(arr.sort((a, b) => b.price - a.price));
    }

  }, [filter])



  return (
    <>


      {
        show.show && < Modals show={showModal} hide={hideModal} />
      }

      <Header />

      <div className="main">
        <div className="left">

          <Navbar len={json.length} />
          <div className="card-section">
            {
              json.map((item, index) => (
                <Card key={item.id} id={item.id} url={item.url} description={item.description} price={item.price} show={showModal} hide={hideModal} />
              ))
            }
          </div>
        </div>

        <div className="right">
          <Menubar />
          {
            cardlist.map((item) => (
              <Cardlist key={item.id} id={item.id} url={item.url} description={item.description} price={item.price} count={item.count} />
            ))
          }
          {
            cardlist.length !== 0 && < Pay />
          }

          {
            cardlist.length !== 0 && mode.show && <Form />
          }


        </div>
      </div>



      <Footer />

    </>
  );
}

export default App;
