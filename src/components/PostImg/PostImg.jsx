import "./PostImg.css"
import upvote from "../../assets/upvote.png"
import downvote from "../../assets/downvote.png"
import repost from "../../assets/repost.png"
import commentary from "../../assets/commentary.png"
import holder4 from "../../assets/holder4.png"
import holder3 from "../../assets/holder3.jpg"

const PostImg = () => {
    return(
        <div className="containerPost">
            <div>
                <img src={holder4} className="PFP"></img>
            </div>
            <div className="postContent">
                <div className="titleCategory">
                    <h1 className="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas ipsum non suscipit malesuada. Aenean vestibulum tempus diam. Aenean ac sapien tortor. Ut sollicitudin nunc lectus. Vestibulum elementum id sapien vitae tempor. Proin sed volutpat neque. Nullam lectus ante, placerat sit amet hendrerit id, molestie non risus. Nam vel eleifend urna. In quis varius diam. Aenean vel scelerisque mi.</h1>
                    <h3 className="category">{"->"} Categoria</h3>
                </div>
                <div className="postImgContent">
                    <div className="postImgImages">
                        <img src={holder3}></img>
                    </div>
                    <div className="postImgText">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas ipsum non suscipit malesuada. Aenean vestibulum tempus diam. Aenean ac sapien tortor. Ut sollicitudin nunc lectus. Vestibulum elementum id sapien vitae tempor. Proin sed volutpat neque. Nullam lectus ante, placerat sit amet hendrerit id, molestie non risus. Nam vel eleifend urna. In quis varius diam. Aenean vel scelerisque mi.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas ipsum non suscipit malesuada. Aenean vestibulum tempus diam. Aenean ac sapien tortor. Ut sollicitudin nunc lectus. Vestibulum elementum id sapien vitae tempor. Proin sed volutpat neque. Nullam lectus ante, placerat sit amet hendrerit id, molestie non risus. Nam vel eleifend urna. In quis varius diam. Aenean vel scelerisque mi.
                    </div>
                </div>
                <div className="postBottom">
                    Hoje, 18:30
                </div>
            </div>
            <div className="postButtons">
                <button><img src={upvote}></img></button>
                <scan>69</scan>
                <button><img src={downvote}></img></button>
                <button><img src={repost}></img></button>
                <button><img src={commentary}></img></button>
            </div>
        </div>
    )
}

export default PostImg