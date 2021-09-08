import React from 'react';
import AWS from 'aws-sdk';
import BackButton from '../backButton/backButton';

import { 
    FacebookShareButton,
    WhatsappShareButton,
    TwitterShareButton,
    FacebookIcon,
    WhatsappIcon,
    TwitterIcon
} from 'react-share';

import './share.scss';

const S3_BUCKET = 'team-23';
const REGION = 'us-east-1';

// AWS.config.update({
//     accessKeyId: '',
//     secretAccessKey: ''
// })

AWS.config.update({
    // region: "eu-west-1",
    // endpoint: "s3://team-23",
    // header: 'Access-Control-Allow-Origin:*',
    accessKeyId: "AKIAXYIQCGYTQJ74WDUQ",
    secretAccessKey: "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"
});

const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET },
    region: REGION,
})



function imageBase64ToBlob(dataURI) {
    var binary = atob(dataURI.split(',')[1]);
    var array = [];
    for (var i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], { type: 'image/png' });
}



class Share extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            progress: 0,
            selectedFile: props.history.location.state.shareUrl
        }
    }

    uploadFile = () => {

        const params = {
            ACL: 'public-read',//'public-read-write',
            Body: imageBase64ToBlob(this.props.history.location.state.shareUrl),
            Bucket: S3_BUCKET,
            Key: 'test.png',
            ContentEncoding: 'base64',
            ContentType: 'image/png'
        };

        // myBucket.putObject(params)
        myBucket.upload(params)
            .on('httpUploadProgress', (evt) => {
                this.setState({ progress: Math.round((evt.loaded / evt.total) * 100) })
            })
            .send((err) => {
                if (err) console.log(err)
            })
    }

    shareImage = () => {
        // this.uploadFile();
        //thankYouForComing
        this.props.history.push({
            pathname: `/thankYouForComing`
        })
    }

    render() {
        const FB = 'images/icons/FBicon.png';
        const instegram = 'images/icons/InstIcon.png';
        const twitter = 'images/icons/TwitterIcon.png';
        const whatsapp = 'images/icons/whatsappIcon.png';

        const sharedUrl = 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_900,c_fill,g_auto,h_506,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F181010131059-australia-best-beaches-cossies-beach-cocos3.jpg';

    

        return (
            <div className='share-options-container'>
                <BackButton history={this.props.history}/>
                <div className='share-options-title'>עצבו את מסר הגבורה שלכם.ן</div>
                <div className='image-container'>
                    <div className='image-container-border'>
                        <img style={{ width: '300px', height: '300px' }} src={this.props.history.location.state.shareUrl}></img>
                    </div>
                </div>

                <div className='share-options-drawer'>
                    <div className='title'>שתפו ב</div>
                    {/* <a href={`https://www.facebook.com/sharer.php?imageurl='https://team-23.s3.amazonaws.com/test.png'}`}>clicklcicl</a> */}
                    <div className='share-options'>
                        {/* <div onClick={this.uploadFile}>upload to AWS ?</div> */}
                        {/* <div className='share-option-container'>
                            <div className='share-option' style={{ backgroundImage: `url(${FB})` }}
                                onClick={() => this.shareImage('facebook')} />
                        </div> */}

                        <div className='share-option-container'>
                        <FacebookShareButton
                             url = {sharedUrl}  >
                            <FacebookIcon size={50} round={true}  ></FacebookIcon>
                        </FacebookShareButton>
                        </div>

                        <div className='share-option-container'>
                            {/* <div className='share-option' style={{ backgroundImage: `url(${instegram})` }} */}
                                {/* onClick={() => this.shareImage('instagrem')} /> */}
                        </div>
                        <div className='share-option-container'>
                            <WhatsappShareButton
                            url={sharedUrl} >
                                <WhatsappIcon size={50} round={true}/>
                            </WhatsappShareButton>
                        </div>
                        <div className='share-option-container'>
                        <TwitterShareButton
                            url={sharedUrl} >
                                <TwitterIcon size={50} round={true}/>
                            </TwitterShareButton>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Share;