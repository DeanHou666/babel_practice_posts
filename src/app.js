import { ui } from './ui'
import { http } from './http'

const titleInput = document.querySelector('#title').value;
const bodyInput = document.querySelector('#body').value;
const idInput = document.querySelector('#id').value;
//event listener
document.addEventListener('DOMContentLoaded',getPosts)
document.querySelector('.post-submit').addEventListener('click',submitPost)

//get posts

function getPosts(){
  http.get('http://localhost:3000/posts').then(data =>{
    ui.showPosts(data)
    ui.showAlert('post is getted','alert alert-success')
  }).catch(err =>console.log(err))
}

function submitPost(){
  const title = document.querySelector('#title').value
  const body = document.querySelector('#body').value
  const id = document.querySelector('#id').value
  if( title === '' || body === ''){
    ui.showAlert('check input','alert alert-danger')
  }else{
    const data={
      title,
      body
    }
    http.post(`http://localhost:3000/posts/${id}`,data)
    getPosts()
    ui.showAlert('a  new post is added ','alert alert-success')
    ui.clearFields();
  }

}