import iconArrow from './images/icon-arrow.svg'


function App() {

  function getDate() {
    const date = Date.now()
    console.log(date);
  }

  getDate()

  return (
    <>
    <div className="container">
      <div className="form">
        <form action="" method="get">
              <div className="form-group">
                <label htmlFor="day">DAY</label>
                <input type="number"  id="day" placeholder='DD'/>
              </div>
              <div className="form-group">
                <label htmlFor="month">MONTH</label>
                <input type="number" id="month" placeholder='MM'/>
              </div>
              <div className="form-group">
                <label htmlFor="year">YEAR</label>
                <input type="number" id="year" placeholder='YYYY'/>
              </div>
        </form>
      </div>
      <div style={{
          textAlign: 'center',
      }}>
        <hr />
        <img style={{
          background:'hsl(259, 100%, 65%)',
          borderRadius: '100%',
          padding: '.1rem',
          marginTop: '-40%',
          width: '50px',
          zIndex: 22,
          position: 'relative'
        }} src={iconArrow} alt="icon-arrow" />
      </div>
      <div style={{
        color: 'hsl(0, 0%, 8%)',
        textAlign: 'start',
        fontSize: '25px',
        fontWeight: 800,
      }}>
        <p><span></span> years</p>
        <p><span></span>months</p>
        <p><span></span>days</p>
      </div>
    </div>
    </>
  )
}

export default App
