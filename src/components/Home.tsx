import './Home.css'
import Projects from './Projects.tsx'





export default function Home() {
  const ProgrameerTalen =
    [
      'Ruby',
      'JavaScript',
      'HTM/CSS',
      'Python: basis Kennis'
    ]

  const Systemen =
    [
      'React',
      'Figma',
      'Photoshop',
      'InDesign',
      'Clip studio Paint',
      'Ruby on rails',
      'bootstrap',
      'Visual Studio',
      'Git',
      'GitHub',
      'SQLite',
      'Salesforce'
    ]

  return (
    <div>
      <div className="HomeBanner d-flex justify-content-around">
        <div className='BannerText'>
          <p>Hey, mijn naam is Hans Tys </p>
          <h4>Ik ben een Junior Front end ontwikkelaar die geïnteresseerd is in het maken van Web applicaties met gebruik van react</h4>

        </div>
        <div className='Devider'></div>
        <div className='ProfileImage'>
        </div>

      </div>

      <div className='HomescreenContainer'>

        <div className="AboutContainer">
          <h2>ABOUT</h2>
          <p>Als gepassioneerde en nieuwsgierige Junior IT-professioneel
            ben ik altijd op zoek naar nieuwe uitdagingen en mogelijkheden om mijn technische
            vaardigheden verder te ontwikkelen.
            Met een achtergrond in Full-stack development door de Cursus bij
            Le Wagon waar ik de volgende stappen heb geleerd en gebruikt in een uitdagend eindwerk:
          </p>
          <ul>
            <li>Software architecture</li>
            <li>Database and SQ</li>
            <li>Front-end development</li>
            <li>Web app development</li>
          </ul>
          <p>
            Ook door mijn ervaring met support ben ik er van overtuigd dat ik elk probleem met een doelgerichte instelling kan oplossen door
            mijn interesse in het helpen van mensen en problemsolving skills. Mijn hands-on aanpak en sterke leergierigheid stellen me in staat
            om snel nieuwe technologieën te omarmen.
          </p>

        </div>

        <div className="SkillsContainer">
          <h2>Skills</h2>
          <br />
          <div className='listcontainer d-flex justify-content-around'>
            <div className='p1'>
              <h3>Programeertalen</h3>
              <ul>
                {
                  ProgrameerTalen.map((taal) => {
                    return (
                      <li>{taal}</li>
                    )
                  })
                }
              </ul>
            </div>
            <div className='p2'>
              <h3>Frameworks en systemen</h3>
              <ul>
                {
                  Systemen.map((System) => {
                    return (
                      <li>{System}</li>
                    )
                  })
                }
              </ul>
            </div>
          </div>

        </div>
        <div style={{textAlign:'center'}}>
          <h3>Projects</h3>
          <p  style={{paddingTop:20}}>Dit zijn kleine Webapp Projecten om react en verschillende onderdelen te oefenen</p>
          <Projects />
        </div>
      </div>
    </div>
  )
}
