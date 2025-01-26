import './ArtGallery.css'

export default function ArtGallery() {
  return (
    <div className="grid">
        <div className="artrow">
            <div className='artcolumn'>
                <img src="https://picsum.photos/500/700" alt="" />
                <img src="https://picsum.photos/500/300" alt="" />
                <img src="https://picsum.photos/500/500" alt="" />
                <img src="https://picsum.photos/500/300" alt="" />
                <img src="https://picsum.photos/500/600" alt="" />
                <img src="https://picsum.photos/500/300" alt="" />
                <img src="https://picsum.photos/500/800" alt="" />
                <img src="https://picsum.photos/500/400" alt="" />
            </div>
            <div className='artcolumn'>
                <img src="https://picsum.photos/500/200" alt="" />
                <img src="https://picsum.photos/500/300" alt="" />
                <img src="https://picsum.photos/500/500" alt="" />
                <img src="https://picsum.photos/500/400" alt="" />
                <img src="https://picsum.photos/500/600" alt="" />
                <img src="https://picsum.photos/500/900" alt="" />
                <img src="https://picsum.photos/500/100" alt="" />
                <img src="https://picsum.photos/500/400" alt="" />
            </div>
            
        </div>
    </div>
  )
}
