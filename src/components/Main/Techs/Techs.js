import './Techs.css'

function Techs() {
  return (
    <section className='techs'>
      <h2 className='techs__title'>Технологии</h2>
      <div className='techs__info'>
        <h3 className='techs__info-title'>
          7 технологий
        </h3>
        <p className='techs__info-description'>
          На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
        </p>
      </div>
      <ul className='techs__types'>
        <li className='techs__type'>HTML</li>
        <li className='techs__type'>CSS</li>
        <li className='techs__type'>JS</li>
        <li className='techs__type'>React</li>
        <li className='techs__type'>Git</li>
        <li className='techs__type'>Express.js</li>
        <li className='techs__type'>mongoDB</li>
      </ul>
    </section>

  )
}

export default Techs