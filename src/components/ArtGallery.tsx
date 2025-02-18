import './ArtGallery.css'



export default function ArtGallery() {
  const paintings = [
    {
      title:'Arcane Eye',
      url:'/src/assets/eye study arcane.png'
    },
    {
      title: '',
      url:''
    }
  ]

  console.log(paintings[0].url)


  return (
    <div className="ArtGallery">
        <h4 className='artTitle'>Art Of WaeyV</h4>

        <div style={{ display:'flex', flexDirection: 'row-reverse'}}>
          <div className='Big-Image' style={{backgroundImage:`url(${paintings[0].url})`}}>
            
          </div>
          <div className='side-scroll'>
            <div>
             
              
            
            </div>
          </div>
        </div>
    </div>
  )
}
