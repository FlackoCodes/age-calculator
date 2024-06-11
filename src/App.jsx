import iconArrow from './images/icon-arrow.svg'


function App() {

const today = new Date()

const dateObj = {
  day: today.getDate(),
  month: today.getMonth() + 1,
  year: today.getFullYear(),
}

console.log(dateObj);

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
                <i></i>
              </div>
              <div className="form-group">
                <label htmlFor="year">YEAR</label>
                <input type="number" id="year" placeholder='YYYY'/>
                <em style={{
                  fontSize: '10px',
                  fontWeight: '200',
                  color: 'hsl(0, 100%, 67%)'
                }}>the field is required</em>
              </div>
        </form>
      </div>
      <div style={{
          textAlign: 'center',
      }} className='hr-img'>
        <hr />
        <img style={{
          background:'hsl(259, 100%, 65%)',
          borderRadius: '100%',
          padding: '.1rem',
          marginTop: '-40%',
          width: '50px',
          zIndex: 22,
          position: 'relative',
          cursor: 'pointer'
        }} src={iconArrow} alt="icon-arrow" className='img-btn'/>
      </div>
      <div style={{
        color: 'hsl(0, 0%, 8%)',
        textAlign: 'start',
        fontSize: '25px',
        fontWeight: 800,
      }} className='reveal-date'>
        <p><span style={style}>--</span> years</p>
        <p><span style={style}>--</span>months</p>
        <p><span style={style}>--</span>days</p>
      </div>
    </div>
    </>
  )
}

const style = {
    color: 'hsl(259, 100%, 65%)',
    fontSize: '30px',
    fontWeight: 800
}

export default App
