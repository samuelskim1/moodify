// import { useSelector } from "react-redux";
import './Playbar.css'

function PlayBar() {
    const track1 = "https://moodify-dev.s3.amazonaws.com/qnlo96ouj87v55e84q9v18mz11zy?response-content-disposition=attachment%3B%20filename%3D%221.mp3%22%3B%20filename%2A%3DUTF-8%27%271.mp3&response-content-type=audio%2Fmpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQE4MG3IOT3LY7V6W%2F20230411%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230411T034714Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=fabf5e7c906074791da8f1dd1f9603debf33b7d995df209f4edb6e534aa278ae"
    const pic1 = "https://moodify-dev.s3.amazonaws.com/1qwcer0l1dgstlrizampvv7th4cv?response-content-disposition=inline%3B%20filename%3D%22keshi-gabriel-album.jpg%22%3B%20filename%2A%3DUTF-8%27%27keshi-gabriel-album.jpg&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQE4MG3IOT3LY7V6W%2F20230411%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230411T042500Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=b5cb565e74f27e952358e9c5d1b98f450927b68d4f638951a43b66b93e91292a"

    return (
        <div className='footer-container'>
            <div className="play-bar-track-info">
                <div className="now-playing-section">
                    <div className="now-playing-image-container">
                        <img src={pic1} alt=""/>
                    </div>
                    <div className="now-playing-artist-info">
                        <p className="now-playing-artist-info-name">GET IT</p>
                        <p className="now-playing-artist-info-artist">keshi</p>
                    </div>
                </div>
            </div>
            <div className="play-bar-control-container">
                <i className="fa-solid fa-circle-play fa-2xl"></i>
                <i class="fa-sharp fa-solid fa-forward-step" style={{color: "#ededed"}}></i>
                <i class="fa-sharp fa-solid fa-forward-step" style={{color: "#ffffff"}}></i>
                <audio controls className='play-bar'>
                    <source src={track1} type="audio/mpeg"/>
                </audio>    
            </div>
            <div className="volume-control-container">
                <div className="volume-control"></div>
            </div>
        </div>
    )

}


export default PlayBar;