import './HomeNewStyle.css'
import Projects from './Projects.tsx'

export default function HomeNewStyle() {
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
        <div className='NH-Container'>
            <div className='NH-Banner-contianer'>
                <div className='NH-Banner-text'>
                    <p>&lt;p&gt;Hey, mijn naam is Hans Tys&lt;/p&gt;</p>
                    <h4>Ik ben een Junior Front end ontwikkelaar die geïnteresseerd is in het maken van Web applicaties met gebruik van react</h4>
                </div>
                <div className='NH-ProfileImage'></div>
            </div>
            <div className='NH-About-contianer'>
                <div className='about-text'>
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
            </div>

            <div className='Stripes'>
            <div className='topline'></div>
            </div>

            <div className='NH-Skills-contianer'>


                <div className='Skills'>
                    <h3>Skills</h3>    
                    <div>
                        <ul>
                            {
                            ProgrameerTalen.map((taal, i) => {
                                return (
                                <li className='skillAppear' key={i}>{taal}</li>
                                )
                            })
                            }
                        </ul>
                    </div>
                </div>

                <div className='Systemen'>
                    <h3>Frameworks en systemen</h3>
                    <div className='NH-Icons-container'>
                        {   
                            Systemen.map((system) => {
                                const url = `../../src/assets/${system}.png`
                                return( 
                                    <img className='NH-icons' src={url} alt="" />
                                )
                            })
                        }
                    </div>
                </div>
                
            </div>
            <h3 style={{color:'#FDF1DD', textAlign: 'center'}}>Projects</h3>
            <p  style={{paddingTop:8, textAlign: 'center', color:'#FDF1DD'}}>Dit zijn kleine Webapp Projecten om react en verschillende onderdelen te oefenen</p>
            <Projects/>

        </div>
    )
}
