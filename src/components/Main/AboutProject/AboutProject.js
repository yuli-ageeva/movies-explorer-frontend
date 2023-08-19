import './AboutProject.css'

function AboutProject() {
  return (
    <section className="project" id='project'>
      <h2 className="project__title">О проекте</h2>
      <div className="project__info">
        <div className="project__info-item">
          <h3 className="project__info-title">Дипломный проект включал 5 этапов</h3>
          <p className="project__info-description">Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.</p>
        </div>
        <div className="project__info-item">
          <h3 className="project__info-title">На выполнение диплома ушло 5 недель</h3>
          <p className="project__info-description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="project__timeline">
        <div className="project__timeline-item">
          <div className="project__timeline-time">1 неделя</div>
          <span className="project__timeline-description">Back-end</span>
        </div>
        <div className="project__timeline-item">
          <div className="project__timeline-time project__timeline-time_frontend">4 недели</div>
          <span className="project__timeline-description">Front-end</span>
        </div>
      </div>
    </section>


  )
}

export default AboutProject