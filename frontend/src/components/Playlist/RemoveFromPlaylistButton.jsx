import './RemoveFromPlaylistButton.css'


function RemoveFromPlaylistButton({track}) {

    return (
        <>
            <div className="remove-track-area">
                <i class="fa-solid fa-circle-minus remove-track-button"></i>
            </div>      
        </>
    )
}

export default RemoveFromPlaylistButton;