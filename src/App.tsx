import './index.css'
import logo from "./assets/images/logo.svg";
import data from "./data.json";
import { useState } from 'react';

const App = () => {

  const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
  const today = new Date().getDay()
  const [showItem, setShowItem] = useState('')

  const showAmount = (day: string) => {
    setShowItem(day)
  }

  const hideAmount = () => {
    setShowItem('')
  }

  return (
    <div className='app_container'>
      <div className='app_info'>
      <header>
        <div className='my_balance'>
          <p>My balance</p>
          <p className='my_balance_value'>$921.48</p>
        </div>
        <img src={logo} alt="logo image" />
      </header>
      <main>
        <div className='main_title'>Spending - Last 7 days</div>

        <div className='daily_resume'>
            <ul id='list'>
              {
                 data.map( item =>
                  <li key={item.day}>
                    <p className={`daily_value ${showItem==item.day ? 'show' : ''}`}>${item.amount}</p>
                    <p 
                      className={`column ${days[today]==item.day ? 'blue' : ''}`} 
                      style={{height: `${item.amount * 3}px`}} 
                      onMouseEnter={() => showAmount(item.day)}
                      onMouseLeave={hideAmount}></p>
                    <p className='day'>{item.day}</p>
                  </li>
              )}
            </ul>
        </div>

        <hr />

        <div className='monthly_resume'>
          <div className='monthly_total'>
            <p className='monthly_title'>Total this month</p>
            <p className='monthly_value'>$478.33</p>
          </div>

          <div className='monthly_profit'>
            <p className='profit_value'>+2.4%</p>
            <p className='profit_description'>from last month</p>
          </div>
        </div>
      </main>
      <footer>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://www.linkedin.com/in/felipe-stefani-a35185116/">Felipe Stefani</a>.
      </footer>
      </div>
    </div>
  )
}

export default App
