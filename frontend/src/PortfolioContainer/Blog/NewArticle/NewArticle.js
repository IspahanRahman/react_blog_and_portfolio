import React,{useState} from 'react'
import {Container,Row,Col,Form,Button,Spinner} from 'react-bootstrap';
import CryptoJS from 'crypto-js'
import {EditorState,convertToRaw} from "draft-js";
import {Editor} from "react-draft-wysiwyg"
import draftToHtml from "draftjs-to-html"
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import Ispahan from "../../../../src/assets/Home/ispahan.jpg"
import { useCreatePostMutation } from '../../../services/appApi';
import "./NewArticle.css"
function NewArticle() {
  const [title,setTitle]=useState("")
  const [image,setImage]=useState(null)
  const [url,setUrl]=useState("")
  const [uploadingimg,setUploadingImg]=useState(false)
  const [createPost,{isLoading}]=useCreatePostMutation()
  const [editorState,setEditorState]=useState(()=>EditorState.createEmpty())
  function handlePublish(e){
    e.preventDefault()
    const rawContentState=convertToRaw(editorState.getCurrentContent())
    console.log("this is rawContent",rawContentState)
    const content=draftToHtml(rawContentState)
    if(!title || !image|| !content){
      return alert("Title,content and image required")
    }
    //create article
    createPost({title,content,image:url}).then(({error})=>{
      if(!error){
        alert("Post created")
      }
      else{
        console.log(error)
      }
    })
  }
  function handleEditorChange(state){
    setEditorState(state);
  }
  function uploadImage(e){
    e.preventDefault()
    if(!image) return;
    setUrl("")
    const data=new FormData();
    data.append("file",image);
    data.append("upload_preset","vaupyjne");
    setUploadingImg(true)
    fetch("https://api.cloudinary.com/v1_1/dhwtf5yxv/image/upload",{
      method:"post",
      body:data,
    })
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data)
      setUploadingImg(false)
      setUrl(data.url)
    })
    .catch(err=>{
      setUploadingImg(false)
      console.log(err)
    })
  
  
  }
  function handleImageValidation(e){
    const file=e.target.files[0]
    if(file.size>1048576){
      setImage(null)
      return alert("File is too big,please choose 1mb or less")
    }
    else{
      setImage(file)
    }
  }
  return (
    <Container>
      <Row>
        <Col md={7}>
        <Form onSubmit={handlePublish}>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Your Title" value={title} onChange={(e)=> setTitle(e.target.value)} />
          </Form.Group>
          <Editor stripPastedStyles={true} editorState={editorState} onEditorStateChange={handleEditorChange} wrapperClassName="wrapper mb-4" editorClassName='editor' toolbarClassName='toolbar'/>
          <Form.Select>
            <option>Select Category</option>
            <option value="phones">Phones</option>
            <option value="blockchain">Blockchain</option>
            <option value="computers">Computers</option>
            <option value="others">Others</option>
          </Form.Select>
          <div>{!url && <p className='alert alert-info'>Please Upload an image before publishing your article</p>}</div>
          <div className='my-4'>
            <input type="file" onChange={handleImageValidation} accept="image/png , image/jpeg" />
            <Button onClick={uploadImage} disabled={uploadingimg || !image}>
              Upload
            </Button>
          </div>
          <Button variant="primary" type="submit" disabled={uploadingimg || !url}>
            Crate Article
          </Button>
        </Form>
        </Col>
        <Col md={5} className="d-flex justify-content-center align-items-center">
          {uploadingimg && (
            <div className='text-center'>
              <Spinner animation="border" role="status"/>
              <br/>
              <p className='py-2'>Uploading Image</p>
            </div>
          )}
          <div>
            {!url && !uploadingimg && <img src={Ispahan} style={{width:'100%',minHeight:'80vh',objectFit:'cover'}}/>}
          </div>
          {url && <img src={url} style={{width:"100%",minHeight:"80vh",objectFit:"cover"}}/>}

        </Col>
      </Row>
    </Container>
  )
}

export default NewArticle